export default function undecorate(component) {
    let curr = component;
    while (typeof curr.getDecoratedComponentInstance === "function") {
        curr = curr.getDecoratedComponentInstance();
    }

    return curr;
}