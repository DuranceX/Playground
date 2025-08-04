<template>
  <div class="json-viewer-wrapper">
    <JsonPreview :data="data"/>
  </div>
</template>

<script setup>
// 1. 引入 vue-json-pretty 组件本身和它的样式
import { ref } from 'vue';
import JsonPreview  from '../components/JsonPreview.vue';

// 2. 使用 defineProps 来定义一个名为 data 的 prop
//    这样，父组件就可以通过这个 prop 将JSON数据传递进来
const data = ref(
    [
    {
        "start_time": 680,
        "end_time": 1520,
        "transcript": "那什么",
        "punc": 0.841,
        "music": 0,
        "speaker_id": "speaker_2",
        "words": [
            {
                "label": "那",
                "start_time": 880,
                "end_time": 1160
            },
            {
                "label": "什",
                "start_time": 1160,
                "end_time": 1280
            },
            {
                "label": "么",
                "start_time": 1280,
                "end_time": 1480
            }
        ],
        "sid": 1,
        "location": 2,
        "subtitle": 0.391,
        "gen_res": {
            "gender": "female",
            "gender_score": 0.999
        },
        "single_speaker_score": 0.504
    },
    {
        "start_time": 1520,
        "end_time": 2180,
        "transcript": "那那个",
        "punc": 0.758,
        "music": 0,
        "speaker_id": "speaker_2",
        "words": [
            {
                "label": "那",
                "start_time": 1560,
                "end_time": 1760
            },
            {
                "label": "那",
                "start_time": 1760,
                "end_time": 1880
            },
            {
                "label": "个",
                "start_time": 1880,
                "end_time": 2120
            }
        ],
        "sid": 2,
        "location": 2,
        "subtitle": 0.06,
        "gen_res": {
            "gender": "female",
            "gender_score": 0.685
        },
        "single_speaker_score": 1
    },
    {
        "start_time": 2180,
        "end_time": 2680,
        "transcript": "你先",
        "punc": 0.543,
        "music": 0,
        "speaker_id": "speaker_2",
        "words": [
            {
                "label": "你",
                "start_time": 2240,
                "end_time": 2440
            },
            {
                "label": "先",
                "start_time": 2440,
                "end_time": 2600
            }
        ],
        "sid": 3,
        "location": 2,
        "subtitle": 0.023,
        "gen_res": {
            "gender": "female",
            "gender_score": 0.955
        },
        "single_speaker_score": 1
    },
    {
        "start_time": 2680,
        "end_time": 3120,
        "transcript": "你先",
        "punc": 0.88,
        "music": 0,
        "speaker_id": "speaker_2",
        "words": [
            {
                "label": "你",
                "start_time": 2760,
                "end_time": 2920
            },
            {
                "label": "先",
                "start_time": 2920,
                "end_time": 3080
            }
        ],
        "sid": 4,
        "location": 2,
        "subtitle": 0.84,
        "gen_res": {
            "gender": "female",
            "gender_score": 0.996
        },
        "single_speaker_score": 1
    },
    {
        "start_time": 3120,
        "end_time": 5560,
        "transcript": "你要有什么想去想确认尸体的情况",
        "punc": 0.71,
        "music": 0,
        "speaker_id": "speaker_2",
        "words": [
            {
                "label": "你",
                "start_time": 3160,
                "end_time": 3320
            },
            {
                "label": "要",
                "start_time": 3320,
                "end_time": 3360
            },
            {
                "label": "有",
                "start_time": 3360,
                "end_time": 3440
            },
            {
                "label": "什",
                "start_time": 3440,
                "end_time": 3520
            },
            {
                "label": "么",
                "start_time": 3520,
                "end_time": 3640
            },
            {
                "label": "想",
                "start_time": 3640,
                "end_time": 3800
            },
            {
                "label": "去",
                "start_time": 3800,
                "end_time": 4040
            },
            {
                "label": "想",
                "start_time": 4160,
                "end_time": 4480
            },
            {
                "label": "确",
                "start_time": 4520,
                "end_time": 4680
            },
            {
                "label": "认",
                "start_time": 4680,
                "end_time": 4880
            },
            {
                "label": "尸",
                "start_time": 4880,
                "end_time": 5040
            },
            {
                "label": "体",
                "start_time": 5040,
                "end_time": 5160
            },
            {
                "label": "的",
                "start_time": 5160,
                "end_time": 5240
            },
            {
                "label": "情",
                "start_time": 5240,
                "end_time": 5440
            },
            {
                "label": "况",
                "start_time": 5440,
                "end_time": 5560
            }
        ],
        "sid": 5,
        "location": 2,
        "subtitle": 0.975,
        "gen_res": {
            "gender": "female",
            "gender_score": 1
        },
        "single_speaker_score": 0.758
    },
    {
        "start_time": 5560,
        "end_time": 6720,
        "transcript": "你就去看看啊",
        "punc": 0.993,
        "music": 0,
        "speaker_id": "speaker_2",
        "words": [
            {
                "label": "你",
                "start_time": 5560,
                "end_time": 5680
            },
            {
                "label": "就",
                "start_time": 5680,
                "end_time": 5840
            },
            {
                "label": "去",
                "start_time": 5840,
                "end_time": 6000
            },
            {
                "label": "看",
                "start_time": 6000,
                "end_time": 6160
            },
            {
                "label": "看",
                "start_time": 6160,
                "end_time": 6320
            },
            {
                "label": "啊",
                "start_time": 6440,
                "end_time": 6720
            }
        ],
        "sid": 6,
        "location": 2,
        "subtitle": 0.988,
        "gen_res": {
            "gender": "female",
            "gender_score": 0.96
        },
        "single_speaker_score": 0.515
    },
    {
        "start_time": 6720,
        "end_time": 7880,
        "transcript": "有什么问题你再问我",
        "punc": 0.794,
        "music": 0,
        "speaker_id": "speaker_2",
        "words": [
            {
                "label": "有",
                "start_time": 6720,
                "end_time": 6880
            },
            {
                "label": "什",
                "start_time": 6880,
                "end_time": 6920
            },
            {
                "label": "么",
                "start_time": 6920,
                "end_time": 7040
            },
            {
                "label": "问",
                "start_time": 7040,
                "end_time": 7200
            },
            {
                "label": "题",
                "start_time": 7200,
                "end_time": 7280
            },
            {
                "label": "你",
                "start_time": 7280,
                "end_time": 7440
            },
            {
                "label": "再",
                "start_time": 7440,
                "end_time": 7560
            },
            {
                "label": "问",
                "start_time": 7560,
                "end_time": 7720
            },
            {
                "label": "我",
                "start_time": 7720,
                "end_time": 7880
            }
        ],
        "sid": 7,
        "location": 2,
        "subtitle": 0.126,
        "gen_res": {
            "gender": "female",
            "gender_score": 0.951
        },
        "single_speaker_score": 0.59
    },
    {
        "start_time": 7880,
        "end_time": 8140,
        "transcript": "行",
        "punc": 0.99,
        "music": 0,
        "speaker_id": "speaker_3",
        "words": [
            {
                "label": "行",
                "start_time": 7880,
                "end_time": 8119
            }
        ],
        "sid": 8,
        "location": 2,
        "subtitle": 0.861,
        "gen_res": {
            "gender": "male",
            "gender_score": 1
        },
        "single_speaker_score": 1
    },
    {
        "start_time": 8140,
        "end_time": 10240,
        "transcript": "那你确认好地地方",
        "punc": 0.25,
        "music": 0,
        "speaker_id": "speaker_3",
        "words": [
            {
                "label": "那",
                "start_time": 8160,
                "end_time": 8360
            },
            {
                "label": "你",
                "start_time": 8360,
                "end_time": 8560
            },
            {
                "label": "确",
                "start_time": 8640,
                "end_time": 8800
            },
            {
                "label": "认",
                "start_time": 8800,
                "end_time": 8920
            },
            {
                "label": "好",
                "start_time": 8920,
                "end_time": 9240
            },
            {
                "label": "地",
                "start_time": 9240,
                "end_time": 9440
            },
            {
                "label": "地",
                "start_time": 9560,
                "end_time": 9760
            },
            {
                "label": "方",
                "start_time": 9760,
                "end_time": 10040
            }
        ],
        "sid": 9,
        "location": 2,
        "subtitle": 0.248,
        "gen_res": {
            "gender": "male",
            "gender_score": 1
        },
        "single_speaker_score": 0.743
    },
    {
        "start_time": 10650,
        "end_time": 12010,
        "transcript": "告诉小弟一声啊",
        "punc": 0.914,
        "music": 0,
        "speaker_id": "speaker_3",
        "words": [
            {
                "label": "告",
                "start_time": 10850,
                "end_time": 11050
            },
            {
                "label": "诉",
                "start_time": 11050,
                "end_time": 11170
            },
            {
                "label": "小",
                "start_time": 11170,
                "end_time": 11410
            },
            {
                "label": "弟",
                "start_time": 11410,
                "end_time": 11490
            },
            {
                "label": "一",
                "start_time": 11490,
                "end_time": 11610
            },
            {
                "label": "声",
                "start_time": 11610,
                "end_time": 11690
            },
            {
                "label": "啊",
                "start_time": 11690,
                "end_time": 11970
            }
        ],
        "sid": 10,
        "location": 2,
        "subtitle": 0.441,
        "gen_res": {
            "gender": "male",
            "gender_score": 0.999
        },
        "single_speaker_score": 0.715
    },
    {
        "start_time": 12010,
        "end_time": 12290,
        "transcript": "行",
        "punc": 0.984,
        "music": 0,
        "speaker_id": "speaker_2",
        "words": [
            {
                "label": "行",
                "start_time": 12050,
                "end_time": 12290
            }
        ],
        "sid": 11,
        "location": 2,
        "subtitle": 0.743,
        "gen_res": {
            "gender": "female",
            "gender_score": 1
        },
        "single_speaker_score": 1
    },
    {
        "start_time": 12290,
        "end_time": 14240,
        "transcript": "那你晚上08:30之前回复我啊",
        "punc": 0.67,
        "music": 0,
        "speaker_id": "speaker_2",
        "words": [
            {
                "label": "那",
                "start_time": 12290,
                "end_time": 12410
            },
            {
                "label": "你",
                "start_time": 12410,
                "end_time": 12530
            },
            {
                "label": "晚",
                "start_time": 12530,
                "end_time": 12650
            },
            {
                "label": "上",
                "start_time": 12650,
                "end_time": 12770
            },
            {
                "label": "08",
                "start_time": 12770,
                "end_time": 13030
            },
            {
                "label": ":",
                "start_time": 13030,
                "end_time": 13030
            },
            {
                "label": "30",
                "start_time": 13030,
                "end_time": 13290
            },
            {
                "label": "之",
                "start_time": 13290,
                "end_time": 13410
            },
            {
                "label": "前",
                "start_time": 13410,
                "end_time": 13530
            },
            {
                "label": "回",
                "start_time": 13530,
                "end_time": 13650
            },
            {
                "label": "复",
                "start_time": 13650,
                "end_time": 13730
            },
            {
                "label": "我",
                "start_time": 13730,
                "end_time": 13850
            },
            {
                "label": "啊",
                "start_time": 13850,
                "end_time": 14090
            }
        ],
        "sid": 12,
        "location": 2,
        "subtitle": 0.847,
        "gen_res": {
            "gender": "female",
            "gender_score": 0.999
        },
        "single_speaker_score": 0.729
    },
    {
        "start_time": 14240,
        "end_time": 16470,
        "transcript": "哈哈哈哈哈哈",
        "punc": 0.925,
        "music": 0,
        "speaker_id": "speaker_1",
        "words": [
            {
                "label": "哈",
                "start_time": 14390,
                "end_time": 14790
            },
            {
                "label": "哈",
                "start_time": 14790,
                "end_time": 15030
            },
            {
                "label": "哈",
                "start_time": 15030,
                "end_time": 15190
            },
            {
                "label": "哈",
                "start_time": 15190,
                "end_time": 15390
            },
            {
                "label": "哈",
                "start_time": 15390,
                "end_time": 15590
            },
            {
                "label": "哈",
                "start_time": 15590,
                "end_time": 16350
            }
        ],
        "sid": 13,
        "location": 2,
        "subtitle": 0.889,
        "gen_res": {
            "gender": "male",
            "gender_score": 0.847
        },
        "single_speaker_score": 0.594
    },
    {
        "start_time": 16470,
        "end_time": 16950,
        "transcript": "我行",
        "punc": 0.937,
        "music": 0,
        "speaker_id": "speaker_3",
        "words": [
            {
                "label": "我",
                "start_time": 16590,
                "end_time": 16790
            },
            {
                "label": "行",
                "start_time": 16790,
                "end_time": 16950
            }
        ],
        "sid": 14,
        "location": 2,
        "subtitle": 0.68,
        "gen_res": {
            "gender": "male",
            "gender_score": 1
        },
        "single_speaker_score": 1
    },
    {
        "start_time": 16950,
        "end_time": 18190,
        "transcript": "我08:30给你打电话",
        "punc": 0.747,
        "music": 0,
        "speaker_id": "speaker_3",
        "words": [
            {
                "label": "我",
                "start_time": 16950,
                "end_time": 17070
            },
            {
                "label": "08",
                "start_time": 17070,
                "end_time": 17270
            },
            {
                "label": ":",
                "start_time": 17270,
                "end_time": 17270
            },
            {
                "label": "30",
                "start_time": 17270,
                "end_time": 17470
            },
            {
                "label": "给",
                "start_time": 17470,
                "end_time": 17550
            },
            {
                "label": "你",
                "start_time": 17550,
                "end_time": 17670
            },
            {
                "label": "打",
                "start_time": 17670,
                "end_time": 17790
            },
            {
                "label": "电",
                "start_time": 17790,
                "end_time": 17910
            },
            {
                "label": "话",
                "start_time": 17910,
                "end_time": 18070
            }
        ],
        "sid": 15,
        "location": 2,
        "subtitle": 0.612,
        "gen_res": {
            "gender": "male",
            "gender_score": 1
        },
        "single_speaker_score": 0.791
    },
    {
        "start_time": 18190,
        "end_time": 18650,
        "transcript": "行",
        "punc": 0.884,
        "music": 0,
        "speaker_id": "speaker_2",
        "words": [
            {
                "label": "行",
                "start_time": 18310,
                "end_time": 18510
            }
        ],
        "sid": 16,
        "location": 2,
        "subtitle": 0.272,
        "gen_res": {
            "gender": "female",
            "gender_score": 0.942
        },
        "single_speaker_score": 1
    },
    {
        "start_time": 18650,
        "end_time": 19310,
        "transcript": "好吧",
        "punc": 0.824,
        "music": 0,
        "speaker_id": "speaker_3",
        "words": [
            {
                "label": "好",
                "start_time": 18790,
                "end_time": 18950
            },
            {
                "label": "吧",
                "start_time": 18950,
                "end_time": 19110
            }
        ],
        "sid": 17,
        "location": 2,
        "subtitle": 0.215,
        "gen_res": {
            "gender": "male",
            "gender_score": 0.998
        },
        "single_speaker_score": 1
    },
    {
        "start_time": 19310,
        "end_time": 19910,
        "transcript": "好",
        "punc": 0.971,
        "music": 0,
        "speaker_id": "speaker_2",
        "words": [
            {
                "label": "好",
                "start_time": 19510,
                "end_time": 19710
            }
        ],
        "sid": 18,
        "location": 2,
        "subtitle": 0.898,
        "gen_res": {
            "gender": "male",
            "gender_score": 0.908
        },
        "single_speaker_score": 1
    },
    {
        "start_time": 19950,
        "end_time": 20950,
        "transcript": "你九点要看",
        "punc": 0.963,
        "music": 0,
        "speaker_id": "speaker_1",
        "words": [
            {
                "label": "你",
                "start_time": 20150,
                "end_time": 20350
            },
            {
                "label": "九",
                "start_time": 20350,
                "end_time": 20510
            },
            {
                "label": "点",
                "start_time": 20510,
                "end_time": 20630
            },
            {
                "label": "要",
                "start_time": 20630,
                "end_time": 20790
            },
            {
                "label": "看",
                "start_time": 20790,
                "end_time": 20950
            }
        ],
        "sid": 19,
        "location": 2,
        "subtitle": 0.863,
        "gen_res": {
            "gender": "male",
            "gender_score": 1
        },
        "single_speaker_score": 0.741
    },
    {
        "start_time": 20950,
        "end_time": 22360,
        "transcript": "08:30你要看演唱",
        "punc": 0.971,
        "music": 0,
        "speaker_id": "speaker_1",
        "words": [
            {
                "label": "08",
                "start_time": 20950,
                "end_time": 21150
            },
            {
                "label": ":",
                "start_time": 21150,
                "end_time": 21150
            },
            {
                "label": "30",
                "start_time": 21150,
                "end_time": 21350
            },
            {
                "label": "你",
                "start_time": 21350,
                "end_time": 21430
            },
            {
                "label": "要",
                "start_time": 21430,
                "end_time": 21590
            },
            {
                "label": "看",
                "start_time": 21590,
                "end_time": 21750
            },
            {
                "label": "演",
                "start_time": 21750,
                "end_time": 21910
            },
            {
                "label": "唱",
                "start_time": 21910,
                "end_time": 22190
            }
        ],
        "sid": 20,
        "location": 2,
        "subtitle": 0.965,
        "gen_res": {
            "gender": "male",
            "gender_score": 1
        },
        "single_speaker_score": 0.859
    },
    {
        "start_time": 22360,
        "end_time": 24770,
        "transcript": "你九点我又不是没有演",
        "punc": 0.93,
        "music": 0,
        "speaker_id": "speaker_3",
        "words": [
            {
                "label": "你",
                "start_time": 22530,
                "end_time": 22730
            },
            {
                "label": "九",
                "start_time": 22730,
                "end_time": 22890
            },
            {
                "label": "点",
                "start_time": 22890,
                "end_time": 23050
            },
            {
                "label": "我",
                "start_time": 23170,
                "end_time": 23370
            },
            {
                "label": "又",
                "start_time": 23370,
                "end_time": 23490
            },
            {
                "label": "不",
                "start_time": 23490,
                "end_time": 23570
            },
            {
                "label": "是",
                "start_time": 23570,
                "end_time": 23730
            },
            {
                "label": "没",
                "start_time": 23730,
                "end_time": 24130
            },
            {
                "label": "有",
                "start_time": 24130,
                "end_time": 24410
            },
            {
                "label": "演",
                "start_time": 24570,
                "end_time": 24770
            }
        ],
        "sid": 21,
        "location": 2,
        "subtitle": 0.87,
        "gen_res": {
            "gender": "male",
            "gender_score": 0.999
        },
        "single_speaker_score": 0.671
    },
    {
        "start_time": 24770,
        "end_time": 25570,
        "transcript": "演唱已经结束",
        "punc": 0.888,
        "music": 0,
        "speaker_id": "speaker_3",
        "words": [
            {
                "label": "演",
                "start_time": 24770,
                "end_time": 24930
            },
            {
                "label": "唱",
                "start_time": 24930,
                "end_time": 25050
            },
            {
                "label": "已",
                "start_time": 25050,
                "end_time": 25170
            },
            {
                "label": "经",
                "start_time": 25170,
                "end_time": 25290
            },
            {
                "label": "结",
                "start_time": 25290,
                "end_time": 25410
            },
            {
                "label": "束",
                "start_time": 25410,
                "end_time": 25570
            }
        ],
        "sid": 22,
        "location": 2,
        "subtitle": 0.953,
        "gen_res": {
            "gender": "male",
            "gender_score": 1
        },
        "single_speaker_score": 0.694
    },
    {
        "start_time": 25570,
        "end_time": 26010,
        "transcript": "就只有他",
        "punc": 0.691,
        "music": 0,
        "speaker_id": "speaker_3",
        "words": [
            {
                "label": "就",
                "start_time": 25570,
                "end_time": 25690
            },
            {
                "label": "只",
                "start_time": 25690,
                "end_time": 25810
            },
            {
                "label": "有",
                "start_time": 25810,
                "end_time": 25930
            },
            {
                "label": "他",
                "start_time": 25930,
                "end_time": 26010
            }
        ],
        "sid": 23,
        "location": 2,
        "subtitle": 0.432,
        "gen_res": {
            "gender": "male",
            "gender_score": 1
        },
        "single_speaker_score": 1
    },
    {
        "start_time": 26010,
        "end_time": 26880,
        "transcript": "这还有演出",
        "punc": 0.323,
        "music": 0,
        "speaker_id": "speaker_3",
        "words": [
            {
                "label": "这",
                "start_time": 26010,
                "end_time": 26130
            },
            {
                "label": "还",
                "start_time": 26130,
                "end_time": 26210
            },
            {
                "label": "有",
                "start_time": 26210,
                "end_time": 26330
            },
            {
                "label": "演",
                "start_time": 26330,
                "end_time": 26490
            },
            {
                "label": "出",
                "start_time": 26490,
                "end_time": 26770
            }
        ],
        "sid": 24,
        "location": 2,
        "subtitle": 0.288,
        "gen_res": {
            "gender": "male",
            "gender_score": 0.989
        },
        "single_speaker_score": 0.782
    },
    {
        "start_time": 26880,
        "end_time": 27910,
        "transcript": "在他的演出呀",
        "punc": 0.983,
        "music": 0,
        "speaker_id": "speaker_1",
        "words": [
            {
                "label": "在",
                "start_time": 26990,
                "end_time": 27190
            },
            {
                "label": "他",
                "start_time": 27190,
                "end_time": 27350
            },
            {
                "label": "的",
                "start_time": 27350,
                "end_time": 27470
            },
            {
                "label": "演",
                "start_time": 27470,
                "end_time": 27590
            },
            {
                "label": "出",
                "start_time": 27590,
                "end_time": 27750
            },
            {
                "label": "呀",
                "start_time": 27750,
                "end_time": 27910
            }
        ],
        "sid": 25,
        "location": 2,
        "subtitle": 0.88,
        "gen_res": {
            "gender": "male",
            "gender_score": 1
        },
        "single_speaker_score": 0.723
    },
    {
        "start_time": 27910,
        "end_time": 28150,
        "transcript": "对呀",
        "punc": 0.993,
        "music": 0,
        "speaker_id": "speaker_2",
        "words": [
            {
                "label": "对",
                "start_time": 27910,
                "end_time": 28030
            },
            {
                "label": "呀",
                "start_time": 28030,
                "end_time": 28150
            }
        ],
        "sid": 26,
        "location": 2,
        "subtitle": 0.857,
        "gen_res": {
            "gender": "male",
            "gender_score": 0.836
        },
        "single_speaker_score": 1
    },
    {
        "start_time": 28150,
        "end_time": 30150,
        "transcript": "他的演出伙伴有可能随时会被",
        "punc": 0.578,
        "music": 0,
        "speaker_id": "speaker_3",
        "words": [
            {
                "label": "他",
                "start_time": 28150,
                "end_time": 28230
            },
            {
                "label": "的",
                "start_time": 28230,
                "end_time": 28350
            },
            {
                "label": "演",
                "start_time": 28350,
                "end_time": 28510
            },
            {
                "label": "出",
                "start_time": 28510,
                "end_time": 28670
            },
            {
                "label": "伙",
                "start_time": 28670,
                "end_time": 28830
            },
            {
                "label": "伴",
                "start_time": 28830,
                "end_time": 28990
            },
            {
                "label": "有",
                "start_time": 29030,
                "end_time": 29190
            },
            {
                "label": "可",
                "start_time": 29190,
                "end_time": 29310
            },
            {
                "label": "能",
                "start_time": 29310,
                "end_time": 29430
            },
            {
                "label": "随",
                "start_time": 29430,
                "end_time": 29550
            },
            {
                "label": "时",
                "start_time": 29550,
                "end_time": 29630
            },
            {
                "label": "会",
                "start_time": 29630,
                "end_time": 29750
            },
            {
                "label": "被",
                "start_time": 29750,
                "end_time": 29950
            }
        ],
        "sid": 27,
        "location": 2,
        "subtitle": 0.083,
        "gen_res": {
            "gender": "male",
            "gender_score": 0.998
        },
        "single_speaker_score": 0.813
    },
    {
        "start_time": 30830,
        "end_time": 31990,
        "transcript": "会被拿走",
        "punc": 0.964,
        "music": 0,
        "speaker_id": "speaker_1",
        "words": [
            {
                "label": "会",
                "start_time": 31030,
                "end_time": 31190
            },
            {
                "label": "被",
                "start_time": 31190,
                "end_time": 31310
            },
            {
                "label": "拿",
                "start_time": 31310,
                "end_time": 31470
            },
            {
                "label": "走",
                "start_time": 31470,
                "end_time": 31790
            }
        ],
        "sid": 28,
        "location": 2,
        "subtitle": 0.977,
        "gen_res": {
            "gender": "female",
            "gender_score": 0.847
        },
        "single_speaker_score": 0.639
    },
    {
        "start_time": 32299,
        "end_time": 34460,
        "transcript": "当场正在表演唱歌的时候",
        "punc": 0.592,
        "music": 0,
        "speaker_id": "speaker_1",
        "words": [
            {
                "label": "当",
                "start_time": 32500,
                "end_time": 32740
            },
            {
                "label": "场",
                "start_time": 32740,
                "end_time": 32940
            },
            {
                "label": "正",
                "start_time": 32940,
                "end_time": 33100
            },
            {
                "label": "在",
                "start_time": 33100,
                "end_time": 33260
            },
            {
                "label": "表",
                "start_time": 33260,
                "end_time": 33420
            },
            {
                "label": "演",
                "start_time": 33420,
                "end_time": 33660
            },
            {
                "label": "唱",
                "start_time": 33660,
                "end_time": 33820
            },
            {
                "label": "歌",
                "start_time": 33820,
                "end_time": 33900
            },
            {
                "label": "的",
                "start_time": 33900,
                "end_time": 34100
            },
            {
                "label": "时",
                "start_time": 34100,
                "end_time": 34140
            },
            {
                "label": "候",
                "start_time": 34140,
                "end_time": 34460
            }
        ],
        "sid": 29,
        "location": 2,
        "subtitle": 0.78,
        "gen_res": {
            "gender": "female",
            "gender_score": 0.897
        },
        "single_speaker_score": 0.821
    },
    {
        "start_time": 34460,
        "end_time": 35740,
        "transcript": "当场被逮捕",
        "punc": 0.969,
        "music": 0,
        "speaker_id": "speaker_1",
        "words": [
            {
                "label": "当",
                "start_time": 34460,
                "end_time": 34620
            },
            {
                "label": "场",
                "start_time": 34660,
                "end_time": 34860
            },
            {
                "label": "被",
                "start_time": 34860,
                "end_time": 35020
            },
            {
                "label": "逮",
                "start_time": 35020,
                "end_time": 35220
            },
            {
                "label": "捕",
                "start_time": 35260,
                "end_time": 35540
            }
        ],
        "sid": 30,
        "location": 2,
        "subtitle": 0.984,
        "gen_res": {
            "gender": "female",
            "gender_score": 0.996
        },
        "single_speaker_score": 0.734
    },
    {
        "start_time": 35840,
        "end_time": 36560,
        "transcript": "为什么呀",
        "punc": 0.991,
        "music": 0,
        "speaker_id": "speaker_2",
        "words": [
            {
                "label": "为",
                "start_time": 36040,
                "end_time": 36200
            },
            {
                "label": "什",
                "start_time": 36200,
                "end_time": 36320
            },
            {
                "label": "么",
                "start_time": 36320,
                "end_time": 36440
            },
            {
                "label": "呀",
                "start_time": 36440,
                "end_time": 36560
            }
        ],
        "sid": 31,
        "location": 2,
        "subtitle": 0.975,
        "gen_res": {
            "gender": "female",
            "gender_score": 0.797
        },
        "single_speaker_score": 1
    },
    {
        "start_time": 36560,
        "end_time": 38480,
        "transcript": "就只剩下小火龙跳虎跳火圈了",
        "punc": 0.987,
        "music": 0,
        "speaker_id": "speaker_3",
        "words": [
            {
                "label": "就",
                "start_time": 36560,
                "end_time": 36720
            },
            {
                "label": "只",
                "start_time": 36720,
                "end_time": 36840
            },
            {
                "label": "剩",
                "start_time": 36840,
                "end_time": 36960
            },
            {
                "label": "下",
                "start_time": 36960,
                "end_time": 37120
            },
            {
                "label": "小",
                "start_time": 37120,
                "end_time": 37240
            },
            {
                "label": "火",
                "start_time": 37240,
                "end_time": 37360
            },
            {
                "label": "龙",
                "start_time": 37360,
                "end_time": 37520
            },
            {
                "label": "跳",
                "start_time": 37520,
                "end_time": 37640
            },
            {
                "label": "虎",
                "start_time": 37640,
                "end_time": 37800
            },
            {
                "label": "跳",
                "start_time": 37840,
                "end_time": 38000
            },
            {
                "label": "火",
                "start_time": 38000,
                "end_time": 38120
            },
            {
                "label": "圈",
                "start_time": 38120,
                "end_time": 38280
            },
            {
                "label": "了",
                "start_time": 38280,
                "end_time": 38480
            }
        ],
        "sid": 32,
        "location": 2,
        "subtitle": 0.975,
        "gen_res": {
            "gender": "male",
            "gender_score": 0.998
        },
        "single_speaker_score": 0.764
    },
    {
        "start_time": 38480,
        "end_time": 40530,
        "transcript": "因为他在纵火啊哈哈",
        "punc": 0.93,
        "music": 0,
        "speaker_id": "speaker_1",
        "words": [
            {
                "label": "因",
                "start_time": 38480,
                "end_time": 38640
            },
            {
                "label": "为",
                "start_time": 38640,
                "end_time": 38840
            },
            {
                "label": "他",
                "start_time": 38840,
                "end_time": 39040
            },
            {
                "label": "在",
                "start_time": 39040,
                "end_time": 39240
            },
            {
                "label": "纵",
                "start_time": 39240,
                "end_time": 39440
            },
            {
                "label": "火",
                "start_time": 39480,
                "end_time": 39720
            },
            {
                "label": "啊",
                "start_time": 39920,
                "end_time": 40080
            },
            {
                "label": "哈",
                "start_time": 40080,
                "end_time": 40240
            },
            {
                "label": "哈",
                "start_time": 40240,
                "end_time": 40480
            }
        ],
        "sid": 33,
        "location": 2,
        "subtitle": 0.768,
        "gen_res": {
            "gender": "female",
            "gender_score": 0.908
        },
        "single_speaker_score": 0.695
    },
    {
        "start_time": 40530,
        "end_time": 42700,
        "transcript": "他在游乐园里吐过",
        "punc": 0.881,
        "music": 0,
        "speaker_id": "speaker_1",
        "words": [
            {
                "label": "他",
                "start_time": 40580,
                "end_time": 40820
            },
            {
                "label": "在",
                "start_time": 40820,
                "end_time": 40980
            },
            {
                "label": "游",
                "start_time": 40980,
                "end_time": 41180
            },
            {
                "label": "乐",
                "start_time": 41180,
                "end_time": 41340
            },
            {
                "label": "园",
                "start_time": 41340,
                "end_time": 41500
            },
            {
                "label": "里",
                "start_time": 41500,
                "end_time": 41860
            },
            {
                "label": "吐",
                "start_time": 41860,
                "end_time": 42020
            },
            {
                "label": "过",
                "start_time": 42140,
                "end_time": 42500
            }
        ],
        "sid": 34,
        "location": 2,
        "subtitle": 0.954,
        "gen_res": {
            "gender": "male",
            "gender_score": 0.936
        },
        "single_speaker_score": 0.699
    },
    {
        "start_time": 43380,
        "end_time": 46220,
        "transcript": "哈哈哈哈哈哈哈哈",
        "punc": 0.887,
        "music": 0,
        "speaker_id": "speaker_1",
        "words": [
            {
                "label": "哈",
                "start_time": 43580,
                "end_time": 43780
            },
            {
                "label": "哈",
                "start_time": 43780,
                "end_time": 43940
            },
            {
                "label": "哈",
                "start_time": 43940,
                "end_time": 44140
            },
            {
                "label": "哈",
                "start_time": 44140,
                "end_time": 44580
            },
            {
                "label": "哈",
                "start_time": 44660,
                "end_time": 44860
            },
            {
                "label": "哈",
                "start_time": 44860,
                "end_time": 45580
            },
            {
                "label": "哈",
                "start_time": 45740,
                "end_time": 45860
            },
            {
                "label": "哈",
                "start_time": 45860,
                "end_time": 46220
            }
        ],
        "sid": 35,
        "location": 2,
        "subtitle": 0.989,
        "gen_res": {
            "gender": "female",
            "gender_score": 0.757
        },
        "single_speaker_score": 0.744
    },
    {
        "start_time": 46220,
        "end_time": 47700,
        "transcript": "那是达芙妮吗",
        "punc": 0.997,
        "music": 0,
        "speaker_id": "speaker_1",
        "words": [
            {
                "label": "那",
                "start_time": 46220,
                "end_time": 46380
            },
            {
                "label": "是",
                "start_time": 46380,
                "end_time": 46580
            },
            {
                "label": "达",
                "start_time": 46580,
                "end_time": 46740
            },
            {
                "label": "芙",
                "start_time": 46740,
                "end_time": 46900
            },
            {
                "label": "妮",
                "start_time": 46900,
                "end_time": 47060
            },
            {
                "label": "吗",
                "start_time": 47060,
                "end_time": 47540
            }
        ],
        "sid": 36,
        "location": 2,
        "subtitle": 0.963,
        "gen_res": {
            "gender": "male",
            "gender_score": 0.735
        },
        "single_speaker_score": 0.639
    },
    {
        "start_time": 47700,
        "end_time": 49300,
        "transcript": "达芙妮唱歌的呀",
        "punc": 0.98,
        "music": 0,
        "speaker_id": "speaker_1",
        "words": [
            {
                "label": "达",
                "start_time": 47860,
                "end_time": 48060
            },
            {
                "label": "芙",
                "start_time": 48060,
                "end_time": 48220
            },
            {
                "label": "妮",
                "start_time": 48220,
                "end_time": 48380
            },
            {
                "label": "唱",
                "start_time": 48380,
                "end_time": 48580
            },
            {
                "label": "歌",
                "start_time": 48580,
                "end_time": 48820
            },
            {
                "label": "的",
                "start_time": 48820,
                "end_time": 48980
            },
            {
                "label": "呀",
                "start_time": 48980,
                "end_time": 49220
            }
        ],
        "sid": 37,
        "location": 2,
        "subtitle": 0.945,
        "gen_res": {
            "gender": "male",
            "gender_score": 0.98
        },
        "single_speaker_score": 0.74
    },
    {
        "start_time": 49300,
        "end_time": 50500,
        "transcript": "他是 BGM 呀",
        "punc": 0.974,
        "music": 0,
        "speaker_id": "speaker_1",
        "words": [
            {
                "label": "他",
                "start_time": 49380,
                "end_time": 49580
            },
            {
                "label": "是",
                "start_time": 49580,
                "end_time": 49780
            },
            {
                "label": "BGM",
                "start_time": 49780,
                "end_time": 50340
            },
            {
                "label": "呀",
                "start_time": 50340,
                "end_time": 50500
            }
        ],
        "sid": 38,
        "location": 2,
        "subtitle": 0.959,
        "gen_res": {
            "gender": "male",
            "gender_score": 1
        },
        "single_speaker_score": 0.788
    },
    {
        "start_time": 50500,
        "end_time": 52200,
        "transcript": "你的外号是赤焰狂魔吗",
        "punc": 0.989,
        "music": 0,
        "speaker_id": "speaker_2",
        "words": [
            {
                "label": "你",
                "start_time": 50500,
                "end_time": 50580
            },
            {
                "label": "的",
                "start_time": 50580,
                "end_time": 50660
            },
            {
                "label": "外",
                "start_time": 50660,
                "end_time": 50820
            },
            {
                "label": "号",
                "start_time": 50820,
                "end_time": 50940
            },
            {
                "label": "是",
                "start_time": 50940,
                "end_time": 51220
            },
            {
                "label": "赤",
                "start_time": 51220,
                "end_time": 51420
            },
            {
                "label": "焰",
                "start_time": 51420,
                "end_time": 51580
            },
            {
                "label": "狂",
                "start_time": 51580,
                "end_time": 51780
            },
            {
                "label": "魔",
                "start_time": 51780,
                "end_time": 51980
            },
            {
                "label": "吗",
                "start_time": 51980,
                "end_time": 52180
            }
        ],
        "sid": 39,
        "location": 2,
        "subtitle": 0.945,
        "gen_res": {
            "gender": "female",
            "gender_score": 0.999
        },
        "single_speaker_score": 0.783
    },
    {
        "start_time": 52200,
        "end_time": 52680,
        "transcript": "哈哈",
        "punc": 0.866,
        "music": 0,
        "speaker_id": "speaker_1",
        "words": [
            {
                "label": "哈",
                "start_time": 52220,
                "end_time": 52380
            },
            {
                "label": "哈",
                "start_time": 52380,
                "end_time": 52660
            }
        ],
        "sid": 40,
        "location": 2,
        "subtitle": 0.246,
        "gen_res": {
            "gender": "female",
            "gender_score": 0.573
        },
        "single_speaker_score": 1
    },
    {
        "start_time": 52680,
        "end_time": 54820,
        "transcript": "大古有言不",
        "punc": 0.722,
        "music": 0,
        "speaker_id": "speaker_1",
        "words": [
            {
                "label": "大",
                "start_time": 52700,
                "end_time": 52940
            },
            {
                "label": "古",
                "start_time": 52940,
                "end_time": 53260
            },
            {
                "label": "有",
                "start_time": 53460,
                "end_time": 53660
            },
            {
                "label": "言",
                "start_time": 53660,
                "end_time": 53860
            },
            {
                "label": "不",
                "start_time": 53860,
                "end_time": 54620
            }
        ],
        "sid": 41,
        "location": 2,
        "subtitle": 0.446,
        "gen_res": {
            "gender": "female",
            "gender_score": 0.565
        },
        "single_speaker_score": 0.741
    },
    {
        "start_time": 56580,
        "end_time": 57540,
        "transcript": "吃不吃",
        "punc": 0.79,
        "music": 0,
        "speaker_id": "speaker_3",
        "words": [
            {
                "label": "吃",
                "start_time": 56780,
                "end_time": 56940
            },
            {
                "label": "不",
                "start_time": 56940,
                "end_time": 57060
            },
            {
                "label": "吃",
                "start_time": 57060,
                "end_time": 57340
            }
        ],
        "sid": 42,
        "location": 2,
        "subtitle": 0.245,
        "gen_res": {
            "gender": "male",
            "gender_score": 1
        },
        "single_speaker_score": 0.903
    },
    {
        "start_time": 57900,
        "end_time": 60020,
        "transcript": "该吃该吃",
        "punc": 0.66,
        "music": 0,
        "speaker_id": "speaker_1",
        "words": [
            {
                "label": "该",
                "start_time": 58100,
                "end_time": 58340
            },
            {
                "label": "吃",
                "start_time": 58340,
                "end_time": 58660
            },
            {
                "label": "该",
                "start_time": 59060,
                "end_time": 59260
            },
            {
                "label": "吃",
                "start_time": 59260,
                "end_time": 60020
            }
        ],
        "sid": 43,
        "location": 2,
        "subtitle": 0.484,
        "gen_res": {
            "gender": "male",
            "gender_score": 0.987
        },
        "single_speaker_score": 0.558
    }
]
);
</script>

<style scoped>
.json-viewer-wrapper {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background-color: #fdfdfd;
  text-align: left; /* 确保内容左对齐 */
}
</style>