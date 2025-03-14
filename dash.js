{
    "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/row-formatting.schema.json",
    "hideColumnHeader": true,
    "hideSelection": true,
    "rowFormatter": {
      "elmType": "div",
      "style": {
        "display": "flex",
        "align-items": "flex-end",
        "justify-content": "center",
        "flex-wrap": "wrap",
        "box-sizing": "border-box",
        "width": "750px",
        "height": "580px"
      },
      "children": [
        {
          "elmType": "div",
          "inlineEditField": "[$Title]",
          "style": {
            "width": "686px",
            "box-sizing": "border-box",
            "display": "flex",
            "align-items": "flex-start",
            "justify-content": "center",
            "height": "30px",
            "position": "absolute",
            "top": "0"
          },
          "children": [
            {
              "elmType": "div",
              "style": {
                "position": "relative",
                "display": "block",
                "top": "0px",
                "line-height": "20px",
                "box-sizing": "border-box",
                "white-space": "nowrap",
                "overflow": "hidden",
                "text-overflow": "ellipsis",
                "font-size": "22px",
                "font-weight": "bold",
                "color": "black",
                "cursor": "=if([$Author.email] == @me, 'pointer', '')"
              },
              "txtContent": "@currentField"
            }
          ]
        },
        {
          "elmType": "div",
          "customCardProps": {
            "formatter": {
              "elmType": "div",
              "style": {
                "width": "640px",
                "overflow": "hidden",
                "display": "block",
                "box-sizing": "border-box",
                "border-radius": "6px",
                "border": "solid 2px grey",
                "background-color": "white"
              },
              "children": [
                {
                  "elmType": "div",
                  "style": {
                    "height": "34px",
                    "width": "100%",
                    "display": "flex",
                    "align-items": "flex-end",
                    "justify-content": "center",
                    "box-sizing": "border-box",
                    "margin": "0px",
                    "padding": "0px",
                    "color": "grey",
                    "font-size": "22px",
                    "font-weight": "700"
                  },
                  "txtContent": "Add data label"
                },
                {
                  "elmType": "div",
                  "style": {
                    "box-sizing": "border-box",
                    "width": "100%",
                    "height": "34px",
                    "display": "flex",
                    "align-items": "flex-end",
                    "justify-content": "center",
                    "margin": "30px 0px 30px 0px"
                  },
                  "children": [
                    {
                      "elmType": "div",
                      "customRowAction": {
                        "action": "setValue",
                        "actionInput": {
                          "VALUE1": "1"
                        }
                      },
                      "style": {
                        "box-sizing": "border-box",
                        "width": "80px",
                        "display": "=if([$VALUE1] != 0, 'none', 'flex')",
                        "align-items": "center",
                        "justify-content": "center",
                        "background-color": "#e8e8e8",
                        "border-radius": "16px",
                        "height": "34px",
                        "margin": "0px 4px 0px 4px",
                        "font-size": "16px",
                        "font-weight": "bold",
                        "color": "Grey",
                        "cursor": "pointer"
                      },
                      "txtContent": "Label 1"
                    },
                    {
                      "elmType": "div",
                      "customRowAction": {
                        "action": "setValue",
                        "actionInput": {
                          "VALUE2": "1"
                        }
                      },
                      "style": {
                        "box-sizing": "border-box",
                        "width": "80px",
                        "display": "=if([$VALUE2] != 0, 'none', 'flex')",
                        "align-items": "center",
                        "justify-content": "center",
                        "background-color": "#e8e8e8",
                        "border-radius": "16px",
                        "height": "34px",
                        "margin": "0px 4px 0px 4px",
                        "font-size": "16px",
                        "font-weight": "bold",
                        "color": "Grey",
                        "cursor": "pointer"
                      },
                      "txtContent": "Label 2"
                    },
                    {
                      "elmType": "div",
                      "customRowAction": {
                        "action": "setValue",
                        "actionInput": {
                          "VALUE3": "1"
                        }
                      },
                      "style": {
                        "box-sizing": "border-box",
                        "width": "80px",
                        "display": "=if([$VALUE3] != 0, 'none', 'flex')",
                        "align-items": "center",
                        "justify-content": "center",
                        "background-color": "#e8e8e8",
                        "border-radius": "16px",
                        "height": "34px",
                        "margin": "0px 4px 0px 4px",
                        "font-size": "16px",
                        "font-weight": "bold",
                        "color": "Grey",
                        "cursor": "pointer"
                      },
                      "txtContent": "Label 3"
                    },
                    {
                      "elmType": "div",
                      "customRowAction": {
                        "action": "setValue",
                        "actionInput": {
                          "VALUE4": "1"
                        }
                      },
                      "style": {
                        "box-sizing": "border-box",
                        "width": "80px",
                        "display": "=if([$VALUE4] != 0, 'none', 'flex')",
                        "align-items": "center",
                        "justify-content": "center",
                        "background-color": "#e8e8e8",
                        "border-radius": "16px",
                        "height": "34px",
                        "margin": "0px 4px 0px 4px",
                        "font-size": "16px",
                        "font-weight": "bold",
                        "color": "Grey",
                        "cursor": "pointer"
                      },
                      "txtContent": "Label 4"
                    },
                    {
                      "elmType": "div",
                      "customRowAction": {
                        "action": "setValue",
                        "actionInput": {
                          "VALUE5": "1"
                        }
                      },
                      "style": {
                        "box-sizing": "border-box",
                        "width": "80px",
                        "display": "=if([$VALUE5] != 0, 'none', 'flex')",
                        "align-items": "center",
                        "justify-content": "center",
                        "background-color": "#e8e8e8",
                        "border-radius": "16px",
                        "height": "34px",
                        "margin": "0px 4px 0px 4px",
                        "font-size": "16px",
                        "font-weight": "bold",
                        "color": "Grey",
                        "cursor": "pointer"
                      },
                      "txtContent": "Label 5"
                    },
                    {
                      "elmType": "div",
                      "customRowAction": {
                        "action": "setValue",
                        "actionInput": {
                          "VALUE6": "1"
                        }
                      },
                      "style": {
                        "box-sizing": "border-box",
                        "width": "80px",
                        "display": "=if([$VALUE6] != 0, 'none', 'flex')",
                        "align-items": "center",
                        "justify-content": "center",
                        "background-color": "#e8e8e8",
                        "border-radius": "16px",
                        "height": "34px",
                        "margin": "0px 4px 0px 4px",
                        "font-size": "16px",
                        "font-weight": "bold",
                        "color": "Grey",
                        "cursor": "pointer"
                      },
                      "txtContent": "Label 6"
                    },
                    {
                      "elmType": "div",
                      "customRowAction": {
                        "action": "setValue",
                        "actionInput": {
                          "VALUE7": "1"
                        }
                      },
                      "style": {
                        "box-sizing": "border-box",
                        "width": "80px",
                        "display": "=if([$VALUE7] != 0, 'none', 'flex')",
                        "align-items": "center",
                        "justify-content": "center",
                        "background-color": "#e8e8e8",
                        "border-radius": "16px",
                        "height": "34px",
                        "margin": "0px 4px 0px 4px",
                        "font-size": "16px",
                        "font-weight": "bold",
                        "color": "Grey",
                        "cursor": "pointer"
                      },
                      "txtContent": "Label 7"
                    }
                  ]
                }
              ]
            },
            "openOnEvent": "click",
            "directionalHint": "leftCenter",
            "isBeakVisible": true,
            "beakStyle": {
              "backgroundColor": "white"
            }
          },
          "style": {
            "position": "absolute",
            "left": "720px",
            "top": "2px",
            "height": "26px",
            "width": "26px",
            "box-sizing": "border-box",
            "display": "block",
            "visibility": "=if([$Author.email] == @me, 'visible', 'hidden')",
            "text-align": "center",
            "font-size": "16px",
            "font-weight": "bold",
            "cursor": "pointer"
          },
          "attributes": {
            "class": "sp-css-color-GrayText",
            "iconName": "MoreVertical"
          }
        },
        {
          "elmType": "div",
          "inlineEditField": "[$SCALE]",
          "style": {
            "position": "absolute",
            "left": "690px",
            "top": "2px",
            "height": "26px",
            "width": "26px",
            "box-sizing": "border-box",
            "display": "block",
            "visibility": "=if([$Author.email] == @me, 'visible', 'hidden')",
            "text-align": "center",
            "font-size": "16px",
            "font-weight": "bold",
            "cursor": "pointer"
          },
          "attributes": {
            "class": "sp-css-color-GrayText",
            "iconName": "SizeLegacy",
            "title": "='Scale: ' + [$SCALE.displayValue]"
          }
        },
        {
          "elmType": "div",
          "style": {
            "position": "absolute",
            "box-sizing": "border-box",
            "padding-top": "1px",
            "top": "50px",
            "left": "156px",
            "height": "15px",
            "display": "flex",
            "align-items": "center",
            "justify-content": "center",
            "font-size": "16px",
            "line-height": "14px"
          },
          "txtContent": "0"
        },
        {
          "elmType": "div",
          "style": {
            "position": "absolute",
            "left": "160px",
            "top": "50px",
            "display": "flex",
            "align-items": "flex-end",
            "flex-wrap": "wrap",
            "justify-content": "flex-start",
            "width": "590px",
            "height": "30px"
          },
          "children": [
            {
              "elmType": "div",
              "style": {
                "height": "15px",
                "width": "132px",
                "display": "flex",
                "align-items": "center",
                "justify-content": "center",
                "font-size": "16px",
                "line-height": "14px",
                "margin-left": "62px"
              },
              "txtContent": "=[$SCALE]*0.25"
            },
            {
              "elmType": "div",
              "style": {
                "height": "15px",
                "width": "132px",
                "display": "flex",
                "align-items": "center",
                "justify-content": "center",
                "font-size": "16px",
                "line-height": "14px",
                "margin-right": ""
              },
              "txtContent": "=[$SCALE]*0.5"
            },
            {
              "elmType": "div",
              "style": {
                "height": "15px",
                "width": "132px",
                "display": "flex",
                "align-items": "center",
                "justify-content": "center",
                "font-size": "16px",
                "line-height": "14px"
              },
              "txtContent": "=[$SCALE]*0.75"
            },
            {
              "elmType": "div",
              "style": {
                "height": "15px",
                "width": "132px",
                "display": "flex",
                "align-items": "center",
                "justify-content": "center",
                "font-size": "16px",
                "line-height": "14px"
              },
              "txtContent": "[$SCALE]"
            },
            {
              "elmType": "div",
              "style": {
                "height": "10px",
                "width": "132px",
                "box-sizing": "border-box",
                "display": "flex",
                "align-items": "center",
                "justify-content": "center",
                "font-size": "16px",
                "line-height": "14px",
                "margin-top": "4px",
                "overflow": "hidden",
                "border-right": "solid 1px black",
                "border-left": "solid 1px black"
              }
            },
            {
              "elmType": "div",
              "style": {
                "height": "10px",
                "width": "132px",
                "box-sizing": "border-box",
                "display": "flex",
                "align-items": "center",
                "justify-content": "center",
                "font-size": "16px",
                "line-height": "14px",
                "margin-top": "4px",
                "overflow": "hidden",
                "border-right": "solid 1px black"
              }
            },
            {
              "elmType": "div",
              "style": {
                "height": "10px",
                "width": "132px",
                "box-sizing": "border-box",
                "display": "flex",
                "align-items": "center",
                "justify-content": "center",
                "font-size": "16px",
                "line-height": "14px",
                "margin-top": "4px",
                "overflow": "hidden",
                "border-right": "solid 1px black"
              }
            },
            {
              "elmType": "div",
              "style": {
                "height": "10px",
                "width": "132px",
                "box-sizing": "border-box",
                "display": "flex",
                "align-items": "center",
                "justify-content": "center",
                "font-size": "16px",
                "line-height": "14px",
                "margin-top": "4px",
                "overflow": "hidden",
                "border-right": "solid 1px black"
              }
            }
          ]
        },
        {
          "elmType": "div",
          "style": {
            "width": "750px",
            "height": "500px",
            "box-sizing": "border-box",
            "display": "flex",
            "align-items": "flex-start",
            "flex-direction": "column",
            "justify-content": "flex-start"
          },
          "children": [
            {
              "elmType": "div",
              "style": {
                "display": "=if([$VALUE1.displayValue]=='0' || [$VALUE1.displayValue]=='0,0' || [$VALUE1.displayValue]=='0.0' || [$VALUE1.displayValue]=='0,00' || [$VALUE1.displayValue]=='0.00' || [$VALUE1.displayValue]=='0,000' || [$VALUE1.displayValue]=='0.000' || [$VALUE1.displayValue]=='0.0000' || [$VALUE1.displayValue]=='0,0000' || [$VALUE1.displayValue]=='0,00000' || [$VALUE1.displayValue]=='0.00000', 'none', 'flex')",
                "justify-content": "flex-start",
                "align-items": "flex-start",
                "flex-shrink": "1",
                "flex-grow": "1",
                "margin-bottom": "12px",
                "max-height": "150px"
              },
              "children": [
                {
                  "elmType": "div",
                  "style": {
                    "box-sizing": "border-box",
                    "display": "flex",
                    "align-items": "center",
                    "height": "100%",
                    "width": "160px"
                  },
                  "children": [
                    {
                      "elmType": "div",
                      "inlineEditField": "[$LABEL1]",
                      "style": {
                        "box-sizing": "border-box",
                        "display": "block",
                        "height": "60px",
                        "width": "160px",
                        "font-size": "16px",
                        "border-right": "solid 1px lightgrey",
                        "text-align": "right",
                        "padding-right": "4px",
                        "padding-bottom": "auto",
                        "padding-top": "6px",
                        "word-wrap": "break-word",
                        "overflow": "hidden",
                        "text-overflow": "ellipsis",
                        "color": "=if([$LABEL1] =='', '#bdbfbe', 'Black')",
                        "cursor": "=if([$Author.email] == @me, 'pointer', '')"
                      },
                      "txtContent": "=if([$LABEL1] =='', 'Label 1', [$LABEL1])",
                      "attributes": {
                        "title": "[$LABEL1]"
                      }
                    }
                  ]
                },
                {
                  "elmType": "div",
                  "style": {
                    "box-sizing": "border-box",
                    "width": "=[$VALUE1]*528/[$SCALE]+'px'",
                    "height": "100%",
                    "border-radius": "0px 6px 6px 0px",
                    "background-color": "=if([$COLOR1] =='', 'LightGrey', [$COLOR1])",
                    "margin-bottom": "auto"
                  },
                  "attributes": {
                    "title": "[$VALUE1.displayValue]"
                  }
                },
                {
                  "elmType": "div",
                  "style": {
                    "width": "30px",
                    "height": "60px",
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "align-items": "center",
                    "justify-content": "center"
                  },
                  "children": [
                    {
                      "elmType": "div",
                      "inlineEditField": "[$VALUE1]",
                      "style": {
                        "height": "24px",
                        "width": "30px",
                        "box-sizing": "border-box",
                        "display": "=if([$Author.email] == @me, 'block', 'none')",
                        "align-items": "flex-end",
                        "justify-content": "center",
                        "text-align": "center",
                        "font-size": "18px",
                        "cursor": "pointer"
                      },
                      "attributes": {
                        "class": "sp-css-color-GrayText",
                        "iconName": "NumberField",
                        "title": "[$VALUE1.displayValue]"
                      }
                    },
                    {
                      "elmType": "div",
                      "inlineEditField": "[$COLOR1]",
                      "style": {
                        "height": "24px",
                        "width": "30px",
                        "box-sizing": "border-box",
                        "display": "=if([$Author.email] == @me, 'block', 'none')",
                        "align-items": "flex-end",
                        "justify-content": "center",
                        "text-align": "center",
                        "font-size": "18px",
                        "cursor": "pointer"
                      },
                      "attributes": {
                        "class": "sp-css-color-GrayText",
                        "iconName": "BucketColor",
                        "title": "Change color - HTML names or HEX allowed"
                      }
                    }
                  ]
                },
                {
                  "elmType": "div",
                  "style": {
                    "width": "30px",
                    "height": "60px",
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "align-items": "center",
                    "justify-content": "center"
                  },
                  "children": [
                    {
                      "elmType": "div",
                      "customRowAction": {
                        "action": "setValue",
                        "actionInput": {
                          "VALUE1": "0",
                          "LABEL1": ""
                        }
                      },
                      "style": {
                        "height": "24px",
                        "width": "30px",
                        "box-sizing": "border-box",
                        "display": "=if([$Author.email] == @me, 'flex', 'none')",
                        "align-items": "center",
                        "justify-content": "center",
                        "margin": "0 0 0 0",
                        "padding-top": "0px",
                        "font-size": "14px",
                        "cursor": "pointer"
                      },
                      "attributes": {
                        "class": "sp-css-color-GrayText ms-bgColor-severeWarning--hover ms-fontColor-black--hover",
                        "iconName": "Clear",
                        "title": "Delete data"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "elmType": "div",
              "style": {
                "position": "",
                "display": "=if([$VALUE2.displayValue]=='0' || [$VALUE2.displayValue]=='0,0' || [$VALUE2.displayValue]=='0.0' || [$VALUE2.displayValue]=='0,00' || [$VALUE2.displayValue]=='0.00' || [$VALUE2.displayValue]=='0,000' || [$VALUE2.displayValue]=='0.000' || [$VALUE2.displayValue]=='0.0000' || [$VALUE2.displayValue]=='0,0000' || [$VALUE2.displayValue]=='0,00000' || [$VALUE2.displayValue]=='0.00000', 'none', 'flex')",
                "justify-content": "flex-start",
                "align-items": "flex-start",
                "flex-shrink": "1",
                "flex-grow": "1",
                "margin-bottom": "12px",
                "max-height": "150px"
              },
              "children": [
                {
                  "elmType": "div",
                  "style": {
                    "box-sizing": "border-box",
                    "display": "flex",
                    "align-items": "center",
                    "height": "100%",
                    "width": "160px"
                  },
                  "children": [
                    {
                      "elmType": "div",
                      "inlineEditField": "[$LABEL2]",
                      "style": {
                        "box-sizing": "border-box",
                        "display": "block",
                        "height": "60px",
                        "width": "160px",
                        "font-size": "16px",
                        "border-right": "solid 1px lightgrey",
                        "text-align": "right",
                        "padding-right": "4px",
                        "padding-bottom": "auto",
                        "padding-top": "6px",
                        "word-wrap": "break-word",
                        "overflow": "hidden",
                        "text-overflow": "ellipsis",
                        "color": "=if([$LABEL2] =='', '#bdbfbe', 'Black')",
                        "cursor": "=if([$Author.email] == @me, 'pointer', '')"
                      },
                      "txtContent": "=if([$LABEL2] =='', 'Label 2', [$LABEL2])",
                      "attributes": {
                        "title": "[$LABEL2]"
                      }
                    }
                  ]
                },
                {
                  "elmType": "div",
                  "style": {
                    "box-sizing": "border-box",
                    "width": "=[$VALUE2]*528/[$SCALE]+'px'",
                    "height": "100%",
                    "border-radius": "0px 6px 6px 0px",
                    "background-color": "=if([$COLOR2] =='', 'LightGrey', [$COLOR2])",
                    "margin-bottom": "auto"
                  },
                  "attributes": {
                    "title": "[$VALUE2.displayValue]"
                  }
                },
                {
                  "elmType": "div",
                  "style": {
                    "width": "30px",
                    "height": "60px",
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "align-items": "center",
                    "justify-content": "center"
                  },
                  "children": [
                    {
                      "elmType": "div",
                      "inlineEditField": "[$VALUE2]",
                      "style": {
                        "height": "24px",
                        "width": "30px",
                        "box-sizing": "border-box",
                        "display": "=if([$Author.email] == @me, 'block', 'none')",
                        "align-items": "flex-end",
                        "justify-content": "center",
                        "text-align": "center",
                        "font-size": "18px",
                        "cursor": "pointer"
                      },
                      "attributes": {
                        "class": "sp-css-color-GrayText",
                        "iconName": "NumberField",
                        "title": "[$VALUE2.displayValue]"
                      }
                    },
                    {
                      "elmType": "div",
                      "inlineEditField": "[$COLOR2]",
                      "style": {
                        "height": "24px",
                        "width": "30px",
                        "box-sizing": "border-box",
                        "display": "=if([$Author.email] == @me, 'block', 'none')",
                        "align-items": "flex-end",
                        "justify-content": "center",
                        "text-align": "center",
                        "font-size": "18px",
                        "cursor": "pointer"
                      },
                      "attributes": {
                        "class": "sp-css-color-GrayText",
                        "iconName": "BucketColor",
                        "title": "Change color - HTML names or HEX allowed"
                      }
                    }
                  ]
                },
                {
                  "elmType": "div",
                  "style": {
                    "width": "30px",
                    "height": "60px",
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "align-items": "center",
                    "justify-content": "center"
                  },
                  "children": [
                    {
                      "elmType": "div",
                      "customRowAction": {
                        "action": "setValue",
                        "actionInput": {
                          "VALUE2": "0",
                          "LABEL2": ""
                        }
                      },
                      "style": {
                        "height": "24px",
                        "width": "30px",
                        "box-sizing": "border-box",
                        "display": "=if([$Author.email] == @me, 'flex', 'none')",
                        "align-items": "center",
                        "justify-content": "center",
                        "margin": "0 0 0 0",
                        "padding-top": "0px",
                        "font-size": "14px",
                        "cursor": "pointer"
                      },
                      "attributes": {
                        "class": "sp-css-color-GrayText ms-bgColor-severeWarning--hover ms-fontColor-black--hover",
                        "iconName": "Clear",
                        "title": "Delete data"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "elmType": "div",
              "style": {
                "position": "",
                "display": "=if([$VALUE3.displayValue]=='0' || [$VALUE3.displayValue]=='0,0' || [$VALUE3.displayValue]=='0.0' || [$VALUE3.displayValue]=='0,00' || [$VALUE3.displayValue]=='0.00' || [$VALUE3.displayValue]=='0,000' || [$VALUE3.displayValue]=='0.000' || [$VALUE3.displayValue]=='0.0000' || [$VALUE3.displayValue]=='0,0000' || [$VALUE3.displayValue]=='0,00000' || [$VALUE3.displayValue]=='0.00000', 'none', 'flex')",
                "justify-content": "flex-start",
                "align-items": "flex-start",
                "flex-shrink": "1",
                "flex-grow": "1",
                "margin-bottom": "12px",
                "max-height": "150px"
              },
              "children": [
                {
                  "elmType": "div",
                  "style": {
                    "box-sizing": "border-box",
                    "display": "flex",
                    "align-items": "center",
                    "height": "100%",
                    "width": "160px"
                  },
                  "children": [
                    {
                      "elmType": "div",
                      "inlineEditField": "[$LABEL3]",
                      "style": {
                        "box-sizing": "border-box",
                        "display": "block",
                        "height": "60px",
                        "width": "160px",
                        "font-size": "16px",
                        "border-right": "solid 1px lightgrey",
                        "text-align": "right",
                        "padding-right": "4px",
                        "padding-bottom": "auto",
                        "padding-top": "6px",
                        "word-wrap": "break-word",
                        "overflow": "hidden",
                        "text-overflow": "ellipsis",
                        "color": "=if([$LABEL3] =='', '#bdbfbe', 'Black')",
                        "cursor": "=if([$Author.email] == @me, 'pointer', '')"
                      },
                      "txtContent": "=if([$LABEL3] =='', 'Label 3', [$LABEL3])",
                      "attributes": {
                        "title": "[$LABEL3]"
                      }
                    }
                  ]
                },
                {
                  "elmType": "div",
                  "style": {
                    "box-sizing": "border-box",
                    "width": "=[$VALUE3]*528/[$SCALE]+'px'",
                    "height": "100%",
                    "border-radius": "0px 6px 6px 0px",
                    "background-color": "=if([$COLOR3] =='', 'LightGrey', [$COLOR3])",
                    "margin-bottom": "auto"
                  },
                  "attributes": {
                    "title": "[$VALUE3.displayValue]"
                  }
                },
                {
                  "elmType": "div",
                  "style": {
                    "width": "30px",
                    "height": "60px",
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "align-items": "center",
                    "justify-content": "center"
                  },
                  "children": [
                    {
                      "elmType": "div",
                      "inlineEditField": "[$VALUE3]",
                      "style": {
                        "height": "24px",
                        "width": "30px",
                        "box-sizing": "border-box",
                        "display": "=if([$Author.email] == @me, 'block', 'none')",
                        "align-items": "flex-end",
                        "justify-content": "center",
                        "text-align": "center",
                        "font-size": "18px",
                        "cursor": "pointer"
                      },
                      "attributes": {
                        "class": "sp-css-color-GrayText",
                        "iconName": "NumberField",
                        "title": "[$VALUE3.displayValue]"
                      }
                    },
                    {
                      "elmType": "div",
                      "inlineEditField": "[$COLOR3]",
                      "style": {
                        "height": "24px",
                        "width": "30px",
                        "box-sizing": "border-box",
                        "display": "=if([$Author.email] == @me, 'block', 'none')",
                        "align-items": "flex-end",
                        "justify-content": "center",
                        "text-align": "center",
                        "font-size": "18px",
                        "cursor": "pointer"
                      },
                      "attributes": {
                        "class": "sp-css-color-GrayText",
                        "iconName": "BucketColor",
                        "title": "Change color - HTML names or HEX allowed"
                      }
                    }
                  ]
                },
                {
                  "elmType": "div",
                  "style": {
                    "width": "30px",
                    "height": "60px",
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "align-items": "center",
                    "justify-content": "center"
                  },
                  "children": [
                    {
                      "elmType": "div",
                      "customRowAction": {
                        "action": "setValue",
                        "actionInput": {
                          "VALUE3": "0",
                          "LABEL3": ""
                        }
                      },
                      "style": {
                        "height": "24px",
                        "width": "30px",
                        "box-sizing": "border-box",
                        "display": "=if([$Author.email] == @me, 'flex', 'none')",
                        "align-items": "center",
                        "justify-content": "center",
                        "margin": "0 0 0 0",
                        "padding-top": "0px",
                        "font-size": "14px",
                        "cursor": "pointer"
                      },
                      "attributes": {
                        "class": "sp-css-color-GrayText ms-bgColor-severeWarning--hover ms-fontColor-black--hover",
                        "iconName": "Clear",
                        "title": "Delete data"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "elmType": "div",
              "style": {
                "position": "",
                "display": "=if([$VALUE4.displayValue]=='0' || [$VALUE4.displayValue]=='0,0' || [$VALUE4.displayValue]=='0.0' || [$VALUE4.displayValue]=='0,00' || [$VALUE4.displayValue]=='0.00' || [$VALUE4.displayValue]=='0,000' || [$VALUE4.displayValue]=='0.000' || [$VALUE4.displayValue]=='0.0000' || [$VALUE4.displayValue]=='0,0000' || [$VALUE4.displayValue]=='0,00000' || [$VALUE4.displayValue]=='0.00000', 'none', 'flex')",
                "justify-content": "flex-start",
                "align-items": "flex-start",
                "flex-shrink": "1",
                "flex-grow": "1",
                "margin-bottom": "12px",
                "max-height": "150px"
              },
              "children": [
                {
                  "elmType": "div",
                  "style": {
                    "box-sizing": "border-box",
                    "display": "flex",
                    "align-items": "center",
                    "height": "100%",
                    "width": "160px"
                  },
                  "children": [
                    {
                      "elmType": "div",
                      "inlineEditField": "[$LABEL4]",
                      "style": {
                        "box-sizing": "border-box",
                        "display": "block",
                        "height": "60px",
                        "width": "160px",
                        "font-size": "16px",
                        "border-right": "solid 1px lightgrey",
                        "text-align": "right",
                        "padding-right": "4px",
                        "padding-bottom": "auto",
                        "padding-top": "6px",
                        "word-wrap": "break-word",
                        "overflow": "hidden",
                        "text-overflow": "ellipsis",
                        "color": "=if([$LABEL4] =='', '#bdbfbe', 'Black')",
                        "cursor": "=if([$Author.email] == @me, 'pointer', '')"
                      },
                      "txtContent": "=if([$LABEL4] =='', 'Label 4', [$LABEL4])",
                      "attributes": {
                        "title": "[$LABEL4]"
                      }
                    }
                  ]
                },
                {
                  "elmType": "div",
                  "style": {
                    "box-sizing": "border-box",
                    "width": "=[$VALUE4]*528/[$SCALE]+'px'",
                    "height": "100%",
                    "border-radius": "0px 6px 6px 0px",
                    "background-color": "=if([$COLOR4] =='', 'LightGrey', [$COLOR4])",
                    "margin-bottom": "auto"
                  },
                  "attributes": {
                    "title": "[$VALUE4.displayValue]"
                  }
                },
                {
                  "elmType": "div",
                  "style": {
                    "width": "30px",
                    "height": "60px",
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "align-items": "center",
                    "justify-content": "center"
                  },
                  "children": [
                    {
                      "elmType": "div",
                      "inlineEditField": "[$VALUE4]",
                      "style": {
                        "height": "24px",
                        "width": "30px",
                        "box-sizing": "border-box",
                        "display": "=if([$Author.email] == @me, 'block', 'none')",
                        "align-items": "flex-end",
                        "justify-content": "center",
                        "text-align": "center",
                        "font-size": "18px",
                        "cursor": "pointer"
                      },
                      "attributes": {
                        "class": "sp-css-color-GrayText",
                        "iconName": "NumberField",
                        "title": "[$VALUE4.displayValue]"
                      }
                    },
                    {
                      "elmType": "div",
                      "inlineEditField": "[$COLOR4]",
                      "style": {
                        "height": "24px",
                        "width": "30px",
                        "box-sizing": "border-box",
                        "display": "=if([$Author.email] == @me, 'block', 'none')",
                        "align-items": "flex-end",
                        "justify-content": "center",
                        "text-align": "center",
                        "font-size": "18px",
                        "cursor": "pointer"
                      },
                      "attributes": {
                        "class": "sp-css-color-GrayText",
                        "iconName": "BucketColor",
                        "title": "Change color - HTML names or HEX allowed"
                      }
                    }
                  ]
                },
                {
                  "elmType": "div",
                  "style": {
                    "width": "30px",
                    "height": "60px",
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "align-items": "center",
                    "justify-content": "center"
                  },
                  "children": [
                    {
                      "elmType": "div",
                      "customRowAction": {
                        "action": "setValue",
                        "actionInput": {
                          "VALUE4": "0",
                          "LABEL4": ""
                        }
                      },
                      "style": {
                        "height": "24px",
                        "width": "30px",
                        "box-sizing": "border-box",
                        "display": "=if([$Author.email] == @me, 'flex', 'none')",
                        "align-items": "center",
                        "justify-content": "center",
                        "margin": "0 0 0 0",
                        "padding-top": "0px",
                        "font-size": "14px",
                        "cursor": "pointer"
                      },
                      "attributes": {
                        "class": "sp-css-color-GrayText ms-bgColor-severeWarning--hover ms-fontColor-black--hover",
                        "iconName": "Clear",
                        "title": "Delete data"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "elmType": "div",
              "style": {
                "position": "",
                "display": "=if([$VALUE5.displayValue]=='0' || [$VALUE5.displayValue]=='0,0' || [$VALUE5.displayValue]=='0.0' || [$VALUE5.displayValue]=='0,00' || [$VALUE5.displayValue]=='0.00' || [$VALUE5.displayValue]=='0,000' || [$VALUE5.displayValue]=='0.000' || [$VALUE5.displayValue]=='0.0000' || [$VALUE5.displayValue]=='0,0000' || [$VALUE5.displayValue]=='0,00000' || [$VALUE5.displayValue]=='0.00000', 'none', 'flex')",
                "justify-content": "flex-start",
                "align-items": "flex-start",
                "flex-shrink": "1",
                "flex-grow": "1",
                "margin-bottom": "12px",
                "max-height": "150px"
              },
              "children": [
                {
                  "elmType": "div",
                  "style": {
                    "box-sizing": "border-box",
                    "display": "flex",
                    "align-items": "center",
                    "height": "100%",
                    "width": "160px"
                  },
                  "children": [
                    {
                      "elmType": "div",
                      "inlineEditField": "[$LABEL5]",
                      "style": {
                        "box-sizing": "border-box",
                        "display": "block",
                        "height": "60px",
                        "width": "160px",
                        "font-size": "16px",
                        "border-right": "solid 1px lightgrey",
                        "text-align": "right",
                        "padding-right": "4px",
                        "padding-bottom": "auto",
                        "padding-top": "6px",
                        "word-wrap": "break-word",
                        "overflow": "hidden",
                        "text-overflow": "ellipsis",
                        "color": "=if([$LABEL5] =='', '#bdbfbe', 'Black')",
                        "cursor": "=if([$Author.email] == @me, 'pointer', '')"
                      },
                      "txtContent": "=if([$LABEL5] =='', 'Label 5', [$LABEL5])",
                      "attributes": {
                        "title": "[$LABEL5]"
                      }
                    }
                  ]
                },
                {
                  "elmType": "div",
                  "style": {
                    "box-sizing": "border-box",
                    "width": "=[$VALUE5]*528/[$SCALE]+'px'",
                    "height": "100%",
                    "border-radius": "0px 6px 6px 0px",
                    "background-color": "=if([$COLOR5] =='', 'LightGrey', [$COLOR5])",
                    "margin-bottom": "auto"
                  },
                  "attributes": {
                    "title": "[$VALUE5.displayValue]"
                  }
                },
                {
                  "elmType": "div",
                  "style": {
                    "width": "30px",
                    "height": "60px",
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "align-items": "center",
                    "justify-content": "center"
                  },
                  "children": [
                    {
                      "elmType": "div",
                      "inlineEditField": "[$VALUE5]",
                      "style": {
                        "height": "24px",
                        "width": "30px",
                        "box-sizing": "border-box",
                        "display": "=if([$Author.email] == @me, 'block', 'none')",
                        "align-items": "flex-end",
                        "justify-content": "center",
                        "text-align": "center",
                        "font-size": "18px",
                        "cursor": "pointer"
                      },
                      "attributes": {
                        "class": "sp-css-color-GrayText",
                        "iconName": "NumberField",
                        "title": "[$VALUE5.displayValue]"
                      }
                    },
                    {
                      "elmType": "div",
                      "inlineEditField": "[$COLOR5]",
                      "style": {
                        "height": "24px",
                        "width": "30px",
                        "box-sizing": "border-box",
                        "display": "=if([$Author.email] == @me, 'block', 'none')",
                        "align-items": "flex-end",
                        "justify-content": "center",
                        "text-align": "center",
                        "font-size": "18px",
                        "cursor": "pointer"
                      },
                      "attributes": {
                        "class": "sp-css-color-GrayText",
                        "iconName": "BucketColor",
                        "title": "Change color - HTML names or HEX allowed"
                      }
                    }
                  ]
                },
                {
                  "elmType": "div",
                  "style": {
                    "width": "30px",
                    "height": "60px",
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "align-items": "center",
                    "justify-content": "center"
                  },
                  "children": [
                    {
                      "elmType": "div",
                      "customRowAction": {
                        "action": "setValue",
                        "actionInput": {
                          "VALUE5": "0",
                          "LABEL5": ""
                        }
                      },
                      "style": {
                        "height": "24px",
                        "width": "30px",
                        "box-sizing": "border-box",
                        "display": "=if([$Author.email] == @me, 'flex', 'none')",
                        "align-items": "center",
                        "justify-content": "center",
                        "margin": "0 0 0 0",
                        "padding-top": "0px",
                        "font-size": "14px",
                        "cursor": "pointer"
                      },
                      "attributes": {
                        "class": "sp-css-color-GrayText ms-bgColor-severeWarning--hover ms-fontColor-black--hover",
                        "iconName": "Clear",
                        "title": "Delete data"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "elmType": "div",
              "style": {
                "position": "",
                "display": "=if([$VALUE6.displayValue]=='0' || [$VALUE6.displayValue]=='0,0' || [$VALUE6.displayValue]=='0.0' || [$VALUE6.displayValue]=='0,00' || [$VALUE6.displayValue]=='0.00' || [$VALUE6.displayValue]=='0,000' || [$VALUE6.displayValue]=='0.000' || [$VALUE6.displayValue]=='0.0000' || [$VALUE6.displayValue]=='0,0000' || [$VALUE6.displayValue]=='0,00000' || [$VALUE6.displayValue]=='0.00000', 'none', 'flex')",
                "justify-content": "flex-start",
                "align-items": "flex-start",
                "flex-shrink": "1",
                "flex-grow": "1",
                "margin-bottom": "12px",
                "max-height": "150px"
              },
              "children": [
                {
                  "elmType": "div",
                  "style": {
                    "box-sizing": "border-box",
                    "display": "flex",
                    "align-items": "center",
                    "height": "100%",
                    "width": "160px"
                  },
                  "children": [
                    {
                      "elmType": "div",
                      "inlineEditField": "[$LABEL6]",
                      "style": {
                        "box-sizing": "border-box",
                        "display": "block",
                        "height": "60px",
                        "width": "160px",
                        "font-size": "16px",
                        "border-right": "solid 1px lightgrey",
                        "text-align": "right",
                        "padding-right": "4px",
                        "padding-bottom": "auto",
                        "padding-top": "6px",
                        "word-wrap": "break-word",
                        "overflow": "hidden",
                        "text-overflow": "ellipsis",
                        "color": "=if([$LABEL6] =='', '#bdbfbe', 'Black')",
                        "cursor": "=if([$Author.email] == @me, 'pointer', '')"
                      },
                      "txtContent": "=if([$LABEL6] =='', 'Label 5', [$LABEL6])",
                      "attributes": {
                        "title": "[$LABEL6]"
                      }
                    }
                  ]
                },
                {
                  "elmType": "div",
                  "style": {
                    "box-sizing": "border-box",
                    "width": "=[$VALUE6]*528/[$SCALE]+'px'",
                    "height": "100%",
                    "border-radius": "0px 6px 6px 0px",
                    "background-color": "=if([$COLOR6] =='', 'LightGrey', [$COLOR6])",
                    "margin-bottom": "auto"
                  },
                  "attributes": {
                    "title": "[$VALUE6.displayValue]"
                  }
                },
                {
                  "elmType": "div",
                  "style": {
                    "width": "30px",
                    "height": "60px",
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "align-items": "center",
                    "justify-content": "center"
                  },
                  "children": [
                    {
                      "elmType": "div",
                      "inlineEditField": "[$VALUE6]",
                      "style": {
                        "height": "24px",
                        "width": "30px",
                        "box-sizing": "border-box",
                        "display": "=if([$Author.email] == @me, 'block', 'none')",
                        "align-items": "flex-end",
                        "justify-content": "center",
                        "text-align": "center",
                        "font-size": "18px",
                        "cursor": "pointer"
                      },
                      "attributes": {
                        "class": "sp-css-color-GrayText",
                        "iconName": "NumberField",
                        "title": "[$VALUE6.displayValue]"
                      }
                    },
                    {
                      "elmType": "div",
                      "inlineEditField": "[$COLOR6]",
                      "style": {
                        "height": "24px",
                        "width": "30px",
                        "box-sizing": "border-box",
                        "display": "=if([$Author.email] == @me, 'block', 'none')",
                        "align-items": "flex-end",
                        "justify-content": "center",
                        "text-align": "center",
                        "font-size": "18px",
                        "cursor": "pointer"
                      },
                      "attributes": {
                        "class": "sp-css-color-GrayText",
                        "iconName": "BucketColor",
                        "title": "Change color - HTML names or HEX allowed"
                      }
                    }
                  ]
                },
                {
                  "elmType": "div",
                  "style": {
                    "width": "30px",
                    "height": "60px",
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "align-items": "center",
                    "justify-content": "center"
                  },
                  "children": [
                    {
                      "elmType": "div",
                      "customRowAction": {
                        "action": "setValue",
                        "actionInput": {
                          "VALUE6": "0",
                          "LABEL6": ""
                        }
                      },
                      "style": {
                        "height": "24px",
                        "width": "30px",
                        "box-sizing": "border-box",
                        "display": "=if([$Author.email] == @me, 'flex', 'none')",
                        "align-items": "center",
                        "justify-content": "center",
                        "margin": "0 0 0 0",
                        "padding-top": "0px",
                        "font-size": "14px",
                        "cursor": "pointer"
                      },
                      "attributes": {
                        "class": "sp-css-color-GrayText ms-bgColor-severeWarning--hover ms-fontColor-black--hover",
                        "iconName": "Clear",
                        "title": "Delete data"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "elmType": "div",
              "style": {
                "position": "",
                "display": "=if([$VALUE7.displayValue]=='0' || [$VALUE7.displayValue]=='0,0' || [$VALUE7.displayValue]=='0.0' || [$VALUE7.displayValue]=='0,00' || [$VALUE7.displayValue]=='0.00' || [$VALUE7.displayValue]=='0,000' || [$VALUE7.displayValue]=='0.000' || [$VALUE7.displayValue]=='0.0000' || [$VALUE7.displayValue]=='0,0000' || [$VALUE7.displayValue]=='0,00000' || [$VALUE7.displayValue]=='0.00000', 'none', 'flex')",
                "justify-content": "flex-start",
                "align-items": "flex-start",
                "flex-shrink": "1",
                "flex-grow": "1",
                "margin-bottom": "12px",
                "max-height": "150px"
              },
              "children": [
                {
                  "elmType": "div",
                  "style": {
                    "box-sizing": "border-box",
                    "display": "flex",
                    "align-items": "center",
                    "height": "100%",
                    "width": "160px"
                  },
                  "children": [
                    {
                      "elmType": "div",
                      "inlineEditField": "[$LABEL7]",
                      "style": {
                        "box-sizing": "border-box",
                        "display": "block",
                        "height": "60px",
                        "width": "160px",
                        "font-size": "16px",
                        "border-right": "solid 1px lightgrey",
                        "text-align": "right",
                        "padding-right": "4px",
                        "padding-bottom": "auto",
                        "padding-top": "6px",
                        "word-wrap": "break-word",
                        "overflow": "hidden",
                        "text-overflow": "ellipsis",
                        "color": "=if([$LABEL7] =='', '#bdbfbe', 'Black')",
                        "cursor": "=if([$Author.email] == @me, 'pointer', '')"
                      },
                      "txtContent": "=if([$LABEL7] =='', 'Label 5', [$LABEL7])",
                      "attributes": {
                        "title": "[$LABEL7]"
                      }
                    }
                  ]
                },
                {
                  "elmType": "div",
                  "style": {
                    "box-sizing": "border-box",
                    "width": "=[$VALUE7]*528/[$SCALE]+'px'",
                    "height": "100%",
                    "border-radius": "0px 6px 6px 0px",
                    "background-color": "=if([$COLOR7] =='', 'LightGrey', [$COLOR7])",
                    "margin-bottom": "auto"
                  },
                  "attributes": {
                    "title": "[$VALUE7.displayValue]"
                  }
                },
                {
                  "elmType": "div",
                  "style": {
                    "width": "30px",
                    "height": "60px",
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "align-items": "center",
                    "justify-content": "center"
                  },
                  "children": [
                    {
                      "elmType": "div",
                      "inlineEditField": "[$VALUE7]",
                      "style": {
                        "height": "24px",
                        "width": "30px",
                        "box-sizing": "border-box",
                        "display": "=if([$Author.email] == @me, 'block', 'none')",
                        "align-items": "flex-end",
                        "justify-content": "center",
                        "text-align": "center",
                        "font-size": "18px",
                        "cursor": "pointer"
                      },
                      "attributes": {
                        "class": "sp-css-color-GrayText",
                        "iconName": "NumberField",
                        "title": "[$VALUE7.displayValue]"
                      }
                    },
                    {
                      "elmType": "div",
                      "inlineEditField": "[$COLOR7]",
                      "style": {
                        "height": "24px",
                        "width": "30px",
                        "box-sizing": "border-box",
                        "display": "=if([$Author.email] == @me, 'block', 'none')",
                        "align-items": "flex-end",
                        "justify-content": "center",
                        "text-align": "center",
                        "font-size": "18px",
                        "cursor": "pointer"
                      },
                      "attributes": {
                        "class": "sp-css-color-GrayText",
                        "iconName": "BucketColor",
                        "title": "Change color - HTML names or HEX allowed"
                      }
                    }
                  ]
                },
                {
                  "elmType": "div",
                  "style": {
                    "width": "30px",
                    "height": "60px",
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "align-items": "center",
                    "justify-content": "center"
                  },
                  "children": [
                    {
                      "elmType": "div",
                      "customRowAction": {
                        "action": "setValue",
                        "actionInput": {
                          "VALUE7": "0",
                          "LABEL7": ""
                        }
                      },
                      "style": {
                        "height": "24px",
                        "width": "30px",
                        "box-sizing": "border-box",
                        "display": "=if([$Author.email] == @me, 'flex', 'none')",
                        "align-items": "center",
                        "justify-content": "center",
                        "margin": "0 0 0 0",
                        "padding-top": "0px",
                        "font-size": "14px",
                        "cursor": "pointer"
                      },
                      "attributes": {
                        "class": "sp-css-color-GrayText ms-bgColor-severeWarning--hover ms-fontColor-black--hover",
                        "iconName": "Clear",
                        "title": "Delete data"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }