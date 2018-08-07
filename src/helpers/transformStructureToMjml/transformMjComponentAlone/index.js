
import tranformMjComponent from "../transformMjComponent"
import { mjml2html } from "mjml"

export default function transformMjComponentAlone(obj){

    return {
        tagName: "mjml",
        children:[{
            tagName: 'mj-body',
            children: [{
                tagName: 'mj-container',
                children: [
                    {
                        tagName: 'mj-section',
                        attributes: {
                            padding: "0px"
                        },
                        children: [
                            {
                                tagName:  'mj-column',
                                children:[
                                    tranformMjComponent(obj)
                                ]
                            }
                        ]
                    }
                ]
            }]
        }]
    }
}
