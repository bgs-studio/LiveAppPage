var APP_DATA = {
  "scenes": [
    {
      "id": "0-up-stairs",
      "name": "Up stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.45575587915955396,
          "pitch": 0.4838459060248681,
          "rotation": 4.71238898038469,
          "target": "1-mid-stairs"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.0269381770575734,
          "pitch": 0.013721693388241363,
          "title": "Information",
          "text": "This is the starting entry stairs of Upper Kachura Lake."
        }
      ]
    },
    {
      "id": "1-mid-stairs",
      "name": "Mid Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2605938693919061,
          "pitch": 0.766954338587226,
          "rotation": 4.71238898038469,
          "target": "2-on-lake-1"
        },
        {
          "yaw": -2.3540852941075627,
          "pitch": -0.2343074114679542,
          "rotation": 4.71238898038469,
          "target": "0-up-stairs"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.9569450026294302,
          "pitch": 0.051104475296330776,
          "title": "Information",
          "text": "The green landscape gives your eyes and mind a fresh and peace feelings."
        }
      ]
    },
    {
      "id": "2-on-lake-1",
      "name": "On Lake 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3053405789942936,
          "pitch": 0.11420947249230373,
          "rotation": 13.351768777756625,
          "target": "3-on-lake-2"
        },
        {
          "yaw": -1.6395972730116952,
          "pitch": 0.2205003526417002,
          "rotation": 0,
          "target": "1-mid-stairs"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.686582106658598,
          "pitch": 0.014652998083384716,
          "title": "Welcom to the Upper Kachura Lake",
          "text": "The end of none ending stairs and starting of Lake view."
        }
      ]
    },
    {
      "id": "3-on-lake-2",
      "name": "On Lake 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3884902168545636,
          "pitch": 0.026808369725767278,
          "rotation": 5.497787143782138,
          "target": "2-on-lake-1"
        },
        {
          "yaw": 0.8148190789889078,
          "pitch": 0.0570475193340414,
          "rotation": 0.7853981633974483,
          "target": "4-on-lake-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-on-lake-3",
      "name": "On Lake 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.257374613882906,
          "pitch": 0.015719519058487563,
          "rotation": 0.7853981633974483,
          "target": "5-on-lake-4"
        },
        {
          "yaw": -1.5065820301492856,
          "pitch": 0.14306520791959443,
          "rotation": 5.497787143782138,
          "target": "3-on-lake-2"
        },
        {
          "yaw": 1.2416568349828818,
          "pitch": 0.0731616056397364,
          "rotation": 0,
          "target": "6-on-lake-5"
        },
        {
          "yaw": 1.5937917556047347,
          "pitch": -0.026279487795688894,
          "rotation": 0,
          "target": "7-on-lake-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-on-lake-4",
      "name": "On Lake 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.43662358761218556,
          "pitch": 0.089727247745369,
          "rotation": 5.497787143782138,
          "target": "4-on-lake-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-on-lake-5",
      "name": "On Lake 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8587940205855276,
          "pitch": 0.13367958058581664,
          "rotation": 6.283185307179586,
          "target": "8-in-lake-upper-kachura"
        },
        {
          "yaw": -2.4750612398771885,
          "pitch": -0.006308746505798268,
          "rotation": 0,
          "target": "7-on-lake-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-on-lake-6",
      "name": "On Lake 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.416942604427737,
          "pitch": 0.19892767141385903,
          "rotation": 5.497787143782138,
          "target": "6-on-lake-5"
        },
        {
          "yaw": -0.5264662733776504,
          "pitch": 0.17168727688621033,
          "rotation": 4.71238898038469,
          "target": "4-on-lake-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-in-lake-upper-kachura",
      "name": "In Lake upper kachura",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8701741133203482,
          "pitch": 0.6406439723299204,
          "rotation": 5.497787143782138,
          "target": "6-on-lake-5"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Upper Kachura Lake 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
