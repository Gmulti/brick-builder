import transformMjStructure from "./index"
import MjSection from "../../../models/MjModels/MjSection"
import MjColumn from "../../../models/MjModels/MjColumn"
import MjText from "../../../models/MjModels/MjText"
import MjDivider from "../../../models/MjModels/MjDivider"
import * as _ from "lodash"

describe('transformMjStructure', function () {
    beforeEach(() => {
        this.data = [
            _.assignIn(new MjSection(), {
                columns: [
                    _.assignIn(new MjColumn(), {
                        items: [
                            _.assignIn(new MjDivider(), {
                                type: 1,
                                attributes	: {
                                    "border-color": {
                                        rgb: {
                                            r: 255,
                                            g: 255,
                                            b: 255,
                                            a: 0
                                        },
                                        hex: "#ffffff"
                                    },
                                    "padding-top": 10,
                                    "padding-bottom": 10,
                                    "padding-left": 10,
                                    "padding-right": 10,
                                    "border-style": "solid",
                                    "border-width": 4
                                },
                            })
                        ],
                        attributes: {
                            width: {
                                value: 100,
                                type : "%"
                            },
                            "background-color" : {
                                rgb: {
                                    r: 255,
                                    g: 255,
                                    b: 255,
                                    a: 0
                                },
                                hex: "#ffffff"
                            },
                            "vertical-align": "top",
                            "border-radius": 0
                        }
                    }),
                    _.assignIn(new MjColumn(), {
                        items: [
                            _.assignIn(new MjText(), {
                                type: 2,
                                attributes	: {
                                    background: {
                                        rgb: {
                                            r: 255,
                                            g: 255,
                                            b: 255,
                                            a: 0
                                        },
                                        hex: "#ffffff"
                                    },
                                    "padding-top": 10,
                                    "padding-bottom": 10,
                                    "padding-left": 10,
                                    "padding-right": 10,
                                    "border-style": "solid",
                                    "border-width": 4,
                                    "border-color": {
                                        hex: "#000000",
                                        rgb: {
                                            r: 0,
                                            g: 0,
                                            b: 0,
                                            a: 1
                                        }
                                    },
                                },
                            })
                        ],
                        attributes: {
                            width: {
                                value: 100,
                                type : "%"
                            },
                            "background-color" : {
                                rgb: {
                                    r: 255,
                                    g: 255,
                                    b: 255,
                                    a: 0
                                },
                                hex: "#ffffff"
                            },
                            "vertical-align": "top",
                            "border-radius": 0
                        }
                    })
                ],
                attributes: {
                    "background-color": {
                        hex: "#ffffff",
                        rgb: {
                            r: 255,
                            g: 255,
                            b: 255,
                            a: 1
                        }
                    },
                    "background-url": "",
                    "padding-top": 0,
                    "padding-bottom": 0,
                    "padding-left": 0,
                    "padding-right": 0
                }
            })
        ]
    })
    
    describe('Structural', () => {
        test("should be a function", () => {
            expect(typeof transformMjStructure).toBe('function')
        })
    })

    describe('Transform', () => {
        test('first key', () => {

            let desiredResult = {
                tagName: "mj-section",
                attributes : {
                    'background-color': '#ffffff'
                }
            }

            
            let result = transformMjStructure(this.data, MjSection.type)

            expect(result[0].tagName).toEqual(desiredResult.tagName);
            expect(result[0].attributes).toMatchObject(desiredResult.attributes);
        });

    })

});
