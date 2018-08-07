export default {
    sections: [
        {
            key: 1,
            order: 1,
            attributes : {
                "background-color" : {
                    rgb : {
                        r : 0,
                        g : 255,
                        b : 0,
                        a : 1
                    },
                    hex : "#00FF00"
                }
            }
        },
        {
            key: 2,
            order: 0,
            attributes : {
                "background-color" : {
                    rgb : {
                        r : 255,
                        g : 0,
                        b : 0,
                        a : 1
                    },
                    hex : "#FF0000"
                }
            }
        },
        {
            key: 3,
            order: 2,
            attributes : {
                "background-color" : {
                    rgb : {
                        r : 0,
                        g : 0,
                        b : 255,
                        a : 1
                    },
                    hex : "#0000FF"
                }
            }
        }
    ],
    columns : [
        {
            key: 1,
            keySection : 1,
            order: 0,
            attributes : {
                width: {
                    type: "%",
                    value: 60
                }
            }
        },
        {
            key: 2,
            keySection : 1,
            order: 1,
            attributes : {
                width: {
                    type: "%",
                    value: 40
                }
            }
        },
        {
            key: 3,
            keySection : 2,
            order: 0,
            attributes : {
                width: {
                    type: "%",
                    value: 100
                }
            }
        },
        {
            key: 4,
            keySection : 3,
            order: 0,
            attributes : {
                width: {
                    type: "%",
                    value: 100
                }
            }
        }
    ],
    components : [
        {
            key: 1,
            type: 1,
            keySection : 0,
            keyColumn : 1,
            order: 2,
            attributes : {
                "border-color" : {
                    rgb : {
                        r : 0,
                        g : 0,
                        b : 0,
                        a : 1
                    },
                    hex : "#000000"
                },
                "border-width" : {
                    type : "px",
                    value : 1
                }
            }
        },
        {
            key: 2,
            type: 1,
            keySection : 1,
            keyColumn : 2,
            order: 0,
            attributes : {
                "border-color" : {
                    rgb : {
                        r : 0,
                        g : 0,
                        b : 0,
                        a : 1
                    },
                    hex : "#000000"
                },
                width : {
                    type: "%",
                    value : 50
                },
                "border-width" : {
                    type : "px",
                    value : 1
                }
            }
        },
        {
            key: 3,
            type: 2,
            keySection : 1,
            keyColumn : 2,
            order: 2,
            content: "<h1>Text H1</h1>",
            attributes : {
            }
        },
        {
            key: 4,
            type: 2,
            keySection : 2,
            keyColumn : 3,
            order: 0,
            content: "<h2>Text H2</h2>",
            attributes : {
            }
        },
        {
            key: 5,
            type: 2,
            keySection : 3,
            keyColumn : 4,
            order: 0,
            content: "<h3>Text H3</h3>",
            attributes : {
            }
        },
        {
            key: 6,
            type: 4,
            keySection : 1,
            keyColumn : 2,
            order: 1
        }
    ]
}