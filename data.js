var APP_DATA = {
  "scenes": [
    {
      "id": "0-pfa",
      "name": "PFA",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.038861857480366524,
        "pitch": 0.033011688987841126,
        "fov": 1.510284771193917
      },
      "linkHotspots": [
        {
          "yaw": 0.018193798068779188,
          "pitch": 0.15833180434359662,
          "rotation": 0,
          "target": "1-jaimala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-jaimala",
      "name": "Jaimala",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.510284771193917
      },
      "linkHotspots": [
        {
          "yaw": -0.012857869382166598,
          "pitch": 0.06931933525235578,
          "rotation": 0,
          "target": "2-couple-stage"
        },
        {
          "yaw": 3.1319538847195503,
          "pitch": 0.12326421070228477,
          "rotation": 0,
          "target": "0-pfa"
        },
        {
          "yaw": 2.427658741981066,
          "pitch": 0.10324227446284517,
          "rotation": 0,
          "target": "3-vedi"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-couple-stage",
      "name": "Couple Stage",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.01589145330378905,
        "pitch": 0.04126461123480141,
        "fov": 1.510284771193917
      },
      "linkHotspots": [
        {
          "yaw": -3.134075100671229,
          "pitch": 0.18581317910105,
          "rotation": 0,
          "target": "1-jaimala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-vedi",
      "name": "Vedi",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.00872067536333887,
        "pitch": -0.02658630312620147,
        "fov": 1.510284771193917
      },
      "linkHotspots": [
        {
          "yaw": 2.4803666926243597,
          "pitch": 0.028473195250269256,
          "rotation": 0,
          "target": "0-pfa"
        },
        {
          "yaw": -2.4744204234033784,
          "pitch": 0.0623248243907355,
          "rotation": 0,
          "target": "1-jaimala"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
