// type: 1,基础认知与偏好类
// type: 2,行为决策与应对类
// type: 3,情绪管理与心态类
// type: 4,价值观念与深层动机类
// type: 5,场景模拟与深层心理类
const personalityTest= {
  id: 1,
  title: "钓鱼人格精密分析",
  titleshort: "钓鱼人格精密分析",
  type: 4,
  questions: [
    {
      id: 1,
      text: "到达新钓点后，你首先会？",
      options: [
        {
          text: "沿着岸线快速抛投找标点",
          resultKey: [
            [
              "Action",
              8
            ],
            [
              "Casual",
              2
            ]
          ],
          icon: "🌊"
        },
        {
          text: "观察结构物分布 + 感受水流温度",
          resultKey: [
            [
              "Observe",
              7
            ],
            [
              "Nature",
              3
            ]
          ],
          icon: "📸"
        },
        {
          text: "掏出钓箱里的刚买的饵试钓",
          resultKey: [
            [
              "Experiment",
              6
            ],
            [
              "Tech",
              4
            ]
          ],
          icon: "🎣"
        }
      ]
    },
    {
      id: 2,
      text: "遇到鱼群不开口时，你会？",
      options: [
        {
          text: "调整钓组参数 + 尝试新饵组合",
          resultKey: [
            [
              "Tech",
              6
            ],
            [
              "Experiment",
              4
            ]
          ],
          icon: "✋"
        },
        {
          text: "观察水面涟漪 + 模仿自然饵动作",
          resultKey: [
            [
              "Observe",
              5.5
            ],
            [
              "Nature",
              4.5
            ]
          ],
          icon: "🌈"
        },
        {
          text: "掏出手机查气压数据 + 对比历史鱼获",
          resultKey: [
            [
              "Data",
              7
            ],
            [
              "Action",
              3
            ]
          ],
          icon: "🌈"
        }
      ]
    },
    {
      id: 3,
      text: "选择钓竿时更关注？",
      options: [
        {
          text: "调性参数 + 碳布等级",
          resultKey: [
            [
              "Tech",
              8
            ],
            [
              "Data",
              2
            ]
          ],
          icon: "📡"
        },
        {
          text: "涂装设计 + 握把材质",
          resultKey: [
            [
              "Casual",
              7
            ],
            [
              "Nature",
              3
            ]
          ],
          icon: "🎣"
        },
        {
          text: "实战测评数据 + 钓友口碑",
          resultKey: [
            [
              "Data",
              6.5
            ],
            [
              "Observe",
              3.5
            ]
          ],
          icon: "🔧"
        }
      ]
    },
    {
      id: 4,
      text: "作钓时间分配策略？",
      options: [
        {
          text: "日出后黄金两小时 + 窗口期死守",
          resultKey: [
            [
              "Nature",
              6
            ],
            [
              "Action",
              4
            ]
          ],
          icon: "🕰️"
        },
        {
          text: "按潮汐表制定计划 + 分段试钓",
          resultKey: [
            [
              "Data",
              7.5
            ],
            [
              "Experiment",
              2.5
            ]
          ],
          icon: "🚀"
        },
        {
          text: "看天气随机决定 + 钓累就歇",
          resultKey: [
            [
              "Casual",
              8.5
            ],
            [
              "Observe",
              1.5
            ]
          ],
          icon: "☀️"
        }
      ]
    },
    {
      id: 5,
      text: "如何看待钓获分享？",
      options: [
        {
          text: "必须九宫格配技术分析",
          resultKey: [
            [
              "Tech",
              6
            ],
            [
              "Data",
              4
            ]
          ],
          icon: "🌅"
        },
        {
          text: "只发背影照 + 定位打码",
          resultKey: [
            [
              "Observe",
              5
            ],
            [
              "Nature",
              5
            ]
          ],
          icon: "📸"
        },
        {
          text: "朋友圈发 '空军' 自嘲 + 即兴段子",
          resultKey: [
            [
              "Casual",
              7
            ],
            [
              "Experiment",
              3
            ]
          ],
          icon: "🙉"
        }
      ]
    }
  ],
  dimensionWeights: {
    Action: 1.15,
    Tech: 1.05,
    Data: 1.15,
    Observe: 1.1,
    Nature: 1.2,
    Casual: 1.1,
    Experiment: 1.65
  },
  results: [
    {
      title: "技术暴君（Tech）",
      description: "在钓鱼界，你就是那技术至上的独裁者！每一次抛竿、收线，都精准得如同精密仪器。理性分析是你的强项，对钓组参数、拟饵搭配的研究深入骨髓。仿佛你手中的钓竿不是渔具，而是一把能征服鱼群的权杖，所到之处，鱼儿都得乖乖就范。",
      formula: "Tech>=18",
      suggestion: "你有着精湛的技术，不妨挑战一些复杂的钓法，比如飞蝇钓。同时，可以多参加一些钓鱼技术交流活动，与其他钓友切磋技艺，不断提升自己。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择高端、精密的渔具，如高模量的碳纤维钓竿，能更好地满足你对技术操作的要求。搭配顺滑的渔轮，确保抛投和收线的精准度。 */"
    },
    {
      title: "数据先知（Data）",
      description: "你就像钓鱼世界里的超级预言家，对数据有着超乎常人的敏感度。气压、潮汐、历史鱼获，这些数据在你眼中就是解开钓鱼密码的钥匙。凭借着强大的数据分析能力，你总能提前布局，让鱼群无处遁形，执行力更是如同火箭发射一般迅猛。",
      formula: "Data>=19",
      suggestion: "继续收集和分析更多的数据，建立自己的钓鱼数据库。根据不同季节、地点和鱼种的特点，制定更精准的钓鱼计划。",
      equip: "数据正在准备中",
      _originalEquip: "/* 配备带有数据记录功能的智能钓具，如智能渔轮可以记录抛投距离、收线速度等数据。还可以使用专业的钓鱼气象仪，实时获取气压、温度等信息。 */"
    },
    {
      title: "自然之子（Nature）",
      description: "你与大自然融为一体，仿佛是鱼群的亲密伙伴。对水流温度、结构物分布的感知如同本能，能敏锐地捕捉到自然的微妙变化。在钓鱼这件事上，你各方面表现均衡，就像大自然精心雕琢的艺术品，享受着与自然和谐共处的钓鱼时光。",
      formula: "Nature>=18",
      suggestion: "多去一些自然环境优美、生态多样的钓点，感受不同的自然条件对鱼群的影响。尝试使用天然拟饵，更贴近自然的方式钓鱼。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择轻便、舒适的钓具，如轻质的钓竿，让你在长时间的钓鱼过程中不会感到疲惫。使用仿生饵，更符合自然环境，增加诱鱼效果。 */"
    },
    {
      title: "鹰眼观测者（Observe）",
      description: "你的观察力堪比鹰眼，任何细微的变化都逃不过你的眼睛。水面的涟漪、鱼群的动向，都能被你精准捕捉。理性分析在你这里发挥得淋漓尽致，就像一位冷静的侦探，通过观察解开钓鱼的谜团。",
      formula: "Observe>=14",
      suggestion: "在钓鱼时，更加注重观察鱼群的行为模式和环境变化。可以提前到达钓点，观察一段时间再下竿，提高钓鱼的成功率。",
      equip: "数据正在准备中",
      _originalEquip: "/* 配备高倍望远镜，帮助你更清晰地观察远处水面的情况。使用带有反光涂层的鱼线，在阳光下更容易观察鱼线的动态。 */"
    },
    {
      title: "抛投永动机（Action）",
      description: "你是钓鱼场上的活力源泉，抛竿的动作如同永动机一般不知疲倦。强大的执行力让你在到达新钓点后迅速展开行动，不放过任何一个可能藏鱼的标点。鱼群在你这无休止的抛投攻势下，迟早会成为你的囊中之物。",
      formula: "Action>=14",
      suggestion: "在保持高频率抛投的同时，注意调整抛投的角度和力度，尝试不同的抛投方式，找到最适合当前钓点的方法。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择弹性好、韧性强的钓竿，能够承受频繁抛投的压力。配备大容量的渔轮，保证有足够的鱼线进行长距离抛投。 */"
    },
    {
      title: "实验狂魔（Experiment）",
      description: "你对钓鱼充满了无尽的好奇心，就像一位疯狂的科学家，不断尝试新的拟饵、钓组组合。勇于探索未知，不怕失败，每一次实验都是向成功迈进的一步。在你的世界里，钓鱼就是一场永不停歇的科学实验。",
      formula: "Experiment>=18",
      suggestion: "继续大胆尝试各种新奇的钓鱼方法和装备，但也要及时总结经验教训。可以将每次实验的结果记录下来，以便后续分析和改进。",
      equip: "数据正在准备中",
      _originalEquip: "/* 购买一些小众、独特的钓具和拟饵，满足你的实验需求。例如，不同形状和颜色的拟饵，以及各种新型的钓组配件。 */"
    },
    {
      title: "佛系天尊（Casual）",
      description: "你以一种云淡风轻的姿态对待钓鱼，仿佛世间的喧嚣都与你无关。看天气随机决定，钓累了就歇一歇，享受着这份随性与自在。在钓鱼这件事上，你更注重过程而非结果，是钓鱼界的佛系代言人。",
      formula: "Casual>=18",
      suggestion: "不要过于在意鱼获的多少，享受钓鱼的过程才是最重要的。可以选择一些风景优美、环境舒适的钓点，放松身心。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择简单、易用的钓具，不需要过于追求高端和复杂。一套基础的钓竿、渔轮和鱼线就可以满足你的需求。 */"
    },
    {
      title: "实验室战神（Tech/Data）",
      description: "你将技术与数据完美融合，如同钓鱼实验室里的战神。凭借着精湛的技术和强大的数据分析能力，在钓鱼战场上战无不胜。每一次决策都经过深思熟虑，让你在复杂的钓鱼环境中脱颖而出。",
      formula: "(Tech>=14 && Data>=10)",
      suggestion: "结合技术和数据的优势，开发出适合自己的钓鱼策略。可以根据数据调整钓组参数和拟饵选择，提高钓鱼的效率。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择具备高科技功能的钓具，如带有传感器的钓竿，可以实时反馈鱼咬钩的信息。同时，使用专业的钓鱼数据分析软件，更好地管理和分析数据。 */"
    },
    {
      title: "荒野先知（Nature+Observe）",
      description: "你是荒野中的智者，对自然的观察细致入微。既能感知大自然的微妙变化，又能通过敏锐的观察力洞察鱼群的动向。在荒野中，你就像一位先知，引领着自己走向钓鱼的胜利之路。",
      formula: "(Nature>=10 && Observe>=10)",
      suggestion: "在荒野环境中钓鱼时，充分利用你对自然和观察的优势。注意观察周围的生态环境，寻找鱼群可能栖息的地方。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择适合野外环境的耐用钓具，如防水、防腐蚀的钓竿和渔轮。配备野外生存工具，如刀具、指南针等，确保在荒野中的安全。 */"
    },
    {
      title: "人形AI探测器（Data+Experiment）",
      description: "你如同一个人形的AI探测器，结合了数据分析和实验探索的能力。通过对数据的研究和不断的实验，你能快速找到最适合的钓鱼方法。在钓鱼的世界里，你就像一台高效的智能机器，精准地解决各种难题。",
      formula: "(Data>=12 && Experiment>=9)",
      suggestion: "利用数据分析的结果指导实验，不断优化钓鱼方法。可以进行对比实验，找出不同条件下最有效的拟饵和钓组组合。",
      equip: "数据正在准备中",
      _originalEquip: "/* 购买具有数据记录和分析功能的智能钓具，方便你进行实验和数据收集。同时，准备多种不同类型的拟饵和钓组，满足实验的需求。 */"
    },
    {
      title: "六边形战士（Six-Dimension）",
      description: "你就是钓鱼界的六边形战士，在多个维度都有着出色的表现。技术、数据、自然感知、观察力等方面样样精通，就像一个全能的战士，无论面对何种钓鱼场景，都能轻松应对，战无不胜。",
      formula: "true",
      suggestion: "不断挑战更高难度的钓鱼场景和目标鱼种，进一步提升自己的综合能力。可以参加一些高水平的钓鱼比赛，与其他高手切磋。",
      equip: "数据正在准备中",
      _originalEquip: "/* 根据不同的钓鱼场景和鱼种，配备一套完整的高端钓具。包括不同长度和调性的钓竿、各种类型的渔轮和丰富多样的拟饵。 */"
    }
  ],
  resultProbabilities: {
    "技术暴君（Tech）": "8.64",
    "数据先知（Data）": "10.70",
    "自然之子（Nature）": "6.17",
    "鹰眼观测者（Observe）": "10.70",
    "抛投永动机（Action）": "3.29",
    "实验狂魔（Experiment）": "5.76",
    "佛系天尊（Casual）": "7.82",
    "实验室战神（Tech/Data）": "4.53",
    "荒野先知（Nature+Observe）": "7.41",
    "人形AI探测器（Data+Experiment）": "8.64",
    "六边形战士（Six-Dimension）": "26.34"
  }
};
const  emergencyTest={
  id: 2,
  title: "路亚佬应急能力测考验",
  titleshort: "路亚佬应急能力测考验",
  type: 1,
  questions: [
    {
      id: 1,
      text: "拟饵挂底了，你会？",
      options: [
        {
          text: "尝试大力拉扯，说不定能扯出来",
          resultKey: [
            [
              "Bold",
              7
            ],
            [
              "Aggressive",
              3
            ]
          ],
          icon: "💪"
        },
        {
          text: "小心地收线，慢慢调整角度尝试取出",
          resultKey: [
            [
              "Patient",
              7
            ],
            [
              "Prudent",
              3
            ]
          ],
          icon: "🧐"
        },
        {
          text: "直接剪断鱼线，换个拟饵继续",
          resultKey: [
            [
              "Practical",
              8
            ],
            [
              "Efficient",
              2
            ]
          ],
          icon: "✂️"
        }
      ]
    },
    {
      id: 2,
      text: "遇到鱼咬口很凶，但就是钓不上来，你咋办？",
      options: [
        {
          text: "换个更锋利的鱼钩，加大力度刺鱼",
          resultKey: [
            [
              "Aggressive",
              7
            ],
            [
              "Patient",
              3
            ]
          ],
          icon: "🔪"
        },
        {
          text: "调整拟饵的动作和速度，尝试不同的手法",
          resultKey: [
            [
              "Adaptable",
              6
            ],
            [
              "Practical",
              4
            ]
          ],
          icon: "🔄"
        },
        {
          text: "先休息一会儿，观察下鱼情再做决定",
          resultKey: [
            [
              "Prudent",
              8
            ],
            [
              "Adaptable",
              2
            ]
          ],
          icon: "😴"
        }
      ]
    },
    {
      id: 3,
      text: "在陌生水域，鱼情一直不好，你怎么搞？",
      options: [
        {
          text: "坚持在这个钓点，相信总会有鱼上钩",
          resultKey: [
            [
              "Patient",
              7
            ],
            [
              "Adaptable",
              3
            ]
          ],
          icon: "💎"
        },
        {
          text: "四处走走，换几个不同的钓点试试",
          resultKey: [
            [
              "Practical",
              6
            ],
            [
              "Bold",
              4
            ]
          ],
          icon: "🚶"
        },
        {
          text: "向当地钓友请教经验",
          resultKey: [
            [
              "Efficient",
              8
            ],
            [
              "Prudent",
              2
            ]
          ],
          icon: "👥"
        }
      ]
    },
    {
      id: 4,
      text: "突然狂风大作，浪很大，你怎么应对？",
      options: [
        {
          text: "不管风浪，继续抛竿作钓",
          resultKey: [
            [
              "Aggressive",
              7
            ],
            [
              "Bold",
              3
            ]
          ],
          icon: "🌪️"
        },
        {
          text: "找个避风的地方继续作钓",
          resultKey: [
            [
              "Patient",
              6
            ],
            [
              "Practical",
              4
            ]
          ],
          icon: "⛺"
        },
        {
          text: "收拾装备回家，等风停了再来",
          resultKey: [
            [
              "Prudent",
              8
            ],
            [
              "Adaptable",
              2
            ]
          ],
          icon: "🏠"
        }
      ]
    },
    {
      id: 5,
      text: "鱼轮突然卡死了，你咋整？",
      options: [
        {
          text: "自己动手拆开鱼轮修理",
          resultKey: [
            [
              "Patient",
              7
            ],
            [
              "Bold",
              3
            ]
          ],
          icon: "🛠️"
        },
        {
          text: "赶紧拿出备用鱼轮换上",
          resultKey: [
            [
              "Practical",
              8
            ],
            [
              "Efficient",
              2
            ]
          ],
          icon: "🎏"
        },
        {
          text: "打电话给大师朋友求救",
          resultKey: [
            [
              "Prudent",
              7
            ],
            [
              "Efficient",
              3
            ]
          ],
          icon: "📞"
        }
      ]
    }
  ],
  dimensionWeights: {
    Bold: 1.4,
    Aggressive: 1.8,
    Patient: 1.8,
    Prudent: 1.8,
    Practical: 1.4,
    Efficient: 1.4,
    Adaptable: 1.8
  },
  results: [
    {
      title: "路亚勇者(Bold+Aggressive)",
      description: "嘿哟，你就是那路亚江湖里的勇者！不管遇到啥情况，直接开干，拟饵挂底了大力扯，鱼咬不上就加大力度刺。你这股子猛劲，说不定哪天能把水底的龙王都给钓上来！",
      formula: "(Bold>=16 && Aggressive>=13)",
      suggestion: "有时候稍微冷静下，别太冲动，不然拟饵和鱼线可遭不住你的折腾。多学习点技巧，让你的猛劲更有方向。",
      equip: "数据正在准备中",
      _originalEquip: "/* 带上一些结实耐用的拟饵和鱼线，能扛得住你的大力拉扯。 */"
    },
    {
      title: "耐心大师(Patient+Adaptable)",
      description: "你就像一位耐心的隐士，拟饵挂底了慢慢弄，鱼咬不上就调整手法。在这快节奏的路亚世界里，你用耐心编织着自己的钓鱼梦，说不定能钓到那些最狡猾的鱼。",
      formula: "(Patient>=11 && Adaptable>=13)",
      suggestion: "继续保持这份耐心，但也别太钻牛角尖，如果实在不行，也可以换个思路。",
      equip: "数据正在准备中",
      _originalEquip: "/* 一套轻便且灵活的钓具，让你在调整手法时更加得心应手。 */"
    },
    {
      title: "实用达人(Practical+Efficient)",
      description: "你是路亚界的实用主义者，拟饵挂底直接剪，鱼轮卡死换备用。不搞那些花里胡哨的，怎么方便怎么来，高效又实在。",
      formula: "(Practical>=13 && Efficient>=13)",
      suggestion: "可以多备一些常用的配件和拟饵，这样在遇到问题时能更快速地解决。",
      equip: "数据正在准备中",
      _originalEquip: "/* 一个装满各种备用配件的渔具盒，让你随时应对突发情况。 */"
    },
    {
      title: "执着钓者(Patient+Aggressive)",
      description: "不管鱼情好不好，你都死死守在一个钓点，就像坚守着自己的阵地。这份执着，说不定能让你等到那条超级大鱼，成为路亚界的传奇。",
      formula: "(Patient>= 15 && Aggressive>=15)",
      suggestion: "在执着的同时，也可以适当灵活点，换个钓点说不定有意外收获。",
      equip: "数据正在准备中",
      _originalEquip: "/* 一把舒适的钓椅，让你在长时间坚守时不会太累。 */"
    },
    {
      title: "机智探险家(Aggressive+Prudent)",
      description: "在陌生水域，你就像一个勇敢的探险家，四处走走，换钓点、请教钓友。你这灵活的头脑和探索精神，能让你发现更多的钓鱼宝藏地。",
      formula: "(Aggressive>=13 && Prudent>=11)",
      suggestion: "多和钓友交流经验，分享你的发现，说不定能建立一个属于自己的路亚小圈子。",
      equip: "数据正在准备中",
      _originalEquip: "/* 一个防水的地图和指南针，让你在陌生水域也不会迷路。 */"
    },
    {
      title: "安全卫士(Prudent+Adaptable)",
      description: "你是路亚世界的安全守护者，狂风大作就找避风处或者回家，鱼轮卡死也不慌。你把安全和理智放在首位，让钓鱼之旅稳稳当当。",
      formula: "(Prudent>=10 && Adaptable>=12)",
      suggestion: "继续保持对安全的重视，在钓鱼前多关注下天气和水域情况。",
      equip: "数据正在准备中",
      _originalEquip: "/* 一件救生衣和一个急救包，为你的安全保驾护航。 */"
    },
    {
      title: "自力更生者(Bold+Patient)",
      description: "你就像一个全能的工匠，鱼轮卡死自己修。你相信自己的双手，用自己的技能解决问题，在路亚的世界里走出一条属于自己的路。",
      formula: "(Bold>=13 &&Patient>=10)",
      suggestion: "多学习一些渔具维修的知识，让自己的技能更加全面。",
      equip: "数据正在准备中",
      _originalEquip: "/* 一套专业的渔具维修工具，让你在修理渔具时更加得心应手。 */"
    },
    {
      title: "冷静观察者(Practical+Prudent)",
      description: "当鱼情不好或者遇到突发情况时，你能冷静观察，先思考再行动。你这敏锐的洞察力和冷静的头脑，能让你在复杂的路亚环境中找到最佳的解决方案。",
      formula: "(Practical>=13 && Prudent>=13)",
      suggestion: "继续保持观察和思考的习惯，这会让你在钓鱼中越来越厉害。",
      equip: "数据正在准备中",
      _originalEquip: "/* 一副高倍望远镜，让你能更清楚地观察鱼情和环境。 */"
    },
    {
      title: "全能路亚侠",
      description: "哇塞，你就是路亚界的超级英雄！在各个方面都表现得非常出色，勇敢、耐心、实用、执着……你就像一个装满了各种技能的百宝箱。不管遇到什么困难和挑战，你都能轻松应对，让路亚之旅变得完美无缺。",
      formula: "true",
      suggestion: "继续保持自己的优势，不断挑战更高难度的路亚环境和目标鱼种。参加一些路亚比赛和交流活动，与其他高手切磋技艺，提升自己的水平。",
      equip: "数据正在准备中",
      _originalEquip: "/* 配备一套顶级的路亚装备，包括高端的钓竿、渔轮、拟饵等，让你在任何情况下都能发挥出最佳水平。再带上一个专业的户外摄影设备，记录下自己精彩的路亚瞬间。 */"
    }
  ],
  resultProbabilities: {
    "路亚勇者(Bold+Aggressive)": "7.00",
    "耐心大师(Patient+Adaptable)": "14.81",
    "实用达人(Practical+Efficient)": "11.11",
    "执着钓者(Patient+Aggressive)": "11.11",
    "机智探险家(Aggressive+Prudent)": "4.94",
    "安全卫士(Prudent+Adaptable)": "5.76",
    "自力更生者(Bold+Patient)": "6.17",
    "冷静观察者(Practical+Prudent)": "11.52",
    "全能路亚侠": "27.57"
  }
};
const natureAbilityTest= {
  id: 3,
  title: "路亚佬自然应对力测评",
  titleshort: "路亚佬应急能力测考验",
  type: 5,
  questions: [
    {
      id: 1,
      text: "暴雨突降时发现巨物炸水，你会？",
      options: [
        {
          text: "穿着冲锋衣愈战愈勇，大风大浪出大雨",
          resultKey: [
            [
              "Storm",
              9
            ],
            [
              "Gear",
              1
            ]
          ],
          icon: "⚡",
          remark: "真正的勇士敢于直面暴雨中的GT，水滴是免费的肌力训练"
        },
        {
          text: "按部就班，丝毫不影响今天的既定节奏",
          resultKey: [
            [
              "Data",
              7
            ],
            [
              "Current",
              3
            ]
          ],
          icon: "📡",
          remark: "科技是第一生产力，淋雨也要科学淋"
        },
        {
          text: "找地方躲雨，审阅钓友群消息",
          resultKey: [
            [
              "Zen",
              8
            ],
            [
              "Improv",
              2
            ]
          ],
          icon: "📱",
          remark: "鱼与熊掌不可兼得，但淋雨和段子可以"
        }
      ]
    },
    {
      id: 2,
      text: "潮水突然暴涨两米，你会？",
      options: [
        {
          text: "立即转移至高位观测新鱼道",
          resultKey: [
            [
              "Current",
              8
            ],
            [
              "Ecology",
              2
            ]
          ],
          icon: "🌊",
          remark: "潮起潮落皆是自然给的考卷，您是满分考生"
        },
        {
          text: "换上沉水铅笔直击底层",
          resultKey: [
            [
              "Gear",
              6
            ],
            [
              "Storm",
              4
            ]
          ],
          icon: "🎣",
          remark: "水位上涨？正是测试新钓法的好机会"
        },
        {
          text: "拍照发朋友圈#今日摸鱼#",
          resultKey: [
            [
              "Zen",
              7
            ],
            [
              "Improv",
              3
            ]
          ],
          icon: "📸",
          remark: "水位可以涨，人设不能崩"
        }
      ]
    },
    {
      id: 3,
      text: "烈日当空鱼口全停时，你会？",
      options: [
        {
          text: "调整钓组玩微物钓白条",
          resultKey: [
            [
              "Improv",
              8
            ],
            [
              "Gear",
              2
            ]
          ],
          icon: "🎯",
          remark: "空军是不可能的，这辈子都不可能空军"
        },
        {
          text: "立即研究水温变化与含氧量的关系",
          resultKey: [
            [
              "Data",
              7
            ],
            [
              "Ecology",
              3
            ]
          ],
          icon: "📊",
          remark: "此刻您不是钓手，是海洋学家"
        },
        {
          text: "树荫下开啤酒等晚口期",
          resultKey: [
            [
              "Zen",
              9
            ],
            [
              "Current",
              1
            ]
          ],
          icon: "🍺",
          remark: "钓鱼的最高境界是愿者上钩"
        }
      ]
    },
    {
      id: 4,
      text: "遇到洄游鱼群突然改道，你会？",
      options: [
        {
          text: "驾船、驾船追击三公里",
          resultKey: [
            [
              "Storm",
              8
            ],
            [
              "Current",
              2
            ]
          ],
          icon: "🚤",
          remark: "您不是在钓鱼，是在拍《速度与激情》"
        },
        {
          text: "分析历史的今天情况预判新路线",
          resultKey: [
            [
              "Data",
              7
            ],
            [
              "Ecology",
              3
            ]
          ],
          icon: "🛰️",
          remark: "NASA需要您这样的人才"
        },
        {
          text: "掏出手机点外卖",
          resultKey: [
            [
              "Zen",
              6
            ],
            [
              "Improv",
              4
            ]
          ],
          icon: "🍱",
          remark: "鱼跑了没关系，饭不能不吃"
        }
      ]
    },
    {
      id: 5,
      text: "夜钓遭遇萤火虫风暴，你会？",
      options: [
        {
          text: "改用荧光虫形饵趁乱作案",
          resultKey: [
            [
              "Improv",
              9
            ],
            [
              "Gear",
              1
            ]
          ],
          icon: "✨",
          remark: "自然给的伪装，不用白不用"
        },
        {
          text: "记录当前详细日期节气，以备来年再战",
          resultKey: [
            [
              "Ecology",
              7
            ],
            [
              "Data",
              3
            ]
          ],
          icon: "📝",
          remark: "达尔文看了都直呼专业"
        },
        {
          text: "躺平欣赏自然灯光秀",
          resultKey: [
            [
              "Zen",
              8
            ],
            [
              "Current",
              2
            ]
          ],
          icon: "🛌",
          remark: "钓鱼？我这是沉浸式生态旅游"
        }
      ]
    }
  ],
  dimensionWeights: {
    Storm: 1.9,
    Current: 1.7,
    Ecology: 2,
    Gear: 2,
    Data: 1.8,
    Improv: 1.5,
    Zen: 0.95
  },
  results: [
    {
      title: "风暴指挥官（Storm+Current）",
      description: "您是暴雨中的交响乐指挥家！雷声是您的背景乐，闪电是您的舞台灯，十米大浪中照样精准抛投。",
      formula: "Storm>=16 && Current>=15",
      suggestion: "建议承包台风季所有船钓赛事，记得给救生衣系个蝴蝶结",
      equip: "数据正在准备中",
      _originalEquip: "/* 钛合金伞帽 + 防雷击碳素竿 + 声纳泳镜 */"
    },
    {
      title: "水文博士（Data+Ecology）",
      description: "您眼里流动的不是水，是数据流！连河蚌开合频率都能算出斐波那契数列，鱼群在您这没有隐私可言。",
      formula: "Data>=19 && Ecology>=15",
      suggestion: "该考虑给流域管理局开发智能预警系统了",
      equip: "数据正在准备中",
      _originalEquip: "/* 量子波动测深仪 + 鳗鱼皮数据手册 */"
    },
    {
      title: "装备魔术师（Gear+Improv）",
      description: "给您一根铁丝都能变出路亚神饵！总能在绝境中开发出匪夷所思的钓组，厂家看了都想请您当顾问。",
      formula: "Gear>=13 && Improv>=13",
      suggestion: "开个直播教钓友用奶茶吸管做波爬",
      equip: "数据正在准备中",
      _originalEquip: "/* 万能工具钳 + 502胶水 + 脑洞补给包 */"
    },
    {
      title: "生态黑客（Ecology+Data）",
      description: "您掌握着水域生态的后门密码！知道什么时候该在拟饵里加咖啡因，什么时候要喷古龙水迷惑鱼群。",
      formula: "Ecology>=15 && Data>=12",
      suggestion: "建议成立反电鱼特攻队，您当技术顾问",
      equip: "数据正在准备中",
      _originalEquip: "/* 仿生信息素发射器 + 水下监听耳机 */"
    },
    {
      title: "追流者（Current+Storm）",
      description: "您是天生的弄潮儿！别人避之不及的激流在您眼里是天然传送带，专送大鱼到跟前。",
      formula: "Current>=19 && Storm>=12",
      suggestion: "可以考虑报名漂流世界杯跨界发展",
      equip: "数据正在准备中",
      _originalEquip: "/* 流体动力学钓箱 + 逆流专用铁板 */"
    },
    {
      title: "科学狂人（Data+Gear）",
      description: "您的钓箱里装着微型实验室！每次抛竿都是对照组实验，鱼获都是科研成果。",
      formula: "Data>=17 && Gear>=14",
      suggestion: "该申请国家自然科学基金了",
      equip: "数据正在准备中",
      _originalEquip: "/* 电子应变片钓竿 + 数据手套 */"
    },
    {
      title: "佛系钓圣（Zen+Improv）",
      description: "您已参透钓鱼禅机！挂底是缘分，空军是修行，十斤巨物咬钩还能淡定发朋友圈先。",
      formula: "Zen>=22",
      suggestion: "建议开班授课《论空军的十种美学价值》",
      equip: "数据正在准备中",
      _originalEquip: "/* 随便折根树枝都是因果钓竿 */"
    },
    {
      title: "即兴诗人（Improv+Zen）",
      description: "您把意外变成艺术！断线能改飞蝇钓，挂树转型岸抛铁板，钓不到鱼还能写三百行叙事诗。",
      formula: "Improv>=19 && Zen>=10",
      suggestion: "出本《钓鱼事故文学集》吧",
      equip: "数据正在准备中",
      _originalEquip: "/* 多功能魔术贴腰带 + 灵感记录板 */"
    },
    {
      title: "全境猎手（Storm+Ecology）",
      description: "您是天灾级的捕食者！台风眼中心都能找到鱼道，火山湖里照钓不误。",
      formula: "Storm>=14 && Ecology>=16",
      suggestion: "建议参与末日片拍摄当技术指导",
      equip: "数据正在准备中",
      _originalEquip: "/* 灾害预警手表 + 岩浆抗性钓线 */"
    },
    {
      title: "量子钓者（Current+Data）",
      description: "您眼中万物皆是概率云！能同时存在于所有标点，直到收竿那刻才坍缩成现实。",
      formula: "Current>=16 && Data>=16",
      suggestion: "该考虑量子纠缠绑钩法专利申请了",
      equip: "数据正在准备中",
      _originalEquip: "/* 薛定谔的钓箱（打开前永远有鱼） */"
    },
    {
      title: "自然共生体（保底结果）",
      description: "您就是生态系统的人形终端！蚊子不叮咬，水蛭让道走，站哪哪出鱼，堪称人形打窝机。",
      formula: "true",
      suggestion: "建议成立路亚教派，您当现世神",
      equip: "数据正在准备中",
      _originalEquip: "/* 随便捡片落叶都是神饵 */"
    }
  ],
  resultProbabilities: {
    "风暴指挥官（Storm+Current）": "7.82",
    "水文博士（Data+Ecology）": "10.70",
    "装备魔术师（Gear+Improv）": "15.23",
    "生态黑客（Ecology+Data）": "10.29",
    "追流者（Current+Storm）": "3.70",
    "科学狂人（Data+Gear）": "1.23",
    "佛系钓圣（Zen+Improv）": "8.64",
    "即兴诗人（Improv+Zen）": "10.70",
    "全境猎手（Storm+Ecology）": "1.23",
    "量子钓者（Current+Data）": "2.47",
    "自然共生体（保底结果）": "27.98"
  }
};
const  juece={
  id: 4,
  title: "作钓决策风格测试",
  titleshort: "作钓决策风格测试",
  type: 2,
  questions: [
    {
      id: 1,
      text: "面对不熟悉的钓点，你的第一步是？",
      options: [
        {
          text: "立即开抛，不中鱼就换点！",
          resultKey: [
            [
              "Aggressive",
              8
            ],
            [
              "Adaptive",
              2
            ]
          ],
          icon: "🎯"
        },
        {
          text: "先观察水流、温度，再决定策略",
          resultKey: [
            [
              "Analytical",
              7
            ],
            [
              "Patient",
              3
            ]
          ],
          icon: "🔍"
        },
        {
          text: "翻开潮汐表、气象数据，制定作钓计划",
          resultKey: [
            [
              "Strategic",
              6
            ],
            [
              "Data",
              4
            ]
          ],
          icon: "📊"
        }
      ]
    },
    {
      id: 2,
      text: "目标鱼种突然不咬，你的应对方式是？",
      options: [
        {
          text: "换饵换钓法，狂轰滥炸试到底！",
          resultKey: [
            [
              "Aggressive",
              6
            ],
            [
              "Experimental",
              4
            ]
          ],
          icon: "🎣"
        },
        {
          text: "耐心等待窗口期，相信自己的判断",
          resultKey: [
            [
              "Patient",
              5.5
            ],
            [
              "Analytical",
              4.5
            ]
          ],
          icon: "🕰"
        },
        {
          text: "回看天气、气压、历史数据，调整策略",
          resultKey: [
            [
              "Data",
              7
            ],
            [
              "Strategic",
              3
            ]
          ],
          icon: "📈"
        }
      ]
    },
    {
      id: 3,
      text: "你如何决定今天用什么饵？",
      options: [
        {
          text: "翻开作钓日记，看往年同样天气的数据",
          resultKey: [
            [
              "Data",
              8
            ],
            [
              "Strategic",
              2
            ]
          ],
          icon: "📓"
        },
        {
          text: "先试几款最有信心的饵，再视情况调整",
          resultKey: [
            [
              "Adaptive",
              7
            ],
            [
              "Experimental",
              3
            ]
          ],
          icon: "🔄"
        },
        {
          text: "随缘挑一款，反正钓鱼主要是放松",
          resultKey: [
            [
              "Casual",
              6.5
            ],
            [
              "Patient",
              3.5
            ]
          ],
          icon: "🌿"
        }
      ]
    },
    {
      id: 4,
      text: "作钓时间分配策略？",
      options: [
        {
          text: "按潮汐、天气精准计算作钓时段",
          resultKey: [
            [
              "Strategic",
              7
            ],
            [
              "Data",
              3
            ]
          ],
          icon: "⏰"
        },
        {
          text: "先观察现场环境，灵活调整计划",
          resultKey: [
            [
              "Analytical",
              6
            ],
            [
              "Adaptive",
              4
            ]
          ],
          icon: "👀"
        },
        {
          text: "看心情决定，随缘而行",
          resultKey: [
            [
              "Casual",
              8
            ],
            [
              "Patient",
              2
            ]
          ],
          icon: "😌"
        }
      ]
    },
    {
      id: 5,
      text: "如何看待钓获分享？",
      options: [
        {
          text: "精心编辑，详细分析每一次收获",
          resultKey: [
            [
              "Data",
              6
            ],
            [
              "Analytical",
              4
            ]
          ],
          icon: "📝"
        },
        {
          text: "晒图为主，偶尔配上幽默点评",
          resultKey: [
            [
              "Casual",
              7
            ],
            [
              "Adaptive",
              3
            ]
          ],
          icon: "📸"
        },
        {
          text: "口头分享，现场体验最真实",
          resultKey: [
            [
              "Experimental",
              5
            ],
            [
              "Patient",
              5
            ]
          ],
          icon: "💬"
        }
      ]
    }
  ],
  dimensionWeights: {
    Aggressive: 1.4,
    Strategic: 1.5,
    Data: 1.1,
    Analytical: 1.3,
    Adaptive: 1.3,
    Patient: 1.5,
    Experimental: 1.8,
    Casual: 1
  },
  results: [
    {
      title: "战术狂徒（Aggressive）",
      description: "你的作钓风格就是‘猛冲猛打’，不断尝试，直到找到鱼的弱点。你的钓箱里永远装满了各种饵，你的座右铭是‘换饵就是换思路’！",
      formula: "Aggressive >= 17",
      suggestion: "尝试将攻击性作钓与精细化调整结合，优化中鱼率！",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择响应迅速的钓竿和高速比渔轮，确保频繁调整的效率。 */"
    },
    {
      title: "数据军师（Data）",
      description: "你的作钓风格建立在数据的海洋上，潮汐、气温、气压……你是钓鱼界的Excel达人！",
      formula: "Data >= 20",
      suggestion: "继续优化你的数据系统，并结合现场观察，提高综合判断力！",
      equip: "数据正在准备中",
      _originalEquip: "/* 智能渔轮、气象仪、记录仪，让数据成为你的第二双眼睛。 */"
    },
    {
      title: "随机钓士（Casual）",
      description: "你享受钓鱼的过程，不拘泥于结果。天气合适就钓，心情好就甩几竿，讲究一个‘佛系’。",
      formula: "Casual >= 17",
      suggestion: "享受钓鱼的同时，也可以尝试一些新的钓法，增加乐趣！",
      equip: "数据正在准备中",
      _originalEquip: "/* 一套简单易用的钓组，重点是舒适！ */"
    },
    {
      title: "策略大师（Strategic + Data）",
      description: "你像一位将军，擅长布局。每一次抛竿都是精心计算后的结果，鱼群在你面前无处可逃。",
      formula: "Strategic >= 14 && Data >= 14",
      suggestion: "结合实践经验和数据，让你的策略更具适应性！",
      equip: "数据正在准备中",
      _originalEquip: "/* 高端探测设备，帮助你精准锁定目标鱼。 */"
    },
    {
      title: "观察大师（Analytical）",
      description: "你以敏锐的观察力捕捉每一个微妙信号，是钓场上的福尔摩斯。你总能发现别人忽略的细节，让每次作钓都成为一场智慧的较量。",
      formula: "Analytical >= 17",
      suggestion: "试着记录下每次观察到的细节，找出潜在的钓鱼规律，提升作钓决策的精确性。",
      equip: "数据正在准备中",
      _originalEquip: "/* 一款高倍望远镜和详细的环境记录本，让你的观察更上一层楼。 */"
    },
    {
      title: "柔性变通者（Adaptive）",
      description: "你灵活变通，善于根据现场情况迅速调整策略。无论遇到何种突发状况，你总能从容应对，转危为机。",
      formula: "Adaptive >= 15",
      suggestion: "保持这种灵活性，同时尝试结合一些数据分析，或许能让你的决策更具说服力。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择操作便捷、易于调节的钓具，助你快速适应不同作钓场景。 */"
    },
    {
      title: "耐心老钓（Patient）",
      description: "你拥有罕见的耐心，总能在漫长的等待中找到属于你的那份平静。你的作钓风格更像是一种艺术，时间在你这里仿佛都静止了。",
      formula: "Patient >= 17",
      suggestion: "耐心是一种美德，但适时的决策调整也同样重要。保持平和心态的同时，不妨偶尔尝试些大胆策略。",
      equip: "数据正在准备中",
      _originalEquip: "/* 一套舒适、稳重的钓具，配合长时间作钓的坐椅，帮你在等待中保持最佳状态。 */"
    },
    {
      title: "实验先行者（Experimental）",
      description: "你对钓鱼充满好奇，每次作钓都是一场实验。你勇于打破常规，用新的方式探索未知，总能带来意想不到的惊喜。",
      formula: "Experimental >= 16",
      suggestion: "鼓励你继续进行各种实验，但别忘了记录数据，以便总结出属于自己的独家作钓秘籍。",
      equip: "数据正在准备中",
      _originalEquip: "/* 一套多功能实验装备，包括各式新奇拟饵和可调试的钓具，为你的实验提供保障。 */"
    },
    {
      title: "数据狂热者（Data & Experimental）",
      description: "你将数据与实验完美融合，通过对数据的深入分析和不断的实验优化，每一次作钓都充满科学的魅力。",
      formula: "(Data >= 10 && Experimental >= 7)",
      suggestion: "试着构建一个系统的数据记录与反馈机制，不断验证和改进你的作钓策略。",
      equip: "数据正在准备中",
      _originalEquip: "/* 智能钓具和数据记录仪器将成为你的得力助手，助你在实验中不断突破。 */"
    },
    {
      title: "全能勇士（All-Rounder）",
      description: "你是钓鱼场上的全能战士，无论是数据分析、策略制定还是现场应变，你都能游刃有余。每一次作钓都证明了你的多面手实力。",
      formula: "true",
      suggestion: "继续保持全面的作钓风格，不断挑战自我，迎接更多未知的钓鱼场景！",
      equip: "数据正在准备中",
      _originalEquip: "/* 多功能全能钓具，满足各种作钓需求，让你无论面对怎样的水域，都能轻松取胜。 */"
    }
  ],
  resultProbabilities: {
    "战术狂徒（Aggressive）": "11.11",
    "数据军师（Data）": "7.82",
    "随机钓士（Casual）": "3.29",
    "策略大师（Strategic + Data）": "8.23",
    "观察大师（Analytical）": "10.70",
    "柔性变通者（Adaptive）": "5.76",
    "耐心老钓（Patient）": "9.47",
    "实验先行者（Experimental）": "5.76",
    "数据狂热者（Data & Experimental）": "9.88",
    "全能勇士（All-Rounder）": "27.98"
  }
};
const  fishingKnowledgeTest={
  id: 5,
  title: "钓鱼知识获取偏好",
  titleshort: "钓鱼知识获取偏好",
  type: 1,
  questions: [
    {
      id: 1,
      text: "当你想要学习新的路亚拟饵使用技巧时，你会？",
      options: [
        {
          text: "观看知名路亚钓鱼博主的教学视频",
          resultKey: [
            [
              "Digital",
              7
            ],
            [
              "Exploratory",
              3
            ]
          ],
          icon: "📺"
        },
        {
          text: "阅读专业的路亚钓鱼书籍和杂志",
          resultKey: [
            [
              "Traditional",
              7
            ],
            [
              "Analytical",
              3
            ]
          ],
          icon: "📖"
        },
        {
          text: "线下和路亚高手面对面交流",
          resultKey: [
            [
              "Social",
              6
            ],
            [
              "Practical",
              4
            ]
          ],
          icon: "🏫"
        }
      ]
    },
    {
      id: 2,
      text: "在选择路亚钓鱼装备时，你通过什么途径了解产品信息？",
      options: [
        {
          text: "在路亚钓鱼论坛和社群中查看其他钓友的评价和推荐",
          resultKey: [
            [
              "Digital",
              7
            ],
            [
              "Social",
              3
            ]
          ],
          icon: "💬"
        },
        {
          text: "咨询专业的路亚钓具店老板",
          resultKey: [
            [
              "Expert",
              7
            ],
            [
              "Practical",
              3
            ]
          ],
          icon: "👨‍💼"
        },
        {
          text: "自己研究产品的参数和性能，对比不同品牌",
          resultKey: [
            [
              "Analytical",
              6
            ],
            [
              "Exploratory",
              4
            ]
          ],
          icon: "🔍"
        }
      ]
    },
    {
      id: 3,
      text: "当你遇到路亚钓鱼中的难题时，你会？",
      options: [
        {
          text: "在社交媒体上发布求助帖，寻求其他钓友的帮助",
          resultKey: [
            [
              "Digital",
              7
            ],
            [
              "Social",
              3
            ]
          ],
          icon: "📢"
        },
        {
          text: "查阅自己收藏的路亚钓鱼资料和笔记",
          resultKey: [
            [
              "Traditional",
              6
            ],
            [
              "Analytical",
              4
            ]
          ],
          icon: "🗄️"
        },
        {
          text: "亲自去钓鱼现场，尝试不同的方法解决问题",
          resultKey: [
            [
              "Practical",
              7
            ],
            [
              "Exploratory",
              3
            ]
          ],
          icon: "🎣"
        }
      ]
    },
    {
      id: 4,
      text: "你平时获取路亚钓鱼资讯的频率是？",
      options: [
        {
          text: "每天都会花时间关注",
          resultKey: [
            [
              "Digital",
              8
            ],
            [
              "Exploratory",
              2
            ]
          ],
          icon: "⏰"
        },
        {
          text: "每周固定时间查看",
          resultKey: [
            [
              "Traditional",
              7
            ],
            [
              "Analytical",
              3
            ]
          ],
          icon: "📅"
        },
        {
          text: "遇到问题才去查找",
          resultKey: [
            [
              "Practical",
              5
            ],
            [
              "Reactive",
              5
            ]
          ],
          icon: "❓"
        }
      ]
    },
    {
      id: 5,
      text: "对于新出现的路亚钓鱼技术和趋势，你会？",
      options: [
        {
          text: "第一时间学习和尝试",
          resultKey: [
            [
              "Exploratory",
              7
            ],
            [
              "Practical",
              3
            ]
          ],
          icon: "🚀"
        },
        {
          text: "观察一段时间，等大家反馈后再决定是否学习",
          resultKey: [
            [
              "Analytical",
              7
            ],
            [
              "Social",
              3
            ]
          ],
          icon: "👀"
        },
        {
          text: "不太在意，坚持自己熟悉的方法",
          resultKey: [
            [
              "Traditional",
              2
            ],
            [
              "Reactive",
              8
            ]
          ],
          icon: "📌"
        }
      ]
    }
  ],
  dimensionWeights: {
    Digital: 1.2,
    Traditional: 1.2,
    Social: 1.35,
    Practical: 1.45,
    Analytical: 1.35,
    Exploratory: 1.6,
    Reactive: 1.62
  },
  results: [
    {
      title: "数字先锋（Digital）",
      description: "具备典型的技术依赖型人格特征（心理学中的高神经质倾向）。擅长利用现代科技手段获取信息，对卫星地图、水文监测系统等数字工具的使用频率显著高于平均水平。偏好通过数据可视化（如水温曲线、潮汐预测）制定作钓策略。",
      formula: "Digital >= 19",
      suggestion: "参与《智能钓鱼设备应用》专项培训，考取无人机遥感操作证书。建立个人作钓数据库，通过 SPSS 分析历史数据规律。",
      equip: "数据正在准备中",
      _originalEquip: "/* 智能钓鱼手表（支持 4G 数据传输）+ 便携式水下声呐探测仪 */"
    },
    {
      title: "传统学者（Traditional）",
      description: "表现出明显的保守型认知风格（心理学中的高尽责性倾向）。对传统钓法的研究深度达到行业平均水平的 3.2 倍，古籍阅读量占知识获取总量的 67%。擅长将历史文献中的经验转化为现代作钓技巧。",
      formula: "Traditional >= 17",
      suggestion: "申请国家非物质文化遗产钓具保护项目，参与《中国古代渔具图谱》编纂工作。建立传统钓法教学示范基地。",
      equip: "数据正在准备中",
      _originalEquip: "/* 黄花梨鱼竿收藏架 + 手工蚕丝钓线套装 + 青铜古法打窝器 */"
    },
    {
      title: "社交实践家（Social+Practical）",
      description: "具有突出的外向型社交特质（心理学中的高外向性倾向）。平均每次作钓组织规模达 15-20 人，教学时长占比达 41%。擅长通过实践演示传播钓鱼知识，语言表达能力较行业均值高 28%。",
      formula: "(Social>= 12 && Practical >= 10)",
      suggestion: "考取钓鱼培训师资格认证，开发《30 天钓鱼速成》课程体系。建立钓友互助平台，设计积分制技能交换系统。",
      equip: "数据正在准备中",
      _originalEquip: "/* 多功能教学折叠桌 + 防水教学平板电脑 + 智能钓友定位手环 */"
    },
    {
      title: "数据分析师（Analytical）",
      description: "呈现典型的分析型思维模式（心理学中的高开放性倾向）。作钓数据记录完整度达 92%，擅长构建数学模型预测鱼情。对环境变量（气压、水温）的敏感度较普通钓友高 40%。",
      formula: "Analytical >= 16",
      suggestion: "参与《渔业大数据应用》学术研讨会，开发钓鱼 AI 预测系统。在核心期刊发表《基于机器学习的鱼类行为分析》。",
      equip: "数据正在准备中",
      _originalEquip: "/* 便携式气象站 + 智能鱼情分析终端 + 高精度水质检测仪 */"
    },
    {
      title: "创新探索者（Exploratory）",
      description: "展现强烈的创新型人格特质（心理学中的高冒险性倾向）。每年尝试新钓法数量超过 12 种，钓具改装成功率达 68%。对新材料、新技术的接受速度是行业平均的 2.3 倍。",
      formula: "Exploratory >= 15",
      suggestion: "加入钓具研发实验室，申请新型实用专利。参与《未来钓鱼科技》国际论坛，推动跨界技术融合。",
      equip: "数据正在准备中",
      _originalEquip: "/* 微型 3D 打印装置 + 智能材料试验机 + 水下机器人操控台 */"
    },
    {
      title: "应变大师（Reactive）",
      description: "具备优异的情境适应能力（心理学中的高灵活性倾向）。突发状况处理速度较普通钓友快 35%，平均携带应急工具种类达 18 种。擅长利用环境资源进行钓具临时改造。",
      formula: "Reactive >= 13",
      suggestion: "考取野外生存急救证书，开发《钓鱼应急处理》在线课程。设计模块化应急钓具包，建立钓友互助救援网络。",
      equip: "数据正在准备中",
      _originalEquip: "/* 战术多功能马甲 + 纳米修复喷雾 + 智能应急通讯器 */"
    },
    {
      title: "全能钓手（All-Rounder）",
      description: "呈现复合型人格特征。传统与现代钓法掌握度均超过 85%，跨场景作钓成功率达 79%。具备将不同流派技术融合创新的能力，形成独特的个人作钓体系。",
      formula: "true",
      suggestion: "参加世界钓鱼锦标赛全能组赛事，建立跨领域技术交流平台。开发《钓鱼技能矩阵评估体系》，推动行业标准化建设。",
      equip: "数据正在准备中",
      _originalEquip: "/* 智能模块化钓箱 + 全频段鱼情监测系统 + 多场景切换钓具套装 */"
    }
  ],
  resultProbabilities: {
    "数字先锋（Digital）": "11.11",
    "传统学者（Traditional）": "11.11",
    "社交实践家（Social+Practical）": "17.28",
    "数据分析师（Analytical）": "15.23",
    "创新探索者（Exploratory）": "16.46",
    "应变大师（Reactive）": "7.00",
    "全能钓手（All-Rounder）": "21.81"
  }
};
const  yuhuochuli= {
  id: 6,
  title: "鱼获处理方式偏好",
  titleshort: "鱼获处理方式偏好",
  type: 1,
  questions: [
    {
      id: 1,
      text: "当钓到一条大鱼后，你首先会？",
      options: [
        {
          text: "迅速拍照发朋友圈炫耀，然后放生",
          resultKey: [
            [
              "Showoff",
              7
            ],
            [
              "Social",
              3
            ]
          ],
          icon: "📸"
        },
        {
          text: "小心翼翼地把鱼放进鱼护/鱼扣，准备带回家烹饪",
          resultKey: [
            [
              "Gourmet",
              8
            ],
            [
              "Collector",
              2
            ]
          ],
          icon: "🎣"
        },
        {
          text: "先仔细观察鱼的品种和特征，再决定处理方式",
          resultKey: [
            [
              "Research",
              6
            ],
            [
              "Observe",
              4
            ]
          ],
          icon: "🔍"
        }
      ]
    },
    {
      id: 2,
      text: "如果鱼获很多，你会？",
      options: [
        {
          text: "把大部分鱼放生，只索取几条",
          resultKey: [
            [
              "Conservation",
              7
            ],
            [
              "Showoff",
              3
            ]
          ],
          icon: "🌊"
        },
        {
          text: "全部烹饪并邀请朋友一起尝个鲜",
          resultKey: [
            [
              "Gourmet",
              8
            ],
            [
              "Social",
              2
            ]
          ],
          icon: "👥"
        },
        {
          text: "拿几条适合饲养的回家",
          resultKey: [
            [
              "Observe",
              6
            ],
            [
              "Collector",
              4
            ]
          ],
          icon: "📚"
        }
      ]
    },
    {
      id: 3,
      text: "处理鱼获时，你更注重？",
      options: [
        {
          text: "鱼的外观完整，便于拍照展示",
          resultKey: [
            [
              "Showoff",
              8
            ],
            [
              "Conservation",
              2
            ]
          ],
          icon: "📷"
        },
        {
          text: "鱼的新鲜度和口感，为烹饪做准备",
          resultKey: [
            [
              "Gourmet",
              7
            ],
            [
              "Collector",
              3
            ]
          ],
          icon: "🍲"
        },
        {
          text: "遵循环保原则，减少对鱼的伤害",
          resultKey: [
            [
              "Conservation",
              6
            ],
            [
              "Research",
              4
            ]
          ],
          icon: "🌱"
        }
      ]
    },
    {
      id: 4,
      text: "当钓到稀有鱼种时，你会？",
      options: [
        {
          text: "立即联系渔业部门报备，然后放生",
          resultKey: [
            [
              "Conservation",
              8
            ],
            [
              "Research",
              2
            ]
          ],
          icon: "📞"
        },
        {
          text: "制作成标本收藏起来",
          resultKey: [
            [
              "Collector",
              7
            ],
            [
              "Research",
              3
            ]
          ],
          icon: "🦴"
        },
        {
          text: "详细记录鱼的信息，拍照后放生",
          resultKey: [
            [
              "Research",
              6
            ],
            [
              "Conservation",
              4
            ]
          ],
          icon: "📝"
        }
      ]
    },
    {
      id: 5,
      text: "对于鱼获的去向，你更倾向于？",
      options: [
        {
          text: "送给亲戚朋友邻里街坊",
          resultKey: [
            [
              "Social",
              8
            ],
            [
              "Showoff",
              2
            ]
          ],
          icon: "🤝"
        },
        {
          text: "拍摄鱼获美照到互联网上炫耀、对比",
          resultKey: [
            [
              "Showoff",
              8
            ],
            [
              "Social",
              2
            ]
          ],
          icon: "🏆"
        },
        {
          text: "自己慢慢品尝，享受钓鱼的成果",
          resultKey: [
            [
              "Gourmet",
              7
            ],
            [
              "Collector",
              3
            ]
          ],
          icon: "😋"
        }
      ]
    }
  ],
  dimensionWeights: {
    Showoff: 1.3,
    Conservation: 1.58,
    Gourmet: 1.45,
    Collector: 1.3,
    Research: 1.75,
    Social: 1.5,
    Observe: 1.12
  },
  results: [
    {
      title: "炫技日常（Showoff）",
      description: "你就像钓鱼圈的明星，钓到鱼后不勾引其他钓友那简直比没钓到鱼还难受！每次鱼获都要全方位展示，恨不得让全世界都知道你是钓鱼小能手。你就是钓鱼场上的焦点，闪光灯下的王者！",
      formula: "Showoff >= 21",
      suggestion: "可以多参加一些钓鱼摄影比赛，把你的鱼获美照展示给更多人。同时，也可以分享一些钓鱼技巧，让你的炫耀更有内涵。",
      equip: "数据正在准备中",
      _originalEquip: "/* 配备一台高清相机，记录每一个精彩瞬间。再准备一些漂亮的鱼获展示道具，让你的照片更加出彩。 */"
    },
    {
      title: "环保卫士（Conservation）",
      description: "你是大自然的守护者，钓鱼只是你与大自然互动的方式，鱼获的最终归宿大多是回归自然。你深知生态平衡的重要性，用实际行动保护着钓鱼资源，是钓鱼界的环保楷模！",
      formula: "Conservation >= 25",
      suggestion: "可以加入一些环保钓鱼组织，参与更多的渔业保护活动。学习更多的鱼类知识，更好地保护它们的生存环境。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择无倒刺鱼钩，减少对鱼的伤害。准备一个放生网，让鱼能够安全地回到水中。 */"
    },
    {
      title: "美食家（Gourmet）",
      description: "你把钓鱼当成了寻找美食的旅程，每一条鱼都是你餐桌上的美味佳肴。你对鱼的烹饪方法了如指掌，能把鱼做成各种美味。在你眼中，钓鱼不仅仅是乐趣，更是一场美食盛宴！",
      formula: "Gourmet >= 23",
      suggestion: "可以尝试一些新的鱼类烹饪方法，参加美食交流活动，分享你的烹饪心得。也可以根据不同的鱼种搭配不同的调料，让你的美食更加丰富多样。",
      equip: "数据正在准备中",
      _originalEquip: "/* 准备一套专业的厨房刀具和烹饪器具，确保能够完美地处理鱼获。再买一些优质的调料，提升鱼的口感。 */"
    },
    {
      title: "收藏家（Collector）",
      description: "你对鱼获有着特殊的感情，喜欢把它们变成永久的纪念。制作标本、分类存放，每一条鱼都承载着你的回忆。你就像一个钓鱼博物馆馆长，守护着自己的鱼获宝藏！",
      formula: "Collector >= 14 && Research >= 14",
      suggestion: "可以学习一些专业的标本制作技术，让你的鱼标本更加精美。也可以参加一些标本展览活动，与其他收藏家交流经验。",
      equip: "数据正在准备中",
      _originalEquip: "/* 购买一些标本制作工具和材料，如标本架、防腐剂等。再准备一个专门的展示柜，展示你的鱼获标本。 */"
    },
    {
      title: "研究员（Research）",
      description: "你对鱼的世界充满了好奇，每钓到一条鱼都要研究一番。从鱼的品种、特征到生活习性，你都了如指掌。你是钓鱼界的科学家，用知识武装自己，探索钓鱼的奥秘！",
      formula: "Research >= 23",
      suggestion: "可以发表一些关于鱼类研究的文章，与其他钓友分享你的研究成果。也可以参加一些渔业科研项目，为鱼类保护和研究做出贡献。",
      equip: "数据正在准备中",
      _originalEquip: "/* 准备一本专业的鱼类图鉴和记录笔记本，方便你随时记录和查阅鱼的信息。再配备一些简单的测量工具，如卡尺、天平，用于测量鱼的大小和重量。 */"
    },
    {
      title: "社交达人（Social）",
      description: "钓鱼对你来说不仅是个人爱好，更是社交活动。你喜欢和朋友一起分享钓鱼的快乐，一起烹饪鱼获，享受社交的乐趣。你是钓鱼圈的人气王，有你在的地方就有欢声笑语！",
      formula: "Social >= 15 && Gourmet >= 11",
      suggestion: "可以组织更多的钓鱼聚会和活动，邀请更多的钓友参加。也可以建立一个钓鱼社交群，方便大家交流和分享。",
      equip: "数据正在准备中",
      _originalEquip: "/* 准备一套适合多人使用的钓鱼装备和烹饪工具，如多人帐篷、烧烤架等。再准备一些饮料和小吃，让聚会更加愉快。 */"
    },
    {
      title: "观察者（Observe）",
      description: "你有着敏锐的观察力，总能从鱼获中发现别人忽略的细节。你就像钓鱼界的福尔摩斯，通过观察鱼的每一个特征来推断它们的生存状态。",
      formula: "Observe >= 10 && Research >= 10",
      suggestion: "可以练习速写或摄影技能，更准确地记录鱼获特征。也可以参与鱼类观察研究项目，将你的观察技能发挥到极致。",
      equip: "数据正在准备中",
      _originalEquip: "/* 准备一个便携式显微镜和测光仪，用于更细致地观察鱼获。再带一本速写本，随时记录观察结果。 */"
    },
    {
      title: "均衡路亚人（Multi-Dimension）",
      description: "你是一个全面发展的钓鱼高手，在鱼获处理方面展现出惊人的多样性。无论是炫耀、烹饪还是科研，你都能找到最适合的处理方式。",
      formula: "true",
      suggestion: "继续保持多元化的处理方式，根据不同的钓鱼场景灵活调整策略。可以尝试开发自己的鱼获处理系统，形成独特的风格。",
      equip: "数据正在准备中",
      _originalEquip: "/* 配备一套完整的钓鱼工具包，包含展示、烹饪、研究等多种用途的装备，满足不同场景的需求。 */"
    }
  ],
  resultProbabilities: {
    "炫技日常（Showoff）": "13.58",
    "环保卫士（Conservation）": "8.23",
    "美食家（Gourmet）": "16.05",
    "收藏家（Collector）": "4.12",
    "研究员（Research）": "2.47",
    "社交达人（Social）": "5.76",
    "观察者（Observe）": "6.17",
    "均衡路亚人（Multi-Dimension）": "43.62"
  }
};
const  baoyang={
  id: 7,
  title: "装备保养习惯分析",
  titleshort: "装备保养习惯分析",
  type: 1,
  questions: [
    {
      id: 1,
      text: "作钓结束后，你对钓竿的处理方式是？",
      options: [
        {
          text: "立即用清水冲洗，仔细擦干后涂抹保养油，再放入竿套",
          resultKey: [
            [
              "Careful",
              7
            ],
            [
              "Tech",
              3
            ]
          ],
          icon: "🧼"
        },
        {
          text: "简单用布擦一擦，就随意放在角落",
          resultKey: [
            [
              "Casual",
              5
            ],
            [
              "Lazy",
              5
            ]
          ],
          icon: "😴"
        },
        {
          text: "先不管，等下次作钓前再处理",
          resultKey: [
            [
              "Lazy",
              7
            ],
            [
              "Risky",
              3
            ]
          ],
          icon: "🕒"
        }
      ]
    },
    {
      id: 2,
      text: "对于渔轮，你多久进行一次保养？",
      options: [
        {
          text: "每次作钓后都拆开清洗、上油",
          resultKey: [
            [
              "Tech",
              5
            ],
            [
              "Careful",
              5
            ]
          ],
          icon: "🔧"
        },
        {
          text: "每季度保养一次",
          resultKey: [
            [
              "Routine",
              7
            ],
            [
              "Safety",
              3
            ]
          ],
          icon: "📅"
        },
        {
          text: "直到渔轮出问题才保养",
          resultKey: [
            [
              "Lazy",
              7
            ],
            [
              "Risky",
              3
            ]
          ],
          icon: "🚨"
        }
      ]
    },
    {
      id: 3,
      text: "鱼线使用一段时间后，你会？",
      options: [
        {
          text: "定期检查磨损情况，及时更换",
          resultKey: [
            [
              "Careful",
              5
            ],
            [
              "Safety",
              5
            ]
          ],
          icon: "👀"
        },
        {
          text: "等鱼线断了再换",
          resultKey: [
            [
              "Routine",
              8
            ],
            [
              "Lazy",
              2
            ]
          ],
          icon: "💥"
        },
        {
          text: "不管它，能用就行",
          resultKey: [
            [
              "Casual",
              7
            ],
            [
              "Risky",
              3
            ]
          ],
          icon: "🙈"
        }
      ]
    },
    {
      id: 4,
      text: "当你的假饵有损坏时，你会？",
      options: [
        {
          text: "马上修复或更换新的假饵",
          resultKey: [
            [
              "Tech",
              7
            ],
            [
              "Careful",
              3
            ]
          ],
          icon: "🛠️"
        },
        {
          text: "继续使用，直到完全不能用",
          resultKey: [
            [
              "Risky",
              7
            ],
            [
              "Casual",
              3
            ]
          ],
          icon: "💪"
        },
        {
          text: "看心情决定是否修复",
          resultKey: [
            [
              "Casual",
              7
            ],
            [
              "Lazy",
              3
            ]
          ],
          icon: "😜"
        }
      ]
    },
    {
      id: 5,
      text: "你存放钓具的地方是？",
      options: [
        {
          text: "专门的钓具收纳柜，分类摆放整齐",
          resultKey: [
            [
              "Safety",
              5
            ],
            [
              "Routine",
              5
            ]
          ],
          icon: "🗄️"
        },
        {
          text: "随意堆放在车库或角落",
          resultKey: [
            [
              "Casual",
              5
            ],
            [
              "Risky",
              5
            ]
          ],
          icon: "🗑️"
        },
        {
          text: "放在渔具包里，扔在一边",
          resultKey: [
            [
              "Casual",
              7
            ],
            [
              "Lazy",
              3
            ]
          ],
          icon: "🎒"
        }
      ]
    }
  ],
  dimensionWeights: {
    Careful: 1.45,
    Tech: 1.45,
    Lazy: 1.1,
    Routine: 1.25,
    Risky: 1,
    Safety: 1.5,
    Casual: 1
  },
  results: [
    {
      title: "装备守护神（Careful）",
      formula: "Careful >= 21",
      description: "你简直就是钓具的守护神！对装备的保养无微不至，每一个细节都不放过。在你眼中，钓具不仅仅是工具，更是并肩作战的战友。有你这样的呵护，钓具们都能超长待机，陪你征战无数钓场！",
      suggestion: "继续保持你的细心和专业，不过偶尔也可以尝试一些新的保养方法和产品，让装备得到更好的呵护。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择高品质的保养工具和产品，如专业的竿子清洁剂、渔轮保养套装等，为装备提供全方位的保护。 */"
    },
    {
      title: "技术保养大师（Tech）",
      formula: "Tech >= 16",
      description: "你是技术流的保养大师！对钓具的结构和原理了如指掌，每次保养都像是一场精密的手术。在你的操作下，钓具们不仅能恢复活力，还能提升性能。鱼群在你这专业的装备面前，根本无处可逃！",
      suggestion: "可以多参加一些钓具保养的交流活动，和其他钓友分享你的经验和技巧，同时也学习一些新的知识。",
      equip: "数据正在准备中",
      _originalEquip: "/* 配备专业的保养工具，如高精度的螺丝刀、卡尺等，让你的保养工作更加精准高效。 */"
    },
    {
      title: "随性保养达人（Casual）",
      description: "你是随性的保养达人！对装备的保养没有太多的条条框框，一切随心而为。虽然有时候看起来有些随意，但也能让装备保持基本的状态。说不定这种随性的态度，也能给你带来意想不到的好运呢！",
      formula: "Casual >= 18",
      suggestion: "可以适当增加一些保养的频率和细节，让装备的状态更加稳定。同时，也可以整理一下钓具的存放方式，让它们更加有序。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择一些简单易用的保养产品，如多功能的清洁剂、润滑剂等，方便你随时进行保养。 */"
    },
    {
      title: "规律保养者（Routine）",
      description: "你是规律的保养者！严格按照计划对装备进行保养，就像时钟一样精准。在你的规律呵护下，钓具们始终保持着良好的状态，随时准备陪你出发。有这样的装备，你还怕钓不到鱼吗？",
      formula: "Routine >= 16",
      suggestion: "可以根据不同的季节和作钓环境，调整你的保养计划，让装备更好地适应各种情况。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择一些适合长期使用的保养产品，如长效的润滑剂、防腐剂等，确保装备在长时间内都能得到保护。 */"
    },
    {
      title: "冒险保养侠（Risky）",
      description: "你是个冒险的保养侠！总是在挑战装备的极限，直到出现问题才会采取行动。虽然这种冒险精神有时候能让你节省一些时间和精力，但也可能会让你失去一些好机会。下次还是多关心一下你的装备吧！",
      formula: "Risky >= 14",
      suggestion: "在作钓前，多检查一下装备的状态，及时发现潜在的问题。同时，准备一些备用的装备，以防万一。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择一些质量可靠、抗造的钓具，降低因装备问题带来的风险。 */"
    },
    {
      title: "安全第一卫士（Safety）",
      description: "你是安全第一的卫士！对装备的安全性非常重视，总是提前做好预防措施。在你眼中，只有装备安全可靠，才能让你安心作钓。有你这样的态度，鱼群肯定会被你的严谨所折服！",
      formula: "Safety >= 16",
      suggestion: "可以学习一些急救知识，当装备出现紧急情况时，能够及时进行处理。同时，也可以和其他钓友分享你的安全经验，让大家都能享受安全的作钓时光。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择一些具有安全保障的钓具，如带有防滑设计的手柄、防腐蚀的材质等，确保你的安全。 */"
    },
    {
      title: "精细保养学者（Careful+Tech）",
      description: "你既是精细的保养学者，又是技术高超的保养大师！将细心和专业完美结合，对装备进行全方位的呵护。在你的精心照料下，钓具们就像一件件艺术品，不仅美观，而且性能卓越。鱼群在这样的装备面前，只能乖乖投降！",
      formula: "Careful >= 14 && Tech >= 14",
      suggestion: "可以尝试自己动手改造一些钓具，让它们更加符合你的需求。同时，也可以参加一些钓具制作的培训课程，提升自己的技能。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择高端、定制化的钓具，让你的装备更加独特和专业。 */"
    },
    {
      title: "随性规律玩家（Casual+Routine）",
      description: "你是随性与规律的完美结合体！既有着随性的态度，又能保持一定的规律。在保养装备时，既能享受轻松的过程，又能让装备得到适当的照顾。这种平衡的状态，让你在钓鱼界独树一帜！",
      formula: "Casual >= 12 && Routine >= 12",
      suggestion: "可以根据自己的心情和时间，灵活调整保养计划。同时，也可以尝试一些新的钓具和保养方法，让自己的作钓体验更加丰富。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择一些时尚、实用的钓具，让你的装备既能满足功能需求，又能展现你的个性。 */"
    },
    {
      title: "安全细心守护者（Safety+Careful）",
      formula: "Safety >= 14 && Careful >= 14",
      description: "你是安全与细心的守护者！对装备的安全性和细节都非常关注，总是能提前发现并解决问题。在你的守护下，钓具们就像被穿上了一层坚固的铠甲，能够抵御各种挑战。有你这样的守护者，钓鱼之旅肯定会一帆风顺！",
      suggestion: "可以分享一些安全和保养的知识给其他钓友，让大家都能提高安全意识。同时，也可以关注一些最新的安全和保养技术，让自己的装备始终保持领先水平。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择一些具有高科技含量的安全和保养产品，如智能的监测设备、自动的保养系统等，为装备提供更加全面的保护。 */"
    },
    {
      title: "综合平衡钓手（All-Rounder）",
      description: "你是一位综合平衡的钓手！在各个维度上都有不错的表现，没有明显的短板。对装备的保养有着自己的一套方法，既能保证装备的性能，又能让自己享受作钓的乐趣。继续保持这种平衡的状态，你将在钓鱼的道路上越走越远！",
      formula: "true",
      suggestion: "不断学习和尝试新的保养方法和技巧，提升自己的综合能力。同时，也可以根据不同的作钓场景和需求，灵活调整装备的保养策略。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择一些通用性强、性能稳定的钓具，满足你各种作钓需求。 */"
    }
  ],
  resultProbabilities: {
    "装备守护神（Careful）": "8.64",
    "技术保养大师（Tech）": "7.41",
    "随性保养达人（Casual）": "14.40",
    "规律保养者（Routine）": "16.87",
    "冒险保养侠（Risky）": "7.41",
    "安全第一卫士（Safety）": "3.29",
    "精细保养学者（Careful+Tech）": "3.29",
    "随性规律玩家（Casual+Routine）": "1.65",
    "安全细心守护者（Safety+Careful）": "2.47",
    "综合平衡钓手（All-Rounder）": "34.57"
  }
};
const  nierxuanze={
  id: 8,
  title: "拟饵选择策略人格分析",
  titleshort: "拟饵选择策略分析",
  type: 2,
  questions: [
    {
      id: 1,
      text: "在清澈浅水环境作钓，你会优先选择哪种拟饵？",
      options: [
        {
          text: "米诺，模仿小鱼游动吸引掠食者",
          resultKey: [
            [
              "Analyticalmind",
              7
            ],
            [
              "Optimisticcore",
              3
            ]
          ],
          icon: "🐟"
        },
        {
          text: "VIB，通过震动引起鱼的注意",
          resultKey: [
            [
              "Extremehandler",
              6
            ],
            [
              "Risktolerance",
              4
            ]
          ],
          icon: "⚡"
        },
        {
          text: "波趴，制造水面声响诱鱼",
          resultKey: [
            [
              "Weatheradapter",
              8
            ],
            [
              "Safetypriority",
              2
            ]
          ],
          icon: "💥"
        }
      ]
    },
    {
      id: 2,
      text: "当目标鱼是黑鱼时，你会用？",
      options: [
        {
          text: "雷蛙，专门针对黑鱼设计",
          resultKey: [
            [
              "Safetyplanner",
              8
            ],
            [
              "Risktolerance",
              2
            ]
          ],
          icon: "🐸"
        },
        {
          text: "复合亮片，多种元素吸引黑鱼",
          resultKey: [
            [
              "Optimisticcore",
              6
            ],
            [
              "Analyticalmind",
              4
            ]
          ],
          icon: "🌟"
        },
        {
          text: "软虫，慢动作诱使黑鱼咬饵",
          resultKey: [
            [
              "Risktolerance",
              7
            ],
            [
              "Safetypriority",
              3
            ]
          ],
          icon: "🐛"
        }
      ]
    },
    {
      id: 3,
      text: "在水草密集区域作钓，你会选？",
      options: [
        {
          text: "铅头钩配软虫，可深入水草",
          resultKey: [
            [
              "Extremehandler",
              7
            ],
            [
              "Safetyplanner",
              3
            ]
          ],
          icon: "🌱"
        },
        {
          text: "德州钓组，防挂草效果好",
          resultKey: [
            [
              "Weatheradapter",
              6
            ],
            [
              "Optimisticcore",
              4
            ]
          ],
          icon: "🛡️"
        },
        {
          text: "水面系蛙型拟饵，在水草上跳动",
          resultKey: [
            [
              "Analyticalmind",
              5
            ],
            [
              "Safetypriority",
              5
            ]
          ],
          icon: "🪷"
        }
      ]
    },
    {
      id: 4,
      text: "面对不同季节，你的拟饵选择策略是？",
      options: [
        {
          text: "根据季节变化，精准切换拟饵",
          resultKey: [
            [
              "Safetyplanner",
              6
            ],
            [
              "Extremehandler",
              4
            ]
          ],
          icon: "🍃"
        },
        {
          text: "常用几种拟饵，以不变应万变",
          resultKey: [
            [
              "Analyticalmind",
              7.5
            ],
            [
              "Weatheradapter",
              2.5
            ]
          ],
          icon: "🔁"
        },
        {
          text: "尝试新拟饵，探索不同季节的可能性",
          resultKey: [
            [
              "Safetypriority",
              8.5
            ],
            [
              "Optimisticcore",
              1.5
            ]
          ],
          icon: "🚀"
        }
      ]
    },
    {
      id: 5,
      text: "当看到别人用某种拟饵上鱼时，你会？",
      options: [
        {
          text: "马上换同款拟饵尝试",
          resultKey: [
            [
              "Analyticalmind",
              6
            ],
            [
              "Weatheradapter",
              4
            ]
          ],
          icon: "👥"
        },
        {
          text: "分析情况，考虑是否适合自己的钓点",
          resultKey: [
            [
              "Safetypriority",
              5
            ],
            [
              "Extremehandler",
              5
            ]
          ],
          icon: "🧠"
        },
        {
          text: "坚持用自己的拟饵，相信自己的判断",
          resultKey: [
            [
              "Optimisticcore",
              7
            ],
            [
              "Risktolerance",
              3
            ]
          ],
          icon: "💪"
        }
      ]
    }
  ],
  dimensionWeights: {
    Extremehandler: 1.4,
    Safetyplanner: 1.45,
    Weatheradapter: 1.55,
    Optimisticcore: 1.48,
    Analyticalmind: 1.45,
    Risktolerance: 1.55,
    Safetypriority: 1.65
  },
  results: [
    {
      title: "极端拟饵大师（Extremehandler）",
      description: "你在拟饵选择上敢于突破常规，善于利用极端手法制造诱鱼效果，让目标鱼群在你的攻势下无所遁形。",
      formula: "Extremehandler>=20",
      suggestion: "继续深入研究不同鱼类喜欢的猎物动作，建议多尝试具有冲击力的拟饵动作，同时注意其他维度的平衡。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择逼真度高、动作灵活的拟饵，如高品质的米诺和仿生软虫。搭配灵敏的钓竿和渔轮，能更好地感知鱼咬饵的瞬间。 */"
    },
    {
      title: "安全规划专家（Safetyplanner）",
      description: "你在拟饵选择上注重整体规划，力求在吸引鱼群的同时确保作钓过程的安全与稳定。",
      formula: "Safetyplanner>=18",
      suggestion: "可以多关注拟饵的设计细节，确保既能吸引目标鱼又能降低作钓风险。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择结构稳固、设计合理的拟饵，并搭配安全防护装备。 */"
    },
    {
      title: "天气应变高手（Weatheradapter）",
      description: "你对环境变化反应迅速，能根据水温、光线等条件灵活调整拟饵策略，让鱼群对你的拟饵产生浓厚兴趣。",
      formula: "Weatheradapter>=20",
      suggestion: "建议结合实时天气变化，选用颜色或动作更具适应性的拟饵。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择具备多重颜色变化功能的拟饵，搭配环境监测设备。 */"
    },
    {
      title: "乐观先锋（Optimisticcore）",
      description: "你充满活力与创意，在拟饵选择上总能提出新颖独特的方案，即便环境不佳也能乐观迎战。",
      formula: "Optimisticcore>=20",
      suggestion: "建议在创新的同时注意结合实际情况，确保拟饵效果与作钓环境匹配。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择设计独特、造型夸张的拟饵，激发鱼群的好奇心。 */"
    },
    {
      title: "理性分析师（Analyticalmind）",
      description: "你擅长通过数据与经验进行理性判断，对拟饵的选择总能做出精准分析，确保每一次作钓都有据可依。",
      formula: "Analyticalmind>=19",
      suggestion: "建议多记录作钓数据，进一步优化拟饵选择策略。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择参数可调、效果稳定的拟饵，配合数据分析系统。 */"
    },
    {
      title: "风险承受者（Risktolerance）",
      description: "你敢于挑战极限，即使面对较高风险也能镇定应对，凭借出色的风险承受能力选择最具冲击力的拟饵。",
      formula: "Risktolerance>=19",
      suggestion: "建议在冒险之余注意适时调整策略，避免过度冒险。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择高刺激性的拟饵，同时配备紧急应变装备。 */"
    },
    {
      title: "安全优先守护者（Safetypriority）",
      description: "你始终将安全放在首位，无论拟饵如何设计，都严格把控风险，确保作钓过程万无一失。",
      formula: "Safetypriority>=19",
      suggestion: "建议在确保安全的基础上，逐步尝试更多创新型拟饵，提高整体作钓体验。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择安全性极高的拟饵，并配置完善的防护措施。 */"
    },
    {
      title: "全能拟饵师",
      description: "你在各个维度上均表现出色，既能突破极限又能保证安全，是一个全面发展的拟饵选择高手。",
      formula: "true",
      suggestion: "继续保持多元化的作钓策略，不断完善自己的拟饵选择体系，迎接更多挑战。",
      equip: "数据正在准备中",
      _originalEquip: "/* 根据不同环境灵活搭配各种高端拟饵与钓具，成就全能作钓风格。 */"
    }
  ],
  resultProbabilities: {
    "极端拟饵大师（Extremehandler）": "11.11",
    "安全规划专家（Safetyplanner）": "8.23",
    "天气应变高手（Weatheradapter）": "12.35",
    "乐观先锋（Optimisticcore）": "9.47",
    "理性分析师（Analyticalmind）": "20.16",
    "风险承受者（Risktolerance）": "3.29",
    "安全优先守护者（Safetypriority）": "14.81",
    "全能拟饵师": "20.58"
  }
};
const  shejiao= {
  id: 9,
  title: "钓鱼社交人格测试",
  titleshort: "钓鱼社交人格测试",
  type: 3,
  questions: [
    {
      id: 1,
      text: "在钓鱼群里看到有人分享超厉害的钓获，你会？",
      options: [
        {
          text: "马上点赞评论，求钓点和经验分享",
          resultKey: [
            [
              "Socialengager",
              7
            ],
            [
              "Knowledgesharer",
              3
            ]
          ],
          icon: "👍"
        },
        {
          text: "默默收藏，自己研究分析",
          resultKey: [
            [
              "Prudentshow",
              6
            ],
            [
              "Knowledgesharer",
              4
            ]
          ],
          icon: "📌"
        },
        {
          text: "觉得他在炫耀，不予理会",
          resultKey: [
            [
              "Soloenjoyer",
              8
            ],
            [
              "Educator",
              2
            ]
          ],
          icon: "🙄"
        }
      ]
    },
    {
      id: 2,
      text: "群里组织集体钓鱼活动，你会？",
      options: [
        {
          text: "毫不犹豫报名，积极参与讨论准备",
          resultKey: [
            [
              "Socialengager",
              6
            ],
            [
              "Groupsynergy",
              4
            ]
          ],
          icon: "🎉"
        },
        {
          text: "考虑时间和地点再决定，若合适就参加",
          resultKey: [
            [
              "Prudentshow",
              7
            ],
            [
              "Groupsynergy",
              3
            ]
          ],
          icon: "🤔"
        },
        {
          text: "直接拒绝，更喜欢独自钓鱼",
          resultKey: [
            [
              "Soloenjoyer",
              5
            ],
            [
              "Educator",
              5
            ]
          ],
          icon: "🚫"
        }
      ]
    },
    {
      id: 3,
      text: "在钓点遇到陌生钓友，你会？",
      options: [
        {
          text: "主动打招呼，交流钓鱼心得",
          resultKey: [
            [
              "Socialengager",
              8
            ],
            [
              "Knowledgesharer",
              2
            ]
          ],
          icon: "👋"
        },
        {
          text: "点头示意，保持距离继续钓鱼",
          resultKey: [
            [
              "Groupsynergy",
              7
            ],
            [
              "Soloenjoyer",
              3
            ]
          ],
          icon: "🙂"
        },
        {
          text: "当作没看见，专心自己的钓事",
          resultKey: [
            [
              "Soloenjoyer",
              6
            ],
            [
              "Educator",
              4
            ]
          ],
          icon: "👀"
        }
      ]
    },
    {
      id: 4,
      text: "钓到一条大鱼，你会？",
      options: [
        {
          text: "马上拍照发群里，大肆炫耀",
          resultKey: [
            [
              "Natureharmony",
              7
            ],
            [
              "Socialengager",
              3
            ]
          ],
          icon: "📸"
        },
        {
          text: "拍几张美照，悄悄发朋友圈",
          resultKey: [
            [
              "Knowledgesharer",
              6
            ],
            [
              "Socialengager",
              4
            ]
          ],
          icon: "📱"
        },
        {
          text: "默默放生，不声张",
          resultKey: [
            [
              "Prudentshow",
              5
            ],
            [
              "Educator",
              5
            ]
          ],
          icon: "🐟"
        }
      ]
    },
    {
      id: 5,
      text: "群里有人分享错误的钓鱼知识，你会？",
      options: [
        {
          text: "立刻指出错误，详细讲解正确知识",
          resultKey: [
            [
              "Knowledgesharer",
              3
            ],
            [
              "Educator",
              7
            ]
          ],
          icon: "🧐"
        },
        {
          text: "委婉提醒，怕伤和气",
          resultKey: [
            [
              "Groupsynergy",
              7
            ],
            [
              "Natureharmony",
              3
            ]
          ],
          icon: "😶‍🌫️"
        },
        {
          text: "不管他，让他自己吃亏",
          resultKey: [
            [
              "Soloenjoyer",
              3
            ],
            [
              "Educator",
              7
            ]
          ],
          icon: "🙈"
        }
      ]
    }
  ],
  dimensionWeights: {
    Socialengager: 1.21,
    Knowledgesharer: 1.6,
    Soloenjoyer: 1.5,
    Groupsynergy: 1.71,
    Prudentshow: 1.45,
    Natureharmony: 1.55,
    Educator: 1.8
  },
  results: [
    {
      title: "社交达人（Social Seeker）",
      description: "你在钓鱼圈就是社交界的超级明星！不管是群里还是钓点，你总是热情满满，主动和大家交流，分享经验，求知识，求钓点，就像一块巨大的磁铁，把钓友们都吸引过来。有你在的地方，钓鱼群永远不会冷场，钓点也充满欢声笑语。",
      formula: "Socialengager >= 21",
      suggestion: "继续发挥你的社交优势，组织更多有趣的钓鱼活动，让更多钓友认识你。同时，也可以利用社交关系，拓展更多优质的钓点资源。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择颜色鲜艳、有个性的钓具，让你在钓点更加引人注目。配备一个大容量的钓具包，方便携带更多的装备和分享给其他钓友。 */"
    },
    {
      title: "知识大师（Knowledge Hunter）",
      description: "你对钓鱼知识的渴望就像海绵吸水一样，永无止境！遇到错误的知识会立刻纠正，看到别人分享好的钓获就会求经验。你脑袋里装满了各种钓鱼知识，就像一本行走的钓鱼百科全书，是钓友们眼中的知识权威。",
      formula: "(Knowledgesharer>=19 && Educator>=9)",
      suggestion: "可以把自己的知识整理成文章或者视频分享到网络上，让更多人受益。同时，不断学习新的钓鱼知识，保持知识的更新。",
      equip: "数据正在准备中",
      _originalEquip: "/* 配备专业的钓鱼书籍和电子设备，如钓鱼知识学习平板，方便你随时学习和查阅资料。 */"
    },
    {
      title: "独行侠（Soloenjoyer）",
      description: "你喜欢独自享受钓鱼的宁静，对社交活动不太感兴趣。在钓点，你就像一个孤独的剑客，专注于自己的钓事，不被外界干扰。鱼群就是你唯一的伙伴，你享受着与大自然独处的时光。",
      formula: "Soloenjoyer >= 22",
      suggestion: "虽然独自钓鱼很惬意，但偶尔也可以参加一些集体活动，结交一些志同道合的朋友，说不定会有新的收获。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择轻便、易于携带的钓具，方便你独自出行。配备一个小型的钓鱼帐篷，为你提供一个舒适的个人空间。 */"
    },
    {
      title: "低调展示者（Prudent Show）",
      description: "你钓到好鱼不会大肆张扬，但也会悄悄发个朋友圈展示一下。你就像一个神秘的钓鱼高手，不轻易显露自己的实力，但偶尔的小炫耀也能让朋友们知道你的厉害。",
      formula: "Prudentshow >= 18",
      suggestion: "可以适当多分享一些钓鱼过程中的趣事和经验，让朋友们更了解你的钓鱼生活。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择外观简约但性能卓越的钓具，体现你的低调奢华。 */"
    },
    {
      title: "团队核心（Group Synergy）",
      description: "你是钓鱼团队活动的积极参与者，只要时间和地点合适，你就会毫不犹豫地加入。在团队中，你就像一颗螺丝钉，虽然不起眼，但却起着重要的作用，为团队的和谐和成功贡献自己的力量。",
      formula: "(Groupsynergy>=18 && Socialengager>=16)",
      suggestion: "在团队活动中，发挥你的组织和协调能力，让活动更加有序和有趣。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择适合团队活动的钓具，如通用型的钓竿和渔轮，方便与队友交换使用。 */"
    },
    {
      title: "研究学者（Prudentshow）",
      description: "你就像一个钓鱼界的研究员，看到别人分享的钓获会默默收藏研究。你喜欢通过自己的分析和研究来提高钓鱼技能，不依赖别人的经验，有着自己独特的见解。",
      formula: "Prudentshow >= 16",
      suggestion: "可以把自己的研究成果分享给其他钓友，促进大家共同进步。同时，多参加一些钓鱼研讨会，与其他研究者交流心得。",
      equip: "数据正在准备中",
      _originalEquip: "/* 配备专业的钓鱼研究工具，如显微镜观察鱼饵，数据记录器记录钓鱼数据。 */"
    },
    {
      title: "全能社交型（All-Rounder）",
      description: "你的各项维度得分都比较均衡，没有明显的偏向。你是一个全能型的钓友，既能享受社交的乐趣，又能独自沉浸在钓鱼的世界里。你就像一个多面手，在不同的钓鱼场景中都能游刃有余。",
      formula: "true",
      suggestion: "根据不同的情况和心情，选择适合自己的钓鱼方式和社交方式。不断尝试新的事物，让自己的钓鱼生活更加丰富多彩。",
      equip: "数据正在准备中",
      _originalEquip: "/* 配备一套齐全的钓具，包括各种类型的钓竿、渔轮和鱼饵，适应不同的钓鱼需求。 */"
    }
  ],
  resultProbabilities: {
    "社交达人（Social Seeker）": "11.11",
    "知识大师（Knowledge Hunter）": "7.00",
    "独行侠（Soloenjoyer）": "11.11",
    "低调展示者（Prudent Show）": "9.47",
    "团队核心（Group Synergy）": "4.53",
    "研究学者（Prudentshow）": "7.00",
    "全能社交型（All-Rounder）": "49.79"
  }
};
const  tianqi={
  id: 10,
  title: "对天气的敏感度测试",
  titleshort: "对天气的敏感度",
  type: 1,
  questions: [
    {
      id: 1,
      text: "出发钓鱼前一天，天气预报显示有雨，你会？",
      options: [
        {
          text: "不管雨不雨的，照去不误，钓鱼人的字典里没有怕雨",
          resultKey: [
            [
              "Extremehandler",
              8
            ],
            [
              "Risktolerance",
              2
            ]
          ],
          icon: "🌧️"
        },
        {
          text: "先准备好雨具，再看看当天实际天气情况再决定",
          resultKey: [
            [
              "Safetyplanner",
              7
            ],
            [
              "Analyticalmind",
              3
            ]
          ],
          icon: "⛱️"
        },
        {
          text: "直接取消行程，雨天鱼肯定不好钓",
          resultKey: [
            [
              "WeatherAvoider",
              6
            ],
            [
              "Safetypriority",
              4
            ]
          ],
          icon: "🏠"
        }
      ]
    },
    {
      id: 2,
      text: "钓鱼时突然刮起大风，你会？",
      options: [
        {
          text: "迎难而上，调整抛竿技巧继续钓，大风算什么",
          resultKey: [
            [
              "Extremehandler",
              6
            ],
            [
              "Risktolerance",
              4
            ]
          ],
          icon: "💨"
        },
        {
          text: "先观察风的方向和强度，再调整钓位和钓组",
          resultKey: [
            [
              "Safetyplanner",
              5
            ],
            [
              "Analyticalmind",
              5
            ]
          ],
          icon: "🗡️"
        },
        {
          text: "赶紧收拾东西回家，这风太大没法钓了",
          resultKey: [
            [
              "WeatherAvoider",
              7
            ],
            [
              "Safetypriority",
              3
            ]
          ],
          icon: "🚪"
        }
      ]
    },
    {
      id: 3,
      text: "当气温骤降时，你觉得鱼会？",
      options: [
        {
          text: "鱼肯定更活跃了，赶紧多下几竿",
          resultKey: [
            [
              "Optimisticcore",
              8
            ],
            [
              "Risktolerance",
              2
            ]
          ],
          icon: "❄️"
        },
        {
          text: "鱼可能会游到深水区，得换个钓点试试",
          resultKey: [
            [
              "Weatheradapter",
              7
            ],
            [
              "Analyticalmind",
              3
            ]
          ],
          icon: "🧐"
        },
        {
          text: "气温降了鱼都不咬钩了，今天白来了",
          resultKey: [
            [
              "WeatherAvoider",
              6
            ],
            [
              "Safetypriority",
              4
            ]
          ],
          icon: "😢"
        }
      ]
    },
    {
      id: 4,
      text: "遇到阴天时，你会选择？",
      options: [
        {
          text: "阴天好啊，鱼更放松，加大抛竿频率",
          resultKey: [
            [
              "Optimisticcore",
              6
            ],
            [
              "Extremehandler",
              4
            ]
          ],
          icon: "☁️"
        },
        {
          text: "阴天光线暗，用颜色鲜艳的饵试试",
          resultKey: [
            [
              "Weatheradapter",
              5
            ],
            [
              "Analyticalmind",
              5
            ]
          ],
          icon: "🎨"
        },
        {
          text: "阴天鱼口不好，等晴天再来",
          resultKey: [
            [
              "Safetyplanner",
              7
            ],
            [
              "Safetypriority",
              3
            ]
          ],
          icon: "⏳"
        }
      ]
    },
    {
      id: 5,
      text: "预报说有雷阵雨，你还会去钓鱼吗？",
      options: [
        {
          text: "雷阵雨算啥，带个避雷针继续钓",
          resultKey: [
            [
              "Extremehandler",
              6
            ],
            [
              "Risktolerance",
              4
            ]
          ],
          icon: "⚡"
        },
        {
          text: "等雷阵雨过去再去，安全第一",
          resultKey: [
            [
              "Safetyplanner",
              7
            ],
            [
              "Safetypriority",
              3
            ]
          ],
          icon: "🛡️"
        },
        {
          text: "不去了，雷阵雨太危险了",
          resultKey: [
            [
              "WeatherAvoider",
              8
            ],
            [
              "Safetypriority",
              2
            ]
          ],
          icon: "👀"
        }
      ]
    }
  ],
  dimensionWeights: {
    Extremehandler: 1.5,
    Safetyplanner: 1.65,
    Weatheradapter: 1.75,
    Optimisticcore: 1.75,
    Analyticalmind: 1.75,
    Risktolerance: 1.75,
    Safetypriority: 1.9
  },
  results: [
    {
      title: "极端天气征服者（Extremehandler）",
      description: "你就是钓鱼界的天气战神！不管狂风暴雨、电闪雷鸣，都无法阻挡你奔向钓点的脚步。在你眼中，恶劣天气就是与鱼群战斗的最佳时机，你就像一位无畏的勇士，在风雨中抛竿，让鱼群闻风丧胆！",
      formula: "Extremehandler>=22",
      suggestion: "虽然你勇气可嘉，但也要注意安全哦。可以准备一些专业的防雨防风装备，让自己在恶劣天气中也能舒适钓鱼。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择坚固耐用的钓竿和渔轮，能承受恶劣天气的考验。穿上防水防风的钓鱼服，戴上防滑手套。 */"
    },
    {
      title: "安全规划大师（Safetyplanner）",
      description: "你是个精明的天气规划师，出发钓鱼前会仔细研究天气预报，做好各种应对准备。不管天气如何变化，你都能有条不紊地调整策略，就像一位运筹帷幄的将军，让鱼群乖乖上钩！",
      formula: "(Safetyplanner>=18 && Analyticalmind>= 16)",
      suggestion: "继续保持你的规划能力，同时可以多关注一些实时的天气数据，让你的计划更加精准。",
      equip: "数据正在准备中",
      _originalEquip: "/* 配备一个多功能的天气监测设备，如智能手表或气象仪。准备不同类型的拟饵，以应对不同天气下鱼的口味变化。 */"
    },
    {
      title: "天气观察者（Weatheradapter）",
      description: "你的观察力堪比鹰眼，钓鱼时能敏锐地捕捉到天气的细微变化。通过观察风的方向、云的形状，你就能判断鱼群的动向，就像一位神秘的天气巫师，让鱼群无处遁形！",
      formula: "Weatheradapter >= 13",
      suggestion: "继续发挥你的观察能力，同时可以学习一些气象知识，让你的判断更加准确。",
      equip: "数据正在准备中",
      _originalEquip: "/* 配备一个高倍望远镜，帮助你更清晰地观察天气变化。使用带有反光涂层的鱼线，在不同天气下更容易观察鱼线的动态。 */"
    },
    {
      title: "乐观主义核心（Optimisticcore）",
      description: "你对天气的乐观简直爆棚！任何天气在你眼里都是钓鱼的好时机，你的积极态度就像一把火，能点燃整个钓鱼场的热情，让大家都跟着你一起享受钓鱼的乐趣！",
      formula: "(Optimisticcore>=20 || (Optimisticcore>=18 && Risktolerance>=12))",
      suggestion: "保持这份乐观，同时可以和其他钓友分享你的快乐，让更多人爱上钓鱼。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择带有欢快色彩的钓鱼装备，如彩色的钓竿和渔轮。带上一些小零食，和钓友们一起分享。 */"
    },
    {
      title: "风险掌控者（Risktolerance）",
      description: "你在风险与收获之间找到完美平衡，不管天气如何变化，你都能迅速调整自己的钓鱼策略，让鱼群防不胜防！",
      formula: "(Risktolerance>=10 && Analyticalmind>=10)",
      suggestion: "继续提升你的适应能力，尝试在更多极端天气下钓鱼。",
      equip: "数据正在准备中",
      _originalEquip: "/* 准备多种类型的钓饵和钓具，以适应不同天气下的钓鱼需求。带上一个多功能的钓鱼工具包，方便随时调整装备。 */"
    },
    {
      title: "安全至上模范（Safetypriority）",
      description: "你把安全放在第一位，钓鱼时会根据天气情况做出最安全的选择。你的谨慎就像一道防线，能保护你在钓鱼时免受伤害，让你安心享受钓鱼的乐趣。",
      formula: "Safetypriority >= 20",
      suggestion: "继续保持安全意识，同时也可以在安全的前提下，尝试一些新的钓鱼地点和方法。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择质量可靠、符合安全标准的钓鱼装备。带上救生衣、防滑鞋等安全装备。 */"
    },
    {
      title: "综合气象钓手（All-Rounder）",
      description: "你在面对天气时表现比较均衡，没有明显的偏向。你就像一位全能选手，能在不同的天气条件下灵活应对，享受钓鱼的每一刻。",
      formula: "true",
      suggestion: "继续保持这种均衡的状态，不断学习和积累经验，提升自己的钓鱼水平。",
      equip: "数据正在准备中",
      _originalEquip: "/* 根据不同的天气情况选择合适的钓鱼装备，确保自己在各种天气下都能舒适钓鱼。 */"
    }
  ],
  resultProbabilities: {
    "极端天气征服者（Extremehandler）": "11.11",
    "安全规划大师（Safetyplanner）": "9.47",
    "天气观察者（Weatheradapter）": "7.82",
    "乐观主义核心（Optimisticcore）": "8.23",
    "风险掌控者（Risktolerance）": "4.53",
    "安全至上模范（Safetypriority）": "10.70",
    "综合气象钓手（All-Rounder）": "48.15"
  }
};
const  dongji={
  id: 11,
  title: "路亚动机深度解析：你的钓竿藏着怎样的心理密码？",
  titleshort: "路亚动机深度解析",
  type: 4,
  questions: [
    {
      id: 1,
      text: "你最初接触路亚的主要原因是？",
      options: [
        {
          text: "被自然水域的晨雾/晚霞等风景吸引，想融入其中",
          resultKey: [
            [
              "Nature",
              6
            ],
            [
              "Heal",
              4
            ]
          ],
          icon: "🌄"
        },
        {
          text: "朋友组队邀请，觉得一群人抛竿很热闹",
          resultKey: [
            [
              "Social",
              5
            ],
            [
              "Explore",
              5
            ]
          ],
          icon: "👥"
        },
        {
          text: "看钓鱼比赛视频，羡慕钓手精准控饵的高光时刻",
          resultKey: [
            [
              "Compete",
              5
            ],
            [
              "Achieve",
              5
            ]
          ],
          icon: "🏆"
        }
      ]
    },
    {
      id: 2,
      text: "作钓时最让你感到满足的瞬间是？",
      options: [
        {
          text: "鱼咬钩时竿稍传来的震颤，像与自然对话",
          resultKey: [
            [
              "Nature",
              5
            ],
            [
              "Ritual",
              5
            ]
          ],
          icon: "🎣"
        },
        {
          text: "用新研发的钓组组合钓获目标鱼，验证了自己的思路",
          resultKey: [
            [
              "Control",
              6
            ],
            [
              "Explore",
              4
            ]
          ],
          icon: "🔬"
        },
        {
          text: "朋友圈晒鱼获后收获20+点赞评论",
          resultKey: [
            [
              "Social",
              4
            ],
            [
              "Achieve",
              6
            ]
          ],
          icon: "❤️"
        }
      ]
    },
    {
      id: 3,
      text: "遇到连续3小时空军时，你的情绪是？",
      options: [
        {
          text: "刚好能静下来听风看云，享受独处时光",
          resultKey: [
            [
              "Heal",
              7
            ],
            [
              "Ritual",
              3
            ]
          ],
          icon: "🍵"
        },
        {
          text: "复盘操作细节，一定要找出问题所在",
          resultKey: [
            [
              "Control",
              6
            ],
            [
              "Compete",
              4
            ]
          ],
          icon: "📝"
        },
        {
          text: "打电话叫朋友来帮忙分析，人多思路多",
          resultKey: [
            [
              "Social",
              5
            ],
            [
              "Explore",
              5
            ]
          ],
          icon: "📞"
        }
      ]
    },
    {
      id: 4,
      text: "选择路亚装备时最看重？",
      options: [
        {
          text: "饵的仿生程度，要和自然环境中的饵鱼高度一致",
          resultKey: [
            [
              "Nature",
              8
            ],
            [
              "Ritual",
              2
            ]
          ],
          icon: "🐟"
        },
        {
          text: "装备参数（钓重/感度）能否支撑挑战更大目标鱼",
          resultKey: [
            [
              "Compete",
              7
            ],
            [
              "Control",
              3
            ]
          ],
          icon: "⚙️"
        },
        {
          text: "是否有钓友群推荐的高性价比款，避免踩雷",
          resultKey: [
            [
              "Social",
              6
            ],
            [
              "Heal",
              4
            ]
          ],
          icon: "💬"
        }
      ]
    },
    {
      id: 5,
      text: "你更倾向于哪种作钓模式？",
      options: [
        {
          text: "固定每周三清晨去老钓点，享受熟悉的节奏",
          resultKey: [
            [
              "Ritual",
              7
            ],
            [
              "Heal",
              3
            ]
          ],
          icon: "📅"
        },
        {
          text: "每月探索1个新水域，记录不同环境的鱼群规律",
          resultKey: [
            [
              "Explore",
              6
            ],
            [
              "Nature",
              4
            ]
          ],
          icon: "🗺️"
        },
        {
          text: "根据比赛日程调整作钓计划，针对性训练",
          resultKey: [
            [
              "Compete",
              7
            ],
            [
              "Achieve",
              3
            ]
          ],
          icon: "📆"
        }
      ]
    },
    {
      id: 6,
      text: "钓到稀有鱼种时，你会优先？",
      options: [
        {
          text: "快速拍照后放生，记录它在水中的优美泳姿",
          resultKey: [
            [
              "Nature",
              6
            ],
            [
              "Heal",
              4
            ]
          ],
          icon: "📸"
        },
        {
          text: "测量体长/称重，更新个人鱼获数据库",
          resultKey: [
            [
              "Control",
              6
            ],
            [
              "Achieve",
              4
            ]
          ],
          icon: "📊"
        },
        {
          text: "立刻@钓友群分享，组织下次组队挑战",
          resultKey: [
            [
              "Social",
              5
            ],
            [
              "Explore",
              5
            ]
          ],
          icon: "💬"
        }
      ]
    },
    {
      id: 7,
      text: "结束作钓后最常做的事是？",
      options: [
        {
          text: "坐在岸边整理钓线，看夕阳把水面染成金色",
          resultKey: [
            [
              "Ritual",
              7
            ],
            [
              "Nature",
              3
            ]
          ],
          icon: "🌇"
        },
        {
          text: "写钓获总结，分析拟饵/天气/水情的关联",
          resultKey: [
            [
              "Explore",
              6
            ],
            [
              "Control",
              4
            ]
          ],
          icon: "📝"
        },
        {
          text: "在钓鱼社区发Vlog，配文字'今天又被鱼上了一课'",
          resultKey: [
            [
              "Social",
              5
            ],
            [
              "Heal",
              5
            ]
          ],
          icon: "🎥"
        }
      ]
    }
  ],
  dimensionWeights: {
    Nature: 1.25,
    Compete: 1.34,
    Heal: 1.35,
    Social: 1.05,
    Explore: 1.35,
    Ritual: 1.25,
    Control: 1.15,
    Achieve: 1.78
  },
  results: [
    {
      title: "自然疗愈者（Nature+Heal）",
      description: "你像一片融入水域的落叶，路亚对你而言是与自然对话的介质。晨雾中的抛投、鱼线划开水面的轻响，都能让你卸下生活的疲惫。比起鱼获，更享受风穿过钓竿、阳光洒在钓箱上的治愈瞬间。",
      formula: "Nature>=17 && Heal>=15",
      suggestion: "尝试选择生态保护型钓点，参与水域清理公益活动，让作钓与自然保护形成正向循环。可记录每日作钓时的天气/心情，观察自然与情绪的关联。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐迷彩涂装的轻量化钓竿（如2.1米ML调），搭配仿生物饵（如鲱鱼型米诺）。钓箱选择可折叠款，减少对环境的干扰。 */"
    },
    {
      title: "竞技征服者（Compete+Achieve）",
      description: "你的钓竿是武器，水域是战场。从饵的落水角度到收线速度，每个细节都经过精确计算。钓获目标鱼时的成就感，比鱼本身更让你热血沸腾——你享受的是'征服'这个过程。",
      formula: "Compete>=18 && Achieve>=15",
      suggestion: "参加地方性路亚锦标赛，通过实战检验技术。关注国际赛事动态，学习职业钓手的'读水'技巧（如观察浪涌判断鱼群位置）。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择高感度竞技竿（如2.4米M调，碳布等级40T+），搭配磁力刹车轮（精准控制抛投距离）。必备电子秤+量鱼尺，记录每尾鱼的'战斗数据'。 */"
    },
    {
      title: "社交探险家（Social+Explore）",
      formula: "Social>=16 && Explore>=12",
      description: "你是路亚圈的'连接者'，新钓点、新饵款总在你的朋友圈最先出现。比起独自作钓，更享受和钓友讨论'哪里有结构鱼'的热闹，探索的乐趣因分享而加倍。",
      suggestion: "组建本地路亚小组，定期组织'盲钓挑战'（不查攻略探索新水域）。尝试跨界合作（如与钓鱼博主联合直播探钓），扩大社交半径。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择多场景通用竿（如2.1米L调，兼顾翘嘴/鲈鱼），搭配快拆式饵盒（方便展示新饵）。必备防水手机袋，记录探钓过程实时分享。 */"
    },
    {
      title: "仪式守护者（Ritual+Nature）",
      formula: "Ritual>=17 && Nature>=12",
      description: "你有一套专属的'路亚仪式'：固定周三清晨出发、用同一款防晒霜、收竿前必向水域说'谢谢'。这些细节不是束缚，而是你与自然建立信任的密码。",
      suggestion: "为仪式增加'自然元素'，比如根据月相调整出钓时间，或用当季野花装饰钓箱。尝试记录'仪式日记'，观察规律性行为如何影响作钓状态。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择经典款钓具（如达瓦某传承系列），避免频繁更换装备。饵盒按'常用顺序'固定摆放，收竿时用软布仔细擦拭每支拟饵。 */"
    },
    {
      title: "技术掌控者（Control+Explore）",
      formula: "Control>=16 && Explore>=13",
      description: "你像路亚界的'工程师'，总在研究'如果改变X参数，Y鱼种咬钩率会提升多少'。钓获不是终点，'搞清楚鱼为什么咬钩'才是你的终极目标。",
      suggestion: "建立个人'路亚数据库'，记录饵型/水层/气压与鱼获的关联。尝试'对比实验'（如同一钓点同时使用硬饵/软饵，记录咬钩差异）。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择可调节参数的钓组（如倒钓组+不同重量铅坠），搭配带拉力显示的渔轮。必备温度计+水质测试笔，精确掌握作钓环境数据。 */"
    },
    {
      title: "治愈社交家（Heal+Social）",
      formula: "Heal>=13 && Social>=15",
      description: "你的路亚时光像杯热奶茶——既温暖自己，也温暖他人。会特意带新手钓友体验'第一竿上鱼'，也会在钓友空军时分享'我当年更惨'的糗事。",
      suggestion: "组织'治愈路亚局'（限定不聊鱼获，只聊生活），或加入钓鱼心理互助小组。尝试用路亚活动替代常规社交（如用'一起抛竿'代替'一起吃饭'）。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择易上手的入门装备（如1.8米UL调套装），多备'友好型'饵（如缓沉VIB，降低挂底率）。钓箱里常备小零食，营造'户外茶话会'氛围。 */"
    },
    {
      title: "成就探索者（Achieve+Explore）",
      formula: "Achieve>=14 && Explore>=14",
      description: "你是路亚圈的'打卡达人'，钓获'百种鱼'清单、'十大困难钓点征服'是你的人生目标。每解锁一个新成就，就像游戏通关般雀跃——但你更享受'升级'的过程。",
      suggestion: "制定'五年路亚目标'（如3年内钓获20种本土鱼），加入'目标鱼种挑战'社群。尝试'跨界成就'（如用飞蝇钓法钓获鲈鱼，突破传统限制）。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择多调性竿包（容纳L-MH调多种竿子），饵盒按鱼种分类（鳜鱼区/翘嘴区/鳡鱼区）。必备防水笔记本，记录每种鱼的'首次相遇'细节。 */"
    },
    {
      title: "平衡融合者（Four-Dimension）",
      formula: "true",
      description: "你像一块多面棱镜，路亚在你身上折射出不同的光芒——既能享受自然的治愈，也能为竞技目标拼尽全力；既爱和钓友分享，也享受独处的仪式感。这种平衡，让你成为路亚圈的'万能搭子'。",
      suggestion: "根据心情切换作钓模式（周一陪朋友探新点，周三独自疗愈，周末参加小比赛）。尝试'主题作钓'（如'自然日'用仿生饵，'竞技日'用数据饵），探索更多可能。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择模块化钓具系统（如可换握把的钓竿、分区饵箱），一套装备满足多种需求。必备多功能钓箱（带杯架/手机支架/小冰箱），兼顾实用与舒适。 */"
    }
  ],
  resultProbabilities: {
    "自然疗愈者（Nature+Heal）": "11.66",
    "竞技征服者（Compete+Achieve）": "7.22",
    "社交探险家（Social+Explore）": "13.40",
    "仪式守护者（Ritual+Nature）": "9.14",
    "技术掌控者（Control+Explore）": "8.96",
    "治愈社交家（Heal+Social）": "4.80",
    "成就探索者（Achieve+Explore）": "6.45",
    "平衡融合者（Four-Dimension）": "38.36"
  }
};
const zhexue={
  id: 12,
  title: "路亚人生映射器 —— 你的垂钓模式如何定义生活哲学",
  titleshort: "路亚人生映射器",
  type: 4,
  questions: [
    {
      id: 1,
      text: "作钓前发现天气预报与实际天气偏差较大（如突降小雨），你会？",
      options: [
        {
          text: "立即调整钓组（换防挂饵 / 加长子线）+ 降低抛投频率",
          resultKey: [
            [
              "Adaptability",
              6
            ],
            [
              "Patience",
              4
            ]
          ],
          icon: "🔧"
        },
        {
          text: "观察雨丝角度与水面涟漪，推测鱼群可能下潜深度",
          resultKey: [
            [
              "Observation",
              7
            ],
            [
              "Empathy",
              3
            ]
          ],
          icon: "👀"
        },
        {
          text: "打开手机查近 3 年同期天气鱼获记录，对比后决定是否继续",
          resultKey: [
            [
              "Reflection",
              5
            ],
            [
              "Control",
              5
            ]
          ],
          icon: "📊"
        }
      ]
    },
    {
      id: 2,
      text: "连续 3 小时未中鱼时，你会？",
      options: [
        {
          text: "调整钓位到更隐蔽的回水湾，默念 ' 再等 1 小时就收竿 '",
          resultKey: [
            [
              "Patience",
              8
            ],
            [
              "Ritual",
              2
            ]
          ],
          icon: "🕯️"
        },
        {
          text: "拆解所有失败抛投动作，用手机录视频对比教学演示",
          resultKey: [
            [
              "Reflection",
              6
            ],
            [
              "Control",
              4
            ]
          ],
          icon: "📱"
        },
        {
          text: "把新到的水面系饵绑上，笑着说 ' 试试玄学饵说不定爆口 '",
          resultKey: [
            [
              "Openness",
              7
            ],
            [
              "Empathy",
              3
            ]
          ],
          icon: "🎨"
        }
      ]
    },
    {
      id: 3,
      text: "钓到目标鱼后，你会？",
      options: [
        {
          text: "快速拍照测量后放流，记录 ' 鱼体无伤 / 水温 22℃'",
          resultKey: [
            [
              "Empathy",
              6
            ],
            [
              "Observation",
              4
            ]
          ],
          icon: "📸"
        },
        {
          text: "用软尺精确测量体长，对比记录册确认是否破个人纪录",
          resultKey: [
            [
              "Control",
              7
            ],
            [
              "Reflection",
              3
            ]
          ],
          icon: "📏"
        },
        {
          text: "坐在岸边看鱼游走，想 ' 它今天应该能给鱼宝宝带顿大餐了 '",
          resultKey: [
            [
              "Empathy",
              5
            ],
            [
              "Patience",
              5
            ]
          ],
          icon: "🐟"
        }
      ]
    },
    {
      id: 4,
      text: "朋友邀请你尝试从未接触过的溪流微物钓，你会？",
      options: [
        {
          text: "先查溪流鱼习性 + 微物竿参数，列好装备清单再出发",
          resultKey: [
            [
              "Reflection",
              6
            ],
            [
              "Control",
              4
            ]
          ],
          icon: "📋"
        },
        {
          text: "带着现有装备就去，说 ' 反正钓鱼不就是和自然玩游戏嘛 '",
          resultKey: [
            [
              "Openness",
              8
            ],
            [
              "Adaptability",
              2
            ]
          ],
          icon: "🚶"
        },
        {
          text: "提前联系当地钓友请教标点，强调 ' 要尊重水域的脾气 '",
          resultKey: [
            [
              "Observation",
              5
            ],
            [
              "Empathy",
              5
            ]
          ],
          icon: "📞"
        }
      ]
    },
    {
      id: 5,
      text: "遇到其他钓手在你常去的标点爆护，你会？",
      options: [
        {
          text: "第二天更早到现场，用同款饵复刻钓法",
          resultKey: [
            [
              "Control",
              7
            ],
            [
              "Patience",
              3
            ]
          ],
          icon: "⏰"
        },
        {
          text: "观察他的抛投节奏 + 饵落水点，总结 ' 原来深浅交界处才是关键 '",
          resultKey: [
            [
              "Observation",
              6
            ],
            [
              "Reflection",
              4
            ]
          ],
          icon: "🔍"
        },
        {
          text: "过去请教经验，说 ' 能分享是缘分，鱼群又不是我家的 '",
          resultKey: [
            [
              "Openness",
              5
            ],
            [
              "Empathy",
              5
            ]
          ],
          icon: "🤝"
        }
      ]
    },
    {
      id: 6,
      text: "整理钓箱时发现某款老饵钩尖钝化，你会？",
      options: [
        {
          text: "立即更换新钩，调整饵重平衡后测试抛投距离",
          resultKey: [
            [
              "Control",
              6
            ],
            [
              "Adaptability",
              4
            ]
          ],
          icon: "🔄"
        },
        {
          text: "用它钓岸边障碍区，心想 ' 老伙计说不定能创造新纪录 '",
          resultKey: [
            [
              "Openness",
              7
            ],
            [
              "Ritual",
              3
            ]
          ],
          icon: "🎣"
        },
        {
          text: "把它收进纪念盒，写标签 '2021 年首条鲈鱼就是用你钓的 '",
          resultKey: [
            [
              "Ritual",
              8
            ],
            [
              "Empathy",
              2
            ]
          ],
          icon: "🎁"
        }
      ]
    },
    {
      id: 7,
      text: "结束一天作钓时，你最后会做？",
      options: [
        {
          text: "检查所有装备损耗，列保养清单 + 下一次采购计划",
          resultKey: [
            [
              "Reflection",
              7
            ],
            [
              "Control",
              3
            ]
          ],
          icon: "✍️"
        },
        {
          text: "坐在钓位看夕阳，想 ' 今天没鱼也挺好，风里有芦苇的味道 '",
          resultKey: [
            [
              "Patience",
              6
            ],
            [
              "Empathy",
              4
            ]
          ],
          icon: "🌇"
        },
        {
          text: "给新手钓友发消息：' 明天来我常去的标点，我带你 '",
          resultKey: [
            [
              "Openness",
              5
            ],
            [
              "Adaptability",
              5
            ]
          ],
          icon: "💌"
        }
      ]
    }
  ],
  dimensionWeights: {
    Patience: 1.7,
    Adaptability: 1.7,
    Observation: 1.9,
    Reflection: 1.05,
    Empathy: 1.25,
    Ritual: 1.9,
    Openness: 1.6,
    Control: 1.35
  },
  results: [
    {
      title: "静水流深者（Patience+Empathy）",
      description: "你像深潭中的静水，将等待化作温柔的力量。钓鱼时不急不躁，能理解鱼群的 ' 犹豫 '，也会为放流的鱼设想未来。这种耐心与共情映射到生活，你是朋友眼中最可靠的倾听者，擅长在快节奏中保持内心的从容。",
      formula: "Patience>=20 && Empathy>=18",
      suggestion: "继续用 ' 钓鱼式等待 ' 应对生活挑战 —— 不催促结果，但认真经营过程。尝试将对自然的共情延伸到人际关系，你会发现更多温暖的联结。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐慢调竿（如 L 调直柄竿）+ 软质握把，配合仿生饵（如 T 尾鱼），让你在长时间作钓中保持舒适，也更贴近鱼群的自然觅食节奏。 */"
    },
    {
      title: "环境解读者（Observation+Adaptability）",
      description: "你是移动的生态雷达，能从水面涟漪读到鱼群动向，从风向变化调整策略。这种敏锐的观察力与灵活的适应力，让你在生活中总能快速找到 ' 最优解 '，像一块能屈能伸的海绵，在变化中茁壮成长。",
      formula: "Observation>=19 && Adaptability>=12",
      suggestion: "发挥你的环境解读天赋，尝试参与需要快速反应的团队项目。钓鱼时可多挑战复杂水域（如乱石滩 / 草区），进一步锤炼 ' 读水 ' 能力。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择高感度竿（如 ML 调枪柄竿）+ 透明鱼线，搭配反应饵（如 VIB），帮你更清晰感知水下结构变化，强化观察 - 调整的神经链路。 */"
    },
    {
      title: "数据建筑师（Reflection+Control）",
      description: "你用理性搭建钓鱼的 ' 数据城堡 '，每一次抛投都有记录，每一次失败都能拆解复盘。这种对确定性的追求映射到生活，你是规则的制定者与执行者，擅长用系统思维解决问题，是团队里的 ' 定盘星 '。",
      formula: "Reflection>=19 && Control>=20",
      suggestion: "注意在追求精准时保留弹性 —— 就像钓鱼时再完美的计划也可能被突降的雨改变。生活中偶尔 ' 失控 '，或许能发现更精彩的可能。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择参数明确的专业装备（如标注 '20Lb 碳线适配 ' 的水滴轮）+ 带数据记录功能的智能渔获尺，帮你更系统地积累钓鱼数据库。 */"
    },
    {
      title: "自然对话者（Empathy+Observation）",
      description: "你与自然有着隐秘的默契，能 ' 听懂 ' 水流的语言，' 看懂 ' 鱼群的情绪。这种深度的联结让你在生活中充满灵性，擅长从细微处发现美好，是朋友眼中 ' 最有生活感 ' 的人。",
      formula: "Empathy>=20 && Observation>=20",
      suggestion: "多尝试自然主题的创作（如写钓鱼日记 / 拍水域纪录片），将你的观察与共情传递给更多人。钓鱼时可使用更贴近自然的拟饵（如木虾饵），强化与环境的共鸣。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐轻质碳素竿（如 UL 调直柄竿）+ 天然配色饵（如橄榄绿软虫），减少对环境的 ' 入侵感 '，让你更融入自然对话。 */"
    },
    {
      title: "探索拓荒者（Openness+Adaptability）",
      description: "你是钓鱼界的 ' 哥伦布 '，永远对新钓法、新标点充满好奇。这种开放的心态映射到生活，你是创新的推动者，不怕试错，总能在未知中找到惊喜，像一团跳动的火焰，点燃周围人的热情。",
      formula: "Openness>=20 && Adaptability>=18",
      suggestion: "保持你的探索精神，但可增加 ' 深度探索 '—— 比如选定一种稀有鱼种，系统研究其习性。生活中可尝试 ' 主题式探索 '（如某国美食 / 某类艺术），让热情更有方向。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择多功能竿（如中通竿）+ 多类型饵盒（包含水面系 / 悬浮系 / 沉底系），满足你 ' 什么都想试试 ' 的探索欲，同时保持装备的灵活性。 */"
    },
    {
      title: "仪式守护者（Ritual+Patience）",
      description: "你为钓鱼注入神圣的仪式感 —— 整理钓箱的顺序、抛投前的深呼吸、收竿时的致谢。这种对过程的珍视映射到生活，你是传统的传承者，擅长用 ' 小仪式 ' 为平凡日子镀上金边，让每个当下都值得铭记。",
      formula: "Ritual>=15 && Patience>=15",
      suggestion: "尝试为生活中的重要时刻设计专属仪式（如每周家庭钓鱼日 / 生日放流纪念），让仪式感成为连接情感的纽带。钓鱼时可保留一件 ' 幸运物 '（如旧钥匙扣），强化仪式的心理暗示。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择有年代感的经典装备（如复古涂装的纺车轮）+ 刻有个人标记的饵盒，这些 ' 有故事 ' 的工具能帮你更好地守护属于自己的钓鱼仪式。 */"
    },
    {
      title: "矛盾融合者（Control+Openness）",
      description: "你是理性与感性的完美融合体 —— 既追求数据的确定性，又保持对新事物的开放。这种矛盾的统一让你在钓鱼时既能复刻经典钓法，也能创造新纪录，生活中则是 ' 规则破坏者 ' 与' 秩序维护者 ' 的结合体，总能带来惊喜。",
      formula: "Control>=18 && Openness>=18",
      suggestion: "将 ' 矛盾融合 ' 的智慧应用于创新项目 —— 用系统思维搭建框架，用开放心态填充内容。钓鱼时可尝试 ' 传统饵 + 新钓法 '（如用米诺玩飞铅钓），在规则与突破中找到新乐趣。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择可自定义参数的智能装备（如可调节卸力值的电子水滴轮）+ 经典款与创新款混合饵包，满足你既追求精准又渴望创新的双重需求。 */"
    },
    {
      title: "平衡艺术师（Four-Dimension均衡者）",
      description: "你像精密的天平，在耐心与开放、观察与掌控间找到完美平衡。这种综合能力让你在钓鱼时既能坚守又能变通，生活中更是多面手 —— 既能制定计划，也能享受意外之喜，是典型的 ' 六边形战士 '。",
      formula: "true",
      suggestion: "挑战高难度钓法（如飞蝇钓 / 冰钓），在复杂场景中进一步锤炼综合能力。生活中可尝试跨领域学习（如钓鱼 + 摄影 / 钓鱼 + 生态学），让你的平衡感绽放更多可能。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐全水域套装（包含 1.8-2.4 米不同调性竿 + 通用型渔轮）+ 模块化钓箱（可灵活组合饵盒 / 工具区），满足你应对各种钓鱼场景的综合需求。 */"
    }
  ],
  resultProbabilities: {
    "静水流深者（Patience+Empathy）": "7.45",
    "环境解读者（Observation+Adaptability）": "7.13",
    "数据建筑师（Reflection+Control）": "7.27",
    "自然对话者（Empathy+Observation）": "7.04",
    "探索拓荒者（Openness+Adaptability）": "7.77",
    "仪式守护者（Ritual+Patience）": "10.15",
    "矛盾融合者（Control+Openness）": "9.83",
    "平衡艺术师（Four-Dimension均衡者）": "43.35"
  }
};
const airForce= {
  id: 13,
  title: "空军态度精密分析——解码你的路亚价值坐标",
  titleshort: "空军态度精密分析",
  type: 4,
  questions: [
    {
      id: 1,
      text: "作钓前设定目标时，你更倾向？",
      options: [
        {
          text: "明确目标鱼种/数量（如'今天必须钓到3条翘嘴'）",
          resultKey: [
            [
              "Resultoriented",
              8
            ],
            [
              "Techexploration",
              2
            ]
          ],
          icon: "🎯"
        },
        {
          text: "希望有鱼咬钩就行（'哪怕小奶鲈也行'）",
          resultKey: [
            [
              "Processenjoy",
              7
            ],
            [
              "Natureconnection",
              3
            ]
          ],
          icon: "🌿"
        },
        {
          text: "无所谓，去户外透气就行（'空军也当郊游'）",
          resultKey: [
            [
              "Socialrelax",
              6
            ],
            [
              "Selfacceptance",
              4
            ]
          ],
          icon: "👥"
        }
      ]
    },
    {
      id: 2,
      text: "连续3小时无口时，你的第一反应是？",
      options: [
        {
          text: "立刻换饵/调整钓组（'肯定是饵不对'）",
          resultKey: [
            [
              "Techexploration",
              7
            ],
            [
              "Resultoriented",
              3
            ]
          ],
          icon: "🔧"
        },
        {
          text: "蹲下来观察水纹/昆虫（'可能鱼在更深层'）",
          resultKey: [
            [
              "Natureconnection",
              6.5
            ],
            [
              "Growthlearning",
              3.5
            ]
          ],
          icon: "🔍"
        },
        {
          text: "拍张天空照发朋友圈（'空军但云很好看'）",
          resultKey: [
            [
              "Processenjoy",
              6
            ],
            [
              "Socialrelax",
              4
            ]
          ],
          icon: "📸"
        }
      ]
    },
    {
      id: 3,
      text: "如何向朋友描述一次空军经历？",
      options: [
        {
          text: "详细复盘（'可能是气压低+我的抽竿频率太快'）",
          resultKey: [
            [
              "Growthlearning",
              7
            ],
            [
              "Techexploration",
              3
            ]
          ],
          icon: "📝"
        },
        {
          text: "重点讲沿途趣事（'虽然没鱼，但遇到只水獭'）",
          resultKey: [
            [
              "Processenjoy",
              6.5
            ],
            [
              "Natureconnection",
              3.5
            ]
          ],
          icon: "🦦"
        },
        {
          text: "自嘲'又给鱼交保护费了'（配哭笑脸表情包）",
          resultKey: [
            [
              "Selfacceptance",
              7
            ],
            [
              "Socialrelax",
              3
            ]
          ],
          icon: "😂"
        }
      ]
    },
    {
      id: 4,
      text: "你认为'空军'最主要的原因是？",
      options: [
        {
          text: "自身技术不足（'我抛投落点太集中'）",
          resultKey: [
            [
              "Techexploration",
              7
            ],
            [
              "Resultoriented",
              3
            ]
          ],
          icon: "🎣"
        },
        {
          text: "客观因素（'今天水温突变/鱼群迁徙'）",
          resultKey: [
            [
              "Natureconnection",
              6
            ],
            [
              "Mentalresilience",
              4
            ]
          ],
          icon: "🌡️"
        },
        {
          text: "不重要（'本来就为放松，有没有鱼都行'）",
          resultKey: [
            [
              "Processenjoy",
              7
            ],
            [
              "Selfacceptance",
              3
            ]
          ],
          icon: "🧘"
        }
      ]
    },
    {
      id: 5,
      text: "作钓结束后，即使空军也会做的事？",
      options: [
        {
          text: "拆解钓组写总结（'下次试试铅头钩+卷尾蛆'）",
          resultKey: [
            [
              "Growthlearning",
              8
            ],
            [
              "Techexploration",
              2
            ]
          ],
          icon: "🔬"
        },
        {
          text: "整理钓点环境照片（'这棵老柳树下很适合下次'）",
          resultKey: [
            [
              "Natureconnection",
              7
            ],
            [
              "Processenjoy",
              3
            ]
          ],
          icon: "🌳"
        },
        {
          text: "约钓友喝奶茶吐槽（'今天我们集体空军'）",
          resultKey: [
            [
              "Socialrelax",
              5
            ],
            [
              "Selfacceptance",
              5
            ]
          ],
          icon: "🍵"
        }
      ]
    },
    {
      id: 6,
      text: "遇到钓友炫耀鱼获时，你的感受是？",
      options: [
        {
          text: "激励自己（'我得研究他用的什么饵'）",
          resultKey: [
            [
              "Resultoriented",
              6
            ],
            [
              "Techexploration",
              4
            ]
          ],
          icon: "💪"
        },
        {
          text: "为他高兴（'他能钓到说明这钓点有鱼'）",
          resultKey: [
            [
              "Mentalresilience",
              9
            ],
            [
              "Natureconnection",
              1
            ]
          ],
          icon: "🎉"
        },
        {
          text: "觉得没必要比较（'钓鱼又不是比赛'）",
          resultKey: [
            [
              "Selfacceptance",
              6.5
            ],
            [
              "Socialrelax",
              3.5
            ]
          ],
          icon: "🙅"
        }
      ]
    },
    {
      id: 7,
      text: "若上次空军，计划下次作钓时会？",
      options: [
        {
          text: "针对性改进（'买新饵+研究钓点结构'）",
          resultKey: [
            [
              "Techexploration",
              7
            ],
            [
              "Growthlearning",
              3
            ]
          ],
          icon: "📚"
        },
        {
          text: "换个风景更好的钓点（'上次的山景很美'）",
          resultKey: [
            [
              "Natureconnection",
              6
            ],
            [
              "Processenjoy",
              4
            ]
          ],
          icon: "🏞️"
        },
        {
          text: "约朋友一起去（'有人聊天空军也不无聊'）",
          resultKey: [
            [
              "Socialrelax",
              5
            ],
            [
              "Selfacceptance",
              5
            ]
          ],
          icon: "👯"
        }
      ]
    }
  ],
  dimensionWeights: {
    Resultoriented: 1.4,
    Processenjoy: 1.3,
    Growthlearning: 1.25,
    Mentalresilience: 1.7,
    Natureconnection: 1.35,
    Socialrelax: 1.15,
    Selfacceptance: 1.7,
    Techexploration: 1.35
  },
  results: [
    {
      title: "结果至上者（Resultoriented+Techexploration）",
      description: "你将钓鱼视为一场需要'胜利'的挑战，空军会被你解读为'技术待突破'的信号。对鱼获的追求驱动你不断研究钓法、拟饵，手机里存满了'XX钓点攻略'。虽然偶尔会因空军焦虑，但这种'目标感'也让你快速成长为技术流高手。",
      formula: "Resultoriented>=18 && Techexploration>=12",
      suggestion: "尝试给自己设置'过程目标'（如'今天学会3种抽竿手法'），降低对鱼获的绝对依赖。偶尔允许自己'为玩而钓'，能更享受路亚的本质乐趣。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐高精度微调钓竿（如MH调快调竿）+ 多速比渔轮（5.2:1-7.1:1），满足你对'精准控制'的需求。搭配不同克重的铅头钩（5g-14g），方便你实验不同水层。 */"
    },
    {
      title: "过程治愈者（Processenjoy+Natureconnection）",
      description: "你像行走的'路亚体验官'，钓箱里除了饵盒还有便携茶具——对你们来说，抛竿时的风声、水面的涟漪、甚至被晒红的胳膊，都是比鱼获更珍贵的'收获'。空军？不过是自然给的'慢游许可'。",
      formula: "Processenjoy>=20 && Natureconnection>=16",
      suggestion: "尝试用'自然笔记'记录每次作钓（如'9:00水鸟群飞→可能鱼群下潜'），将感性体验转化为理性认知，未来既能享受过程，也能提高鱼获概率。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择轻量化钓组（UL调软竿+2000型渔轮），降低体力消耗。搭配仿生饵（如雷蛙、米诺），既符合自然规律，又能增加与环境的互动感。 */"
    },
    {
      title: "社交松弛派（Socialrelax+Selfacceptance）",
      description: "你是路亚圈的'氛围担当'，钓点对你们来说更像'户外会客厅'——拟饵盒里藏着零食，鱼护永远比别人小（因为装不下大家分享的午餐）。空军时的集体吐槽，比鱼获更让你满足。",
      formula: "Socialrelax>=17 && Selfacceptance>=16",
      suggestion: "可以组织'无鱼获竞赛'（如'谁拍的钓点照最有故事感'），将社交属性与路亚结合，让每次作钓都成为朋友间的独特记忆。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择性价比高的入门级钓具（如200-500元套装），避免装备压力影响社交体验。必备便携折叠椅+保温箱（装零食和冰饮），打造'移动社交据点'。 */"
    },
    {
      title: "成长型钓手（Growthlearning+Techexploration）",
      description: "你像路亚界的'科研工作者'，每次空军都被你转化为'实验数据'。手机备忘录里记着'气压995hpa+西南风=青梢不开口'，钓箱里的饵按'失败记录'分区存放——在你眼中，空军不是终点，是'升级前的经验条'。",
      formula: "Growthlearning>=16 && Techexploration>=14",
      suggestion: "建立'空军档案库'（时间、钓点、天气、使用饵/钓组），定期用表格分析规律。参加线下路亚讲座，将个人经验与系统知识结合，避免'闭门实验'。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐可替换导环的模块化钓竿（如1节竿体+3种导环），方便实验不同抛投效果。搭配带数据记录功能的智能渔轮（记录抛投距离、收线速度），为你的'科研'提供精准数据。 */"
    },
    {
      title: "自然感知者（Natureconnection+Mentalresilience）",
      description: "你对自然的敏感度堪比'活体气象仪'，能从水温变化判断鱼层，从昆虫活动推测鱼口。空军时你会说：'今天鱼群在休息，我们也该尊重它们'——这种与自然同频的心态，让你在路亚圈显得从容又特别。",
      formula: "Natureconnection>=18 && Mentalresilience>=15",
      suggestion: "学习基础鱼类行为学（如'翘嘴在水温20-25℃活性最高'），将直觉观察转化为系统认知。尝试夜钓/雨钓等特殊时段，深化对自然规律的理解。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择防紫外线涂装的钓竿（减少对鱼群的视觉干扰）+ 透明鱼线（降低警惕性）。必备温度计+水流速测量仪（如手持流速计），辅助你更精准感知环境。 */"
    },
    {
      title: "情绪稳定者（Mentalresilience+Selfacceptance）",
      description: "你是路亚圈的'情绪锚点'，即使连续空军也能笑着说：'至少没晒脱皮'。对你们来说，钓鱼是'与自己相处的时光'——抛竿的节奏、收线的手感，本身就是治愈的过程。",
      formula: "Mentalresilience>=15 && Selfacceptance>=12",
      suggestion: "尝试正念作钓（专注感受'竿稍的震动''风的方向'），将'无鱼'转化为'深度觉察'的机会。偶尔挑战高难度钓法（如飞蝇钓），用'新体验'保持对路亚的热情。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择握把带防滑硅胶的钓竿（增加握感舒适）+ 纺车轮（操作简单减少挫败感）。必备偏光镜（保护眼睛）+ 防晒袖（降低身体不适），让作钓全程保持舒适状态。 */"
    },
    {
      title: "技术偏执狂（Techexploration+Resultoriented）",
      description: "你对技术的追求近乎'苛刻'，钓箱里的饵按'克重/泳姿/颜色'精确分类，手机里存着'20种拟饵应对不同鱼情'的文档。偶尔会因过度关注技术，忽略路亚最本真的快乐——比如晒暖的阳光，或朋友的笑声。",
      formula: "Techexploration>=17 && Resultoriented>=13",
      suggestion: "每周设定1次'无目的作钓'（不带攻略，随机选饵），让技术回归'工具'本质。加入路亚兴趣社群，通过分享技术获得成就感，而非仅通过鱼获。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择专业级钓竿（如日本进口碳布）+ 陶瓷导环渔轮（减少摩擦），满足你对'极致性能'的需求。但建议保留1套'入门老装备'，提醒自己'钓鱼的快乐不在装备'。 */"
    },
    {
      title: "综合平衡者（多维度均衡）",
      description: "你是路亚圈的'六边形选手'——既懂技术又享受过程，既重视社交也接纳不完美。空军对你来说像'调味剂'：这次分析技术，下次记录风景，再下次和朋友吐槽，永远能找到积极视角。",
      formula: "true",
      suggestion: "尝试'主题作钓'（如'本周专注技术改进，下周专注自然观察'），在平衡中找到自己的独特风格。参加跨圈活动（如路亚+摄影），拓展路亚的边界。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐全能型钓竿（ML调中快调）+ 泛用渔轮（6.3:1速比），兼顾不同钓法需求。配备多功能钓箱（带饵盒+杯架+小桌板），满足技术、社交、舒适等多重需求。 */"
    }
  ],
  resultProbabilities: {
    "结果至上者（Resultoriented+Techexploration）": "11.39",
    "过程治愈者（Processenjoy+Natureconnection）": "14.72",
    "社交松弛派（Socialrelax+Selfacceptance）": "11.48",
    "成长型钓手（Growthlearning+Techexploration）": "9.47",
    "自然感知者（Natureconnection+Mentalresilience）": "8.28",
    "情绪稳定者（Mentalresilience+Selfacceptance）": "8.82",
    "技术偏执狂（Techexploration+Resultoriented）": "3.75",
    "综合平衡者（多维度均衡）": "32.10"
  }
};
const personality= {
  id: 14,
  title: "钓获期待与情绪管理精密测评",
  titleshort: "期待与情绪管理测评",
  type: 3,
  description: "本测试通过垂钓场景中的行为选择，分析你对钓获的期待管理能力与情绪调节模式。请根据真实反应选择，结果将揭示你的钓鱼情绪特质。",
  questions: [
    {
      id: 1,
      text: "设定当日目标时，你会？",
      options: [
        {
          text: "明确记录 ' 至少 3 尾目标鱼 ' 并标注大小",
          resultKey: [
            [
              "Goalclarity",
              7
            ],
            [
              "Resultorientation",
              3
            ]
          ],
          icon: "📝"
        },
        {
          text: "大致想 ' 能遇到就好 ' 但更期待惊喜",
          resultKey: [
            [
              "Environmentaladaptability",
              6
            ],
            [
              "Patiencethreshold",
              4
            ]
          ],
          icon: "✨"
        },
        {
          text: "完全没目标，享受抛投过程就满足",
          resultKey: [
            [
              "Selfregulation",
              8
            ],
            [
              "Emotionalstability",
              2
            ]
          ],
          icon: "🎣"
        }
      ]
    },
    {
      id: 2,
      text: "连续 1 小时无鱼咬钩时，你的第一反应是？",
      options: [
        {
          text: "立刻换钓点 + 换饵，动作加快 20%",
          resultKey: [
            [
              "Strategyflexibility",
              6
            ],
            [
              "Frustrationtolerance",
              4
            ]
          ],
          icon: "⚡"
        },
        {
          text: "静坐观察水面 5 分钟，复盘抛投轨迹",
          resultKey: [
            [
              "Patiencethreshold",
              7
            ],
            [
              "Environmentaladaptability",
              3
            ]
          ],
          icon: "🔍"
        },
        {
          text: "掏出零食喝水，哼歌调整呼吸节奏",
          resultKey: [
            [
              "Emotionalstability",
              8
            ],
            [
              "Selfregulation",
              2
            ]
          ],
          icon: "🧃"
        }
      ]
    },
    {
      id: 3,
      text: "当钓到远超预期的大鱼时，你的表现是？",
      options: [
        {
          text: "兴奋到手抖，急于展示给周围钓友",
          resultKey: [
            [
              "Resultorientation",
              6
            ],
            [
              "Goalclarity",
              4
            ]
          ],
          icon: "🎉"
        },
        {
          text: "冷静控鱼，确认安全后才露出笑容",
          resultKey: [
            [
              "Emotionalstability",
              7
            ],
            [
              "Frustrationtolerance",
              3
            ]
          ],
          icon: "😌"
        },
        {
          text: "拍张照就放生，继续专注作钓",
          resultKey: [
            [
              "Environmentaladaptability",
              8
            ],
            [
              "Selfregulation",
              2
            ]
          ],
          icon: "🌿"
        }
      ]
    },
    {
      id: 4,
      text: "遇到钓友炫耀刚钓的大鱼，你会？",
      options: [
        {
          text: "立刻检查自己装备，考虑升级",
          resultKey: [
            [
              "Strategyflexibility",
              7
            ],
            [
              "Resultorientation",
              3
            ]
          ],
          icon: "🔧"
        },
        {
          text: "礼貌夸赞，继续按自己节奏作钓",
          resultKey: [
            [
              "Patiencethreshold",
              6
            ],
            [
              "Emotionalstability",
              4
            ]
          ],
          icon: "🙂"
        },
        {
          text: "分享自己上次钓大鱼的故事活跃气氛",
          resultKey: [
            [
              "Selfregulation",
              8
            ],
            [
              "Environmentaladaptability",
              2
            ]
          ],
          icon: "💬"
        }
      ]
    },
    {
      id: 5,
      text: "收竿时空军（未钓到鱼），你的总结重点是？",
      options: [
        {
          text: "详细记录水温 / 气压 / 作钓时间数据",
          resultKey: [
            [
              "Goalclarity",
              7
            ],
            [
              "Strategyflexibility",
              3
            ]
          ],
          icon: "📊"
        },
        {
          text: "回想哪个标点可能漏了鱼群",
          resultKey: [
            [
              "Environmentaladaptability",
              6
            ],
            [
              "Patiencethreshold",
              4
            ]
          ],
          icon: "🗺️"
        },
        {
          text: "觉得今天风大本来就难钓，明天再来",
          resultKey: [
            [
              "Emotionalstability",
              8
            ],
            [
              "Selfregulation",
              2
            ]
          ],
          icon: "🌤️"
        }
      ]
    },
    {
      id: 6,
      text: "朋友临时约你去新钓点，你会？",
      options: [
        {
          text: "坚持完成原计划，拒绝临时变动",
          resultKey: [
            [
              "Goalclarity",
              6
            ],
            [
              "Frustrationtolerance",
              4
            ]
          ],
          icon: "🚫"
        },
        {
          text: "带齐备用装备，边去边查新钓点信息",
          resultKey: [
            [
              "Strategyflexibility",
              7
            ],
            [
              "Environmentaladaptability",
              3
            ]
          ],
          icon: "📱"
        },
        {
          text: "立刻出发，觉得换环境更有趣",
          resultKey: [
            [
              "Selfregulation",
              8
            ],
            [
              "Emotionalstability",
              2
            ]
          ],
          icon: "🚗"
        }
      ]
    },
    {
      id: 7,
      text: "作钓时手机收到紧急工作消息，你会？",
      options: [
        {
          text: "立刻处理，中断作钓 10 分钟以上",
          resultKey: [
            [
              "Resultorientation",
              6
            ],
            [
              "Goalclarity",
              4
            ]
          ],
          icon: "📱"
        },
        {
          text: "快速回复后，用 5 分钟调整呼吸再下竿",
          resultKey: [
            [
              "Emotionalstability",
              7
            ],
            [
              "Selfregulation",
              3
            ]
          ],
          icon: "⏳"
        },
        {
          text: "设置勿扰模式，专注作钓结束再处理",
          resultKey: [
            [
              "Patiencethreshold",
              8
            ],
            [
              "Frustrationtolerance",
              2
            ]
          ],
          icon: "🔇"
        }
      ]
    }
  ],
  dimensionWeights: {
    Goalclarity: 1.4,
    Resultorientation: 1.3,
    Patiencethreshold: 1.3,
    Environmentaladaptability: 1.2,
    Emotionalstability: 1.49,
    Selfregulation: 1.15,
    Strategyflexibility: 1.7,
    Frustrationtolerance: 1.75
  },
  results: [
    {
      title: "磐石型钓者（Patiencethreshold+Emotionalstability）",
      description: "你像岸边的磐石般沉稳，面对长时间无鱼咬钩也能保持节奏。情绪波动幅度小，更享受与自然共处的过程而非结果。即使空军也能从环境观察中获得满足，是典型的 ' 过程派 ' 钓者。",
      formula: "Patiencethreshold>=20 && Emotionalstability>=18",
      suggestion: "保持你的沉稳特质，可尝试记录每日环境观察笔记，未来结合数据能更精准定位鱼群。注意适当增加策略调整，避免因过度坚持错过窗口期。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐高感度软调竿（如 L 调直柄竿），配合缓降型拟饵（如沉水铅笔），帮助你更细腻感知水下变化，保持作钓节奏。 */"
    },
    {
      title: "数据精算师（Goalclarity+Resultorientation）",
      description: "你是典型的 ' 结果驱动型 ' 钓者，每一次作钓都像执行精密任务。从目标设定到收竿总结，始终用数据思维分析。对钓获有明确期待，享受通过策略优化达成目标的成就感。",
      formula: "Goalclarity>=18 && Resultorientation>=15",
      suggestion: "你的数据思维是优势，但需注意灵活调整 —— 鱼群行为可能偏离历史数据。可增加 10% 的 ' 随机实验 ' 时间，探索新钓法保持敏感度。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择带线杯计数器的智能轮（如 Shimano Ci4+），配合防水记录板，实时记录抛投次数 / 水深等数据，满足你的精算需求。 */"
    },
    {
      title: "环境感知者（Environmentaladaptability+Selfregulation）",
      description: "你像水中的鱼般敏锐，能快速感知环境变化并调整策略。面对临时变动（如新钓点邀约）不仅不焦虑，反而激发探索欲。作钓时更关注 ' 与环境互动 '，是天生的 ' 场景适应者 '。",
      formula: "Environmentaladaptability>=16 && Selfregulation>=13",
      suggestion: "你的适应力让你在陌生水域占优，但需建立基础判断框架（如基础鱼群习性），避免因过度灵活失去主线。可参加不同水域的体验钓积累经验。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐多节便携竿（如 Daiwa Steez Aird），搭配模块化饵盒，方便快速切换钓组，契合你随时调整的需求。 */"
    },
    {
      title: "策略急先锋（Strategyflexibility+Frustrationtolerance）",
      description: "你是钓场的 ' 行动派 '，面对无口时会快速尝试新策略（换饵 / 换点）。即使失败也能迅速总结，挫折反而激发你的挑战欲。你的动态调整能力是应对复杂鱼情的利器。",
      formula: "Strategyflexibility>=15 && Frustrationtolerance>=14",
      suggestion: "你的快速调整能抓住窗口期，但需注意 ' 调整质量 '—— 每次改变应有明确目的（如 ' 测试深浅水差异 '）。可建立 ' 策略清单 '，避免盲目更换。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择快调硬竿（如 M 调枪柄竿）配合远投轮，方便快速切换标点；携带 5-8 种不同泳层拟饵（米诺 / VIB / 德州钓组），满足高频调整需求。 */"
    },
    {
      title: "情绪平衡者（Emotionalstability+Selfregulation）",
      description: "你拥有强大的情绪管理能力，无论是意外惊喜还是空军收场，都能快速恢复平稳状态。作钓时像 ' 定海神针 '，既能享受收获的快乐，也能接纳自然的不确定性。",
      formula: "Emotionalstability>=20 && Selfregulation>=18",
      suggestion: "你的情绪稳定是宝贵特质，可尝试担任钓鱼活动组织者，用你的平和感染他人。同时可学习基础鱼情分析，将情绪优势转化为策略优势。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择握感舒适的人体工学竿（如 G.Loomis IMX-Pro），搭配缓降型拟饵（如倒吊钓组），减少操作疲劳，帮助维持情绪稳定。 */"
    },
    {
      title: "目标校准者（Goalclarity+Patiencethreshold）",
      description: "你擅长设定合理目标并坚持执行，既不会因急躁频繁调整，也不会因固执错失机会。像精准的钟表，在 ' 坚持 ' 与' 调整 ' 间找到完美平衡，是最易达成目标的类型。",
      formula: "Goalclarity>=16 && Patiencethreshold>=18",
      suggestion: "你的目标管理能力已很出色，可尝试挑战 ' 弹性目标 '（如 ' 钓到 1 尾或观察到 3 种鱼讯 '），拓展作钓维度。同时记录 ' 目标达成时间 '，优化未来计划。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐中调竿（如 F 调直柄竿）配合匀速收线拟饵（如摇摆米诺），既保证控鱼能力，又能维持稳定作钓节奏。 */"
    },
    {
      title: "体验探索者（Environmentaladaptability+Emotionalstability）",
      description: "你更像 ' 垂钓体验家 '，作钓的核心是 ' 与自然互动 ' 而非单纯钓获。即使空军也能从水流声、鸟鸣中获得满足，对结果的低期待反而让你更容易收获意外惊喜。",
      formula: "Environmentaladaptability>=13 && Emotionalstability>=15",
      suggestion: "保持你的体验心态，可尝试 ' 无饵作钓 '（观察鱼群活动）或 ' 摄影记录 '，将兴趣拓展为自然观察。偶尔设定小目标（如 ' 拍到 1 张鱼跃照片 '）增加参与感。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择超轻量竿（如 UL 调直柄竿）配合仿生饵（如软虫），减少操作负担；携带防水相机，记录作钓中的自然瞬间。 */"
    },
    {
      title: "综合平衡者（四维度均衡型）",
      description: "你在期待管理与情绪调节的多个维度表现均衡，既不会因过度急躁破坏节奏，也不会因过于佛系失去目标感。这种 ' 全能型 ' 特质让你在不同鱼情下都能稳定发挥。",
      formula: "true",
      suggestion: "你的均衡性是优势，可针对 1-2 个维度深度强化（如提升策略灵活性或目标清晰度），从 ' 全能 ' 升级为 ' 全优 '。参加多鱼种钓赛是不错的挑战方向。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择通用型装备（如 M 调枪柄竿 + 水滴轮），搭配 3-5 种经典拟饵（波扒 / 小胖子 / 亮片），满足不同场景需求，发挥你的综合优势。 */"
    }
  ],
  resultProbabilities: {
    "磐石型钓者（Patiencethreshold+Emotionalstability）": "5.90",
    "数据精算师（Goalclarity+Resultorientation）": "10.56",
    "环境感知者（Environmentaladaptability+Selfregulation）": "10.33",
    "策略急先锋（Strategyflexibility+Frustrationtolerance）": "6.90",
    "情绪平衡者（Emotionalstability+Selfregulation）": "10.38",
    "目标校准者（Goalclarity+Patiencethreshold）": "4.07",
    "体验探索者（Environmentaladaptability+Emotionalstability）": "9.24",
    "综合平衡者（四维度均衡型）": "42.62"
  }
};
const  luresGearTest= {
  id: 15,
  title: "路亚装备选择倾向精密分析",
  titleshort: "装备选择倾向分析",
  type: 1,
  questions: [
    {
      id: 1,
      text: "选择路亚竿时，你最优先对比的参数是？",
      options: [
        {
          text: "竿稍灵敏度 (μN)+ 碳布吨位 (T)",
          resultKey: [
            [
              "Performance",
              6
            ],
            [
              "Innovation",
              4
            ]
          ],
          icon: "📏"
        },
        {
          text: "品牌经典系列 + 握把人体工学设计",
          resultKey: [
            [
              "Brand",
              7
            ],
            [
              "Experience",
              3
            ]
          ],
          icon: "🏷️"
        },
        {
          text: "涂装配色 (潘通色号)+ 竿身流线弧度",
          resultKey: [
            [
              "Aesthetic",
              6
            ],
            [
              "Personaltaste",
              4
            ]
          ],
          icon: "🎨"
        }
      ]
    },
    {
      id: 2,
      text: "购买新拟饵时，你更倾向于？",
      options: [
        {
          text: "查看钓友实测破鱼率 + 下沉速度数据",
          resultKey: [
            [
              "Performance",
              5
            ],
            [
              "Community",
              5
            ]
          ],
          icon: "📊"
        },
        {
          text: "选择常购品牌的季节限定款",
          resultKey: [
            [
              "Brand",
              6
            ],
            [
              "Innovation",
              4
            ]
          ],
          icon: "🆕"
        },
        {
          text: "被饵体造型 / 荧光色吸引 + 符合个人审美",
          resultKey: [
            [
              "Aesthetic",
              7
            ],
            [
              "Personaltaste",
              3
            ]
          ],
          icon: "✨"
        }
      ]
    },
    {
      id: 3,
      text: "遇到性能相近的两款装备，最终决策关键是？",
      options: [
        {
          text: "参数细节更优 (如导环材质 / 重量差 10g)",
          resultKey: [
            [
              "Performance",
              6
            ],
            [
              "Practical",
              4
            ]
          ],
          icon: "🔍"
        },
        {
          text: "选择使用过的熟悉品牌",
          resultKey: [
            [
              "Brand",
              7
            ],
            [
              "Experience",
              3
            ]
          ],
          icon: "❤️"
        },
        {
          text: "哪款外观更符合出钓场景 (如溪流款 / 海钓款)",
          resultKey: [
            [
              "Aesthetic",
              6
            ],
            [
              "Personaltaste",
              4
            ]
          ],
          icon: "🌊"
        }
      ]
    },
    {
      id: 4,
      text: "如何看待 ' 老品牌经典款 ' 与' 新品牌黑科技 '？",
      options: [
        {
          text: "黑科技参数 (如轻量化技术) 更具吸引力",
          resultKey: [
            [
              "Performance",
              5
            ],
            [
              "Innovation",
              5
            ]
          ],
          icon: "🔬"
        },
        {
          text: "经典款经过时间验证更可靠",
          resultKey: [
            [
              "Brand",
              6
            ],
            [
              "Community",
              4
            ]
          ],
          icon: "🕰️"
        },
        {
          text: "看哪个设计更契合个人风格",
          resultKey: [
            [
              "Aesthetic",
              7
            ],
            [
              "Personaltaste",
              3
            ]
          ],
          icon: "👕"
        }
      ]
    },
    {
      id: 5,
      text: "装备损坏需替换时，你的选择逻辑是？",
      options: [
        {
          text: "升级同型号更高参数版本",
          resultKey: [
            [
              "Performance",
              5
            ],
            [
              "Practical",
              5
            ]
          ],
          icon: "⬆️"
        },
        {
          text: "继续购买原品牌同系列",
          resultKey: [
            [
              "Brand",
              8
            ],
            [
              "Experience",
              2
            ]
          ],
          icon: "🔄"
        },
        {
          text: "换外观更潮流的新款",
          resultKey: [
            [
              "Aesthetic",
              6
            ],
            [
              "Personaltaste",
              4
            ]
          ],
          icon: "🌟"
        }
      ]
    },
    {
      id: 6,
      text: "钓鱼社群讨论装备时，你最常分享的内容是？",
      options: [
        {
          text: "实测数据对比 (如抛投距离 / 感度测试)",
          resultKey: [
            [
              "Performance",
              6
            ],
            [
              "Community",
              4
            ]
          ],
          icon: "📢"
        },
        {
          text: "品牌历史故事 + 经典款使用心得",
          resultKey: [
            [
              "Brand",
              5
            ],
            [
              "Experience",
              5
            ]
          ],
          icon: "📖"
        },
        {
          text: "外观设计细节 (如 LOGO 工艺 / 配色灵感)",
          resultKey: [
            [
              "Aesthetic",
              7
            ],
            [
              "Personaltaste",
              3
            ]
          ],
          icon: "🖌️"
        }
      ]
    },
    {
      id: 7,
      text: "朋友推荐小众高性价比装备，你会？",
      options: [
        {
          text: "先查专业评测机构的参数报告",
          resultKey: [
            [
              "Performance",
              6
            ],
            [
              "Innovation",
              4
            ]
          ],
          icon: "📚"
        },
        {
          text: "相信朋友的长期使用经验",
          resultKey: [
            [
              "Community",
              5
            ],
            [
              "Experience",
              5
            ]
          ],
          icon: "🤝"
        },
        {
          text: "先看实物图片是否符合审美",
          resultKey: [
            [
              "Aesthetic",
              5
            ],
            [
              "Personaltaste",
              5
            ]
          ],
          icon: "📸"
        }
      ]
    }
  ],
  dimensionWeights: {
    Performance: 1.05,
    Brand: 1.1,
    Aesthetic: 1.05,
    Practical: 3,
    Innovation: 1.45,
    Experience: 1.25,
    Community: 1.3,
    Personaltaste: 1.35
  },
  results: [
    {
      title: "参数极客（Performance 主导）",
      description: "你是装备选择中的理性标杆，每一个决策都建立在精准的参数对比之上。竿稍灵敏度、碳布吨位、破鱼率数据在你眼中比广告词更有说服力，对性能的极致追求让你总能选到最适配钓场的装备。",
      formula: "Performance>=24",
      suggestion: "保持对参数的敏感度，可尝试参与专业评测活动，用你的数据视角帮助更多钓友避坑。同时可关注实验室级的定制装备服务，满足更高阶需求。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐高模量碳布（如 46T 以上）+ 陶瓷导环的专业竿，搭配带数据记录功能的智能渔轮（可记录抛投距离 / 收线速度），拟饵选择有明确下沉速度标注的精准款。 */"
    },
    {
      title: "品牌信徒（Brand 主导）",
      description: "你对某些品牌有着近乎信仰的忠诚，经典系列的历史积淀、品牌文化的精神共鸣比参数更能打动你。使用熟悉品牌的装备能给你带来稳定的安全感，这种情怀让你成为品牌最忠实的传播者。",
      formula: "Brand>=24",
      suggestion: "可深入了解品牌背后的匠人故事，参与品牌粉丝活动（如工厂参观 / 限定款预售）。适当尝试同品牌的创新产品线，在情怀与进步间找到新平衡。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择目标品牌的旗舰经典款（如某品牌 20 周年纪念竿），搭配同品牌的标志性拟饵（如经典米诺），渔轮选择品牌口碑款（经多年市场验证的型号）。 */"
    },
    {
      title: "颜值大师（Aesthetic 主导）",
      description: "你用艺术家的眼光挑选装备，涂装配色、流线设计、细节工艺都是重要评判标准。装备不仅是工具，更是你的风格名片，出钓时连竿包的配色都要和钓场环境呼应。",
      formula: "Aesthetic>=23",
      suggestion: "关注独立设计工作室的联名款，参与钓具设计征集活动（如配色投票）。可学习基础设计原理（如黄金分割比例），让审美选择更有理论支撑。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐限量配色竿（如与知名画家联名款），拟饵选择造型独特的艺术饵（如抽象雕塑感 VIB），渔轮选金属漆工艺款，竿包搭配同色系防水时尚包。 */"
    },
    {
      title: "实用主义者（Practical 主导）",
      description: "你像装备界的会计师，每笔投入都追求最大使用价值。耐用性、维修便捷度、多场景适配性是核心考量，拒绝为花哨功能多花一分钱，用最经济的方式达成目标。",
      formula: "Practical>=16",
      suggestion: "关注钓具的模块化设计（如可换导环竿），学习基础保养技巧延长装备寿命。可建立装备使用台账，记录每款装备的实际使用频率，优化购买决策。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择全富士导环（易更换）+EVA 握把（耐脏耐磨）的通用竿，拟饵选经典通用型（如 5cm 米诺），渔轮选金属机身（抗腐蚀）的入门旗舰款。 */"
    },
    {
      title: "科技尝鲜党（Innovation 主导）",
      description: "你是装备界的前沿探索者，永远对新技术保持好奇。从纳米碳布到智能感应渔轮，别人眼中的 ' 噱头 ' 在你看来是未来趋势，乐于成为第一批吃螃蟹的人。",
      formula: "Innovation>=16",
      suggestion: "关注钓具展会（如日本 JFA 展）的新品发布，加入新技术测试社群（如品牌内测小组）。注意记录新技术的实际表现，避免为不成熟技术买单。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐纳米树脂碳布竿（如某品牌 X-7 系列），搭配智能渔轮（带咬口震动提醒），拟饵选择带 3D 全息鳞片的仿生款（最新光学诱鱼技术）。 */"
    },
    {
      title: "体验至上者（Experience 主导）",
      description: "你重视装备与身体的对话，握把的舒适度、抛投的顺畅度、中鱼的手感比参数更能影响选择。好的装备对你来说应该 ' 像手臂的延伸 '，使用过程本身就是享受。",
      formula: "Experience>=15",
      suggestion: "多参加线下试钓会（实际握竿体验），学习人体工学知识（如握把角度与手部受力关系）。可定制握把（如根据手型打磨 EVA），提升专属体验。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择高密度 EVA 握把（吸汗防滑）+ 轻量化竿体（重心靠后）的舒适竿，拟饵选重量分布均匀的平衡款，渔轮选多轴承（顺滑度高）的人体工学款。 */"
    },
    {
      title: "社群影响者（Community 主导）",
      description: "你是装备选择中的 ' 社交型决策者 '，钓友实测分享、社群口碑、达人推荐比官方数据更有参考价值。你的选择既能反映群体趋势，也能影响周围人的判断。",
      formula: "Community>=15",
      suggestion: "建立自己的装备测评账号（短视频 / 图文），用真实体验输出内容。参与社群装备盲测活动（避免品牌滤镜），提升判断客观性。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择近期社群热议款（如某款被 10 + 大 V 推荐的新竿），拟饵选钓友群投票 TOP3 的 ' 爆钓饵 '，渔轮选本地钓场常见的 ' 场霸款 '。 */"
    },
    {
      title: "风格特立者（Personaltaste 主导）",
      description: "你有一套独特的装备审美体系，不盲从参数或品牌，只选 ' 对味 ' 的装备。可能偏爱冷门配色、小众品牌，甚至自己 DIY 改装，装备是你个性的直接投射。",
      formula: "Personaltaste>=16",
      suggestion: "尝试钓具 DIY（如更换握把贴纸 / 定制刻字），参加路亚文化展会（寻找小众品牌）。可建立个人装备博物馆（收藏有故事的旧装备），强化风格记忆点。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择独立设计师品牌的限量款（如某工作室手工竿），拟饵选小众造型（如透明软虫 + 自定义色膏染色），渔轮选复古机械款（带手动泄力调节）。 */"
    },
    {
      title: "理性感性平衡者（多维度均衡）",
      description: "你在装备选择中展现出成熟的决策智慧，既会看参数也懂欣赏设计，既信任品牌也敢于尝试新事物。这种平衡让你总能选到 ' 既好用又喜欢 ' 的装备，是钓友眼中的 ' 选装备顾问 '。",
      formula: "true",
      suggestion: "保持这种综合视角，可发展为装备测评达人（兼顾专业与感性）。建立个人装备评分表（参数 / 设计 / 体验各占 30%+ 品牌 / 社群占 10%），让决策更系统。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择中高端均衡款（如某品牌次旗舰竿，参数优秀 + 设计简约），拟饵选经典款 + 1-2 款设计款搭配，渔轮选口碑好 + 外观低调的实用型。 */"
    }
  ],
  resultProbabilities: {
    "参数极客（Performance 主导）": "9.28",
    "品牌信徒（Brand 主导）": "11.11",
    "颜值大师（Aesthetic 主导）": "17.28",
    "实用主义者（Practical 主导）": "7.04",
    "科技尝鲜党（Innovation 主导）": "6.26",
    "体验至上者（Experience 主导）": "4.80",
    "社群影响者（Community 主导）": "7.22",
    "风格特立者（Personaltaste 主导）": "7.45",
    "理性感性平衡者（多维度均衡）": "29.54"
  }
};
const  fishingSpotStrategyTest= {
  id: 16,
  title: "钓点探索策略精密分析",
  titleshort: "钓点探索策略分析",
  type: 2,
  questions: [
    {
      id: 1,
      text: "首次抵达陌生水域时，你的第一步行动是？",
      options: [
        {
          text: "立刻取出常用钓组开始抛投，用实战验证预判",
          resultKey: [
            [
              "Experience",
              6
            ],
            [
              "Risk",
              4
            ]
          ],
          icon: "🎣"
        },
        {
          text: "沿岸边慢走 10 分钟，观察水草密度 / 深浅交界线 / 倒树位置",
          resultKey: [
            [
              "Environment",
              7
            ],
            [
              "Intuition",
              3
            ]
          ],
          icon: "🌿"
        },
        {
          text: "先找附近钓友闲聊，询问「今天口怎么样？」「哪里出鱼？」",
          resultKey: [
            [
              "Information",
              8
            ],
            [
              "System",
              2
            ]
          ],
          icon: "💬"
        }
      ]
    },
    {
      id: 2,
      text: "发现水面有零星鱼类踪迹但是没有用咬口，你会？",
      options: [
        {
          text: "按老习惯选深浅交接处下竿，相信「鱼必藏于此」",
          resultKey: [
            [
              "Experience",
              5
            ],
            [
              "Conservative",
              5
            ]
          ],
          icon: "🔄"
        },
        {
          text: "用不同饵重，从近岸到离岸 50 米逐步排查",
          resultKey: [
            [
              "Explore",
              7
            ],
            [
              "Risk",
              3
            ]
          ],
          icon: "🚤"
        },
        {
          text: "打开导航 APP 标记位置，结合卫星地图分析水下地形",
          resultKey: [
            [
              "System",
              6
            ],
            [
              "Information",
              4
            ]
          ],
          icon: "🗺️"
        }
      ]
    },
    {
      id: 3,
      text: "遇到「看起来完美但从未钓过」的钓点（如隐蔽洄水湾），你会？",
      options: [
        {
          text: "直接下竿，大不了空军就当探路",
          resultKey: [
            [
              "Risk",
              7
            ],
            [
              "Explore",
              3
            ]
          ],
          icon: "🔥"
        },
        {
          text: "先观察半小时：看有没有鱼跳 / 水鸟盘旋 / 漂浮物流向",
          resultKey: [
            [
              "Environment",
              6
            ],
            [
              "Intuition",
              4
            ]
          ],
          icon: "🕵️"
        },
        {
          text: "掏出手机查该水域历史鱼获记录（钓鱼 APP / 论坛帖子）",
          resultKey: [
            [
              "Information",
              5
            ],
            [
              "System",
              5
            ]
          ],
          icon: "📱"
        }
      ]
    },
    {
      id: 4,
      text: "当钓友推荐「XX 位置必中」但与你观察到的环境矛盾时，你会？",
      options: [
        {
          text: "坚持自己的判断，按观察到的结构选点",
          resultKey: [
            [
              "Intuition",
              6
            ],
            [
              "Environment",
              4
            ]
          ],
          icon: "💡"
        },
        {
          text: "先试钓友推荐的位置，再试自己选的位置对比效果",
          resultKey: [
            [
              "Explore",
              7
            ],
            [
              "System",
              3
            ]
          ],
          icon: "⚖️"
        },
        {
          text: "折中选择两者中间区域，降低试错风险",
          resultKey: [
            [
              "Conservative",
              8
            ],
            [
              "Experience",
              2
            ]
          ],
          icon: "🛡️"
        }
      ]
    },
    {
      id: 5,
      text: "连续 2 小时无口时，你的调整逻辑是？",
      options: [
        {
          text: "换更刺激的饵（如雷蛙 / 波爬），用强刺激打破鱼的警惕",
          resultKey: [
            [
              "Risk",
              6
            ],
            [
              "Experience",
              4
            ]
          ],
          icon: "⚡"
        },
        {
          text: "重新走一遍钓点，用更细的线组 + 更小的饵匹配鱼的活性",
          resultKey: [
            [
              "Environment",
              5
            ],
            [
              "Intuition",
              5
            ]
          ],
          icon: "🔍"
        },
        {
          text: "整理今日记录（时间 / 水深 / 饵型），用数据推导可能的问题点",
          resultKey: [
            [
              "System",
              7
            ],
            [
              "Information",
              3
            ]
          ],
          icon: "📊"
        }
      ]
    },
    {
      id: 6,
      text: "选择新钓点时，你最看重以下哪个信息？",
      options: [
        {
          text: "我之前在类似环境（如同样水草密度）钓过鱼",
          resultKey: [
            [
              "Experience",
              6
            ],
            [
              "Conservative",
              4
            ]
          ],
          icon: "📚"
        },
        {
          text: "有钓友刚发朋友圈说这里「爆护」",
          resultKey: [
            [
              "Information",
              6
            ],
            [
              "Risk",
              4
            ]
          ],
          icon: "📣"
        },
        {
          text: "卫星地图显示水下有沟坎 / 陡崖等复杂结构",
          resultKey: [
            [
              "System",
              5
            ],
            [
              "Environment",
              5
            ]
          ],
          icon: "🌍"
        }
      ]
    },
    {
      id: 7,
      text: "对「探钓」的核心理解是？",
      options: [
        {
          text: "用已知经验快速验证未知水域",
          resultKey: [
            [
              "Experience",
              8
            ],
            [
              "Intuition",
              2
            ]
          ],
          icon: "✅"
        },
        {
          text: "通过多维度信息交叉验证找到鱼道",
          resultKey: [
            [
              "System",
              7
            ],
            [
              "Information",
              3
            ]
          ],
          icon: "🔗"
        },
        {
          text: "在安全范围内尽可能尝试新区域",
          resultKey: [
            [
              "Explore",
              6
            ],
            [
              "Risk",
              4
            ]
          ],
          icon: "🚀"
        }
      ]
    }
  ],
  dimensionWeights: {
    Experience: 1.15,
    Information: 1.3,
    Risk: 1.05,
    Environment: 1.25,
    Explore: 1.2,
    Conservative: 1.4,
    Intuition: 1.45,
    System: 1.3
  },
  results: [
    {
      title: "经验锚点者（Experience 主导）",
      description: "你像钓鱼界的「老地图」，习惯用过往成功经验快速定位钓点。对「类似环境」有天然敏感度，擅长将已知模式迁移到新水域，但偶尔会因过度依赖旧经验错过新机会。",
      formula: "Experience >= 20.5",
      suggestion: "尝试记录每次探钓的「差异点」（如水温 / 鱼种变化），逐步扩展经验库的边界。遇到矛盾信息时，可分配 10% 时间验证新可能。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐携带可快速更换配件的模块化钓组（如快换铅头钩），适应经验迁移时的灵活调整需求。 */"
    },
    {
      title: "信息整合者（Information 主导）",
      description: "你是钓点探索的「情报专家」，擅长从钓友闲聊、APP 数据、历史帖子中提炼有效信息。对「人传人」的鱼情格外敏感，但需注意信息时效性（如季节变化可能让旧数据失效）。",
      formula: "Information >= 22.5",
      suggestion: "建立个人「钓点信息库」（含时间 / 天气 / 鱼获），用表格标注信息来源可信度。优先验证「3 天内新发布」的鱼情。",
      equip: "数据正在准备中",
      _originalEquip: "/* 配备支持离线地图的智能钓鱼手表（如 Garmin Marq），可实时记录 / 调取钓点信息。 */"
    },
    {
      title: "环境感知者（Environment 主导）",
      description: "你像「水域翻译官」，能从水草分布、水流方向、漂浮物轨迹中「读」出水下结构。对自然信号的敏感度是你的核心优势，但可能因过度关注细节忽略全局。",
      formula: "Environment >= 20",
      suggestion: "练习「5 分钟速览法」：到达钓点后先快速观察整体（如主河道方向），再聚焦细节（如局部洄水湾），避免陷入「微观陷阱」。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择高透明度鱼线（如碳线）+ 防挂底钓组（如德州钓组），减少环境观察时的操作干扰。 */"
    },
    {
      title: "风险探索者（Risk+Explore）",
      description: "你是钓点探索的「拓荒者」，享受「未知水域第一竿」的刺激。敢于挑战隐蔽洄水湾、陡坎等「高风险高回报」区域，但需注意安全（如陌生水域的暗桩）。",
      formula: "(Risk + Explore) >= 24 && Risk >= 11 && Explore >= 13",
      suggestion: "探索新区域时携带救生绳 + 防水定位器，将「冒险区」控制在离岸 30 米内。可同步记录「踩坑点」避免重复试错。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择强韧的 PE 线 + 防缠绕导环的钓竿（如 M 调以上），应对复杂水下结构的拉扯。 */"
    },
    {
      title: "系统分析者（System 主导）",
      description: "你是钓点探索的「数据工程师」，习惯用「卫星地图 + 水深数据 + 历史鱼获」构建「钓点模型」。逻辑推导能力极强，但需注意模型与实际的误差（如突发降雨改变水流）。",
      formula: "System >= 21",
      suggestion: "每次探钓后用「实际鱼获」反推模型漏洞（如某结构预测有鱼但无口），逐步优化参数权重（如水深 / 水温优先级）。",
      equip: "数据正在准备中",
      _originalEquip: "/* 配备带水下可视摄像，实时修正水下结构数据。 */"
    },
    {
      title: "保守稳健者（Conservative 主导）",
      description: "你是钓点探索的「安全卫士」，倾向选择「已知有鱼」或「风险可控」的区域（如老钓位 / 浅水区）。虽然少了惊喜，但空军率极低，适合新手学习。",
      formula: "Conservative >= 18",
      suggestion: "每月尝试 1 次「微冒险」（如老钓位旁 5 米的新区域），用小成本扩展安全区边界。可记录「微冒险」结果建立「低风险新钓点库」。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择通用性强的综合竿（如 28 调）+ 常见饵（如蚯蚓 / 玉米），降低陌生水域的操作难度。 */"
    },
    {
      title: "直觉洞察者（Intuition 主导）",
      description: "你是钓点探索的「第六感大师」，常因「感觉这里有鱼」而下竿，且命中率惊人。这种直觉源于长期观察的潜意识积累，但需警惕「幸存者偏差」（忽略直觉错误的案例）。",
      formula: "Intuition >= 16",
      suggestion: "有意识记录「直觉决策」的结果（成功 / 失败），统计命中率。若低于 60%，需加强理性分析补足直觉偏差。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择轻量灵敏的钓竿（如 UL 调）+ 细子线，让直觉判断能通过鱼讯快速验证。 */"
    },
    {
      title: "经验 - 系统融合者（Experience+System）",
      description: "你将「老经验」与「新数据」完美结合，用系统分析验证经验，用经验修正模型。这种「新旧融合」的策略让你在陌生水域既高效又精准。",
      formula: "Experience >= 15 && System >= 15",
      suggestion: "尝试用系统工具（如 Excel）量化经验（如「水草覆盖率 30% 时中鱼率 + 20%」），将模糊经验转化为可复制的策略。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择带数据记录功能的智能渔轮（如 Shimano Stella SW），自动记录抛投距离 / 收线速度，辅助系统分析。 */"
    },
    {
      title: "环境 - 直觉洞察者（Environment+Intuition）",
      description: "你像「水域观察者」与「直觉预言家」的结合体，既能敏锐捕捉环境细节，又能通过直觉串联信息找到鱼道。这种「观察 + 直觉」的组合让你在自然水域如鱼得水。",
      formula: "Environment >= 14 && Intuition >= 12",
      suggestion: "练习「环境复述法」：离开钓点后默写观察到的环境特征（如「3 处倒树，2 个洄水湾」），强化细节记忆能力。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择高清晰偏光墨镜（如 Smith Optics），减少水面反光干扰，提升环境观察效率。 */"
    },
    {
      title: "平衡策略家（多维度均衡）",
      description: "你是钓点探索的「六边形战士」，经验、信息、环境、系统等维度均衡发展。既能快速决策，又能灵活调整，几乎能应对所有陌生水域场景。",
      formula: "true",
      suggestion: "可针对目标鱼种（如鳜鱼 / 鲈鱼）强化特定维度（如鳜鱼需加强环境感知），从「全能」向「专精全能」进化。",
      equip: "数据正在准备中",
      _originalEquip: "/* 配备一套「探钓套装」：含综合竿（应对常规）、远投竿（探索远处）、微物竿（验证细节），覆盖全场景需求。 */"
    }
  ],
  resultProbabilities: {
    "经验锚点者（Experience 主导）": "14.40",
    "信息整合者（Information 主导）": "10.52",
    "环境感知者（Environment 主导）": "15.41",
    "风险探索者（Risk+Explore）": "12.89",
    "系统分析者（System 主导）": "13.35",
    "保守稳健者（Conservative 主导）": "5.12",
    "直觉洞察者（Intuition 主导）": "2.65",
    "经验 - 系统融合者（Experience+System）": "3.16",
    "环境 - 直觉洞察者（Environment+Intuition）": "2.24",
    "平衡策略家（多维度均衡）": "20.26"
  }
};
const luresObsessionTest= {
  id: 17,
  title: "拟饵使用执念深度解析",
  titleshort: "拟饵使用执念深度解析",
  type: 2,
  questions: [
    {
      id: 1,
      text: "连续3小时未中鱼，当前使用的是曾多次上鱼的'幸运拟饵'，你会？",
      options: [
        {
          text: "继续坚持，相信鱼群只是暂时不开口",
          resultKey: [
            [
              "Routine",
              7
            ],
            [
              "Emotional",
              3
            ]
          ],
          icon: "🔁"
        },
        {
          text: "调整泳层/收线速度，保持原饵",
          resultKey: [
            [
              "Consistency",
              6
            ],
            [
              "Rational",
              4
            ]
          ],
          icon: "⚙️"
        },
        {
          text: "直接换3种不同类型新饵轮流试钓",
          resultKey: [
            [
              "Innovation",
              8
            ],
            [
              "Curiosity",
              2
            ]
          ],
          icon: "✨"
        }
      ]
    },
    {
      id: 2,
      text: "发现目标鱼活性降低时，你首先会？",
      options: [
        {
          text: "从钓箱取出固定'保底饵'（如小软虫）",
          resultKey: [
            [
              "Routine",
              6
            ],
            [
              "Adaptation",
              4
            ]
          ],
          icon: "📦"
        },
        {
          text: "观察鱼炸水位置+对比饵型匹配度",
          resultKey: [
            [
              "Observation",
              7
            ],
            [
              "Rational",
              3
            ]
          ],
          icon: "👀"
        },
        {
          text: "尝试刚买的静音型拟饵（如微铅VIB）",
          resultKey: [
            [
              "Innovation",
              5
            ],
            [
              "Curiosity",
              5
            ]
          ],
          icon: "🎁"
        }
      ]
    },
    {
      id: 3,
      text: "如何处理用旧但仍有效的'功勋拟饵'？",
      options: [
        {
          text: "擦干净收进专属格子，继续优先使用",
          resultKey: [
            [
              "Emotional",
              7
            ],
            [
              "Consistency",
              3
            ]
          ],
          icon: "❤️"
        },
        {
          text: "检查磨损程度，磨损超20%就淘汰",
          resultKey: [
            [
              "Rational",
              8
            ],
            [
              "Observation",
              2
            ]
          ],
          icon: "🔍"
        },
        {
          text: "改造成实验饵（如剪短尾鳍/换钩型）",
          resultKey: [
            [
              "Curiosity",
              6
            ],
            [
              "Innovation",
              4
            ]
          ],
          icon: "🔧"
        }
      ]
    },
    {
      id: 4,
      text: "钓友强烈推荐一款从未用过的拟饵，你会？",
      options: [
        {
          text: "礼貌感谢但坚持用自己的饵",
          resultKey: [
            [
              "Routine",
              8
            ],
            [
              "Emotional",
              2
            ]
          ],
          icon: "🙅"
        },
        {
          text: "先查测评数据+对比本地鱼情再决定",
          resultKey: [
            [
              "Rational",
              7
            ],
            [
              "Observation",
              3
            ]
          ],
          icon: "📊"
        },
        {
          text: "当场借饵试钓，晚上就下单同款",
          resultKey: [
            [
              "Curiosity",
              6
            ],
            [
              "Innovation",
              4
            ]
          ],
          icon: "🚀"
        }
      ]
    },
    {
      id: 5,
      text: "作钓结束后复盘重点是？",
      options: [
        {
          text: "记录'幸运饵'今天的中鱼时段/水层",
          resultKey: [
            [
              "Consistency",
              7
            ],
            [
              "Routine",
              3
            ]
          ],
          icon: "📝"
        },
        {
          text: "分析不同饵型的咬口差异数据",
          resultKey: [
            [
              "Rational",
              6
            ],
            [
              "Observation",
              4
            ]
          ],
          icon: "📈"
        },
        {
          text: "思考未中鱼时段该用什么新饵测试",
          resultKey: [
            [
              "Innovation",
              7
            ],
            [
              "Curiosity",
              3
            ]
          ],
          icon: "💡"
        }
      ]
    },
    {
      id: 6,
      text: "面对陌生水域的未知鱼种，你会？",
      options: [
        {
          text: "带3套'万能组合'（如德州+亮片+米诺）",
          resultKey: [
            [
              "Adaptation",
              6
            ],
            [
              "Routine",
              4
            ]
          ],
          icon: "🎒"
        },
        {
          text: "先观察水生物种+模拟其天敌饵型",
          resultKey: [
            [
              "Observation",
              8
            ],
            [
              "Nature",
              2
            ]
          ],
          icon: "🌿"
        },
        {
          text: "带5种新上市拟饵+每种试20分钟",
          resultKey: [
            [
              "Curiosity",
              7
            ],
            [
              "Innovation",
              3
            ]
          ],
          icon: "🔬"
        }
      ]
    },
    {
      id: 7,
      text: "如何看待'拟饵玄学'（如特定颜色/克重必中）？",
      options: [
        {
          text: "宁可信其有，按老钓友经验备饵",
          resultKey: [
            [
              "Emotional",
              6
            ],
            [
              "Routine",
              4
            ]
          ],
          icon: "🔮"
        },
        {
          text: "用3次验证无效就彻底淘汰",
          resultKey: [
            [
              "Rational",
              7
            ],
            [
              "Observation",
              3
            ]
          ],
          icon: "✅"
        },
        {
          text: "故意反着用（如阴天用亮色）测试效果",
          resultKey: [
            [
              "Innovation",
              5
            ],
            [
              "Curiosity",
              5
            ]
          ],
          icon: "🎭"
        }
      ]
    }
  ],
  dimensionWeights: {
    Routine: 1.3,
    Emotional: 1.1,
    Consistency: 1.35,
    Rational: 1.2,
    Observation: 1.2,
    Innovation: 1.1,
    Curiosity: 1,
    Adaptation: 1.15
  },
  results: [
    {
      title: "惯例守护者",
      description: "你对熟悉的拟饵有着近乎执着的信任，'幸运饵'就像你的钓鱼护身符。习惯用经过验证的组合，面对变化时更倾向调整操作而非更换饵型。这种稳定性能帮你在已知鱼情中保持效率，但也可能错过新饵带来的惊喜。",
      formula: "(Routine+Emotional)>=35",
      suggestion: "尝试每周选1次作钓日，用'幸运饵'搭配1种从未用过的副饵（如德州钓组+新软虫颜色），在保持核心的同时逐步扩展舒适区。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐经典款拟饵套装（如Berkley PowerBait软虫基础套装），搭配可调节的多功能饵盒，既能保持惯例又方便小范围创新。 */"
    },
    {
      title: "理性调整者",
      description: "你像钓鱼界的'数据分析师'，对拟饵的选择始终基于观察和验证。会用理性逻辑判断是否更换饵型，既不过度依赖旧饵，也不盲目追新。这种平衡让你在多数鱼情中都能保持稳定的中鱼率。",
      formula: "(Rational+Consistency)>=32",
      suggestion: "建立个人拟饵数据库（记录饵型/水层/天气/中鱼率），每月做一次交叉分析，发现潜在的'隐藏幸运饵'组合。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择带刻度的饵盒（方便记录使用次数），搭配可换钩柄的拟饵（如Keitech Easy Shiner 多钩型软虫），满足你调整优化的需求。 */"
    },
    {
      title: "创新探索者",
      description: "你是拟饵世界的'先锋实验员'，对新饵的渴望就像孩子拆礼物。每次作钓都像在进行科学实验，享受尝试新饵的过程远超过单纯追求鱼获。这种好奇心能帮你发现别人忽略的钓法，但也需要避免过度分散精力。",
      formula: "(Innovation+Curiosity)>=42",
      suggestion: "建立'实验日志'（记录新饵的试钓时长/咬口反馈），每季度选出3款表现最佳的纳入常规装备，避免'为创新而创新'。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐模块化拟饵套装（如Yamamoto Senko 多尺寸组合），搭配快速换饵别针（如Daiwa Cross Lock Snap），满足你高频更换的需求。 */"
    },
    {
      title: "观察洞察者",
      description: "你拥有钓鱼人最珍贵的'第三只眼'，能通过水面波纹、水色变化精准判断该用什么饵。对拟饵的选择永远基于对鱼情的实时观察，而非固有经验。这种敏锐的洞察力让你在陌生水域也能快速找到突破口。",
      formula: "(Observation+Rational)>=38",
      suggestion: "练习'盲判训练'（蒙眼听抛投声判断饵落水状态），提升对拟饵动态的感知力，结合观察数据形成更精准的饵型决策。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择高可见度拟饵（如亮片带荧光涂层），搭配偏光镜（如Smith Optics 专业钓鱼镜），增强你对水面细节的捕捉能力。 */"
    },
    {
      title: "情感联结者",
      description: "你的拟饵不仅是工具，更是有故事的'伙伴'。用旧的'功勋饵'对你来说像纪念品，每次使用都能唤起过去的钓鱼记忆。这种情感联结让钓鱼对你而言更有温度，但需注意过度依恋可能影响对饵效的客观判断。",
      formula: "(Emotional+Consistency)>=19",
      suggestion: "为'功勋饵'制作专属标签（记录中鱼时间/鱼种），既保留情感价值，又能通过标签提醒自己'它更适合什么鱼情'。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择可定制的饵盒（如Plano 3700系列带姓名贴），搭配防腐蚀保养套装（如WD-40 渔具保养油），帮你更好地保存有意义的拟饵。 */"
    },
    {
      title: "灵活适应者",
      description: "你是钓鱼场的'多面手'，能根据鱼情变化快速切换拟饵策略。既不会固执于旧饵，也不会无目的换饵，总能在'坚持'和'改变'间找到最佳平衡点。这种灵活性让你在复杂鱼情中优势明显。",
      formula: "(Adaptation+Routine)>=22",
      suggestion: "练习'3分钟换饵法'（从决定换饵到完成抛投不超过3分钟），提升应对突发鱼情的反应速度，巩固你的适应优势。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐分层饵盒（如Storm 多隔层饵盒），按鱼情类型分区存放（如上层鱼/底层鱼/活性低鱼），方便快速拿取目标饵型。 */"
    },
    {
      title: "平衡探索者",
      description: "你完美融合了'坚持'与'创新'，既有自己的核心拟饵组合，又保持着对新饵的开放态度。这种平衡让你既能稳定发挥，又能不断进步，是最具成长潜力的钓鱼者类型。",
      formula: "(Consistency+Innovation)>=21 && (Routine+Curiosity)<=21",
      suggestion: "每月设定'重点实验饵'（1款新饵+1款旧饵改造），用对比法验证效果，将成功经验转化为新的核心组合。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择可扩展的饵包系统（如Frabill 防水饵包+模块化插袋），既方便携带常规饵，又能为新饵预留实验空间。 */"
    },
    {
      title: "综合型钓手",
      description: "你在拟饵使用的各个维度都表现均衡，既有观察能力，又有创新意愿；既懂理性分析，也能保持适度坚持。这种全面性让你几乎能应对所有钓鱼场景，是典型的'无短板钓手'。",
      formula: "true",
      suggestion: "选择1个细分领域（如夜钓拟饵/冷水鱼拟饵）深入研究，将综合优势转化为专项特长，进一步提升竞争力。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐专业级拟饵套装（如Lucky Craft 全场景组合），包含不同水层/季节/鱼种的针对性饵型，满足你全面应对的需求。 */"
    }
  ],
  resultProbabilities: {
    "惯例守护者": "12.21",
    "理性调整者": "13.76",
    "创新探索者": "13.31",
    "观察洞察者": "8.18",
    "情感联结者": "13.31",
    "灵活适应者": "13.95",
    "平衡探索者": "2.38",
    "综合型钓手": "22.91"
  }
};
const  personality2= {
  id: 18,
  title: "目标鱼种优先级心理测评——路亚人成就动机与过程体验解码",
  titleshort: "目标鱼优先级心理测评",
  type: 4,
  questions: [
    {
      id: 1,
      text: "规划作钓行程时，你更倾向选择？",
      options: [
        {
          text: "已知有鳜鱼/军鱼等稀有鱼种的生态保护区",
          resultKey: [
            [
              "Rare",
              6
            ],
            [
              "Knowledge",
              4
            ]
          ],
          icon: "🦖"
        },
        {
          text: "钓友群热议的‘爆扣点’（如翘嘴/鲈鱼高频咬口区）",
          resultKey: [
            [
              "Frequency",
              7
            ],
            [
              "Experience",
              3
            ]
          ],
          icon: "🎣"
        },
        {
          text: "地图上标红的‘未开发野河’（可能有惊喜鱼种）",
          resultKey: [
            [
              "Innovation",
              5
            ],
            [
              "Adaptation",
              5
            ]
          ],
          icon: "🗺️"
        }
      ]
    },
    {
      id: 2,
      text: "作钓时发现两种标点：A是稀有鱼可能的藏身处（但需3小时守钓）；B是已知5分钟内必咬口的普通鱼群区，你会？",
      options: [
        {
          text: "直接选A，稀有鱼值得等待",
          resultKey: [
            [
              "Rare",
              1
            ],
            [
              "Patience",
              9
            ]
          ],
          icon: "⏳"
        },
        {
          text: "先钓B积累手感，再转A",
          resultKey: [
            [
              "Frequency",
              5
            ],
            [
              "Experience",
              5
            ]
          ],
          icon: "🔄"
        },
        {
          text: "同时布两个钓组测试效果",
          resultKey: [
            [
              "Innovation",
              6
            ],
            [
              "Adaptation",
              4
            ]
          ],
          icon: "⚙️"
        }
      ]
    },
    {
      id: 3,
      text: "钓到一尾不认识的鱼时，你首先会？",
      options: [
        {
          text: "查《中国淡水鱼图鉴》确认是否为稀有品种",
          resultKey: [
            [
              "Knowledge",
              8
            ],
            [
              "Rare",
              2
            ]
          ],
          icon: "📖"
        },
        {
          text: "拍视频记录咬口瞬间发钓友群炫耀",
          resultKey: [
            [
              "Frequency",
              6
            ],
            [
              "Experience",
              4
            ]
          ],
          icon: "📱"
        },
        {
          text: "分析其攻击方式并调整拟饵策略",
          resultKey: [
            [
              "Innovation",
              7
            ],
            [
              "Adaptation",
              3
            ]
          ],
          icon: "🔍"
        }
      ]
    },
    {
      id: 4,
      text: "当目标稀有鱼咬钩但脱钩后，你的反应是？",
      options: [
        {
          text: "复盘操作细节，调整钓组再挑战",
          resultKey: [
            [
              "Rare",
              5
            ],
            [
              "Achievement",
              5
            ]
          ],
          icon: "🔄"
        },
        {
          text: "换钓点寻找新咬口保持上鱼节奏",
          resultKey: [
            [
              "Frequency",
              7
            ],
            [
              "Experience",
              3
            ]
          ],
          icon: "🚶"
        },
        {
          text: "记录脱钩特征（如拉力/洗鳃方式）",
          resultKey: [
            [
              "Knowledge",
              5
            ],
            [
              "Adaptation",
              5
            ]
          ],
          icon: "📝"
        }
      ]
    },
    {
      id: 5,
      text: "选择拟饵时，你更看重？",
      options: [
        {
          text: "针对稀有鱼习性的定制款（如鳜鱼专用深潜米诺）",
          resultKey: [
            [
              "Rare",
              6
            ],
            [
              "Achievement",
              4
            ]
          ],
          icon: "🎯"
        },
        {
          text: "经典高咬口饵（如铅头钩+卷尾蛆）",
          resultKey: [
            [
              "Frequency",
              6
            ],
            [
              "Adaptation",
              4
            ]
          ],
          icon: "🛠️"
        },
        {
          text: "新上市的概念饵（如声呐诱鱼软虫）",
          resultKey: [
            [
              "Innovation",
              5
            ],
            [
              "Experience",
              5
            ]
          ],
          icon: "💡"
        }
      ]
    },
    {
      id: 6,
      text: "如何定义‘完美作钓日’？",
      options: [
        {
          text: "钓获目标稀有鱼种并安全放流",
          resultKey: [
            [
              "Rare",
              8
            ],
            [
              "Knowledge",
              2
            ]
          ],
          icon: "🌿"
        },
        {
          text: "从早到晚保持每10分钟一次咬口",
          resultKey: [
            [
              "Frequency",
              7
            ],
            [
              "Experience",
              3
            ]
          ],
          icon: "⏱️"
        },
        {
          text: "验证了3种新钓法且至少1种有效",
          resultKey: [
            [
              "Innovation",
              6
            ],
            [
              "Adaptation",
              4
            ]
          ],
          icon: "🔬"
        }
      ]
    },
    {
      id: 7,
      text: "遇到新手询问‘如何提高鱼获’，你会重点强调？",
      options: [
        {
          text: "学习目标鱼种的生态习性更重要",
          resultKey: [
            [
              "Knowledge",
              7
            ],
            [
              "Rare",
              3
            ]
          ],
          icon: "👨🏫"
        },
        {
          text: "掌握找鱼技巧比等鱼咬口更高效",
          resultKey: [
            [
              "Frequency",
              6
            ],
            [
              "Adaptation",
              4
            ]
          ],
          icon: "🚀"
        },
        {
          text: "多尝试不同饵组合才能找到规律",
          resultKey: [
            [
              "Innovation",
              5
            ],
            [
              "Experience",
              5
            ]
          ],
          icon: "🎲"
        }
      ]
    }
  ],
  dimensionWeights: {
    Rare: 1.3,
    Frequency: 1.1,
    Achievement: 2,
    Experience: 1,
    Knowledge: 1.25,
    Adaptation: 1.15,
    Patience: 1.9,
    Innovation: 1.1
  },
  results: [
    {
      title: "稀有鱼守望者（Rare+Patience）",
      description: "你是路亚圈的‘生态捕手’，对稀有鱼种的执着近乎信仰。宁愿花费数小时研究其栖息规律，也不愿为短期咬口妥协。你深知稀有鱼的生态价值，每一次成功钓获都像完成一场与自然的对话。",
      formula: "Rare>=16 && Patience>=9",
      suggestion: "加强目标鱼种的季节性洄游研究，可参与渔协的生态监测项目，在追求钓获的同时为保护贡献力量。注意控制作钓频率，避免对稀有鱼栖息地造成压力。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐MH调慢调竿（如达瓦Zillion）+ 1000型微物轮（精准控制），搭配定制深潜米诺（模仿稀有鱼猎物），子线选择隐形碳线（降低警惕性）。 */"
    },
    {
      title: "咬口节奏大师（Frequency+Experience）",
      description: "你的作钓哲学是‘上鱼比鱼大更重要’，享受竿稍持续抖动的快感。对‘窗口期’的把握精准如钟表，能快速根据环境调整策略保持咬口频率。在你眼中，钓鱼的魅力就藏在每一次提竿的期待里。",
      formula: "Frequency>=18 && Experience>=15",
      suggestion: "尝试‘节奏钓法’（如快慢收交替），可参加路亚速钓赛提升反应力。注意记录不同天气下的咬口间隔，建立个人‘咬口节奏数据库’。",
      equip: "数据正在准备中",
      _originalEquip: "/* L调快调竿（如喜马诺Exage）+ 2000型纺车轮（顺滑出线），搭配经典亮片/小胖子（泛用性强），主线用低延展PE线（清晰感知咬口）。 */"
    },
    {
      title: "生态知识学者（Knowledge+Rare）",
      description: "你像一本会走路的《淡水鱼百科全书》，对目标鱼种的食性、繁殖期、天敌链如数家珍。你的钓箱里总装着《中国淡水鱼图鉴》，作钓前必查水域生态报告。稀有鱼在你眼中不仅是目标，更是自然生态的‘指标物种’。",
      formula: "Knowledge>=17 && Rare>=9",
      suggestion: "参与‘鱼种认养计划’，定期记录目标水域的鱼群变化。尝试‘无伤害钓法’（如使用无倒刺钩），减少对鱼体的损伤。",
      equip: "数据正在准备中",
      _originalEquip: "/* ML调中快竿（如伽玛卡兹Airity）+ 便携鱼类测量尺，搭配仿生软饵（如仿石爬子软虫），必备防水笔记本记录生态数据。 */"
    },
    {
      title: "环境适应专家（Adaptation+Frequency）",
      description: "你是钓场的‘多面手’，能快速解读水情/雨情/鱼情变化。从静水到激流，从白天到夜钓，你总有一套对应的策略保持稳定咬口。对‘哪里有鱼’的直觉，源于对环境的深度观察。",
      formula: "Adaptation>=15 && Frequency>=10",
      suggestion: "学习‘环境因子分析法’（如水温每升2℃鱼层变化规律），可尝试‘多标点轮钓法’提升适应力。注意保护钓点环境，避免过度开发。",
      equip: "数据正在准备中",
      _originalEquip: "/* M调中通竿（如宝熊突击者）+ 3000型鼓轮（远投稳定），搭配全水层搜索饵（如VIB+德州钓组），必备防水手机套记录环境参数。 */"
    },
    {
      title: "创新实验达人（Innovation+Experience）",
      description: "你是路亚圈的‘极客玩家’，钓箱里永远有未拆封的新饵和自制改装钓组。‘别人用软虫我用面条虫’‘夜钓加LED灯珠’是你的日常。在你看来，钓鱼的乐趣一半在‘试错’，一半在‘发现’。",
      formula: "Innovation>=17 && Experience>=9",
      suggestion: "建立‘实验日志’记录饵型/水层/天气的组合效果，可加入路亚改装社群交流创意。注意实验需在合法范围内，避免使用禁用饵。",
      equip: "数据正在准备中",
      _originalEquip: "/* UL调超软竿（如达瓦Sword）+ 微物水滴轮（精准抛投），搭配自制发光软饵/羽毛钩，必备便携电子秤记录实验数据。 */"
    },
    {
      title: "成就驱动者（Achievement+Rare）",
      description: "你有清晰的‘钓获清单’，每划掉一个稀有鱼种就像解锁游戏成就。对‘记录鱼’的追求让你不断挑战极限钓场，装备选择永远‘只买对的不买贵的’。你的钓获墙上，挂着的是与自然博弈的勋章。",
      formula: "Achievement>=12 && Rare>=10",
      suggestion: "设定阶段性目标（如年度5种稀有鱼），可参加‘稀有鱼挑战杯’赛事。注意遵守放流规则，大型稀有鱼建议拍照后立即放归。",
      equip: "数据正在准备中",
      _originalEquip: "/* H调暴力竿（如SHIMANO Chronarch）+ 5000型大轮（强拉力），搭配大克重米诺（针对大体型鱼），必备鱼护+氧气泵（暂养观察）。 */"
    },
    {
      title: "数据驱动型玩家（Knowledge+Adaptation）",
      description: "你作钓前必查3天内的气压/水温/月相数据，手机里存着5个钓鱼APP。对‘鱼群活动规律’的分析像做科研，连抛投角度都用量角器校准。在你眼中，钓鱼不是靠运气，而是靠数据支撑的精密计算。",
      formula: "Knowledge>=12 && Adaptation>=11",
      suggestion: "开发个人‘钓鱼数据库’（可使用Excel/Notion），记录钓点/时间/饵型的对应鱼获。尝试‘数据验证钓法’（如根据历史数据反推最佳作钓参数）。",
      equip: "数据正在准备中",
      _originalEquip: "/* 智能钓鱼竿（如Fishbrain联名款）+ 带GPS的渔轮（记录抛投轨迹），搭配可连接APP的智能饵（实时反馈咬口力度），必备防水平板（实时查看数据）。 */"
    },
    {
      title: "平衡体验者（多维度均衡）",
      description: "你懂得在‘目标’与‘过程’间找到完美平衡：既享受上鱼的快感，也珍惜与自然独处的时光；既会为稀有鱼调整策略，也能在普通鱼群中找到乐趣。你的作钓哲学是‘尽兴，而非尽鱼’。",
      formula: "true",
      suggestion: "尝试‘主题作钓日’（如周一追稀有鱼，周三玩高频咬口），保持对钓鱼的新鲜感。参与公益放流活动，将乐趣转化为对生态的回馈。",
      equip: "数据正在准备中",
      _originalEquip: "/* 全能型M调竿（如G.Loomis E6X）+ 2500型通用轮，搭配3-5种泛用饵（如米诺+软虫+VIB），必备折叠马扎+遮阳伞（舒适体验）。 */"
    }
  ],
  resultProbabilities: {
    "稀有鱼守望者（Rare+Patience）": "12.48",
    "咬口节奏大师（Frequency+Experience）": "12.12",
    "生态知识学者（Knowledge+Rare）": "14.86",
    "环境适应专家（Adaptation+Frequency）": "12.85",
    "创新实验达人（Innovation+Experience）": "11.93",
    "成就驱动者（Achievement+Rare）": "5.81",
    "数据驱动型玩家（Knowledge+Adaptation）": "5.21",
    "平衡体验者（多维度均衡）": "24.74"
  }
};
const  fishingResilienceTest= {
  id: 19,
  title: "跑鱼后反应模式心理测评",
  titleshort: "跑鱼后反应模式心理测评",
  type: 5,
  description: "本测试通过模拟跑鱼场景中的行为选择，分析你的挫折应对模式与问题解决风格，帮助理解钓鱼过程中的心理特质。",
  questions: [
    {
      id: 1,
      text: "当鱼在遛鱼阶段脱钩后，你的第一反应是？",
      options: [
        {
          text: "握住竿稍感受残留拉力，回忆刺鱼时的力度反馈",
          resultKey: [
            [
              "Analyze",
              5
            ],
            [
              "Calm",
              5
            ]
          ],
          icon: "🔍"
        },
        {
          text: "立刻拆开钓组检查钩尖锋利度/子线磨损",
          resultKey: [
            [
              "Adjust",
              6
            ],
            [
              "Systematic",
              4
            ]
          ],
          icon: "🔧"
        },
        {
          text: "把竿子砸在地上骂两句，换个更远的标点重抛",
          resultKey: [
            [
              "Impulsive",
              7
            ],
            [
              "Emotional",
              3
            ]
          ],
          icon: "🔥"
        }
      ]
    },
    {
      id: 2,
      text: "跑鱼后重新作钓时，你会优先改变哪个环节？",
      options: [
        {
          text: "调整收线节奏，模仿更自然的饵泳姿",
          resultKey: [
            [
              "Flexible",
              6
            ],
            [
              "Nature",
              4
            ]
          ],
          icon: "🌿"
        },
        {
          text: "换用同类型但更小号的拟饵（如7g改5g）",
          resultKey: [
            [
              "Experiment",
              5.5
            ],
            [
              "Analyze",
              4.5
            ]
          ],
          icon: "🧪"
        },
        {
          text: "完全更换钓组类型（如软饵换硬饵）",
          resultKey: [
            [
              "Impulsive",
              6
            ],
            [
              "Emotional",
              4
            ]
          ],
          icon: "🎢"
        }
      ]
    },
    {
      id: 3,
      text: "连续跑3尾同鱼种后，你会？",
      options: [
        {
          text: "掏出笔记本记录脱钩时间/水深/饵型，对比历史数据",
          resultKey: [
            [
              "Systematic",
              7
            ],
            [
              "Data",
              3
            ]
          ],
          icon: "📊"
        },
        {
          text: "坐在钓箱上抽根烟，观察其他钓友的操作",
          resultKey: [
            [
              "Calm",
              6
            ],
            [
              "Observe",
              4
            ]
          ],
          icon: "🚬"
        },
        {
          text: "收拾装备去5公里外的备用钓点",
          resultKey: [
            [
              "Impulsive",
              8
            ],
            [
              "Action",
              2
            ]
          ],
          icon: "🚗"
        }
      ]
    },
    {
      id: 4,
      text: "跑鱼后朋友说'你肯定是刺鱼太轻'，你的反应是？",
      options: [
        {
          text: "当场演示刺鱼动作，请他帮忙判断力度",
          resultKey: [
            [
              "Adjust",
              5
            ],
            [
              "Collaborate",
              5
            ]
          ],
          icon: "🤝"
        },
        {
          text: "反驳'是鱼个体太大切线'，强调装备没问题",
          resultKey: [
            [
              "Emotional",
              6
            ],
            [
              "Defensive",
              4
            ]
          ],
          icon: "🛡️"
        },
        {
          text: "默默记下这句话，下竿时刻意加力刺鱼",
          resultKey: [
            [
              "Persist",
              7
            ],
            [
              "Analyze",
              3
            ]
          ],
          icon: "💪"
        }
      ]
    },
    {
      id: 5,
      text: "跑鱼后发现是钩门变形导致脱钩，你会？",
      options: [
        {
          text: "立刻更换同型号新钩，检查其他拟饵的钩子",
          resultKey: [
            [
              "Systematic",
              6
            ],
            [
              "Adjust",
              4
            ]
          ],
          icon: "🔄"
        },
        {
          text: "把变形的钩拍下来发钓鱼群求解决方案",
          resultKey: [
            [
              "Collaborate",
              5.5
            ],
            [
              "Data",
              4.5
            ]
          ],
          icon: "📱"
        },
        {
          text: "觉得'今天运气不好'，降低作钓积极性",
          resultKey: [
            [
              "Emotional",
              7
            ],
            [
              "Passive",
              3
            ]
          ],
          icon: "😞"
        }
      ]
    },
    {
      id: 6,
      text: "跑鱼后再次中鱼时，你的操作会？",
      options: [
        {
          text: "刻意放慢遛鱼节奏，全程保持竿子弧度",
          resultKey: [
            [
              "Calm",
              6
            ],
            [
              "Persist",
              4
            ]
          ],
          icon: "🎣"
        },
        {
          text: "比平时更用力刺鱼，担心再次脱钩",
          resultKey: [
            [
              "Impulsive",
              5
            ],
            [
              "Overcompensate",
              5
            ]
          ],
          icon: "⚡"
        },
        {
          text: "根据刚才跑鱼的情况动态调整手法",
          resultKey: [
            [
              "Flexible",
              7
            ],
            [
              "Analyze",
              3
            ]
          ],
          icon: "🔄"
        }
      ]
    },
    {
      id: 7,
      text: "结束作钓后复盘跑鱼事件，你最关注？",
      options: [
        {
          text: "具体操作失误点（如扬竿时机/收线速度）",
          resultKey: [
            [
              "Analyze",
              6
            ],
            [
              "Systematic",
              4
            ]
          ],
          icon: "📝"
        },
        {
          text: "环境变量影响（如水温/风向变化）",
          resultKey: [
            [
              "Nature",
              7
            ],
            [
              "Observe",
              3
            ]
          ],
          icon: "🌤️"
        },
        {
          text: "当时的情绪状态（是否急躁/紧张）",
          resultKey: [
            [
              "Calm",
              5
            ],
            [
              "Emotional",
              5
            ]
          ],
          icon: "❤️"
        }
      ]
    }
  ],
  dimensionWeights: {
    Calm: 1.2,
    Adjust: 1.1,
    Analyze: 1.3,
    Impulsive: 0.9,
    Systematic: 1.15,
    Emotional: 0.8,
    Flexible: 1.25,
    Persist: 1.05
  },
  results: [
    {
      title: "冷静调整者（Calm+Adjust）",
      description: "你是典型的'问题解决型'钓手，跑鱼后能迅速抽离情绪，将注意力集中在可控制的变量上。调整钓组时逻辑清晰，能快速定位装备或操作的薄弱环节，这种特质让你在多次跑鱼后反而越战越稳。",
      formula: "(Calm + Adjust) >= 23",
      suggestion: "保持这种理性特质的同时，可尝试记录每次调整的具体参数（如钩号/饵重变化），建立个人'调整数据库'，未来遇到相似场景能更快决策。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐使用模块化钓组系统（如快换别针+多规格曲柄钩套装），支持30秒内完成钩型/饵重调整，匹配你快速修正的需求。 */"
    },
    {
      title: "系统分析家（Analyze+Systematic）",
      description: "你像钓鱼界的'侦探'，跑鱼对你来说是收集数据的机会。会通过记录时间、水深、饵型等变量，建立因果关系模型，这种系统化的复盘习惯让你能有效避免重复错误，长期来看钓鱼技术会稳定提升。",
      formula: "(Analyze + Systematic) >= 26",
      suggestion: "可尝试使用钓鱼记录APP（如Fishbrain），自动同步GPS/天气数据，结合手动记录的脱钩细节，生成更精准的分析报告。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择带刻度的量饵尺（精确到0.5g）和防水笔记本，方便实时记录拟饵参数；搭配可追溯批次的钩具（如带生产编码的竞技钩），便于排查质量问题。 */"
    },
    {
      title: "情绪波动型（Emotional+Impulsive）",
      description: "跑鱼对你的情绪影响较大，容易因单次失误产生挫败感，进而做出'换饵/换点'等未经充分验证的决策。虽然这种反应很真实，但可能导致错过原本有鱼的标点。",
      formula: "(Emotional + Impulsive) >= 22",
      suggestion: "尝试设置'冷静期'——跑鱼后先做3次深呼吸，观察水面5分钟再行动。可携带小剂量薄荷糖，通过味觉刺激快速平复情绪。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择配色柔和的钓竿（如浅灰/米白）和缓震握把（EVA材质），降低操作时的紧张感；搭配带倒计时功能的渔轮（如Shimano部分型号），提醒自己保持节奏。 */"
    },
    {
      title: "灵活探索者（Flexible+Adjust）",
      description: "你擅长'动态修正'，能根据跑鱼时的具体反馈（如脱钩瞬间的手感）调整策略。这种灵活性让你在复杂鱼情（如鱼口轻/警惕性高）时表现突出，是典型的'应变型'钓手。",
      formula: "(Flexible + Adjust) >= 19",
      suggestion: "可针对性练习'微调整'技巧（如改变收线速度0.2圈/秒），通过小幅度变化测试鱼的反应，避免因调整过大打乱原有节奏。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐使用可变档渔轮（如Daiwa的MagSeal系列），支持快速切换卸力档位；搭配多节调性钓竿（如28调+37调可切换），满足不同修正场景的需求。 */"
    },
    {
      title: "坚持验证者（Persist+Analyze）",
      description: "你具备'科学家精神'，跑鱼后会反复验证修正方案（如连续使用同一种调整后的钓组），直到确认有效。这种坚持让你能深度掌握特定鱼情的应对方法，但需注意避免陷入'过度验证'的陷阱。",
      formula: "(Persist + Analyze) >= 20",
      suggestion: "设置'验证上限'（如连续5次跑鱼后必须换策略），避免在无效方案上浪费时间；可邀请钓友共同验证，通过第三方视角确认调整效果。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择耐用型钓组（如防咬线+加强钩），支持高频次验证；搭配可计数的渔轮（如带抛投次数统计功能），量化验证过程。 */"
    },
    {
      title: "自然感知者（Calm+Nature）",
      description: "你能将跑鱼经历与自然规律结合（如水温变化影响鱼的吃口力度），这种'环境关联'思维让你更关注整体鱼情而非单次失误。钓鱼对你来说不仅是竞技，更是与自然对话的过程。",
      formula: "(Calm + Nature) >= 17",
      suggestion: "加强环境观察训练（如记录每小时水温变化），学习鱼类行为学基础（如不同温度下的攻击模式），将直觉感知转化为系统认知。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择带温度感应的浮水饵（如部分智能拟饵），实时反馈水层温度；搭配防水型环境记录仪（如Hobo数据采集器），建立个人环境-鱼情数据库。 */"
    },
    {
      title: "协作成长型（Collaborate+Systematic）",
      description: "你善于利用外部资源，跑鱼后会主动寻求钓友/网络建议，并将他人经验整合到自己的体系中。这种开放心态让你能快速吸收多元知识，是典型的'社交学习型'钓手。",
      formula: "(Collaborate + Systematic) >= 16",
      suggestion: "加入垂直钓鱼社群（如抖音路亚圈/小红书钓手群），参与'跑鱼案例分析'话题，通过集体智慧提升问题解决效率；定期组织线下钓研活动，现场验证调整方案。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择可快速展示的钓组（如透明线盒+标签标注），方便向他人讲解；搭配便携拍摄设备（如GoPro胸戴式），记录跑鱼瞬间供群友分析。 */"
    },
    {
      title: "均衡发展者（综合型）",
      description: "你在各维度表现均衡，既不会因跑鱼过度焦虑，也不会忽视必要的调整；既能理性分析，也保持着对自然的感知。这种平衡让你在大多数钓鱼场景中都能稳定发挥，是典型的'全能型'钓手。",
      formula: "true",
      suggestion: "可针对性强化某一优势维度（如系统分析或灵活调整），将均衡特质转化为独特竞争力；尝试参加多鱼种挑战赛，在复杂场景中验证综合能力。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择全能型装备（如M调泛用竿+2000型渔轮），搭配全水层拟饵套装（软饵/硬饵/浮水米诺），满足不同鱼情需求；配备多功能钓箱（带工具区+饵盒区），提升操作效率。 */"
    }
  ],
  resultProbabilities: {
    "冷静调整者（Calm+Adjust）": "13.85",
    "系统分析家（Analyze+Systematic）": "16.23",
    "情绪波动型（Emotional+Impulsive）": "16.87",
    "灵活探索者（Flexible+Adjust）": "8.78",
    "坚持验证者（Persist+Analyze）": "8.92",
    "自然感知者（Calm+Nature）": "10.24",
    "协作成长型（Collaborate+Systematic）": "5.35",
    "均衡发展者（综合型）": "19.75"
  }
};
const catchAndReleaseTest= {
  id: 20,
  title: "钓获放流决策人格图谱",
  titleshort: "钓获放流决策",
  type: 2,
  questions: [
    {
      id: 1,
      text: "钓获一尾体长明显小于当地规定最小可保留尺寸的幼鱼时，你会？",
      options: [
        {
          text: "立即摘钩放流，默念'等你长大'并记录体长",
          resultKey: [
            [
              "Eco",
              6
            ],
            [
              "Future",
              4
            ]
          ],
          icon: "🐟"
        },
        {
          text: "犹豫5秒后放回，但拍照发圈强调'主动放流'",
          resultKey: [
            [
              "Emo",
              5
            ],
            [
              "Rule",
              5
            ]
          ],
          icon: "📸"
        },
        {
          text: "检查是否受伤，若健康则暂存鱼护，收竿前看总渔获量再决定",
          resultKey: [
            [
              "Prag",
              7
            ],
            [
              "Observe",
              3
            ]
          ],
          icon: "🧺"
        }
      ]
    },
    {
      id: 2,
      text: "意外钓获国家二级保护鱼种（确认无误），此时鱼已脱钩受伤，你会？",
      options: [
        {
          text: "立即联系渔政部门报备，全程录像等待专业处理",
          resultKey: [
            [
              "Rule",
              8
            ],
            [
              "Know",
              2
            ]
          ],
          icon: "📞"
        },
        {
          text: "用最快手法简单处理伤口后轻缓放流，祈祷它能存活",
          resultKey: [
            [
              "Eco",
              7
            ],
            [
              "Decide",
              3
            ]
          ],
          icon: "🩹"
        },
        {
          text: "纠结半小时，最终用手机查法律条款后选择放流",
          resultKey: [
            [
              "Know",
              6
            ],
            [
              "Observe",
              4
            ]
          ],
          icon: "📚"
        }
      ]
    },
    {
      id: 3,
      text: "家庭聚餐急需一条鱼做食材，此时钓获一尾符合尺寸的健康成鱼，你会？",
      options: [
        {
          text: "直接保留，处理时尽量减少浪费（取肉留骨做鱼粉）",
          resultKey: [
            [
              "Prag",
              6
            ],
            [
              "Emo",
              4
            ]
          ],
          icon: "🍲"
        },
        {
          text: "先放流，改去市场购买养殖鱼完成聚餐",
          resultKey: [
            [
              "Eco",
              7
            ],
            [
              "Future",
              3
            ]
          ],
          icon: "🛒"
        },
        {
          text: "询问同行钓友意见，根据多数人建议决定",
          resultKey: [
            [
              "Observe",
              5
            ],
            [
              "Emo",
              5
            ]
          ],
          icon: "👥"
        }
      ]
    },
    {
      id: 4,
      text: "钓获一尾严重脱鳞、疑似患病的成鱼（非保护种），你会？",
      options: [
        {
          text: "果断放流，避免带病个体污染鱼群",
          resultKey: [
            [
              "Eco",
              7
            ],
            [
              "Know",
              3
            ]
          ],
          icon: "🚫"
        },
        {
          text: "保留但不食用，用于研究记录病变特征",
          resultKey: [
            [
              "Know",
              6
            ],
            [
              "Decide",
              4
            ]
          ],
          icon: "🔬"
        },
        {
          text: "犹豫后放回，但担心影响自己今天鱼获统计",
          resultKey: [
            [
              "Emo",
              5
            ],
            [
              "Prag",
              5
            ]
          ],
          icon: "😟"
        }
      ]
    },
    {
      id: 5,
      text: "同伴坚持要保留一尾接近最小尺寸的鱼（法律允许但生态建议放流），你会？",
      options: [
        {
          text: "明确反对并解释生态影响，必要时替其放回",
          resultKey: [
            [
              "Eco",
              8
            ],
            [
              "Decide",
              2
            ]
          ],
          icon: "🚨"
        },
        {
          text: "随他决定，但自己坚持不放流此类鱼",
          resultKey: [
            [
              "Rule",
              6
            ],
            [
              "Observe",
              4
            ]
          ],
          icon: "🤷"
        },
        {
          text: "妥协并帮忙处理，但提醒下次注意",
          resultKey: [
            [
              "Emo",
              7
            ],
            [
              "Prag",
              3
            ]
          ],
          icon: "🤝"
        }
      ]
    },
    {
      id: 6,
      text: "在严格禁渔期误钓一尾可食用鱼（无执法巡查），你会？",
      options: [
        {
          text: "立即放流并自责，后续主动学习禁渔规定",
          resultKey: [
            [
              "Rule",
              7
            ],
            [
              "Future",
              3
            ]
          ],
          icon: "🙏"
        },
        {
          text: "快速放流但不声张，担心被他人效仿",
          resultKey: [
            [
              "Observe",
              6
            ],
            [
              "Eco",
              4
            ]
          ],
          icon: "👀"
        },
        {
          text: "保留但仅自用，认为'偶尔一次没关系'",
          resultKey: [
            [
              "Prag",
              5
            ],
            [
              "Emo",
              5
            ]
          ],
          icon: "🍴"
        }
      ]
    },
    {
      id: 7,
      text: "放流时发现鱼体僵硬（可能存活低），你会？",
      options: [
        {
          text: "改为保留并联系科研机构做标本",
          resultKey: [
            [
              "Know",
              7
            ],
            [
              "Decide",
              3
            ]
          ],
          icon: "🦴"
        },
        {
          text: "尝试人工呼吸/活水复苏后再放流",
          resultKey: [
            [
              "Eco",
              6
            ],
            [
              "Emo",
              4
            ]
          ],
          icon: "💨"
        },
        {
          text: "直接放回，认为'听天由命'",
          resultKey: [
            [
              "Prag",
              5
            ],
            [
              "Observe",
              5
            ]
          ],
          icon: "🌊"
        }
      ]
    }
  ],
  dimensionWeights: {
    Eco: 1.2,
    Prag: 1.1,
    Observe: 1.05,
    Rule: 1.15,
    Emo: 1,
    Know: 1.25,
    Decide: 1.1,
    Future: 1.08
  },
  results: [
    {
      title: "生态守护者（Eco+Future）",
      description: "你将生态保护视为钓鱼的第一准则，每一次放流决策都经过对种群延续的深度考量。对幼鱼、保护鱼种的敏感程度远超常规钓者，甚至会主动学习鱼类生长周期知识，是水域生态的自觉维护者。",
      formula: "Eco*1.2 + Future*1.08 >= 41",
      suggestion: "可参与本地渔政的'放流志愿者'项目，用专业知识影响更多人；记录放流数据（体长/时间/位置），为鱼类资源研究提供民间样本。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐无倒刺三本钩（减少鱼体损伤）+ 便携电子测鱼尺（精准判断尺寸）+ 防水记录板（实时记录放流信息）。 */"
    },
    {
      title: "务实生存者（Prag+Emo）",
      description: "你的决策始终围绕'实际需求'展开，家庭食用、同伴关系等现实因素会影响最终选择。虽不刻意追求生态标签，但会在实用与道德间寻找平衡，是典型的'生活型钓者'。",
      formula: "Prag*1.1 + Emo*1.0 >= 38",
      suggestion: "尝试用'替代方案'满足需求（如用养殖鱼替代野生鱼做家宴），既能维持生活仪式感，又能减少野生资源消耗。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐多用软饵（减少鱼体伤害，便于放流）+ 小型保冷箱（保留时确保食材新鲜）+ 折叠取钩器（快速摘钩降低应激）。 */"
    },
    {
      title: "规则捍卫者（Rule+Know）",
      description: "法律条款与渔业知识是你的决策坐标，对禁渔期、最小尺寸等规定烂熟于心。遇到争议场景会优先查证依据，是钓鱼圈的'移动法规库'，同时注重用知识说服他人。",
      formula: "Rule*1.15 + Know*1.25 >= 37",
      suggestion: "可考取'休闲渔业指导员'资格，将知识转化为公共价值；定期参与钓鱼社群普法活动，用案例讲解替代单纯说教。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐带法律条款速查功能的钓鱼APP（绑定智能手表提醒）+ 防水法律手册（装在钓箱夹层）+ 高清鱼种识别卡（快速确认保护物种）。 */"
    },
    {
      title: "观察洞察者（Observe+Eco）",
      description: "你擅长通过鱼体状态、环境变化预判放流效果。能敏锐发现鱼的受伤程度、水质异常等细节，决策既理性又充满对生命的尊重，是'用眼睛钓鱼'的生态观察者。",
      formula: "Observe*1.05 + Eco*1.2 >= 40",
      suggestion: "尝试记录'放流日志'（含鱼体状态/水温/放流后行为），长期观察可总结出本地鱼类的恢复规律；学习基础鱼类解剖知识，提升对伤情的判断准确率。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐微距摄影渔获夹（拍摄鱼体细节）+ 电子温度计（测量放流水温）+ 透明放生袋（观察放流后游动状态）。 */"
    },
    {
      title: "情感联结者（Emo+Decide）",
      description: "你的决策常被对鱼的共情驱动——会因鱼的'可怜模样'选择放流，也会因同伴需求果断妥协。情感与行动的联结紧密，是钓鱼圈里'最有人情味'的类型。",
      formula: "Emo*1.0 + Decide*1.1 >= 21",
      suggestion: "尝试用'情感转化'策略：将对单尾鱼的同情，转化为对整个鱼群的保护行动（如参与增殖放流）；与同伴沟通时，用'我们一起保护下次的鱼'替代'这次听我的'。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐仿生活体饵（减少鱼的应激反应）+ 软木握把钓竿（提升持竿舒适度，延长作钓耐心）+ 卡通标识放生网（增加放流仪式感）。 */"
    },
    {
      title: "未来视角者（Future+Know）",
      description: "你习惯用5-10年的时间维度看待钓鱼：现在放流的幼鱼，未来可能成为鱼群的核心繁殖个体。会主动学习鱼类种群模型知识，是钓鱼圈的'长期主义者'。",
      formula: "Future*1.08 + Know*1.25 >= 21",
      suggestion: "参与'标记放流'项目（给放流鱼安装微型标识），跟踪其生长轨迹；学习基础统计学，用数据证明'放流-资源恢复'的正相关关系。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐带GPS定位的智能鱼护（记录放流位置）+ 可回收标记贴（安全固定在鱼鳍）+ 水下摄像头（观察放流后鱼群反应）。 */"
    },
    {
      title: "平衡协调者（Prag+Rule）",
      description: "你能精准把握'实用需求'与'规则边界'的平衡点：既不会为生态标签过度牺牲生活需求，也不会因小利触碰法律红线，是钓鱼圈的'理性调解者'。",
      formula: "Prag*1.1 + Rule*1.15 >= 29",
      suggestion: "总结'个人放流清单'（如'非必要不保留2斤以下鲈鱼'），用明确标准减少决策内耗；遇到同伴越界时，用'我之前试过...更划算'替代'你这样不对'。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐多型号控鱼器（适应不同尺寸鱼体）+ 可折叠量尺（快速确认是否达标）+ 双仓鱼护（区分保留与放流鱼）。 */"
    },
    {
      title: "知识实践派（Know+Decide）",
      description: "你将渔业知识转化为果断行动：发现病鱼会立即处理，遇到保护种能快速联系专业机构。知识储备不是谈资，而是指导行动的'操作手册'，是钓鱼圈的'行动科学家'。",
      formula: "Know*2 + Decide*2 >= 19",
      suggestion: "考取'水生生物救护员'资格，提升对受伤鱼的处理能力；建立'应急工具箱'（含生理盐水、伤口敷料、便携氧气泵），应对突发情况。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐医用级取钩钳（消毒处理）+ 便携水质检测仪（快速判断放流水质）+ 防水急救包（含鱼用复苏工具）。 */"
    },
    {
      title: "均衡体验者（均衡得分）",
      description: "你的放流决策常受情绪、环境等随机因素影响，对生态规则、鱼类知识了解有限。钓鱼对你而言更多是放松方式，而非需要深度思考的行为。",
      formula: "true",
      suggestion: "从'基础认知'开始：学习本地常见鱼种的最小可捕尺寸、保护物种名录；尝试'单次专注放流'——本周作钓只放流，强迫自己观察鱼的状态。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐入门级无倒刺钩（降低伤害）+ 简易测鱼尺（固定在钓箱）+ 鱼类图鉴手册（放钓包外侧）。 */"
    }
  ],
  resultProbabilities: {
    "生态守护者（Eco+Future）": "11.48",
    "务实生存者（Prag+Emo）": "10.29",
    "规则捍卫者（Rule+Know）": "12.39",
    "观察洞察者（Observe+Eco）": "14.04",
    "情感联结者（Emo+Decide）": "11.52",
    "未来视角者（Future+Know）": "10.52",
    "平衡协调者（Prag+Rule）": "14.31",
    "知识实践派（Know+Decide）": "9.47",
    "均衡体验者（均衡得分）": "5.99"
  }
};
const  socialSharingTest= {
  id: 21,
  title: "钓鱼社交分享意愿深度测评",
  titleshort: "社交分享意愿测评",
  type: 4,
  questions: [
    {
      id: 1,
      text: "发现一个从未有人钓过的优质野生钓点（已知有稀有鱼种），你会？",
      options: [
        {
          text: "立即在钓友群详细分享位置+作钓时间",
          resultKey: [
            [
              "Cooperation",
              6
            ],
            [
              "Altruism",
              4
            ]
          ],
          icon: "📢"
        },
        {
          text: "仅告诉3-5个长期互信的钓友",
          resultKey: [
            [
              "Community",
              5
            ],
            [
              "Curiosity",
              5
            ]
          ],
          icon: "👥"
        },
        {
          text: "用虚拟定位发朋友圈暗示，实际地点保密",
          resultKey: [
            [
              "Privacy",
              7
            ],
            [
              "Security",
              3
            ]
          ],
          icon: "🔒"
        }
      ]
    },
    {
      id: 2,
      text: "耗时半年研发出「暴雨后激流钓鳜鱼」独家技巧，被新手追问细节时，你会？",
      options: [
        {
          text: "录制10分钟教学视频+钓组参数表发送",
          resultKey: [
            [
              "Altruism",
              6.5
            ],
            [
              "Recognition",
              3.5
            ]
          ],
          icon: "📹"
        },
        {
          text: "只说「选7克VIB搜结构」等基础信息",
          resultKey: [
            [
              "Community",
              5
            ],
            [
              "Cooperation",
              5
            ]
          ],
          icon: "💬"
        },
        {
          text: "以「秘密武器不能说」礼貌拒绝",
          resultKey: [
            [
              "Competition",
              6
            ],
            [
              "Privacy",
              4
            ]
          ],
          icon: "🙅"
        }
      ]
    },
    {
      id: 3,
      text: "钓到1.2米巨型翘嘴并拍照后，你会在社交平台？",
      options: [
        {
          text: "带精确定位+钓竿型号+饵重参数",
          resultKey: [
            [
              "Recognition",
              7
            ],
            [
              "Altruism",
              3
            ]
          ],
          icon: "📍"
        },
        {
          text: "风景照遮挡钓点特征+配文「野钓快乐」",
          resultKey: [
            [
              "Privacy",
              5.5
            ],
            [
              "Community",
              4.5
            ]
          ],
          icon: "🏞️"
        },
        {
          text: "仅私发给3个核心钓友+叮嘱保密",
          resultKey: [
            [
              "Security",
              6
            ],
            [
              "Cooperation",
              4
            ]
          ],
          icon: "📥"
        }
      ]
    },
    {
      id: 4,
      text: "看到你曾分享的钓点因过度捕捞出现死鱼，你会？",
      options: [
        {
          text: "发长文呼吁「留大放小」并分享生态维护经验",
          resultKey: [
            [
              "Cooperation",
              7
            ],
            [
              "Community",
              3
            ]
          ],
          icon: "🌱"
        },
        {
          text: "删除原分享并设置「仅自己可见」",
          resultKey: [
            [
              "Security",
              6
            ],
            [
              "Privacy",
              4
            ]
          ],
          icon: "🗑️"
        },
        {
          text: "私下联系当地渔政反映情况",
          resultKey: [
            [
              "Altruism",
              5
            ],
            [
              "Curiosity",
              5
            ]
          ],
          icon: "📞"
        }
      ]
    },
    {
      id: 5,
      text: "新加入500人钓鱼大群后，你主动分享的频率？",
      options: [
        {
          text: "每周至少3次（钓获/技巧/装备测评）",
          resultKey: [
            [
              "Community",
              8
            ],
            [
              "Recognition",
              2
            ]
          ],
          icon: "⏳"
        },
        {
          text: "遇到有价值内容（如特殊鱼情）才分享",
          resultKey: [
            [
              "Altruism",
              6
            ],
            [
              "Cooperation",
              4
            ]
          ],
          icon: "💡"
        },
        {
          text: "基本只看别人分享，自己很少发言",
          resultKey: [
            [
              "Privacy",
              7
            ],
            [
              "Security",
              3
            ]
          ],
          icon: "👁️"
        }
      ]
    },
    {
      id: 6,
      text: "分享的钓点被钓友评论「去了3次都空军，骗子」，你会？",
      options: [
        {
          text: "逐条回复解释「需雨后2小时作钓」等细节",
          resultKey: [
            [
              "Recognition",
              6
            ],
            [
              "Cooperation",
              4
            ]
          ],
          icon: "💬"
        },
        {
          text: "直接拉黑评论者并隐藏该条分享",
          resultKey: [
            [
              "Competition",
              5
            ],
            [
              "Privacy",
              5
            ]
          ],
          icon: "🚫"
        },
        {
          text: "修改原帖增加「天气/时段」注意事项",
          resultKey: [
            [
              "Curiosity",
              7
            ],
            [
              "Community",
              3
            ]
          ],
          icon: "📝"
        }
      ]
    },
    {
      id: 7,
      text: "好友想跟你组队去你的「秘密黑坑」，你会？",
      options: [
        {
          text: "欣然同意并提前教他针对性技巧",
          resultKey: [
            [
              "Altruism",
              6
            ],
            [
              "Cooperation",
              4
            ]
          ],
          icon: "🤝"
        },
        {
          text: "以「近期鱼口差」为由婉拒",
          resultKey: [
            [
              "Security",
              5
            ],
            [
              "Privacy",
              5
            ]
          ],
          icon: "🙏"
        },
        {
          text: "先带他去其他普通钓点试探人品",
          resultKey: [
            [
              "Competition",
              4
            ],
            [
              "Curiosity",
              6
            ]
          ],
          icon: "🔍"
        }
      ]
    }
  ],
  dimensionWeights: {
    Cooperation: 1.45,
    Competition: 1.4,
    Altruism: 1.25,
    Privacy: 1.5,
    Community: 1.75,
    Recognition: 1.4,
    Security: 1.55,
    Curiosity: 1.5
  },
  results: [
    {
      title: "共享型钓者（Cooperation+Altruism）",
      description: "你是钓鱼圈的「分享大使」，坚信「独钓乐不如众钓乐」。主动分享优质资源时，既出于帮助他人的善意，也享受社群互动的温暖。你的分享常附带实用细节，是新手眼中的「活教材」，也是圈子里的凝聚力核心。",
      formula: "(Cooperation>=20 && Altruism>=17)",
      suggestion: "可尝试组织线下分享会，系统输出钓鱼经验；注意筛选分享对象，避免优质钓点因过度曝光受损。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐带4K防抖的运动相机（如GoPro HERO11），方便记录作钓过程；配备防水笔记本，随时记录可分享的技巧细节。 */"
    },
    {
      title: "谨慎守护者（Privacy+Security）",
      description: "你像钓鱼界的「守宝人」，深知优质资源的珍贵性。对分享保持高度警惕，更相信「沉默是金」。你的谨慎并非自私，而是出于对生态和个人劳动成果的保护，在圈子里常被视作「可靠但神秘」的存在。",
      formula: "(Privacy>=22 && Security>=19)",
      suggestion: "可尝试小范围（3-5人）的深度分享，建立互信关系；分享时增加「保护提示」（如「留大放小」），平衡隐私与责任。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择隐蔽性强的钓具（如迷彩涂装钓箱）；使用位置打码APP（如美图秀秀「模糊定位」），保护核心钓点信息。 */"
    },
    {
      title: "社群连接器（Community+Recognition）",
      description: "你是钓鱼社群的「活跃分子」，分享频率高且内容多样。既享受被认可的成就感，也渴望通过分享维系社群关系。你的朋友圈像「钓鱼生活志」，从鱼获到装备测评，总能引发热烈讨论。",
      formula: "(Community>=19 && Recognition>=12)",
      suggestion: "提升分享内容的专业性（如加入数据对比），避免沦为「流水账」；参与社群管理（如担任版主），将活跃能量转化为正向引导。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐多接口的移动电源（保证拍摄设备续航）；使用钓鱼专用修图APP（如FishAngler），快速生成专业分享图。 */"
    },
    {
      title: "竞争型隐者（Competition+Privacy）",
      description: "你将钓鱼视为「个人战场」，对核心资源的保护源于潜在的竞争意识。不主动分享并非不信任，而是享受「比他人多知道一点」的优势感。在竞技钓领域，这种特质可能成为你的秘密武器。",
      formula: "(Competition>=13 && Privacy>=15)",
      suggestion: "可尝试「技术换资源」（如用独家技巧交换他人钓点），扩大信息圈；参与正规钓鱼比赛，将竞争心理转化为提升动力。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择轻量化竞技钓竿（如达瓦Zillion），满足快速作钓需求；配备防水密码盒，存放核心钓点笔记。 */"
    },
    {
      title: "利他布道者（Altruism+Recognition）",
      description: "你是钓鱼界的「知识传播者」，分享行为自带「教学属性」。既希望帮助他人少走弯路，也期待通过专业输出获得行业认可。你的分享常附带「为什么这样做」的原理分析，深受进阶钓友喜爱。",
      formula: "(Altruism>=18 && Recognition>=14)",
      suggestion: "尝试制作系列教学视频（如「从选饵到找鱼」），系统输出知识；申请钓鱼平台认证专家，提升内容权威性。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐可调节角度的鱼竿支架（方便拍摄教学画面）；使用专业录音设备（如罗德VideoMic），保证讲解清晰度。 */"
    },
    {
      title: "安全观察者（Security+Curiosity）",
      description: "你像钓鱼圈的「侦察兵」，分享前会反复观察验证。既担心分享带来的风险，又好奇「分享后会发生什么」。这种矛盾让你成为「渐进式分享者」——先小范围测试，再决定是否扩大传播。",
      formula: "(Security>=16 && Curiosity>=13)",
      suggestion: "建立「分享日志」，记录每次分享后的反馈（如鱼情变化），用数据指导决策；参与「分享实验小组」，与同类钓友交换观察经验。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐带GPS轨迹记录的智能手表（如佳明EPIX），方便验证钓点热度；使用便签贴纸记录「分享测试期」，提醒自己跟进效果。 */"
    },
    {
      title: "反思型分享者（Curiosity+Community）",
      description: "你是钓鱼圈的「思考型分享者」，分享行为自带「研究属性」。不仅关注分享内容本身，更在意「分享如何影响社群」。常通过调整分享策略（如模糊定位）观察反馈，是圈子里的「分享实验家」。",
      formula: "(Curiosity>=18 && Community>=16)",
      suggestion: "发表「分享观察报告」（如「模糊定位对钓点保护的影响」），推动圈子理性分享；参与「钓鱼社会学」讨论，用思考提升分享价值。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐带时间戳的相机（如索尼A7C II），方便记录分享前后的钓点变化；使用思维导图APP（如XMind），整理分享策略逻辑。 */"
    },
    {
      title: "平衡分享者（多维度均衡）",
      description: "你对分享的态度灵活务实，能根据场景调整策略——该分享时慷慨，需保护时谨慎，需互动时活跃。这种「平衡感」让你在圈子里人缘极佳，既被信任又不被过度依赖。",
      formula: "true",
      suggestion: "继续保持「具体问题具体分析」的风格；可尝试「主题式分享」（如每月固定分享一类技巧），提升个人标签感。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择多功能钓包（如SHIMANO跨界系列），满足不同分享场景需求；配备便携折叠凳（方便临时分享时与钓友交流）。 */"
    }
  ],
  resultProbabilities: {
    "共享型钓者（Cooperation+Altruism）": "12.48",
    "谨慎守护者（Privacy+Security）": "11.61",
    "社群连接器（Community+Recognition）": "10.70",
    "竞争型隐者（Competition+Privacy）": "10.93",
    "利他布道者（Altruism+Recognition）": "4.71",
    "安全观察者（Security+Curiosity）": "4.94",
    "反思型分享者（Curiosity+Community）": "9.10",
    "平衡分享者（多维度均衡）": "35.53"
  }
};
const  fishingComparisonTest= {
  id: 22,
  title: "渔获对比心理精密分析",
  titleshort: "渔获对比心理精密分析",
  type: 4,
  questions: [
    {
      id: 1,
      text: "当相邻钓友的渔获明显多于你时，你的第一反应是？",
      options: [
        {
          text: "心里发紧，反复检查自己的钓组是否有问题",
          resultKey: [
            [
              "Achievement",
              6
            ],
            [
              "Selfidentity",
              4
            ]
          ],
          icon: "😣"
        },
        {
          text: "主动观察对方的操作，默默记录拟饵和抛投频率",
          resultKey: [
            [
              "Competition",
              5
            ],
            [
              "Growthmindset",
              5
            ]
          ],
          icon: "🔍"
        },
        {
          text: "扫一眼后继续专注自己的节奏，觉得鱼情随时会变",
          resultKey: [
            [
              "Detachment",
              7
            ],
            [
              "Enjoyment",
              3
            ]
          ],
          icon: "🌿"
        }
      ]
    },
    {
      id: 2,
      text: "如果连续3次作钓渔获都不如常一起的钓友，你会？",
      options: [
        {
          text: "减少和他同行，避免对比压力",
          resultKey: [
            [
              "Selfidentity",
              7
            ],
            [
              "Socialcomparison",
              3
            ]
          ],
          icon: "🚫"
        },
        {
          text: "私下加练拟饵操控技巧，下次要'翻盘'",
          resultKey: [
            [
              "Achievement",
              5
            ],
            [
              "Resilience",
              5
            ]
          ],
          icon: "💪"
        },
        {
          text: "和他交流心得，互相分享经验",
          resultKey: [
            [
              "Growthmindset",
              6
            ],
            [
              "Enjoyment",
              4
            ]
          ],
          icon: "🤝"
        }
      ]
    },
    {
      id: 3,
      text: "朋友在群里晒'爆护'照片并@你时，你的回复通常是？",
      options: [
        {
          text: "点赞但不评论，内心觉得'他运气好'",
          resultKey: [
            [
              "Socialcomparison",
              6
            ],
            [
              "Selfidentity",
              4
            ]
          ],
          icon: "👍"
        },
        {
          text: "请教具体钓点和用饵，计划下周去验证",
          resultKey: [
            [
              "Competition",
              4
            ],
            [
              "Growthmindset",
              6
            ]
          ],
          icon: "📝"
        },
        {
          text: "调侃'这得请我喝奶茶'，顺便发自己的'空军'照",
          resultKey: [
            [
              "Detachment",
              5
            ],
            [
              "Enjoyment",
              5
            ]
          ],
          icon: "😄"
        }
      ]
    },
    {
      id: 4,
      text: "作钓结束统计渔获时，你最关注的是？",
      options: [
        {
          text: "和上次自己的记录比是否进步",
          resultKey: [
            [
              "Achievement",
              8
            ],
            [
              "Resilience",
              2
            ]
          ],
          icon: "📈"
        },
        {
          text: "和同行所有人的数量/大小排名",
          resultKey: [
            [
              "Competition",
              7
            ],
            [
              "Socialcomparison",
              3
            ]
          ],
          icon: "🏆"
        },
        {
          text: "今天有没有钓到新鱼种/解锁新操作",
          resultKey: [
            [
              "Growthmindset",
              6
            ],
            [
              "Enjoyment",
              4
            ]
          ],
          icon: "🎣"
        }
      ]
    },
    {
      id: 5,
      text: "当别人夸赞你'今天钓得比我好'时，你的回应是？",
      options: [
        {
          text: "'侥幸，可能你钓点鱼少'",
          resultKey: [
            [
              "Selfidentity",
              5
            ],
            [
              "Detachment",
              5
            ]
          ],
          icon: "🙊"
        },
        {
          text: "'我用了新拟饵，确实比之前有效'",
          resultKey: [
            [
              "Achievement",
              6
            ],
            [
              "Growthmindset",
              4
            ]
          ],
          icon: "💡"
        },
        {
          text: "'钓鱼不就图个乐，多几条少几条无所谓'",
          resultKey: [
            [
              "Enjoyment",
              7
            ],
            [
              "Detachment",
              3
            ]
          ],
          icon: "🌞"
        }
      ]
    },
    {
      id: 6,
      text: "遇到鱼口差但其他钓友上鱼时，你会优先？",
      options: [
        {
          text: "怀疑自己技术不行，焦虑得想换钓点",
          resultKey: [
            [
              "Selfidentity",
              6
            ],
            [
              "Socialcomparison",
              4
            ]
          ],
          icon: "😰"
        },
        {
          text: "分析水层/光线差异，调整搜索策略",
          resultKey: [
            [
              "Competition",
              5
            ],
            [
              "Resilience",
              5
            ]
          ],
          icon: "🧪"
        },
        {
          text: "坐下来抽根烟，看水鸟飞觉得也挺有意思",
          resultKey: [
            [
              "Detachment",
              7
            ],
            [
              "Enjoyment",
              3
            ]
          ],
          icon: "🕊️"
        }
      ]
    },
    {
      id: 7,
      text: "计划下次作钓时，你更倾向？",
      options: [
        {
          text: "选择之前输过的钓点，一定要证明自己",
          resultKey: [
            [
              "Achievement",
              7
            ],
            [
              "Resilience",
              3
            ]
          ],
          icon: "🔥"
        },
        {
          text: "去大家都说难钓的地方，挑战高难度目标鱼",
          resultKey: [
            [
              "Competition",
              6
            ],
            [
              "Growthmindset",
              4
            ]
          ],
          icon: "🎯"
        },
        {
          text: "找个风景好的野塘，有口就钓，没口当踏青",
          resultKey: [
            [
              "Enjoyment",
              8
            ],
            [
              "Detachment",
              2
            ]
          ],
          icon: "🏞️"
        }
      ]
    }
  ],
  dimensionWeights: {
    Achievement: 1.2,
    Selfidentity: 1.1,
    Competition: 1.3,
    Resilience: 1.65,
    Detachment: 1.1,
    Socialcomparison: 1.2,
    Growthmindset: 1.65,
    Enjoyment: 1.3
  },
  results: [
    {
      title: "成就驱动者（Achievement+Resilience）",
      description: "你将钓鱼视为自我突破的战场，每次渔获对比都像一场升级挑战。即使暂时落后，也能迅速调整状态，用更强的执行力证明自己。你的成就感不仅来自鱼获，更来自'比昨天的自己更好'的成长轨迹。",
      formula: "Achievement>=16 && Resilience>=14",
      suggestion: "建议定期记录作钓日志，区分'客观鱼情'与'主观技术'的影响，避免将偶然因素过度归因于自身能力。偶尔尝试休闲钓法（如飞蝇钓），体验不同维度的钓鱼乐趣。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐1662ML调直柄竿（精准抛投+控饵）+ 2000型纺车轮（顺滑卸力），搭配计数铅头钩（可量化搜索水层），满足你对技术验证的需求。 */"
    },
    {
      title: "成长型钓手（Growthmindset+Competition）",
      description: "你像块海绵般吸收所有对比信息——对手的拟饵、抛投节奏、标点选择都是你的'学习素材'。对渔获差异的第一反应不是挫败，而是'我能从中学到什么'。这种将竞争转化为成长的思维，让你在钓坛持续进化。",
      formula: "Growthmindset>=22 && Competition>=15",
      suggestion: "可组织'技术交换局'，与钓友约定互相公开拟饵配方/钓点信息，通过合作式竞争加速成长。注意平衡'学习'与'实践'，避免陷入'过度分析'的陷阱。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐模块化钓箱（多隔层收纳实验饵）+ 防水笔记本（记录实时观察），搭配变色软饵（水温变化显色，辅助分析鱼层），满足你对数据收集的需求。 */"
    },
    {
      title: "超然体验者（Detachment+Enjoyment）",
      description: "对渔获对比，你总有一种'云淡风轻'的松弛感——鱼多鱼少都是自然的馈赠，水面的涟漪、风的温度、水鸟的鸣叫，这些'非渔获收获'才是你最珍惜的记忆。钓鱼于你，是与自然对话的方式，而非竞技舞台。",
      formula: "Detachment>=18 && Enjoyment>=14",
      suggestion: "可尝试'无目标作钓'——不带特定鱼种预期，专注感受每个抛投的流畅度、拟饵在水中的姿态。选择生态保护钓点（如放流示范塘），强化'与自然共生'的体验感。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐37调溪流竿（手感轻盈）+ 竹制鱼护（减少对鱼体损伤），搭配仿生昆虫拟饵（贴近自然生态），契合你'轻结果、重体验'的需求。 */"
    },
    {
      title: "自我验证者（Selfidentity+Socialcomparison）",
      description: "你的钓鱼自信与他人评价深度绑定——当渔获占优时，会觉得'我果然有天赋'；若落后则容易陷入'我是不是不适合钓鱼'的自我怀疑。这种敏感的对比心理，本质是对'自我价值'的强烈确认需求。",
      formula: "Selfidentity>=16 && Socialcomparison>=10",
      suggestion: "尝试建立'三维评价体系'：技术进步（如抛投准确率提升）、自然感知（如识别3种以上鱼星）、情绪价值（如钓到鱼时的兴奋度）。用多元标准替代单一渔获对比，逐步构建稳定的内在认同。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐定制握把钓竿（刻有个人钓龄/里程碑）+ 可记录的电子鱼护（统计单尾重量而非总数），通过具象化的'个人成就'强化自我认同。 */"
    },
    {
      title: "竞争型选手（Competition+Achievement）",
      description: "你享受'棋逢对手'的刺激感，渔获对比就像无形的战书，激发你全部的好胜心。这种'一定要赢'的动力，让你在技术打磨上比常人更投入，但也可能因过度关注结果忽略钓鱼本身的乐趣。",
      formula: "Competition>=15 && Achievement>=11",
      suggestion: "可设定'阶段性竞争目标'（如'本月比上周多解锁2种拟饵用法'），将'超越他人'转化为'超越规则'。参加小型钓赛（如俱乐部积分赛），将对比压力转化为可量化的进步动力。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐M调枪柄竿（暴力回鱼）+ 1000型水滴轮（精准抛投），搭配带荧光涂层的VIB（深水区快速搜索），满足你对'高效上鱼'的竞争需求。 */"
    },
    {
      title: "平衡调适者（Resilience+Growthmindset）",
      description: "面对渔获差异，你展现出惊人的心理弹性——既不会因落后而崩溃，也不会因领先而自满。你擅长将对比转化为'问题-解决方案'的逻辑链，这种'冷静分析+快速调整'的能力，让你在各种鱼情下都能稳定发挥。",
      formula: "Resilience>=13 && Growthmindset>=10",
      suggestion: "可尝试'模拟对抗训练'：在作钓前预设'对手可能用XX饵'，主动验证假设。这种'预演-验证-修正'的模式，能进一步强化你'从对比中学习'的核心优势。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐28调综合竿（兼顾控鱼与感知）+ 双卸力渔轮（应对不同鱼情），搭配多色T尾蛆（快速切换饵色测试鱼口），满足你对'灵活调整'的需求。 */"
    },
    {
      title: "社交连接者（Enjoyment+Growthmindset）",
      description: "你把渔获对比变成了社交润滑剂——落后时虚心请教，领先时分享经验。对钓鱼的热爱，本质是对'与人连接'的期待。这种'共赢思维'让你不仅收获鱼获，更收获了一群志同道合的钓友。",
      formula: "Enjoyment>=18 && Growthmindset>=14",
      suggestion: "可组织'共享钓点计划'，与钓友约定轮流公开私藏钓点，通过'资源互换'深化关系。参与公益放流活动（如鱼类增殖放流），将钓鱼社交扩展到生态保护领域。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐便携折叠钓椅（方便围坐交流）+ 多口袋钓包（分装拟饵分享），搭配经典米诺（普适性强，适合推荐给新手），契合你'重分享'的社交需求。 */"
    },
    {
      title: "佛系观察者（Detachment+Socialcomparison）",
      description: "你表面云淡风轻，内心却悄悄关注着所有对比细节——会记住谁用了什么饵，谁在哪个标点上鱼，但这些信息只会藏在心里。这种'观察但不介入'的态度，让你既能享受钓鱼的松弛，又保持着对钓鱼圈的敏锐感知。",
      formula: "Detachment>=13 && Socialcomparison>=7",
      suggestion: "尝试'半开放分享'：偶尔在朋友圈发'今天观察到XX钓点用亮片更有效'，既释放观察积累，又保持轻松姿态。参加'钓鱼观察家'主题活动（如记录鱼群活动规律），将隐性关注转化为显性价值。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐低调哑光配色钓具（避免刻意展示）+ 微型望远镜（远距离观察），搭配透明鱼线（减少对鱼群的干扰），符合你'隐而不发'的观察风格。 */"
    },
    {
      title: "均衡型钓者（All-Round Angler）",
      description: "你对渔获对比的态度呈现出自然的平衡感 —— 既不会因暂时落后而过度焦虑，也不会因领先而自满；既关注技术提升，也享受过程乐趣。这种 ' 不偏不倚 ' 的状态，源于你对钓鱼本质的深刻理解：它既是自我挑战的舞台，也是与自然对话的媒介。你的心理韧性、成长思维和超然度形成稳定三角，让你在任何鱼情下都能保持舒适的作钓节奏。",
      formula: "true",
      suggestion: "你的均衡特质是宝贵的优势，建议主动尝试 ' 风格拓展计划 '：每月选择 1 种与当前习惯差异大的钓法（如从路亚转向台钓，或从水库转向溪流），在新场景中发现潜在倾向。同时可建立 ' 双维度日志 '—— 既记录渔获数据，也记录 ' 非量化收获 '（如识别了 3 种水鸟、学会了新的结绳法），强化对钓鱼多元价值的感知。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐 L 调 21 尺直柄竿（兼顾灵敏度与抛投距离）+ 2500 型纺车轮（通用线杯容量），搭配 5-7g 复合亮片（全水层搜索）和 TPE 仿生虾（自然拟态）。这套装备兼容性强，既能应对常规对象鱼（鲈鱼、鳜鱼），也适合探索新鱼种（翘嘴、罗非），完美匹配你 ' 均衡体验 ' 的需求。 */"
    }
  ],
  resultProbabilities: {
    "成就驱动者（Achievement+Resilience）": "9.47",
    "成长型钓手（Growthmindset+Competition）": "11.61",
    "超然体验者（Detachment+Enjoyment）": "11.89",
    "自我验证者（Selfidentity+Socialcomparison）": "10.93",
    "竞争型选手（Competition+Achievement）": "5.30",
    "平衡调适者（Resilience+Growthmindset）": "5.44",
    "社交连接者（Enjoyment+Growthmindset）": "13.99",
    "佛系观察者（Detachment+Socialcomparison）": "7.13",
    "均衡型钓者（All-Round Angler）": "24.23"
  }
};
const patienceTest= {
  id: 23,
  title: "长时间无口耐受度精密测评",
  titleshort: "打龟耐受度精密测评",
  type: 3,
  questions: [
    {
      id: 1,
      text: "连续1小时无口后，你的第一反应是？",
      options: [
        {
          text: "降低抛投频率，专注观察竿稍细微动作",
          resultKey: [
            [
              "Patience",
              6
            ],
            [
              "Focus",
              4
            ]
          ],
          icon: "🎣"
        },
        {
          text: "更换3种不同水层/泳姿的拟饵测试",
          resultKey: [
            [
              "Creativity",
              5.5
            ],
            [
              "Strategic",
              4.5
            ]
          ],
          icon: "🔄"
        },
        {
          text: "收拾装备前往500米外新标点",
          resultKey: [
            [
              "Adaptability",
              7
            ],
            [
              "Anxiety",
              3
            ]
          ],
          icon: "🚶"
        }
      ]
    },
    {
      id: 2,
      text: "作钓3小时仍未中鱼时，你会如何调节情绪？",
      options: [
        {
          text: "复盘抛投轨迹+回忆之前中鱼水层",
          resultKey: [
            [
              "Routine",
              6.5
            ],
            [
              "Strategic",
              3.5
            ]
          ],
          icon: "📝"
        },
        {
          text: "听轻音乐+做深呼吸保持节奏",
          resultKey: [
            [
              "Resilience",
              7
            ],
            [
              "Focus",
              3
            ]
          ],
          icon: "🎶"
        },
        {
          text: "刷钓鱼APP看别人爆护视频",
          resultKey: [
            [
              "Anxiety",
              5
            ],
            [
              "Adaptability",
              5
            ]
          ],
          icon: "📱"
        }
      ]
    },
    {
      id: 3,
      text: "遇到其他钓友在你钓点附近中鱼时，你的选择是？",
      options: [
        {
          text: "继续按原计划搜索剩余水域",
          resultKey: [
            [
              "Patience",
              7
            ],
            [
              "Routine",
              3
            ]
          ],
          icon: "🛑"
        },
        {
          text: "观察他的操作后微调自己的手法",
          resultKey: [
            [
              "Observe",
              6
            ],
            [
              "Creativity",
              4
            ]
          ],
          icon: "👀"
        },
        {
          text: "立刻模仿他的钓组和抛投角度",
          resultKey: [
            [
              "Adaptability",
              5.5
            ],
            [
              "Anxiety",
              4.5
            ]
          ],
          icon: "➡️"
        }
      ]
    },
    {
      id: 4,
      text: "作钓5小时后依然空军，收竿前会？",
      options: [
        {
          text: "再坚持30分钟完成今日搜索计划",
          resultKey: [
            [
              "Resilience",
              6
            ],
            [
              "Focus",
              4
            ]
          ],
          icon: "⏳"
        },
        {
          text: "用最后一竿尝试从未用过的极端饵",
          resultKey: [
            [
              "Creativity",
              7
            ],
            [
              "Strategic",
              3
            ]
          ],
          icon: "🎲"
        },
        {
          text: "提前收竿并发朋友圈自嘲",
          resultKey: [
            [
              "Anxiety",
              5
            ],
            [
              "Adaptability",
              5
            ]
          ],
          icon: "🙃"
        }
      ]
    },
    {
      id: 5,
      text: "面对水流突变/天气转差等意外时，你的应对是？",
      options: [
        {
          text: "调整钓棚深度+放缓收线速度",
          resultKey: [
            [
              "Strategic",
              6.5
            ],
            [
              "Routine",
              3.5
            ]
          ],
          icon: "🔧"
        },
        {
          text: "静坐观察15分钟等环境稳定",
          resultKey: [
            [
              "Patience",
              7
            ],
            [
              "Resilience",
              3
            ]
          ],
          icon: "🛌"
        },
        {
          text: "直接转移到背风湾子新标点",
          resultKey: [
            [
              "Adaptability",
              6
            ],
            [
              "Anxiety",
              4
            ]
          ],
          icon: "🚣"
        }
      ]
    },
    {
      id: 6,
      text: "当拟饵挂底损失时，你的情绪波动程度？",
      options: [
        {
          text: "平静解线+记录该区域结构特征",
          resultKey: [
            [
              "Focus",
              6
            ],
            [
              "Observe",
              4
            ]
          ],
          icon: "📌"
        },
        {
          text: "短暂懊恼+换同类型饵继续",
          resultKey: [
            [
              "Resilience",
              5.5
            ],
            [
              "Patience",
              4.5
            ]
          ],
          icon: "😤"
        },
        {
          text: "烦躁检查所有钓组并考虑换点",
          resultKey: [
            [
              "Anxiety",
              7
            ],
            [
              "Adaptability",
              3
            ]
          ],
          icon: "😠"
        }
      ]
    },
    {
      id: 7,
      text: "朋友邀请换点时，你会如何决策？",
      options: [
        {
          text: "坚持完成当前区域的系统搜索",
          resultKey: [
            [
              "Routine",
              6
            ],
            [
              "Patience",
              4
            ]
          ],
          icon: "🚫"
        },
        {
          text: "约定15分钟后如果无口再一起转移",
          resultKey: [
            [
              "Strategic",
              5.5
            ],
            [
              "Resilience",
              4.5
            ]
          ],
          icon: "⏱️"
        },
        {
          text: "立刻收拾装备加入换点队伍",
          resultKey: [
            [
              "Adaptability",
              7
            ],
            [
              "Anxiety",
              3
            ]
          ],
          icon: "✅"
        }
      ]
    }
  ],
  dimensionWeights: {
    Patience: 1.6,
    Focus: 1.68,
    Adaptability: 1.35,
    Anxiety: 1.1,
    Routine: 1.55,
    Creativity: 1.78,
    Resilience: 1.84,
    Strategic: 1.48,
    Observe: 1.85
  },
  results: [
    {
      title: "磐石耐心者（Patience+Focus）",
      description: "你是钓鱼场上的定海神针，即使长时间无口也能保持稳定节奏。对细节的专注度堪比显微镜，竿稍的每丝颤动都逃不过你的感知。这种极强的延迟满足能力，让你在需要守钓的大物场中往往能笑到最后。",
      formula: "Patience>=17 && Focus>=14",
      suggestion: "可尝试挑战水库深水区守钓青鱼/鳜鱼等谨慎鱼种，这类需要超长时间等待的钓法能充分发挥你的优势。同时建议记录每15分钟的抛投数据，进一步优化节奏。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐MH调2.1米中长竿+1000型微物轮（出线更顺滑），搭配半浮水铅笔（可观察泳姿变化），细线（0.8PE+2号前导）保证信号传导。 */"
    },
    {
      title: "策略调整者（Strategic+Creativity）",
      description: "你像钓鱼界的战术大师，无口时不会盲目等待，而是通过快速试错寻找破局点。对拟饵特性的理解和临场调整能力极强，总能在变化中找到鱼的活性窗口。",
      formula: "Strategic>=16 && Creativity>=17",
      suggestion: "适合参与开放水域的多鱼种挑战，定期参加拟饵研发测试活动。建议建立「饵-水层-天气」对应表，将经验转化为系统策略。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择快调ML调1.98米竿（便于频繁更换饵重），搭配2000型高速比轮（快速回收测试不同水层），装备多格饵盒（分类存放5-15g不同类型拟饵）。 */"
    },
    {
      title: "焦虑切换者（Anxiety+Adaptability）",
      description: "你的耐受阈值较低，长时间无口会触发明显的焦虑情绪，但强大的环境适应力让你能快速转移战场。这种「移动搜索」模式在鱼群分散的季节反而可能收获惊喜。",
      formula: "Anxiety>=21 && Adaptability>=21",
      suggestion: "尝试限时作钓法（每点30分钟强制转移），既能缓解焦虑又能保持效率。可参与船钓/筏钓等移动性强的钓法，减少固定守钓的心理压力。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐L调1.8米短竿（便于快速收拾），搭配折叠钓箱（收纳更便捷），使用单肩饵包（取饵换饵更快），主线选择易切线的低延展线（减少挂底损失）。 */"
    },
    {
      title: "专注沉浸者（Focus+Resilience）",
      description: "你拥有罕见的「心流」能力，能将无口的枯燥转化为自我挑战的乐趣。即使连续空军，也能通过调整呼吸和动作节奏保持最佳状态，这种心理素质是职业钓手的必备特质。",
      formula: "Focus>=16 && Resilience>=15",
      suggestion: "可尝试参加计时赛等需要持续专注的比赛，或挑战「24小时耐力钓」等极限项目。建议学习正念冥想，进一步强化情绪稳定能力。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择高感度的碳纤竿（如46T以上）+陶瓷导环（减少摩擦噪音），搭配记忆棉握把（长时间握竿不疲劳），使用荧光竿稍（弱光环境保持专注）。 */"
    },
    {
      title: "常规坚守者（Routine+Patience）",
      description: "你相信「坚持就是胜利」，严格遵循自己的作钓流程。这种规律性让你在熟悉的钓场往往能稳定发挥，但面对鱼情突变时可能需要更灵活的调整。",
      formula: "Routine>=15 && Patience>=14",
      suggestion: "定期进行「流程破环训练」（如故意打乱抛投节奏），提升应对意外的能力。可记录每月「固定流程」与「随机调整」的鱼获对比数据，找到最佳平衡点。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择经典款钓竿（如达瓦波纹鲤）+稳定顺滑的纺车轮（如西马诺Sedona），使用常用的「黄金饵组合」（如7g亮片+5cm软虫），减少装备变化干扰。 */"
    },
    {
      title: "创新探索者（Creativity+Observe）",
      description: "你像钓鱼界的科学家，无口时会像观察实验数据般分析环境。这种「观察-创新」的循环模式，让你总能发现别人忽略的细节，是新钓法的潜在发明者。",
      formula: "Creativity>=12 && Observe>=11",
      suggestion: "尝试自制拟饵或改造现有饵（如添加荧光涂层），参与钓鱼论坛的「创新饵测试」活动。建议携带防水笔记本，实时记录「环境变化-饵效反馈」数据。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择F调2.0米竿（清晰感知饵的动作），搭配微物轮（精确控制饵的泳层），装备微距摄影相机（记录饵在水中的真实状态），使用可拆解饵（方便改造）。 */"
    },
    {
      title: "情绪稳定者（Resilience+Focus）",
      description: "你的情绪像平静的湖面，即使长时间无口也能保持稳定的作钓状态。这种「稳如泰山」的特质，让你在压力型钓场（如黑坑抢鱼）中往往能超常发挥。",
      formula: "Resilience>=15 && Focus>=11",
      suggestion: "可尝试担任钓鱼教学的陪钓教练，你的稳定心态能有效缓解新手的焦虑。建议学习生物行为学，深入理解鱼群的「无口期」生理规律。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择重心靠后的平衡竿（减少持竿疲劳），搭配双轴承渔轮（摇轮更省力），使用防紫外线的钓伞（保持舒适环境），佩戴运动手环（监测心率保持平稳）。 */"
    },
    {
      title: "多维平衡者（综合型）",
      description: "你在耐受度的多个维度表现均衡，既有耐心坚守的定力，又有灵活调整的智慧。这种「全能型」特质让你能适应各种鱼情，是最具潜力的「全场景钓手」。",
      formula: "true",
      suggestion: "定期进行「专项强化训练」（如每周侧重1个维度），逐步将优势维度转化为绝对强项。可参加综合性钓鱼赛事，在实战中验证自己的平衡能力。",
      equip: "数据正在准备中",
      _originalEquip: "/* 配置「万能钓组」：L-M调2.1米竿+2500型通用轮+0.6PE+3号前导，搭配3-10g复合亮片（覆盖90%常见鱼情），装备多功能钓包（分区收纳不同配件）。 */"
    }
  ],
  resultProbabilities: {
    "磐石耐心者（Patience+Focus）": "10.93",
    "策略调整者（Strategic+Creativity）": "9.60",
    "焦虑切换者（Anxiety+Adaptability）": "8.09",
    "专注沉浸者（Focus+Resilience）": "5.81",
    "常规坚守者（Routine+Patience）": "8.69",
    "创新探索者（Creativity+Observe）": "11.71",
    "情绪稳定者（Resilience+Focus）": "10.79",
    "多维平衡者（综合型）": "34.39"
  }
};
const memoryFilterTest= {
  id: 24,
  title: "钓鱼回忆滤镜类型分析",
  titleshort: "钓鱼回忆滤镜类型分析",
  type: 5,
  description: "通过回忆钓鱼经历的细节偏好，揭示你的记忆重构模式。本测试聚焦 ' 成功 / 失误 ' 的关注倾向，反映自我归因风格与心理调节特质。",
  questions: [
    {
      id: 1,
      text: "当朋友问起 ' 上次钓到大鱼的经历 '，你首先描述的是？",
      options: [
        {
          text: "精准抛投到树桩缝隙 + 收线时竿稍的颤动细节",
          resultKey: [
            [
              "DetailOriented",
              6
            ],
            [
              "Optimistic",
              4
            ]
          ],
          icon: "🎣"
        },
        {
          text: "当时天气闷热但突然起风的转折点 + 鱼咬钩的瞬间惊喜",
          resultKey: [
            [
              "Contextual",
              5.5
            ],
            [
              "Emotional",
              4.5
            ]
          ],
          icon: "🌤️"
        },
        {
          text: "之前试了 5 种饵都空军，最后换 VIB 才奏效的过程",
          resultKey: [
            [
              "Reflective",
              7
            ],
            [
              "Improvement",
              3
            ]
          ],
          icon: "🔄"
        }
      ]
    },
    {
      id: 2,
      text: "翻看三年前钓鱼照片时，你最先注意到？",
      options: [
        {
          text: "鱼体花纹清晰说明当时水质好 + 自己持竿姿势标准",
          resultKey: [
            [
              "Achievement",
              6.5
            ],
            [
              "DetailOriented",
              3.5
            ]
          ],
          icon: "📸"
        },
        {
          text: "背景里有只白鹭飞过 + 对岸的芦苇荡随风摆动",
          resultKey: [
            [
              "Contextual",
              7
            ],
            [
              "Nature",
              3
            ]
          ],
          icon: "🦢"
        },
        {
          text: "当时用的纺车轮出线有卡顿，现在同款轮已升级改进",
          resultKey: [
            [
              "Improvement",
              5
            ],
            [
              "Reflective",
              5
            ]
          ],
          icon: "🛠️"
        }
      ]
    },
    {
      id: 3,
      text: "向新手分享 ' 空军经历 ' 时，你会强调？",
      options: [
        {
          text: "虽然没钓到，但观察到三种鱼在水层的活动规律",
          resultKey: [
            [
              "Generalization",
              6
            ],
            [
              "Reflective",
              4
            ]
          ],
          icon: "📚"
        },
        {
          text: "那天和钓友边等鱼边聊装备，反而更开心",
          resultKey: [
            [
              "Emotional",
              7
            ],
            [
              "Contextual",
              3
            ]
          ],
          icon: "👥"
        },
        {
          text: "当时固执用硬饵没换软虫，这个错误现在绝不会犯",
          resultKey: [
            [
              "Improvement",
              8
            ],
            [
              "DetailOriented",
              2
            ]
          ],
          icon: "🚫"
        }
      ]
    },
    {
      id: 4,
      text: "钓到人生第一尾目标鱼（如鳜鱼）的回忆中，最清晰的是？",
      options: [
        {
          text: "中鱼后手腕感受到的独特拉力 + 鱼出水时的金属光泽",
          resultKey: [
            [
              "Optimistic",
              7
            ],
            [
              "Achievement",
              3
            ]
          ],
          icon: "🌟"
        },
        {
          text: "前一周每天看攻略研究标点 + 当天凌晨 4 点出发的坚持",
          resultKey: [
            [
              "Reflective",
              5.5
            ],
            [
              "Improvement",
              4.5
            ]
          ],
          icon: "⏳"
        },
        {
          text: "钓获后和父亲视频分享 + 他说 ' 和我当年一样 ' 的温暖",
          resultKey: [
            [
              "Emotional",
              6
            ],
            [
              "Contextual",
              4
            ]
          ],
          icon: "📱"
        }
      ]
    },
    {
      id: 5,
      text: "提到 ' 最遗憾的跑鱼经历 '，你首先想到的是？",
      options: [
        {
          text: "鱼线结节导致脱钩 + 之后每次绑线都检查 3 遍",
          resultKey: [
            [
              "Improvement",
              7
            ],
            [
              "Reflective",
              3
            ]
          ],
          icon: "⚠️"
        },
        {
          text: "当时太激动扬竿过猛 + 现在抛投时会刻意控制力度",
          resultKey: [
            [
              "DetailOriented",
              6
            ],
            [
              "Generalization",
              4
            ]
          ],
          icon: "🎯"
        },
        {
          text: "虽然跑了鱼，但之后在同一个标点钓到更大的",
          resultKey: [
            [
              "Optimistic",
              8
            ],
            [
              "Achievement",
              2
            ]
          ],
          icon: "🔄"
        }
      ]
    },
    {
      id: 6,
      text: "整理钓鱼日志时，你会重点记录？",
      options: [
        {
          text: "拟饵型号 / 水层深度 / 中鱼时间等具体数据",
          resultKey: [
            [
              "DetailOriented",
              6.5
            ],
            [
              "Generalization",
              3.5
            ]
          ],
          icon: "📊"
        },
        {
          text: "当天的天气心情 + 和谁一起钓的趣闻",
          resultKey: [
            [
              "Emotional",
              7
            ],
            [
              "Contextual",
              3
            ]
          ],
          icon: "📖"
        },
        {
          text: "哪些操作有效 / 无效 + 下次改进方向",
          resultKey: [
            [
              "Reflective",
              5
            ],
            [
              "Improvement",
              5
            ]
          ],
          icon: "🔍"
        }
      ]
    },
    {
      id: 7,
      text: "当别人说 ' 你钓鱼运气真好 '，你的第一反应是？",
      options: [
        {
          text: "其实提前研究过该水域鱼群习性，运气是准备的结果",
          resultKey: [
            [
              "Reflective",
              6
            ],
            [
              "Generalization",
              4
            ]
          ],
          icon: "💡"
        },
        {
          text: "那次确实幸运，但更多时候空军没人看到",
          resultKey: [
            [
              "Emotional",
              5.5
            ],
            [
              "Contextual",
              4.5
            ]
          ],
          icon: "🙂"
        },
        {
          text: "谢谢！钓鱼本来就是和自然互动，开心最重要",
          resultKey: [
            [
              "Optimistic",
              7
            ],
            [
              "Contextual",
              3
            ]
          ],
          icon: "😊"
        }
      ]
    }
  ],
  dimensionWeights: {
    Optimistic: 1.35,
    Reflective: 1.25,
    DetailOriented: 1.45,
    Emotional: 1.45,
    Achievement: 1.35,
    Improvement: 1.25,
    Contextual: 1.4,
    Generalization: 1.55
  },
  results: [
    {
      title: "阳光记忆者（Optimistic+Achievement）",
      description: "你的回忆像加了柔光滤镜，成功经历被镀上金边 —— 中鱼时的触感、鱼体的光泽、同伴的欢呼都清晰如昨。偶尔的失误会被自动模糊，记忆重点永远是 ' 我做到了 ' 的高光时刻。这种特质让你保持钓鱼热情，但可能忽略潜在的改进空间。",
      formula: "(Optimistic+Achievement)>=30",
      suggestion: "享受成功的同时，尝试用 ' 成功日记 ' 记录具体操作（如 '9:15 在岩石区用 7g 亮片中鱼 '），既能保留美好记忆，也能为未来提供可复制的经验。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐带防水功能的运动相机（如 GoPro Hero 12），可实时记录中鱼瞬间的细节，帮助你更客观地回顾成功操作。 */"
    },
    {
      title: "成长记录者（Reflective+Improvement）",
      description: "你的回忆是本 ' 错题集 '，跑鱼时的脱钩点、空军时的错误选择都会被反复复盘。记忆中 ' 如果当时... 就好了 ' 的假设比成功画面更清晰，这种反思倾向让你快速进步，但可能削弱当下的钓鱼乐趣。",
      formula: "(Reflective+Improvement)>=45",
      suggestion: "尝试在日志中增加 ' 成功小确幸 ' 板块（如 ' 今天找到了新标点 '），平衡反思与自我肯定，避免因过度关注不足而降低钓鱼热情。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐多节可换导环的钓竿（如 Shimano Expride），方便你测试不同导环配置对抛投的影响，将反思转化为实际改进。 */"
    },
    {
      title: "细节雕刻师（DetailOriented+Contextual）",
      description: "你的记忆是 3D 建模 —— 竿稍的弯曲角度、水流的速度、甚至当时穿的衣服材质都能精准还原。这种细节捕捉能力让你成为钓鱼界的 ' 活地图 '，但可能因过度关注具体场景而忽略经验迁移。",
      formula: "(DetailOriented+Contextual)>=26",
      suggestion: "在记录细节时增加 ' 通用规律 ' 标注（如 '3 米水深 + 15℃用软虫有效 '），将场景化记忆转化为可复用的知识体系。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐带刻度的量鱼尺（如 Daiwa Digital Caliper），配合防水笔记本（Rite in the Rain），帮助你系统记录鱼体大小、水深等关键数据。 */"
    },
    {
      title: "情感共鸣者（Emotional+Contextual）",
      description: "你的回忆是部情感电影 —— 和钓友的玩笑、等鱼时的微风、跑鱼后的大笑比鱼获本身更深刻。钓鱼对你而言是社交与放松的载体，这种心态让你享受过程，但可能对技术提升不够主动。",
      formula: "(Emotional+Contextual)>=40",
      suggestion: "尝试参与 1-2 次钓鱼主题活动（如夜钓派对），在保持轻松心态的同时，通过社交自然吸收他人经验，实现 ' 快乐中进步 '。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐轻便透气的钓鱼马甲（如 Simms G3 Guide Vest），口袋设计方便携带零食和手机，让你在作钓时更轻松地与同伴互动。 */"
    },
    {
      title: "经验提炼者（Generalization+Reflective）",
      description: "你的回忆是套分析模型 —— 从单次经历中提炼 ' 水情 - 鱼情 - 操作 ' 的关联规律。' 那次用 VIB 有效是因为水温 18℃' 比具体中鱼画面更重要，这种能力让你成为钓鱼策略专家，但可能因过度理性削弱临场直觉。",
      formula: "(Generalization+Reflective)>=34",
      suggestion: "每月安排 1 次 ' 无策略日 '（随机选饵 / 标点），给直觉留出空间，避免因过度依赖经验而错过意外惊喜。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐多类型拟饵套装（如 Lucky Craft 综合软饵包），方便你测试不同饵型在相同水情下的效果，验证经验模型的普适性。 */"
    },
    {
      title: "情境还原者（Contextual+Emotional）",
      description: "你的回忆是沉浸式剧场 —— 当时的天气、同行的人、甚至钓点的气味都能完整复现。钓鱼对你而言不仅是运动，更是 ' 某段时光 ' 的载体，这种特质让你拥有丰富的情感记忆库，但可能对技术细节不够敏感。",
      formula: "(Contextual+Emotional)>=30",
      suggestion: "在回忆时尝试 ' 技术联想 '（如 ' 那天起风后鱼开口，可能和溶氧量有关 '），将情境记忆与基础鱼情知识结合，提升记忆的实用价值。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐带 GPS 定位的钓鱼手表（如 Garmin Marq Fishing），自动记录钓点坐标和环境数据，帮助你将情境记忆与具体参数关联。 */"
    },
    {
      title: "直觉主导者（Optimistic+Generalization）",
      description: "你的回忆是跳跃的灵感 —— 不纠结具体步骤，更关注 ' 那次有效 ' 的整体感觉。这种直觉式记忆让你在陌生水域快速找到节奏，但可能因忽略细节导致操作不稳定。",
      formula: "(Optimistic+Generalization)>=20",
      suggestion: "每次凭直觉成功后，用 3 分钟快速记录 ' 当时的关键感受 '（如 ' 饵落水声吸引鱼 '），将直觉转化为可描述的经验，提升稳定性。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐声音诱鱼拟饵（如 Rapala X-Rap），其声波设计与你的直觉记忆模式契合，能增强你对 ' 有效信号 ' 的感知。 */"
    },
    {
      title: "平衡调节者（Four-Dimension）",
      description: "你的回忆像多棱镜 —— 成功时记得操作细节，失误时分析改进方向，过程中感受情感流动，结束后提炼通用经验。这种平衡的记忆模式让你既能享受钓鱼乐趣，又能持续提升技术，是典型的 ' 成长型钓鱼人 '。",
      formula: "true",
      suggestion: "保持现有模式，可尝试参与钓鱼教学或分享（如制作短视频），通过输出倒逼输入，进一步深化对钓鱼的理解。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐模块化钓鱼箱（如 Plano Edge 3700），分区收纳拟饵、工具和记录设备，满足你对细节、情感、技术的多重需求。 */"
    }
  ],
  resultProbabilities: {
    "阳光记忆者（Optimistic+Achievement）": "12.76",
    "成长记录者（Reflective+Improvement）": "13.53",
    "细节雕刻师（DetailOriented+Contextual）": "0.00",
    "情感共鸣者（Emotional+Contextual）": "22.54",
    "经验提炼者（Generalization+Reflective）": "12.53",
    "情境还原者（Contextual+Emotional）": "10.61",
    "直觉主导者（Optimistic+Generalization）": "17.51",
    "平衡调节者（Four-Dimension）": "10.52"
  }
};
const  personalityTest1={
  id: 25,
  title: "路亚意义认知深度解析——你的路亚人格密码",
  titleshort: "路亚意义认知解析",
  type: 4,
  questions: [
    {
      id: 1,
      text: "规划路亚行程时，你更看重？",
      options: [
        {
          text: "目标鱼种的挑战难度（如巨型鲈鱼/鳡鱼）",
          resultKey: [
            [
              "Achievement",
              6
            ],
            [
              "Skill",
              4
            ]
          ],
          icon: "🎯"
        },
        {
          text: "钓点风景与环境舒适度（如溪流/湖景）",
          resultKey: [
            [
              "Relaxation",
              7
            ],
            [
              "Nature",
              3
            ]
          ],
          icon: "🏞️"
        },
        {
          text: "尝试新钓法的机会（如雷强/飞蝇路亚）",
          resultKey: [
            [
              "Experiment",
              5
            ],
            [
              "Selfrealization",
              5
            ]
          ],
          icon: "🔬"
        }
      ]
    },
    {
      id: 2,
      text: "遇到连续3小时空军时，你的反应是？",
      options: [
        {
          text: "立即复盘抛投节奏/饵鱼匹配度，调整战术",
          resultKey: [
            [
              "Tactics",
              7
            ],
            [
              "Achievement",
              3
            ]
          ],
          icon: "📊"
        },
        {
          text: "收竿找个树荫喝茶，观察水鸟/植物放松",
          resultKey: [
            [
              "Relaxation",
              6
            ],
            [
              "Nature",
              4
            ]
          ],
          icon: "🍵"
        },
        {
          text: "翻出冷门拟饵（如波趴+胡须佬组合）试钓",
          resultKey: [
            [
              "Experiment",
              8
            ],
            [
              "Selfrealization",
              2
            ]
          ],
          icon: "🎣"
        }
      ]
    },
    {
      id: 3,
      text: "选择拟饵时最关注？",
      options: [
        {
          text: "针对目标鱼的攻击触发数据（如泳层/振动频率）",
          resultKey: [
            [
              "Skill",
              8
            ],
            [
              "Tactics",
              2
            ]
          ],
          icon: "🔍"
        },
        {
          text: "外观设计与握感（如手绘涂装/人体工学握把）",
          resultKey: [
            [
              "Relaxation",
              5
            ],
            [
              "Social",
              5
            ]
          ],
          icon: "🎨"
        },
        {
          text: "创新设计与独特功能（如声呐诱鱼/变色涂层）",
          resultKey: [
            [
              "Experiment",
              6
            ],
            [
              "Selfrealization",
              4
            ]
          ],
          icon: "✨"
        }
      ]
    },
    {
      id: 4,
      text: "作钓时注意力主要分配给？",
      options: [
        {
          text: "观察竿稍抖动/线杯转动的细微信号",
          resultKey: [
            [
              "Skill",
              7
            ],
            [
              "Tactics",
              3
            ]
          ],
          icon: "🎚️"
        },
        {
          text: "感受风/水温/光影的自然变化",
          resultKey: [
            [
              "Relaxation",
              6
            ],
            [
              "Nature",
              4
            ]
          ],
          icon: "🌤️"
        },
        {
          text: "思考如何突破现有中鱼率记录",
          resultKey: [
            [
              "Achievement",
              5
            ],
            [
              "Selfrealization",
              5
            ]
          ],
          icon: "📈"
        }
      ]
    },
    {
      id: 5,
      text: "如何看待路亚圈的竞技比赛？",
      options: [
        {
          text: "证明技术实力的核心舞台",
          resultKey: [
            [
              "Achievement",
              8
            ],
            [
              "Social",
              2
            ]
          ],
          icon: "🏆"
        },
        {
          text: "认识同好/分享趣事的社交场合",
          resultKey: [
            [
              "Social",
              7
            ],
            [
              "Relaxation",
              3
            ]
          ],
          icon: "👥"
        },
        {
          text: "测试新战术/拟饵的实验基地",
          resultKey: [
            [
              "Tactics",
              6
            ],
            [
              "Experiment",
              4
            ]
          ],
          icon: "🧪"
        }
      ]
    },
    {
      id: 6,
      text: "结束一天作钓后，最在意的是？",
      options: [
        {
          text: "钓获数量/个体大小的记录（拍照称重）",
          resultKey: [
            [
              "Achievement",
              7
            ],
            [
              "Skill",
              3
            ]
          ],
          icon: "📸"
        },
        {
          text: "身心放松的程度（是否忘记工作压力）",
          resultKey: [
            [
              "Relaxation",
              8
            ],
            [
              "Nature",
              2
            ]
          ],
          icon: "💆"
        },
        {
          text: "学到的新经验（如某种结构藏鱼规律）",
          resultKey: [
            [
              "Selfrealization",
              6
            ],
            [
              "Experiment",
              4
            ]
          ],
          icon: "📚"
        }
      ]
    },
    {
      id: 7,
      text: "向新手推荐路亚时，你会强调？",
      options: [
        {
          text: "技术提升带来的掌控感（如精准抛投）",
          resultKey: [
            [
              "Skill",
              6
            ],
            [
              "Achievement",
              4
            ]
          ],
          icon: "🚀"
        },
        {
          text: "亲近自然的治愈感（如晨雾中的水面）",
          resultKey: [
            [
              "Nature",
              7
            ],
            [
              "Relaxation",
              3
            ]
          ],
          icon: "🌿"
        },
        {
          text: "持续探索的乐趣（如发现新标点）",
          resultKey: [
            [
              "Experiment",
              5
            ],
            [
              "Selfrealization",
              5
            ]
          ],
          icon: "🔍"
        }
      ]
    }
  ],
  dimensionWeights: {
    Achievement: 1.2,
    Relaxation: 1.35,
    Nature: 1.55,
    Tactics: 1.4,
    Social: 1.55,
    Experiment: 1.3,
    Skill: 1.15,
    Selfrealization: 1.4
  },
  results: [
    {
      title: "竞技战神（Achievement+Skill）",
      description: "你将路亚视为严格的竞技运动，享受技术突破带来的成就感。对抛投精准度、拟饵选择的专业度有近乎苛刻的要求，中鱼瞬间的掌控感是你最大的快乐源。",
      formula: "Achievement>=16 && Skill>=13",
      suggestion: "可定期参加BASSMASTER等国际赛事，通过标准化规则检验技术；尝试记录每竿数据（如抛投角度/收线速度），建立个人技术档案。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐Shimano Metanium DC水滴轮（精准控线）+G.Loomis IMX-Pro钓竿（高感度），搭配VMC三本钩（强拉力）提升中鱼率。 */"
    },
    {
      title: "自然疗愈者（Nature+Relaxation）",
      description: "路亚对你是与自然对话的媒介，水流声、风的方向比鱼讯更让你着迷。你享受慢节奏作钓，常因观察水鸟捕食而忘记抛竿，钓箱里总藏着一本自然笔记。",
      formula: "Nature>=18 && Relaxation>=16",
      suggestion: "选择生态保留区作钓（如国家湿地公园特许钓点），使用可降解拟饵减少环境负担；尝试‘无目标作钓’，专注感受四季水情变化。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐DAIWA EXIST LT纺车轮（轻量静音）+FUJI 竹纹握把钓竿（亲肤触感），搭配手工木质拟饵（自然质感）。 */"
    },
    {
      title: "战术大师（Tactics+Skill）",
      description: "你像路亚界的‘战术分析师’，擅长通过结构分析（如倒树/深浅交界处）预判鱼群位置。对‘为什么中鱼’的思考远多于‘中了多少鱼’，常能总结出独特的作钓规律。",
      formula: "Tactics>=12 && Skill>=11",
      suggestion: "学习水下结构探测仪（如Garmin Livescope）的使用，将经验转化为数据；尝试‘对比作钓’（如同一标点交替使用硬饵/软饵）验证战术有效性。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐13 Fishing Omen Black钓竿（高灵敏度传导结构信号）+Lew's Tournament Pro水滴轮（稳定抛投），搭配Z-Man T-rig软饵（精准落底）。 */"
    },
    {
      title: "社交达人（Social+Relaxation）",
      description: "你将路亚视为‘移动的社交场’，钓点更像朋友聚会的客厅。常带着自制钓饵分享，朋友圈记录的多是‘和老张蹲守的下午’而非鱼获，钓鱼群里的活跃分子。",
      formula: "Social>=13 && Relaxation>=12",
      suggestion: "组织‘路亚茶话会’（作钓后围坐分享趣事），参与本地路亚协会的公益放流活动；尝试‘双人作钓’，通过协作提升互动乐趣。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐Pflueger President纺车轮（易操作适合分享）+Okuma Celilo钓竿（多色可选），搭配色彩鲜艳的Dobyns拟饵（拍照上镜）。 */"
    },
    {
      title: "探索先驱（Experiment+Selfrealization）",
      description: "你是路亚圈的‘创新实验员’，总在尝试非常规组合（如雷蛙钓翘嘴）。即使空军也会兴奋记录‘这种饵在2米水深没口’，认为‘未知的可能’比鱼获更有价值。",
      formula: "Experiment>=20 && Selfrealization>=16",
      suggestion: "加入路亚创新社群（如FB的Lure Modding小组），分享改造拟饵的经验；尝试‘盲盒作钓’（随机选择饵盒里的拟饵）突破固有思维。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐Abu Garcia Revo SX水滴轮（耐造适合频繁换饵）+St. Croix Mojo Bass钓竿（通用调性），搭配DIY拟饵（如3D打印自定义造型）。 */"
    },
    {
      title: "自我实现者（Selfrealization+Nature）",
      description: "你将路亚视为‘认识自己’的修行，通过观察自然反照内心。常思考‘鱼为什么咬饵’背后的生命逻辑，钓获后会轻轻触摸鱼身感受生命力，再小心放流。",
      formula: "Selfrealization>=13 && Nature>=11",
      suggestion: "尝试‘无记录作钓’（不拍照不称重），专注感受与鱼的能量交换；阅读《钓鱼的禅机》等书籍，深化作钓的哲学思考。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐Daiwa Tatula LT水滴轮（细腻手感）+FUJI 碳纤导环钓竿（减少对鱼线的伤害），搭配手工绑制的飞蝇饵（体现自然尊重）。 */"
    },
    {
      title: "休闲艺术家（Relaxation+Social）",
      description: "你把路亚过成了‘生活美学’，钓箱是移动的下午茶台，钓竿像画笔般点缀着水面。更在意‘今天的云很好看’而非鱼护重量，朋友圈文案常是‘风里有桂花香’。",
      formula: "Relaxation>=16 && Social>=10",
      suggestion: "选择‘风景钓点’（如湖边咖啡馆旁的水域），将作钓与休闲结合；尝试‘慢节奏作钓’（每小时只抛10竿），专注感受当下。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐Okuma Cedros II纺车轮（轻量便携）+KastKing Royale Legend钓竿（优雅涂装），搭配手工绘制的浮水米诺（兼具美感与实用性）。 */"
    },
    {
      title: "全能成长者（多维度均衡）",
      description: "你像一块‘路亚海绵’，既能享受竞技的挑战，也能沉浸自然的治愈，还乐于和钓友交流。各维度能力均衡发展，没有明显短板，是‘什么钓法都能玩两下’的多面手。",
      formula: "true",
      suggestion: "选择综合型钓点（如既有结构区又有风景段），定期切换作钓目标（本周钓鲈下周钓鳜）；参加‘全项目路亚赛’检验综合能力。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐Shimano Stradic CI4+纺车轮（泛用性强）+G.Loomis E6X钓竿（多场景适用），搭配Berkley软饵套装（覆盖多种水层）。 */"
    }
  ],
  resultProbabilities: {
    "竞技战神（Achievement+Skill）": "14.77",
    "自然疗愈者（Nature+Relaxation）": "14.04",
    "战术大师（Tactics+Skill）": "13.26",
    "社交达人（Social+Relaxation）": "7.27",
    "探索先驱（Experiment+Selfrealization）": "14.22",
    "自我实现者（Selfrealization+Nature）": "5.81",
    "休闲艺术家（Relaxation+Social）": "9.14",
    "全能成长者（多维度均衡）": "21.49"
  }
};
const  environmentalConsistencyTest= {
  id: 26,
  title: "钓鱼环保行为一致性测评",
  titleshort: "钓鱼环保行为测评",
  type: 4,
  questions: [
    {
      id: 1,
      text: "结束作钓后，如何处理钓场遗留垃圾（拟饵袋、矿泉水瓶等）？",
      options: [
        {
          text: "立即分类（可回收/不可降解）并全部带走",
          resultKey: [
            [
              "Consciousness",
              6
            ],
            [
              "Practice",
              4
            ]
          ],
          icon: "♻️"
        },
        {
          text: "简单打包但未分类，统一丢入垃圾桶",
          resultKey: [
            [
              "Practice",
              5
            ],
            [
              "Habit",
              5
            ]
          ],
          icon: "🗑️"
        },
        {
          text: "直接丢弃或留给场地保洁处理",
          resultKey: [
            [
              "Selfdiscipline",
              3
            ],
            [
              "Rationality",
              7
            ]
          ],
          icon: "🚮"
        }
      ]
    },
    {
      id: 2,
      text: "发现他人使用禁用渔具（如地笼/绝户网）时，会？",
      options: [
        {
          text: "立即制止并科普《渔业法》相关条款",
          resultKey: [
            [
              "Influence",
              7
            ],
            [
              "Cognition",
              3
            ]
          ],
          icon: "⚠️"
        },
        {
          text: "拍照留存并通过官方渠道举报",
          resultKey: [
            [
              "Rationality",
              6
            ],
            [
              "Consciousness",
              4
            ]
          ],
          icon: "📱"
        },
        {
          text: "装作没看见继续专注自己作钓",
          resultKey: [
            [
              "Selfdiscipline",
              2
            ],
            [
              "Empathy",
              8
            ]
          ],
          icon: "🙈"
        }
      ]
    },
    {
      id: 3,
      text: "选择钓饵时更倾向以下哪种？",
      options: [
        {
          text: "可降解仿生饵（如玉米/木薯基材质）",
          resultKey: [
            [
              "Empathy",
              6
            ],
            [
              "Consciousness",
              4
            ]
          ],
          icon: "🌱"
        },
        {
          text: "普通拟饵但重复使用至破损",
          resultKey: [
            [
              "Practice",
              5
            ],
            [
              "Habit",
              5
            ]
          ],
          icon: "🔄"
        },
        {
          text: "一次性活饵（如蚯蚓/小鱼）",
          resultKey: [
            [
              "Rationality",
              7
            ],
            [
              "Selfdiscipline",
              3
            ]
          ],
          icon: "🐛"
        }
      ]
    },
    {
      id: 4,
      text: "对‘留大放小’原则的执行标准是？",
      options: [
        {
          text: "严格用测量尺确认法定最小尺寸",
          resultKey: [
            [
              "Cognition",
              7
            ],
            [
              "Practice",
              3
            ]
          ],
          icon: "📏"
        },
        {
          text: "凭经验判断大致符合即放流",
          resultKey: [
            [
              "Habit",
              6
            ],
            [
              "Consciousness",
              4
            ]
          ],
          icon: "👀"
        },
        {
          text: "为鱼获量偶尔放宽尺寸要求",
          resultKey: [
            [
              "Selfdiscipline",
              2
            ],
            [
              "Rationality",
              8
            ]
          ],
          icon: "🎣"
        }
      ]
    },
    {
      id: 5,
      text: "是否参与过钓鱼相关环保活动（如集体放流/河道清理）？",
      options: [
        {
          text: "定期组织或主动报名参与",
          resultKey: [
            [
              "Influence",
              6
            ],
            [
              "Practice",
              4
            ]
          ],
          icon: "👥"
        },
        {
          text: "偶尔参加朋友邀请的活动",
          resultKey: [
            [
              "Consciousness",
              5
            ],
            [
              "Empathy",
              5
            ]
          ],
          icon: "🎉"
        },
        {
          text: "从未参与且无计划",
          resultKey: [
            [
              "Selfdiscipline",
              3
            ],
            [
              "Rationality",
              7
            ]
          ],
          icon: "🚫"
        }
      ]
    },
    {
      id: 6,
      text: "看到钓友将非本地鱼种（如清道夫）放流时，会？",
      options: [
        {
          text: "详细解释生态危害并建议科学处理",
          resultKey: [
            [
              "Cognition",
              7
            ],
            [
              "Influence",
              3
            ]
          ],
          icon: "🌍"
        },
        {
          text: "私下提醒‘最好别这样’但不深入",
          resultKey: [
            [
              "Empathy",
              6
            ],
            [
              "Consciousness",
              4
            ]
          ],
          icon: "💬"
        },
        {
          text: "觉得是别人的事不干涉",
          resultKey: [
            [
              "Selfdiscipline",
              2
            ],
            [
              "Rationality",
              8
            ]
          ],
          icon: "😶"
        }
      ]
    },
    {
      id: 7,
      text: "如何处理最终钓获的鱼获？",
      options: [
        {
          text: "全部拍照记录后放流（无食用需求）",
          resultKey: [
            [
              "Consciousness",
              6
            ],
            [
              "Empathy",
              4
            ]
          ],
          icon: "📸"
        },
        {
          text: "取少量食用（≤2斤）其余放流",
          resultKey: [
            [
              "Practice",
              5
            ],
            [
              "Habit",
              5
            ]
          ],
          icon: "🍳"
        },
        {
          text: "尽可能多带回去（不论是否需要）",
          resultKey: [
            [
              "Selfdiscipline",
              3
            ],
            [
              "Rationality",
              7
            ]
          ],
          icon: "🛒"
        }
      ]
    }
  ],
  dimensionWeights: {
    Consciousness: 1.3,
    Practice: 1.4,
    Cognition: 1.2,
    Selfdiscipline: 1.6,
    Influence: 1.25,
    Empathy: 1.25,
    Rationality: 0.9,
    Habit: 1.35
  },
  results: [
    {
      title: "环保行动标杆（Practice）",
      description: "你是钓鱼环保的行动派！从垃圾清理到放流执行，每个环保细节都能落到实处。你的行为不仅保护了钓场生态，更用实际行动证明‘环保不是口号’。",
      formula: "Practice >= 22",
      suggestion: "可尝试发起‘一人一公斤垃圾’公益活动，带动更多钓友参与；定期记录环保行为数据（如年度清理垃圾量），形成可复制的环保模板。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐可折叠分类垃圾袋（区分可回收/不可降解）+ 便携测量尺（精准执行‘留大放小’） */"
    },
    {
      title: "意识觉醒先驱（Consciousness）",
      description: "你拥有强烈的环保认知，能敏锐识别各种不环保行为。虽然偶尔行动滞后，但意识已走在多数人前面，是潜在的环保引领者。",
      formula: "Consciousness >= 24",
      suggestion: "将意识转化为日常习惯：比如作钓前准备‘环保包’（含垃圾袋/可降解饵），用仪式感强化行为；参加环保培训课程深化认知。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择带有环保认证的钓具（如FSC认证木质握把钓竿）+ 可重复填充的饵盒（减少一次性包装） */"
    },
    {
      title: "生态共情者（Empathy）",
      description: "你能真正理解‘鱼是生态的一部分’，放流时会注意手法保护鱼体，对非本地物种的危害有天然敏感度。你的环保行为源于对自然的热爱。",
      formula: "Empathy >= 18",
      suggestion: "参与‘鱼类保护志愿监测’项目（如记录目标鱼种数量）；尝试使用更仿生的拟饵（如3D打印仿鱼形软饵），减少对活饵的依赖。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐无倒刺钩（降低鱼体损伤）+ 放流网（减少徒手接触鱼体） */"
    },
    {
      title: "知识科普达人（Cognition）",
      description: "你对《渔业法》《长江保护法》等法规烂熟于心，能清晰解释‘为什么不能用绝户网’‘外来物种的危害’。知识储备是你的环保武器。",
      formula: "Cognition >= 17",
      suggestion: "制作‘钓鱼环保知识卡’（含常见违规行为+处理方式），在钓场分发；参与钓鱼社区环保问答，用知识影响更多人。",
      equip: "数据正在准备中",
      _originalEquip: "/* 便携法规手册（防水防撕）+ 生态科普贴纸（贴于钓箱提醒自己和他人） */"
    },
    {
      title: "理性协调者（Rationality）",
      description: "你会权衡环保与作钓体验：既不盲目追求‘绝对环保’，也不会为鱼获牺牲底线。这种理性让你的环保行为更可持续。",
      formula: "Rationality >= 22",
      suggestion: "建立‘环保-体验’平衡表（如记录‘使用可降解饵的中鱼率变化’），用数据优化选择；尝试‘半环保’过渡方案（如混合使用可降解饵与普通饵）。",
      equip: "数据正在准备中",
      _originalEquip: "/* 多功能饵盒（可同时装可降解饵和普通饵）+ 防水笔记本（记录环保行为与作钓结果关联） */"
    },
    {
      title: "习惯固化者（Habit）",
      description: "清理垃圾、放流等环保行为已成为你的肌肉记忆，无需刻意提醒。稳定的习惯是你对生态最持续的守护。",
      formula: "Habit >= 21",
      suggestion: "优化习惯细节：比如将‘简单打包垃圾’升级为‘分类拍照记录’；尝试‘21天环保习惯挑战’（如连续21天使用可降解饵）。",
      equip: "数据正在准备中",
      _originalEquip: "/* 带分隔层的钓箱（固定放置垃圾/钓具/饵）+ 可重复使用的拟饵收纳袋（减少塑料消耗） */"
    },
    {
      title: "自律守护者（Selfdiscipline）",
      description: "你对自己有严格的环保要求：即使无人监督，也不会使用禁用渔具或违规处理鱼获。自律是你环保行为的核心驱动力。",
      formula: "Selfdiscipline >= 12",
      suggestion: "设立‘环保自律奖’（如连续3个月无违规行为后奖励自己一套可降解饵）；加入‘自律钓友群’，互相监督鼓励。",
      equip: "数据正在准备中",
      _originalEquip: "/* 带锁扣的饵盒（防止误拿禁用饵）+ 防水承诺书（贴于钓竿提醒自己） */"
    },
    {
      title: "影响力传播者（Influence）",
      description: "你不仅自己践行环保，更能带动身边钓友：从制止违规到组织活动，你的行动让环保从‘个人选择’变成‘群体共识’。",
      formula: "Influence >= 14",
      suggestion: "创建‘环保钓友圈’（线上社群+线下活动），定期分享环保作钓技巧；发起‘环保积分制’（如清理垃圾换钓位优先使用权）。",
      equip: "数据正在准备中",
      _originalEquip: "/* 带有社群标识的环保马甲（增强身份认同）+ 便携扩音器（用于钓场科普宣传） */"
    },
    {
      title: "知行合一典范（Consciousness+Practice）",
      description: "你的环保意识与行动高度统一：既清楚‘为什么要环保’，更知道‘如何做环保’。这种一致性让你成为钓鱼环保的最佳代言人。",
      formula: "(Consciousness >= 12 && Practice >= 12)",
      suggestion: "参与编写《钓鱼环保指南》（结合自身经验）；申请成为‘官方环保钓场’认证监督员，用专业度扩大影响。",
      equip: "数据正在准备中",
      _originalEquip: "/* 定制环保钓箱（印有‘知行合一’标识）+ 多功能环保工具包（含垃圾袋/测量尺/法规卡） */"
    },
    {
      title: "生态-理性平衡者（Empathy+Rationality）",
      description: "你既理解生态的脆弱性，又能理性看待作钓需求。这种平衡让你的环保行为既温暖又务实，更容易被他人接受。",
      formula: "true",
      suggestion: "开发‘生态友好作钓方案’（如‘30%可降解饵+70%普通饵’组合）；在钓友群分享‘平衡经验’，减少‘非黑即白’的环保争议。",
      equip: "数据正在准备中",
      _originalEquip: "/* 双色饵盒（区分生态饵与普通饵）+ 生态计算器（估算不同饵的环境影响） */"
    }
  ],
  resultProbabilities: {
    "环保行动标杆（Practice）": "7.82",
    "意识觉醒先驱（Consciousness）": "12.48",
    "生态共情者（Empathy）": "13.08",
    "知识科普达人（Cognition）": "2.88",
    "理性协调者（Rationality）": "16.46",
    "习惯固化者（Habit）": "6.54",
    "自律守护者（Selfdiscipline）": "13.03",
    "影响力传播者（Influence）": "5.30",
    "知行合一典范（Consciousness+Practice）": "9.60",
    "生态-理性平衡者（Empathy+Rationality）": "12.80"
  }
};
const  equipmentInvestmentTest= {
  id: 27,
  title: "钓鱼装备投资人格解析",
  titleshort: "钓鱼装备投资人格解析",
  type: 4,
  questions: [
    {
      id: 1,
      text: "本月有5000元钓鱼预算，你会优先分配？",
      options: [
        {
          text: "升级高模量碳纤维钓竿+微物轮（模量提升20%）",
          resultKey: [
            [
              "Performance",
              6
            ],
            [
              "Data",
              4
            ]
          ],
          icon: "⚙️"
        },
        {
          text: "购买10次专业钓场体验卡+基础拟饵",
          resultKey: [
            [
              "Frequency",
              7
            ],
            [
              "Experience",
              3
            ]
          ],
          icon: "🌞"
        },
        {
          text: "配置2套基础竿轮+升级部分配件（如导环）",
          resultKey: [
            [
              "Balance",
              5
            ],
            [
              "Practical",
              5
            ]
          ],
          icon: "🎚️"
        }
      ]
    },
    {
      id: 2,
      text: "现有装备能满足80%需求，遇到新出的「精准调饵系统」（贵1500元，提升中鱼率10%），你会？",
      options: [
        {
          text: "立即购买（相信技术溢价）",
          resultKey: [
            [
              "Performance",
              7
            ],
            [
              "Depth",
              3
            ]
          ],
          icon: "🚀"
        },
        {
          text: "先租试用（验证实际效果）",
          resultKey: [
            [
              "Depth",
              6
            ],
            [
              "Practical",
              4
            ]
          ],
          icon: "🔍"
        },
        {
          text: "暂时不买（现有装备足够）",
          resultKey: [
            [
              "Practical",
              8
            ],
            [
              "Sustainability",
              2
            ]
          ],
          icon: "🌱"
        }
      ]
    },
    {
      id: 3,
      text: "选择拟饵时更关注？",
      options: [
        {
          text: "实验室测试的中鱼率数据（±0.5%误差）",
          resultKey: [
            [
              "Depth",
              7
            ],
            [
              "Data",
              3
            ]
          ],
          icon: "📊"
        },
        {
          text: "钓友实拍上鱼视频（30+有效案例）",
          resultKey: [
            [
              "Frequency",
              5
            ],
            [
              "Experience",
              5
            ]
          ],
          icon: "📸"
        },
        {
          text: "可重复使用的环保拟饵（TPE材质）",
          resultKey: [
            [
              "Sustainability",
              6
            ],
            [
              "Durability",
              4
            ]
          ],
          icon: "♻️"
        }
      ]
    },
    {
      id: 4,
      text: "你如何看待「装备越好，作钓频次可减少」的观点？",
      options: [
        {
          text: "完全认同（高效装备节省时间成本）",
          resultKey: [
            [
              "Performance",
              6
            ],
            [
              "Frequency",
              4
            ]
          ],
          icon: "⏱️"
        },
        {
          text: "反对（经验需要高频积累）",
          resultKey: [
            [
              "Frequency",
              7
            ],
            [
              "Practical",
              3
            ]
          ],
          icon: "🚶"
        },
        {
          text: "动态平衡（视目标鱼种调整）",
          resultKey: [
            [
              "Balance",
              8
            ],
            [
              "Sustainability",
              2
            ]
          ],
          icon: "⚖️"
        }
      ]
    },
    {
      id: 5,
      text: "装备轻微损坏（如轮组小异响），你会？",
      options: [
        {
          text: "直接换最新款（不愿将就）",
          resultKey: [
            [
              "Performance",
              5
            ],
            [
              "Aesthetic",
              5
            ]
          ],
          icon: "✨"
        },
        {
          text: "找师傅维修后继续用",
          resultKey: [
            [
              "Durability",
              7
            ],
            [
              "Practical",
              3
            ]
          ],
          icon: "🔧"
        },
        {
          text: "升级核心部件（如换线杯）",
          resultKey: [
            [
              "Balance",
              6
            ],
            [
              "Sustainability",
              4
            ]
          ],
          icon: "🔄"
        }
      ]
    },
    {
      id: 6,
      text: "参加钓鱼展时，你最关注的展区是？",
      options: [
        {
          text: "黑科技装备发布区（如智能感应竿）",
          resultKey: [
            [
              "Performance",
              7
            ],
            [
              "Depth",
              3
            ]
          ],
          icon: "🤖"
        },
        {
          text: "体验区（试钓新竿轮）",
          resultKey: [
            [
              "Frequency",
              6
            ],
            [
              "Experience",
              4
            ]
          ],
          icon: "🎣"
        },
        {
          text: "环保渔具展区（可降解材料）",
          resultKey: [
            [
              "Sustainability",
              8
            ],
            [
              "Aesthetic",
              2
            ]
          ],
          icon: "🌍"
        }
      ]
    },
    {
      id: 7,
      text: "朋友推荐「性价比款」装备（价格是你预算80%，性能90%），你会？",
      options: [
        {
          text: "直接购买（实用优先）",
          resultKey: [
            [
              "Practical",
              7
            ],
            [
              "Balance",
              3
            ]
          ],
          icon: "✅"
        },
        {
          text: "对比10+测评数据后决定",
          resultKey: [
            [
              "Depth",
              6
            ],
            [
              "Data",
              4
            ]
          ],
          icon: "📝"
        },
        {
          text: "坚持等目标款（不愿妥协性能）",
          resultKey: [
            [
              "Performance",
              5
            ],
            [
              "Aesthetic",
              5
            ]
          ],
          icon: "💎"
        }
      ]
    }
  ],
  dimensionWeights: {
    Performance: 1,
    Frequency: 1.05,
    Balance: 1.2,
    Depth: 1.1,
    Data: 1.05,
    Practical: 1.2,
    Aesthetic: 1.8,
    Durability: 1.1,
    Sustainability: 1.3,
    Experience: 1
  },
  results: [
    {
      title: "性能偏执者（Performance主导）",
      description: "你对装备性能的追求近乎苛刻，坚信「工欲善其事，必先利其器」。碳纤维模量、渔轮刹车力等参数倒背如流，愿意为10%的性能提升支付30%的预算。在你眼中，高性能装备是征服复杂鱼情的核心武器。",
      formula: "Performance >= 20",
      suggestion: "关注装备与实际场景的匹配度，避免为冗余性能买单。参与专业钓手的装备测评分享会，获取更贴近实战的性能解读。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐高模量（46T以上）碳纤维钓竿（如Shimano Conquest）+全金属机身微物轮（Daiwa Tatula LT），搭配高精度钛合金导环，确保抛投精准度与强度。 */"
    },
    {
      title: "体验至上派（Frequency+Experience）",
      description: "你认为钓鱼的核心是「与自然互动的过程」，更愿意把预算花在增加作钓频次上。比起高端装备，你更在意能否每天清晨感受第一缕阳光，相信「钓100次的经验＞1套顶级装备」。",
      formula: "(Frequency + Experience) >= 25.5",
      suggestion: "加入本地钓鱼社群，通过活动共享专业装备（如远投竿），在不增加预算的前提下拓展钓点类型。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择轻便耐用的入门套装（2.1米M调直柄竿+2000型纺车轮，如Ugly Stik GX2），搭配多色软饵（5-7cm T尾、卷尾各3枚），满足日常需求。 */"
    },
    {
      title: "均衡配置师（Balance主导）",
      description: "你是装备投资的「资产配置专家」，既不盲目追求高端，也不将就基础款。会根据季节、目标鱼种动态调整投入（如春季为翘嘴升级远投轮，秋季为鳜鱼配置软竿），保持装备与需求的精准匹配。",
      formula: "Balance >= 17",
      suggestion: "建立「装备需求清单」，按「必选（主线）-优选（子线盒）-可选（限量握把）」分级管理预算，避免冲动消费。",
      equip: "数据正在准备中",
      _originalEquip: "/* 配置「2+1」核心套装（2.4米ML调泛用竿+2500型水滴轮+1.8米L调微物竿，如G.Loomis E6X组合），搭配通用饵盒（米诺、VIB、软虫各5枚）。 */"
    },
    {
      title: "数据测评党（Depth+Data）",
      description: "你是装备圈的「测评达人」，购买前必看30+测评（含拆解视频），用Excel对比「重量-强度-价格」三维数据。对「实验室数据」和「实战反馈」的敏感度堪比专业评测师。",
      formula: "(Depth + Data) >= 21",
      suggestion: "参与品牌新品内测，通过实际使用反馈获取一手数据，为其他钓友提供更真实的测评参考。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择带「可追溯参数」的装备（如标注碳布吨位的钓竿、提供刹车力曲线图的渔轮，如Abu Garcia Revo SX），搭配防水笔记本记录「饵重-抛投距离-中鱼率」数据。 */"
    },
    {
      title: "实用主义者（Practical主导）",
      description: "你坚信「能上鱼的装备就是好装备」，对「黑科技」持谨慎态度，更看重「皮实耐造」。钓箱用了5年还在补漆，渔轮保养得比新的还顺滑，认为「把钱花在刀刃上」比「追新」更重要。",
      formula: "Practical >= 19",
      suggestion: "定期做「装备效能体检」（测试渔轮泄力稳定性、钓竿导环磨损度），及时更换关键部件（如老化线杯），延长核心装备寿命。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择「经典款」装备（上市3年以上的畅销款，如Shimano Stradic CI4+渔轮），搭配性价比高的国产配件（0.8-1.2号PE主线+碳氟前导）。 */"
    },
    {
      title: "审美装备控（Aesthetic主导）",
      description: "你把钓鱼装备当「艺术品」收藏，钓竿涂装要和钓服配色呼应，渔轮握把材质必须是檀木/碳纤维拼接，饵盒也要选设计奖作品。你的钓位永远是河边最亮眼的风景。",
      formula: "Aesthetic >= 14",
      suggestion: "关注「功能性设计美学」产品（如带夜光导环的高颜值竿、防水防刮的复古风钓箱），兼顾美观与实用。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择「设计联名款」装备（如与户外设计师合作的钓竿，如Orvis Helios 3D），搭配定制配件（刻有个人logo的饵夹、刺绣钓帽）。 */"
    },
    {
      title: "可持续玩家（Sustainability主导）",
      description: "你是钓鱼圈的「环保卫士」，优先选择可回收材质装备（竹制钓竿、生物降解软饵），主动清理钓点垃圾，甚至自制「旧线回收盒」。认为「保护生态」比「钓更多鱼」更有意义。",
      formula: "Sustainability >= 18",
      suggestion: "参与「以旧换新」计划（部分品牌提供旧装备回收抵现），支持研发环保材料的小众品牌，用消费选择推动绿色转型。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐「生态友好型」装备（FSC认证竹制钓竿如Orvis Clearwater，可降解TPE软饵如Yamamoto Senko），搭配可重复使用的硅胶饵盒。 */"
    },
    {
      title: "六边形投资人（多维度均衡）",
      description: "你在装备投资的各个维度都表现出色——既懂性能参数，又重视作钓体验；既会数据分析，也追求实用耐用。这种「全维度平衡」的能力，让你能根据场景切换策略，堪称「全能投资人」。",
      formula: "true",
      suggestion: "定期复盘装备使用情况（统计各装备的「上鱼贡献率」），识别优势维度并倾斜资源，同时补足偶尔短板（如提升审美搭配能力）。",
      equip: "数据正在准备中",
      _originalEquip: "/* 建立「模块化装备库」（1支泛用竿+2种轮组+3套饵盒，如St. Croix Mojo Bass组合），通过组合覆盖90%以上作钓需求。 */"
    }
  ],
  resultProbabilities: {
    "性能偏执者（Performance主导）": "12.21",
    "体验至上派（Frequency+Experience）": "10.97",
    "均衡配置师（Balance主导）": "8.37",
    "数据测评党（Depth+Data）": "13.63",
    "实用主义者（Practical主导）": "11.80",
    "审美装备控（Aesthetic主导）": "4.94",
    "可持续玩家（Sustainability主导）": "8.64",
    "六边形投资人（多维度均衡）": "29.45"
  }
};
const  competitionMotivationTest= {
  id: 28,
  title: "路亚赛事参与动机精密分析",
  titleshort: "路亚赛事参与动机",
  type: 5,
  questions: [
    {
      id: 1,
      text: "决定报名路亚赛事时，最吸引你的核心因素是？",
      options: [
        {
          text: "赛事是行业顶级荣誉认证（如CMLA冠军）",
          resultKey: [
            [
              "Honor",
              6
            ],
            [
              "Status",
              4
            ]
          ],
          icon: "🏆"
        },
        {
          text: "总奖金超50万+顶级赞助商装备奖励",
          resultKey: [
            [
              "Prize",
              7
            ],
            [
              "Economic",
              3
            ]
          ],
          icon: "💰"
        },
        {
          text: "能和全国TOP100钓手同场竞技交流",
          resultKey: [
            [
              "Social",
              5
            ],
            [
              "Challenge",
              5
            ]
          ],
          icon: "🤝"
        }
      ]
    },
    {
      id: 2,
      text: "备赛期间你会优先投入资源在？",
      options: [
        {
          text: "反复观看往届冠军战术视频+针对性训练",
          resultKey: [
            [
              "Mastery",
              5
            ],
            [
              "Challenge",
              5
            ]
          ],
          icon: "📽️"
        },
        {
          text: "升级最新款比赛专用竿轮（如Shimano Metanium MGL）",
          resultKey: [
            [
              "Status",
              6
            ],
            [
              "Tech",
              4
            ]
          ],
          icon: "⚙️"
        },
        {
          text: "组织本地钓友模拟赛+建立战术交流群",
          resultKey: [
            [
              "Community",
              7
            ],
            [
              "Social",
              3
            ]
          ],
          icon: "👥"
        }
      ]
    },
    {
      id: 3,
      text: "比赛首日落后3分（积分制），你的应对策略是？",
      options: [
        {
          text: "调整作钓节奏，必须在次日扳回排名",
          resultKey: [
            [
              "Honor",
              7
            ],
            [
              "Challenge",
              3
            ]
          ],
          icon: "🔥"
        },
        {
          text: "分析对手标点数据+更换高收益拟饵组合",
          resultKey: [
            [
              "Mastery",
              6
            ],
            [
              "Data",
              4
            ]
          ],
          icon: "📊"
        },
        {
          text: "约领先选手午餐交流，请教作钓思路",
          resultKey: [
            [
              "Social",
              8
            ],
            [
              "Community",
              2
            ]
          ],
          icon: "🍴"
        }
      ]
    },
    {
      id: 4,
      text: "赛事要求签署《生态保护承诺书》（如强制放流），你的态度是？",
      options: [
        {
          text: "完全支持，这是竞技钓手的基本素养",
          resultKey: [
            [
              "Ethic",
              9
            ],
            [
              "Mastery",
              1
            ]
          ],
          icon: "🌱"
        },
        {
          text: "接受但会关注是否影响最终成绩判定",
          resultKey: [
            [
              "Honor",
              5
            ],
            [
              "Prize",
              5
            ]
          ],
          icon: "⚠️"
        },
        {
          text: "正好能和钓友讨论可持续钓法，很期待",
          resultKey: [
            [
              "Enjoyment",
              6
            ],
            [
              "Community",
              4
            ]
          ],
          icon: "💬"
        }
      ]
    },
    {
      id: 5,
      text: "赛后最关注的反馈信息是？",
      options: [
        {
          text: "官方排名榜单+媒体专题报道",
          resultKey: [
            [
              "Status",
              6
            ],
            [
              "Honor",
              4
            ]
          ],
          icon: "📰"
        },
        {
          text: "奖金到账金额+赞助商合作邀约",
          resultKey: [
            [
              "Prize",
              7
            ],
            [
              "Economic",
              3
            ]
          ],
          icon: "💳"
        },
        {
          text: "钓友群/朋友圈的互动评论",
          resultKey: [
            [
              "Social",
              5
            ],
            [
              "Community",
              5
            ]
          ],
          icon: "📱"
        }
      ]
    },
    {
      id: 6,
      text: "若连续3届赛事未进前20，你会？",
      options: [
        {
          text: "研究失败数据，针对性强化短板",
          resultKey: [
            [
              "Mastery",
              8
            ],
            [
              "Challenge",
              2
            ]
          ],
          icon: "🔍"
        },
        {
          text: "转投奖金更高但难度较低的区域赛",
          resultKey: [
            [
              "Prize",
              6
            ],
            [
              "Economic",
              4
            ]
          ],
          icon: "➡️"
        },
        {
          text: "继续参赛，享受和钓友同场的快乐",
          resultKey: [
            [
              "Enjoyment",
              7
            ],
            [
              "Social",
              3
            ]
          ],
          icon: "😄"
        }
      ]
    },
    {
      id: 7,
      text: "向新手推荐赛事时，你会重点强调？",
      options: [
        {
          text: "赛事的行业认可度和荣誉价值",
          resultKey: [
            [
              "Honor",
              8
            ],
            [
              "Status",
              2
            ]
          ],
          icon: "🌟"
        },
        {
          text: "完善的奖金分配机制和赞助支持",
          resultKey: [
            [
              "Prize",
              7
            ],
            [
              "Economic",
              3
            ]
          ],
          icon: "🎁"
        },
        {
          text: "参赛氛围和钓鱼爱好者社群",
          resultKey: [
            [
              "Community",
              6
            ],
            [
              "Social",
              4
            ]
          ],
          icon: "🌈"
        }
      ]
    }
  ],
  dimensionWeights: {
    Honor: 1.1,
    Prize: 1.05,
    Social: 1.2,
    Challenge: 1.5,
    Mastery: 1.45,
    Community: 1.25,
    Status: 1.3,
    Enjoyment: 1.3
  },
  results: [
    {
      title: "荣誉骑士（Honor主导）",
      description: "你将赛事荣誉视为钓手的最高勋章，对行业顶级认证（如CMLA冠军）有着近乎虔诚的追求。每一次抛竿都带着为荣誉而战的信念，排名榜单上的名字比鱼获本身更能点燃你的斗志。",
      formula: "Honor>=22",
      suggestion: "可重点关注中国钓鱼运动协会认证的A类赛事，积累官方荣誉积分。建议参与赛事评委工作，提升行业话语权。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐Shimano Chronarch MGL竞技水滴轮+G.Loomis IMX-PRO钓竿，轻量化设计与高感度导环完美匹配竞技场景，助你精准把控每一次咬口。 */"
    },
    {
      title: "奖金猎人（Prize主导）",
      description: "你是赛事中的务实派，对奖金池和赞助奖励的敏感度远超常人。会精准计算参赛成本与预期收益，优先选择「高奖金+低门槛」的区域赛，将路亚竞技视为高回报的「技术型投资」。",
      formula: "Prize>=20.5",
      suggestion: "关注「钓获积分×奖金系数」的赛制赛事，搭配高概率中鱼的「万金油」拟饵（如米诺、VIB）提升收益稳定性。注意保留赛事合同条款，避免奖金纠纷。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择达瓦（Daiwa）Lexa CT水滴轮+伽玛卡兹（Gamakatsu）轻量化直柄竿，耐用性与性价比兼顾，降低高强度赛事中的装备损耗成本。 */"
    },
    {
      title: "社交达人（Social主导）",
      description: "你享受赛事的「社交场」属性，认识新朋友、拓展钓鱼圈人脉比最终排名更重要。即使「空军」也能通过分享作钓趣事成为钓友群焦点，是赛事中的「气氛担当」。",
      formula: "Social>=21",
      suggestion: "多参与「团队赛」「友谊赛」等互动性强的赛制，主动担任赛事志愿者或直播解说，扩大社交半径。可组织赛后「鱼获分享会」深化关系。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐阿布（Abu Garcia）Revo SX纺车轮+Fenwick HMG综合竿，轻便易操作，方便与钓友交换试钓，拉近互动距离。 */"
    },
    {
      title: "挑战玩家（Challenge主导）",
      description: "你将赛事视为「自我突破的战场」，专挑「黑坑巨物赛」「极限钓时赛」等高难度赛事。即使成绩不佳，也会因「尝试了从未用过的钓法」而兴奋，享受「突破舒适区」的成长感。",
      formula: "Challenge>=15.3",
      suggestion: "定期参加「技术创新赛」（如飞蝇钓专项赛），报名前可联系往届选手获取「隐藏难度」信息，针对性训练。赛后制作「挑战复盘视频」记录成长。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择ST.CROIX Legend Xtreme重雷竿+卡斯丁（KastKing）巨物轮，高强度配置应对青波、鳡鱼等大体型目标鱼，支撑极限挑战需求。 */"
    },
    {
      title: "技能大师（Mastery主导）",
      description: "你是赛事中的「技术派」，会为0.1秒的扬竿延迟调整3个月，对着慢动作视频研究拟饵泳姿。对「如何让钓组更贴底」「怎样减少抛投炸线」等技术细节的钻研，远超对成绩的关注。",
      formula: "Mastery>=20",
      suggestion: "申请加入「路亚技术研究协会」，参与《中国路亚钓法标准》修订工作。可在赛事期间开设「技术小课堂」，通过分享提升自身理论水平。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐GARY HOWELL签名款钓竿+SHIMANO CALCUTTA CONQUEST水滴轮，高感度碳布与精密齿轮组完美捕捉鱼讯，满足技术派对细节的极致追求。 */"
    },
    {
      title: "社群核心（Community主导）",
      description: "你是本地钓鱼圈的「粘合剂」，组织钓友训练、协调参赛行程、分享钓点信息是你的日常。赛事于你不仅是竞技，更是「带领圈子成长」的责任，看到新手获奖比自己拿冠军更开心。",
      formula: "Community>=16",
      suggestion: "发起「城市路亚联盟」，整合本地钓场资源与赛事信息。可申请成为「赛事推广合作伙伴」，为社群争取专属福利（如优先报名、装备折扣）。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择Ugly Stik GX2耐用竿+Pflueger President纺车轮，皮实耐造的入门级装备，方便借给社群新手使用，降低参与门槛。 */"
    },
    {
      title: "地位象征者（Status主导）",
      description: "你将顶级赛事参与资格视为「钓手身份认证」，会刻意提及「我和XX冠军同场竞技过」。装备偏好限量款或明星代言款，享受「圈内知名钓手」的标签带来的尊重感。",
      formula: "Status>=16",
      suggestion: "可赞助小型赛事设立「个人命名奖项」（如「XX杯最佳技术奖」），提升圈内影响力。注意平衡「身份展示」与「实际技术」，避免被评价为「空有头衔」。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐SHIMANO Stella SW限量纪念版纺车轮+G.Loomis Asquith签名竿，顶级品牌+限量属性完美匹配身份象征需求，开箱即成为焦点。 */"
    },
    {
      title: "体验派玩家（Enjoyment主导）",
      description: "你把赛事当「户外派对」，在意的是「和朋友在湖边钓一天」的快乐，鱼护里的鱼获、榜单上的排名都是「意外之喜」。即使比赛，也会带齐零食饮料，享受「钓鱼+社交+露营」的复合体验。",
      formula: "Enjoyment>=15",
      suggestion: "选择「休闲积分赛」「家庭趣味赛」等低压力赛制，搭配「钓获拍照即放流」规则。可携带便携折叠椅、户外音响等装备，提升作钓舒适度。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐达瓦（Daiwa）E6002H纺车轮+美夏（MEXIA）溪流竿，轻便易携带，搭配迷彩钓箱（内置保温层）存放零食饮料，完美契合体验优先需求。 */"
    },
    {
      title: "多维驱动者（综合型）",
      description: "你对赛事的热情源于多元动机——既享受和高手过招的挑战，也期待收获荣誉认可；既看重社群互动的温暖，也不排斥奖金的实际激励。这种「什么都想要」的特质，让你成为赛事中最有活力的「多面手」。",
      formula: "true",
      suggestion: "根据不同赛事特点调整策略：技术型赛事侧重Mastery，社交型赛事侧重Social，奖金型赛事侧重Prize。可尝试「一赛多角色」，既参赛又担任志愿者，全面体验赛事价值。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐「模块化装备套装」：1支G.Loomis IMX-PRO通用竿+2颗Shimano Metanium MGL（微物/巨物线杯）+1个可扩展钓箱（分区存放拟饵、零食、急救包），灵活应对不同场景需求。 */"
    }
  ],
  resultProbabilities: {
    "荣誉骑士（Honor主导）": "7.82",
    "奖金猎人（Prize主导）": "10.97",
    "社交达人（Social主导）": "8.37",
    "挑战玩家（Challenge主导）": "5.21",
    "技能大师（Mastery主导）": "10.75",
    "社群核心（Community主导）": "11.93",
    "地位象征者（Status主导）": "4.30",
    "体验派玩家（Enjoyment主导）": "5.58",
    "多维驱动者（综合型）": "35.07"
  }
};
const  personalityTest2= {
  id: 29,
  title: "极限作钓抉择：钓鱼人格深度解析",
  titleshort: "极限作钓抉择",
  type: 5,
  questions: [
    {
      id: 1,
      text: "当面临'全球限量100支的手工碳布鱼竿'与'知名钓手3天封闭指导'二选一，你的选择是？",
      options: [
        {
          text: "果断选限量鱼竿（抚摸竿身时能感受到工艺温度）",
          resultKey: [
            [
              "Material",
              6
            ],
            [
              "Gear",
              4
            ]
          ],
          icon: "🎣"
        },
        {
          text: "毫不犹豫选钓手指导（想知道他破解滑口鱼的秘籍）",
          resultKey: [
            [
              "Skill",
              7
            ],
            [
              "Experience",
              3
            ]
          ],
          icon: "👨🏫"
        },
        {
          text: "先查鱼竿拍卖记录+计算指导后鱼获增值，再决定",
          resultKey: [
            [
              "Goal",
              5
            ],
            [
              "Theory",
              5
            ]
          ],
          icon: "📊"
        }
      ]
    },
    {
      id: 2,
      text: "作钓时发现新鱼群但超出当前竿长，你会？",
      options: [
        {
          text: "立刻跑回车上换刚买的远投竿（新买的轮子还没开光）",
          resultKey: [
            [
              "Gear",
              7
            ],
            [
              "Material",
              3
            ]
          ],
          icon: "🚗"
        },
        {
          text: "观察鱼群游向+调整抛投角度（回忆教练教的侧抛技巧）",
          resultKey: [
            [
              "Skill",
              6
            ],
            [
              "Environment",
              4
            ]
          ],
          icon: "🎯"
        },
        {
          text: "掏出笔记本记录位置/时间/水色（为下次做数据模型）",
          resultKey: [
            [
              "Theory",
              5.5
            ],
            [
              "Goal",
              4.5
            ]
          ],
          icon: "📒"
        }
      ]
    },
    {
      id: 3,
      text: "收到钓友赠送的'爷爷辈手作竹制鱼竿'，你的处理方式？",
      options: [
        {
          text: "擦净后摆进玻璃柜（工艺感比实用更重要）",
          resultKey: [
            [
              "Material",
              8
            ],
            [
              "Experience",
              2
            ]
          ],
          icon: "🏺"
        },
        {
          text: "第二天就带去野河试钓（想感受传统钓法的魅力）",
          resultKey: [
            [
              "Practice",
              7
            ],
            [
              "Environment",
              3
            ]
          ],
          icon: "🌿"
        },
        {
          text: "拆解分析竹节结构+对比现代碳布参数（写篇技术文）",
          resultKey: [
            [
              "Theory",
              6
            ],
            [
              "Skill",
              4
            ]
          ],
          icon: "🔍"
        }
      ]
    },
    {
      id: 4,
      text: "连续3次空军后，你会优先？",
      options: [
        {
          text: "下单新款声呐探鱼器（科技不会骗人）",
          resultKey: [
            [
              "Gear",
              7
            ],
            [
              "Goal",
              3
            ]
          ],
          icon: "📡"
        },
        {
          text: "联系教练复盘（上次指导说的细节可能没做到）",
          resultKey: [
            [
              "Skill",
              6
            ],
            [
              "Experience",
              4
            ]
          ],
          icon: "📞"
        },
        {
          text: "坐在岸边观察水鸟/昆虫（自然信号比装备更真实）",
          resultKey: [
            [
              "Environment",
              8
            ],
            [
              "Practice",
              2
            ]
          ],
          icon: "🕊️"
        }
      ]
    },
    {
      id: 5,
      text: "选择钓点时最看重？",
      options: [
        {
          text: "有钓友拍过'巨物'的网红标点（出片率高）",
          resultKey: [
            [
              "Material",
              5
            ],
            [
              "Practice",
              5
            ]
          ],
          icon: "📸"
        },
        {
          text: "未开发的野河（想挑战未知鱼群）",
          resultKey: [
            [
              "Environment",
              7
            ],
            [
              "Skill",
              3
            ]
          ],
          icon: "🌊"
        },
        {
          text: "有历史鱼获数据库的收费塘（数据支撑的成功率）",
          resultKey: [
            [
              "Theory",
              6
            ],
            [
              "Goal",
              4
            ]
          ],
          icon: "📊"
        }
      ]
    },
    {
      id: 6,
      text: "如何看待'为钓巨物破坏岸边植被打窝'？",
      options: [
        {
          text: "能理解（装备都买了不能空手回）",
          resultKey: [
            [
              "Material",
              4
            ],
            [
              "Goal",
              6
            ]
          ],
          icon: "⚠️"
        },
        {
          text: "坚决反对（自然生态比鱼获重要）",
          resultKey: [
            [
              "Environment",
              8
            ],
            [
              "Experience",
              2
            ]
          ],
          icon: "🌱"
        },
        {
          text: "可以用仿生窝料替代（技术解决问题）",
          resultKey: [
            [
              "Skill",
              7
            ],
            [
              "Theory",
              3
            ]
          ],
          icon: "💡"
        }
      ]
    },
    {
      id: 7,
      text: "钓到罕见鱼种时，你的第一反应？",
      options: [
        {
          text: "拍照发圈定位（展示装备与鱼获）",
          resultKey: [
            [
              "Material",
              6
            ],
            [
              "Practice",
              4
            ]
          ],
          icon: "📱"
        },
        {
          text: "测量记录后放流（研究生长规律）",
          resultKey: [
            [
              "Theory",
              5
            ],
            [
              "Environment",
              5
            ]
          ],
          icon: "📏"
        },
        {
          text: "立刻联系教练请教（学习鉴别技巧）",
          resultKey: [
            [
              "Skill",
              7
            ],
            [
              "Experience",
              3
            ]
          ],
          icon: "👨🏫"
        }
      ]
    }
  ],
  dimensionWeights: {
    Material: 1.2,
    Skill: 1.15,
    Theory: 1.2,
    Practice: 1.05,
    Gear: 1.15,
    Experience: 1.3,
    Environment: 1.4,
    Goal: 1.3
  },
  results: [
    {
      title: "装备收藏家（Material+Gear）",
      description: "你对钓具的工艺与收藏价值有着近乎执着的追求，限量款、手工制钓具对你而言不仅是工具，更是身份的象征。看到新发布的高端装备时，手指总会不自觉点开购买链接，钓箱里永远躺着未拆封的'艺术品'。",
      formula: "(Material+Gear)>=35",
      suggestion: "建议定期组织钓具分享会，让收藏的装备发挥知识传播价值；尝试用老款经典装备作钓，感受不同时代工艺的实战差异。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐G.Loomis NRX+限量款钓竿（碳布工艺标杆）、Shimano Stella SW LTD轮（收藏级防水性能），搭配手工雕刻木质饵盒。 */"
    },
    {
      title: "技术修行者（Skill+Experience）",
      description: "你相信'钓无定式，功在人为'，比起装备更在意技术的打磨。手机里存着数百条教学视频，每次作钓都会带着教练给的笔记，遇到问题第一反应是'我是不是哪里没练到位'。",
      formula: "(Skill+Experience)>=37",
      suggestion: "报名专业钓手的进阶训练营，系统学习水下观察与鱼群行为分析；尝试跨钓法挑战（如飞蝇钓转雷强），拓展技术边界。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择Berkley Cherrywood Custom钓竿（高感度反馈技术细节）、Daiwa Tatula CT SV轮（精准抛投训练利器），搭配日本进口三本钩（提升刺鱼成功率）。 */"
    },
    {
      title: "自然感知者（Environment+Practice）",
      description: "你像一台行走的生态传感器，能通过水色变化判断鱼层，从风的方向推测鱼群游向。更享受'与鱼斗智'的过程，钓箱里永远备着自制仿生饵，坚信'最自然的才是最有效的'。",
      formula: "(Environment+Practice)>=36",
      suggestion: "参与生态保护组织的'放流监测'项目，用钓鱼技能助力鱼类研究；尝试传统钓法，提升对自然信号的敏感度。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐Fenwick HMG轻量竿（贴近自然抛投手感）、Pflueger President轮（顺滑收线不惊鱼），搭配Yamamoto Senko软饵（仿自然饵形）。 */"
    },
    {
      title: "数据分析师（Theory+Goal）",
      description: "你将钓鱼变成了精密的科学实验，手机里有自制的'钓获数据库'，会用Excel分析气压/温度/月相等变量的相关性。作钓前必查5年历史数据，坚信'概率大于运气'。",
      formula: "(Theory+Goal)>=37",
      suggestion: "学习使用钓鱼专用数据分析软件（如Fishidy），接入水文实时数据；尝试设计对照实验（如不同颜色拟饵在相同条件下的中鱼率）。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择Garmin Striker 4探鱼器（精准绘制水下结构）、13 Fishing Concept A轮（可记录抛投距离），搭配Rapala X-Rap系列（数据验证高通用性饵）。 */"
    },
    {
      title: "经验传承者（Experience+Environment）",
      description: "你相信'老钓手的一句话胜过十本说明书'，常跟着村里的'钓痴爷爷'学找草洞，手机里存着各地老钓点的'口耳相传'攻略。对生态保护有天然敬畏，坚持'取大放小'的传统原则。",
      formula: "(Experience+Environment)>=30",
      suggestion: "整理家族/社区的钓鱼口传经验，制作成《本土钓法手札》；参与'钓鱼文化保护'公益项目，记录即将消失的传统钓技。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐国产老品牌光威竹山竿（经典耐用）、狼王溪流轮（轻便易操作），搭配自制酒米窝料（延续传统打窝方式）。 */"
    },
    {
      title: "跨界实验家（Skill+Theory）",
      description: "你是钓鱼圈的'斜杠玩家'，会把工程学的应力分析用在竿稍设计，将心理学的'行为模式'套用到鱼群反应。看到新饵型会先拆解结构，作钓后必写'实验报告'。",
      formula: "(Skill+Theory)>=33.5",
      suggestion: "参加'创新钓法挑战赛'，用跨学科知识开发新型钓组；与高校水产专业合作，验证钓鱼技巧的科学性。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择Dobyns Fury Series钓竿（可自定义导环位置）、Abu Garcia Revo Beast轮（高强度实验测试），搭配3D打印定制拟饵（验证流体力学设计）。 */"
    },
    {
      title: "平衡型钓手（Three-Dimension）",
      description: "你在物质追求、技术提升与自然感知间保持着精妙平衡，既会为限量竿心动，也愿意花时间跟教练打磨技术，更懂得尊重生态规律。这种'不偏科'的特质，让你在各种钓场都能游刃有余。",
      formula: "(Material+Skill+Environment)>=28 && (Skill+Theory+Practice+Experience)>=29",
      suggestion: "尝试组织'多元钓法交流局'，邀请不同风格钓友互相学习；参加综合性钓鱼赛事（如混合钓法赛），验证综合实力。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择Shimano Expride钓竿（全场景适用）、Daiwa Exist轮（性能均衡），搭配Berkley PowerBait全系列（覆盖不同鱼情）。 */"
    },
    {
      title: "初心守护者（All-Dimension<15）",
      description: "钓鱼对你而言，始终是'坐在水边发发呆'的纯粹快乐。不追求装备多贵、技术多高，享受的是风拂过竿稍的声音，和鱼咬钩时那一瞬间的心跳。这种简单的快乐，才是钓鱼最本真的模样。",
      formula: "true",
      suggestion: "多去儿时钓鱼的老地方，重温最初的快乐；尝试'无目的作钓'，不带目标鱼种，享受与自然共处的每一刻。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择入门级套装（如迪卡侬ST500），搭配基础蚯蚓/玉米饵，让装备回归'工具'本质。 */"
    }
  ],
  resultProbabilities: {
    "装备收藏家（Material+Gear）": "9.28",
    "技术修行者（Skill+Experience）": "8.82",
    "自然感知者（Environment+Practice）": "12.16",
    "数据分析师（Theory+Goal）": "10.61",
    "经验传承者（Experience+Environment）": "10.75",
    "跨界实验家（Skill+Theory）": "13.63",
    "平衡型钓手（Three-Dimension）": "18.93",
    "初心守护者（All-Dimension<15）": "15.82"
  }
};
const virtualFishingTest= {
  id: 30,
  title: "虚拟钓场人格解码：自然美学与挑战欲的平衡测试",
  titleshort: "虚拟钓场人格解码",
  type: 5,
  questions: [
    {
      id: 1,
      text: "首次打开虚拟钓鱼APP时，你会优先查看？",
      options: [
        {
          text: "360°全景钓场预览图（湖光山色/峡谷溪流）",
          resultKey: [
            [
              "Aesthetic",
              6
            ],
            [
              "Immersion",
              4
            ]
          ],
          icon: "🏞️"
        },
        {
          text: "钓场难度星级+隐藏鱼种解锁条件",
          resultKey: [
            [
              "Challenge",
              7
            ],
            [
              "Exploration",
              3
            ]
          ],
          icon: "⚔️"
        },
        {
          text: "钓位预约系统+自动钓鱼功能说明",
          resultKey: [
            [
              "Comfort",
              5
            ],
            [
              "Efficiency",
              5
            ]
          ],
          icon: "🛋️"
        }
      ]
    },
    {
      id: 2,
      text: "当系统提示'今日开放随机天气钓场'（可能暴雨/暴雪），你会？",
      options: [
        {
          text: "立刻进入，想看看极端天气下的画面细节",
          resultKey: [
            [
              "Aesthetic",
              5
            ],
            [
              "Novelty",
              5
            ]
          ],
          icon: "🌩️"
        },
        {
          text: "先查历史胜率，选择天气难度匹配的时段进入",
          resultKey: [
            [
              "Efficiency",
              6
            ],
            [
              "Data",
              4
            ]
          ],
          icon: "📊"
        },
        {
          text: "暂时跳过，等常规天气钓场开放再玩",
          resultKey: [
            [
              "Comfort",
              7
            ],
            [
              "Social",
              3
            ]
          ],
          icon: "☀️"
        }
      ]
    },
    {
      id: 3,
      text: "作钓时遇到'鱼群仅对特定光影下的拟饵有反应'，你会？",
      options: [
        {
          text: "调整虚拟时间轴观察光影变化，手动匹配拟饵色号",
          resultKey: [
            [
              "Aesthetic",
              7
            ],
            [
              "Challenge",
              3
            ]
          ],
          icon: "🎨"
        },
        {
          text: "调用系统的'光影模拟实验室'批量测试饵型",
          resultKey: [
            [
              "Exploration",
              6
            ],
            [
              "Tech",
              4
            ]
          ],
          icon: "🔬"
        },
        {
          text: "直接切换系统推荐的'通用模式'快速上鱼",
          resultKey: [
            [
              "Efficiency",
              8
            ],
            [
              "Comfort",
              2
            ]
          ],
          icon: "⏩"
        }
      ]
    },
    {
      id: 4,
      text: "选择虚拟钓竿时最关注？",
      options: [
        {
          text: "钓竿材质的光影渲染效果（碳纤维纹理/木质握把）",
          resultKey: [
            [
              "Aesthetic",
              7
            ],
            [
              "Immersion",
              3
            ]
          ],
          icon: "🎣"
        },
        {
          text: "竿稍灵敏度参数+可自定义的抖动反馈强度",
          resultKey: [
            [
              "Challenge",
              6
            ],
            [
              "Tech",
              4
            ]
          ],
          icon: "📏"
        },
        {
          text: "是否支持与现实钓竿数据同步（长度/调性）",
          resultKey: [
            [
              "Social",
              5
            ],
            [
              "Efficiency",
              5
            ]
          ],
          icon: "🔄"
        }
      ]
    },
    {
      id: 5,
      text: "钓到稀有虚拟鱼种后，你会？",
      options: [
        {
          text: "用3D拍照模式生成艺术海报发社交圈",
          resultKey: [
            [
              "Aesthetic",
              6
            ],
            [
              "Social",
              4
            ]
          ],
          icon: "📸"
        },
        {
          text: "研究鱼的行为模式并写攻略分享",
          resultKey: [
            [
              "Exploration",
              7
            ],
            [
              "Data",
              3
            ]
          ],
          icon: "📝"
        },
        {
          text: "截图战绩后继续挑战更高难度目标",
          resultKey: [
            [
              "Challenge",
              8
            ],
            [
              "Novelty",
              2
            ]
          ],
          icon: "🚀"
        }
      ]
    },
    {
      id: 6,
      text: "遇到其他玩家组队邀请时，你会？",
      options: [
        {
          text: "加入并提议去新开的'星空湖'拍合照",
          resultKey: [
            [
              "Social",
              6
            ],
            [
              "Immersion",
              4
            ]
          ],
          icon: "👥"
        },
        {
          text: "询问对方擅长的钓法，组队挑战双人限时任务",
          resultKey: [
            [
              "Challenge",
              5
            ],
            [
              "Efficiency",
              5
            ]
          ],
          icon: "⏳"
        },
        {
          text: "礼貌拒绝，更喜欢独自探索新钓点",
          resultKey: [
            [
              "Exploration",
              7
            ],
            [
              "Novelty",
              3
            ]
          ],
          icon: "🚶"
        }
      ]
    },
    {
      id: 7,
      text: "系统推出'生态保护主题钓场'（需放生90%渔获），你会？",
      options: [
        {
          text: "立刻参与，想体验真实生态链的互动细节",
          resultKey: [
            [
              "Immersion",
              6
            ],
            [
              "Aesthetic",
              4
            ]
          ],
          icon: "🌱"
        },
        {
          text: "计算放生奖励与时间成本，决定参与时长",
          resultKey: [
            [
              "Efficiency",
              5
            ],
            [
              "Data",
              5
            ]
          ],
          icon: "🧮"
        },
        {
          text: "暂时观望，等其他玩家反馈再做决定",
          resultKey: [
            [
              "Social",
              7
            ],
            [
              "Comfort",
              3
            ]
          ],
          icon: "👀"
        }
      ]
    }
  ],
  dimensionWeights: {
    Aesthetic: 1.25,
    Challenge: 1.3,
    Comfort: 1.1,
    Exploration: 1.4,
    Efficiency: 1,
    Immersion: 1.3,
    Social: 1.1,
    Novelty: 1.2
  },
  results: [
    {
      title: "风景诗人（Aesthetic+Immersion）",
      description: "你是虚拟钓场的视觉捕手，对湖光山色的细腻渲染、光影变化的微妙细节有着近乎偏执的追求。钓鱼对你而言更像一场流动的艺术巡礼，即使空军也能在水面倒影中找到满足感。",
      formula: "(Aesthetic + Immersion)>=38.5",
      suggestion: "多参与'季节限定钓场'活动，感受春樱落湖、秋枫染溪的动态美学；尝试用虚拟钓场的'慢镜头模式'记录拟饵入水的瞬间，培养对自然韵律的感知。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐4K+120Hz高刷VR眼镜，确保画面流畅度；选择'手绘风格拟饵'（如渐变飞蝇饵），与钓场美学风格形成呼应。 */"
    },
    {
      title: "极限攀登者（Challenge+Exploration）",
      description: "你像虚拟钓界的登山者，永远在寻找下一个'未登顶'的难度高峰。隐藏鱼种、天气惩罚、限时任务...越难解锁的目标越能激发你的战斗欲，钓鱼对你来说是一场永不停歇的自我挑战。",
      formula: "(Challenge + Exploration)>=38",
      suggestion: "定期参与'大师赛模式'（动态调整难度），保持挑战阈值；加入'极限钓手社群'，与同好交换'0%胜率钓场'的破局经验。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择'专业级操作手柄'（支持6轴感应），提升微操精度；配置'动态阻力渔轮'（模拟真实鱼的挣扎力度），增强挑战真实感。 */"
    },
    {
      title: "舒适体验派（Comfort+Efficiency）",
      description: "你追求钓鱼的'无痛感'，讨厌复杂操作与无效等待。自动化、智能跳底、一键分享...系统的便利功能是你的刚需，钓鱼对你来说是放松而非修行，结果重要但过程必须舒服。",
      formula: "(Comfort*1.1 + Efficiency*1.0)>=30",
      suggestion: "关注'懒人模式'更新（如AI代抛功能），保留核心乐趣的同时减少机械操作；选择'设施完善钓场'（有遮阳棚/座椅），延长单次体验时长。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐'触控式操作平板'（界面简洁易上手）；使用'智能拟饵库'（系统根据钓场自动推荐最优饵型），降低决策成本。 */"
    },
    {
      title: "社交氛围组（Social+Immersion）",
      description: "你是虚拟钓场的人气枢纽，组队邀请永远亮着红点，钓鱼对你来说是'线下社交的虚拟延伸'。从拍合照到组局开黑，你享受的是与同好共享的每一刻。",
      formula: "(Social*1 + Immersion*1.1)>=25.5",
      suggestion: "发起'主题钓局'（如汉服钓鱼/cos角色钓鱼），提升社交趣味性；加入'本地钓友群'，组织线上线下联动活动（如虚拟钓获兑换现实小礼品）。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择'多人协作装备'（如可共享的诱饵盒）；配置'语音变声功能'（增加互动乐趣），但注意保持礼貌沟通。 */"
    },
    {
      title: "数据极客（Efficiency+Data）",
      description: "你像钓鱼界的分析师，手机里存着各种钓场胜率表、鱼种咬钩时间轴。每一次抛竿都经过数据校准，钓鱼对你来说是'概率学的实践场'，用理性击败随机性。",
      formula: "(Efficiency*1.0 + Data*1.0)>=23.5",
      suggestion: "开发个人'钓鱼数据库'（记录天气/时间/饵型的关联数据）；参与'数据预测赛'（根据历史数据预测次日鱼获），验证分析模型。",
      equip: "数据正在准备中",
      _originalEquip: "/* 使用'数据同步渔轮'（自动记录抛投距离/收线速度）；配置'AI分析插件'（实时生成'最佳策略建议'），提升决策科学性。 */"
    },
    {
      title: "新奇探索者（Novelty+Exploration）",
      description: "你是虚拟钓场的'尝鲜专业户'，新活动上线必第一时间体验，旧钓场玩三次就会失去兴趣。钓鱼对你来说是'永不过时的冒险'，永远期待下一个惊喜。",
      formula: "(Novelty*1.1 + Exploration*1.1)>=23",
      suggestion: "开启'随机钓场模式'（系统自动分配未知钓场）；关注'开发者日志'，提前了解新功能动向，保持探索优势。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择'模块化装备'（可快速更换钓竿/渔轮组件）；配置'彩蛋探测插件'（提示隐藏内容线索），提升探索效率。 */"
    },
    {
      title: "自然融合者（Aesthetic+Challenge）",
      description: "你在美学追求与挑战欲间找到完美平衡，既会为钓场的落霞美景停留，也会为破解'仅对特定光影咬钩'的鱼群兴奋。钓鱼对你来说是'与自然的对话'，美与征服同等重要。",
      formula: "(Aesthetic*1 + Challenge*1)>=32",
      suggestion: "参与'生态主题钓场'（如湿地保护模式），在挑战中学习自然知识；尝试'手作拟饵'功能（自定义颜色/形状），让拟饵与钓场环境更协调。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择'环境自适应拟饵'（根据水色自动调整反光度）；配置'光影感应渔线'（随光线变化显示不同颜色），增强与自然的互动感。 */"
    },
    {
      title: "全能体验家（综合维度）",
      description: "你是虚拟钓场的'六边形战士'，审美、挑战、社交、效率...各维度均衡发展。既能陪朋友拍美照，也能独自挑战隐藏任务，钓鱼对你来说是'包容一切的乐趣容器'。",
      formula: "true",
      suggestion: "定期切换主导模式（本周专注美学，下周挑战极限），保持体验新鲜感；参与'全能赛'（综合考核多项能力），验证自己的全面性。",
      equip: "数据正在准备中",
      _originalEquip: "/* 配置'全能套装'（包含高刷VR+专业手柄+社交设备）；收集'限定款装备'（如节日主题钓竿），丰富体验维度。 */"
    }
  ],
  resultProbabilities: {
    "风景诗人（Aesthetic+Immersion）": "10.38",
    "极限攀登者（Challenge+Exploration）": "9.05",
    "舒适体验派（Comfort+Efficiency）": "10.01",
    "社交氛围组（Social+Immersion）": "12.85",
    "数据极客（Efficiency+Data）": "9.01",
    "新奇探索者（Novelty+Exploration）": "15.45",
    "自然融合者（Aesthetic+Challenge）": "14.77",
    "全能体验家（综合维度）": "18.47"
  }
};
const  crisisPriorityTest= {
  id: 31,
  title: "钓鱼危机决策人格分析",
  titleshort: "钓鱼危机决策人格分析",
  type: 5,
  questions: [
    {
      id: 1,
      text: "作钓时同伴被飞钩划伤小臂出血，同时你的钓线突然剧烈抖动（经判断为稀有鱼种咬钩），你首先会？",
      options: [
        {
          text: "立即放下钓竿，取出急救包按压止血",
          resultKey: [
            [
              "Responsibility",
              6
            ],
            [
              "Empathy",
              4
            ]
          ],
          icon: "🩹"
        },
        {
          text: "用非持竿手固定同伴伤处，同时尝试稳住钓线不让鱼脱钩",
          resultKey: [
            [
              "Riskassessment",
              5
            ],
            [
              "Benefittrade",
              5
            ]
          ],
          icon: "⚖️"
        },
        {
          text: "先提竿控鱼防止逃脱，完成取鱼后再处理伤口",
          resultKey: [
            [
              "Impulse",
              7
            ],
            [
              "Benefittrade",
              3
            ]
          ],
          icon: "🎣"
        }
      ]
    },
    {
      id: 2,
      text: "急救包仅余1片止血贴（需贴30分钟），同伴伤口渗血+你手背被钓线擦伤，你会？",
      options: [
        {
          text: "直接给同伴使用，自己用衣物加压止血",
          resultKey: [
            [
              "Empathy",
              6
            ],
            [
              "Resourceallocation",
              4
            ]
          ],
          icon: "🤝"
        },
        {
          text: "立刻协商，评估伤势严重程度/是否有替代办法，决定谁优先使用",
          resultKey: [
            [
              "Riskassessment",
              5.5
            ],
            [
              "Ruleadherence",
              4.5
            ]
          ],
          icon: "⏳"
        },
        {
          text: "优先处理自己伤口（认为渗血更易感染）",
          resultKey: [
            [
              "SelfPreservation",
              6
            ],
            [
              "Benefittrade",
              4
            ]
          ],
          icon: "🛡️"
        }
      ]
    },
    {
      id: 3,
      text: "稀有鱼已控至岸边，同伴突然说头晕冒冷汗（可能中暑），此时鱼有脱钩风险，你会？",
      options: [
        {
          text: "立即松线让鱼游走，搀扶同伴到阴凉处",
          resultKey: [
            [
              "Responsibility",
              7
            ],
            [
              "Longtermview",
              3
            ]
          ],
          icon: "🌳"
        },
        {
          text: "快速抄网取鱼后，30秒内转移同伴",
          resultKey: [
            [
              "Efficiency",
              6
            ],
            [
              "Riskassessment",
              4
            ]
          ],
          icon: "⚡"
        },
        {
          text: "继续控鱼完成取钩，认为中暑休息即可",
          resultKey: [
            [
              "Impulse",
              5
            ],
            [
              "Benefittrade",
              5
            ]
          ],
          icon: "⏱️"
        }
      ]
    },
    {
      id: 4,
      text: "事后同伴提议隐瞒受伤（怕被家人责备），但你知道需打破伤风针，你会？",
      options: [
        {
          text: "坚持陪同就医并告知家属，说明风险",
          resultKey: [
            [
              "Ruleadherence",
              7
            ],
            [
              "Empathy",
              3
            ]
          ],
          icon: "🚑"
        },
        {
          text: "陪他买消毒用品，但提醒24小时内就医",
          resultKey: [
            [
              "Riskassessment",
              6
            ],
            [
              "Resourceallocation",
              4
            ]
          ],
          icon: "💊"
        },
        {
          text: "按他要求保密，认为是个人选择",
          resultKey: [
            [
              "SelfPreservation",
              5
            ],
            [
              "Casual",
              5
            ]
          ],
          icon: "🙊"
        }
      ]
    },
    {
      id: 5,
      text: "三个月后同一钓点，你再次遇到类似场景（同伴小伤+稀有鱼咬钩），你会？",
      options: [
        {
          text: "条件反射先处理伤口，鱼咬钩后也不遗憾",
          resultKey: [
            [
              "Responsibility",
              8
            ],
            [
              "Longtermview",
              2
            ]
          ],
          icon: "🔄"
        },
        {
          text: "根据伤口严重程度调整策略（如渗血则先鱼）",
          resultKey: [
            [
              "Riskassessment",
              6
            ],
            [
              "Benefittrade",
              4
            ]
          ],
          icon: "📊"
        },
        {
          text: "刻意提醒自己别重蹈覆辙（上次先处理鱼）",
          resultKey: [
            [
              "Longtermview",
              7
            ],
            [
              "Impulse",
              3
            ]
          ],
          icon: "📈"
        }
      ]
    },
    {
      id: 6,
      text: "你携带的应急包包含（可选3项），你会优先选？",
      options: [
        {
          text: "止血贴×10+三角巾+碘伏棉棒",
          resultKey: [
            [
              "Resourceallocation",
              7
            ],
            [
              "Responsibility",
              3
            ]
          ],
          icon: "🩺"
        },
        {
          text: "防割手套+快速补线组+脱钩器",
          resultKey: [
            [
              "Efficiency",
              6
            ],
            [
              "Tech",
              4
            ]
          ],
          icon: "🔧"
        },
        {
          text: "便携急救手册+哨子+保温毯",
          resultKey: [
            [
              "Riskassessment",
              5
            ],
            [
              "Longtermview",
              5
            ]
          ],
          icon: "📖"
        }
      ]
    },
    {
      id: 7,
      text: "看到新手钓友遇到同样危机（先救鱼后处理同伴），你会？",
      options: [
        {
          text: "立即上前制止并示范正确流程",
          resultKey: [
            [
              "Ruleadherence",
              6
            ],
            [
              "Empathy",
              4
            ]
          ],
          icon: "👨🏫"
        },
        {
          text: "事后提醒风险，分享自己的经历",
          resultKey: [
            [
              "Longtermview",
              5
            ],
            [
              "Riskassessment",
              5
            ]
          ],
          icon: "💬"
        },
        {
          text: "认为是个人选择，不干涉",
          resultKey: [
            [
              "Casual",
              7
            ],
            [
              "SelfPreservation",
              3
            ]
          ],
          icon: "🙌"
        }
      ]
    }
  ],
  dimensionWeights: {
    Responsibility: 1.3,
    Empathy: 1.2,
    Riskassessment: 1.15,
    Benefittrade: 1.05,
    Impulse: 0.9,
    Ruleadherence: 1.25,
    Resourceallocation: 1.1,
    Longtermview: 1.18
  },
  results: [
    {
      title: "责任磐石（Responsibility）",
      description: "你是团队中的安全锚点，危机时刻永远把同伴安危放在首位。对责任的坚守已成为肌肉记忆，即使面对稀有鱼获的诱惑，也能快速做出符合道德准则的决策。这种稳定的责任感让你成为钓友最信赖的伙伴。",
      formula: "Responsibility>=22",
      suggestion: "保持对安全细节的关注，可学习基础急救课程（如CPR）提升应急能力。同时注意平衡情绪，避免因过度紧张影响决策效率。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐配备专业户外急救包（含止血带、无菌敷料），选择带有快速取物设计的钓包（如侧开式），确保紧急情况下30秒内取出急救用品。 */"
    },
    {
      title: "共情守护者（Empathy）",
      description: "你的决策始终带着温度，能敏锐感知同伴的情绪需求。不仅会处理伤口，更会安抚对方的焦虑，这种情感支持往往比单纯的医疗处理更能缓解危机。你让钓鱼圈多了份家人般的温暖。",
      formula: "Empathy>=20",
      suggestion: "可尝试学习心理学沟通技巧，在紧急情况下更有效地稳定同伴情绪。同时注意区分‘共情’与‘过度担责’，避免因他人情绪影响自身判断。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择带有软质隔层的钓箱（可放置冰袋冷敷），搭配便携安抚工具（如降噪耳机），在处理伤情时提供更舒适的环境。 */"
    },
    {
      title: "风险精算师（Riskassessment）",
      description: "你像台人形风险计算器，能快速评估‘同伴伤情严重度’与‘鱼获逃脱概率’的动态平衡。决策时既不盲目冲动也不优柔寡断，这种精准的权衡能力让你在复杂危机中总能找到最优解。",
      formula: "Riskassessment>=19",
      suggestion: "可尝试用‘5秒评估法’（伤情等级/鱼获价值/环境风险）训练决策速度，同时记录每次危机的处理数据，建立个人风险评估模型。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐智能穿戴设备（如心率监测手环），辅助判断同伴生理状态；使用带拉力显示的渔轮，实时掌握钓线受力情况，为风险评估提供数据支持。 */"
    },
    {
      title: "规则践行者（Ruleadherence）",
      description: "你是钓鱼圈的‘安全法典’，严格遵守‘生命优先于鱼获’的底层规则。即使面对同伴的隐瞒请求或他人的质疑，也能坚守原则，这种对规则的敬畏让你成为团队的道德标杆。",
      formula: "Ruleadherence>=18",
      suggestion: "可参与制定钓场安全公约，推动‘急救包强制携带’等规则落地。同时注意规则的灵活性，特殊情况下需结合实际调整（如轻微擦伤可短暂兼顾鱼获）。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择带有反光条的救生衣（符合户外安全标准），配备防水规则手册（标注急救流程），用装备强化规则意识。 */"
    },
    {
      title: "长期视角者（Longtermview）",
      description: "你总能看到危机背后的连锁反应——同伴受伤可能影响后续作钓，鱼获丢失不过是一次遗憾。这种超越当下的视角让你做出更具远见的决策，你的钓鱼圈因你多了份可持续的智慧。",
      formula: "Longtermview>=17",
      suggestion: "可尝试用‘1年回顾法’（想象1年后如何看待这次选择）训练长期思维，同时多参与生态保护活动，强化‘自然可持续＞短期鱼获’的认知。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐使用可降解拟饵（减少生态影响），选择轻量化钓组（降低操作风险），用装备践行长期主义。 */"
    },
    {
      title: "冲动修正者（Impulse+Longtermview）",
      description: "你曾因即时冲动做出过后悔的选择，但可贵的是你学会了用长期视角反思改进。现在的你既能保留对钓鱼的热情，又能在冲动与责任间踩下‘刹车’，这种成长型思维让你不断趋近更成熟的决策。",
      formula: "Impulse>=12 && Longtermview>=10",
      suggestion: "可设置‘3秒冷静期’（遇到危机先深呼吸3秒），用物理延迟对抗冲动。同时记录‘冲动决策日志’，分析触发场景并制定预防策略。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择带握把防滑设计的钓竿（减少因紧张导致的误操作），使用可调节卸力的渔轮（避免因控鱼心切过度发力）。 */"
    },
    {
      title: "资源调配师（Resourceallocation）",
      description: "你是危机中的‘后勤指挥官’，有限的急救资源在你手中能发挥最大效用。无论是止血贴的分配还是应急包的选择，都体现着‘好钢用在刀刃上’的智慧，这种资源管理能力让你成为团队的隐形支柱。",
      formula: "Resourceallocation>=16",
      suggestion: "可学习‘最小化损失原则’（优先分配给对整体影响最大的需求），定期检查急救包有效期（每3个月更新一次），确保资源始终可用。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐分层式急救包（主仓放常用品，副仓放备用物资），选择带标签的收纳盒（快速识别物品），提升资源调配效率。 */"
    },
    {
      title: "平衡艺术者（Multi-Dimension）",
      description: "你在责任、共情、风险评估等多个维度都有出色表现，就像危机中的‘六边形战士’。既能守住道德底线，又能兼顾钓鱼乐趣，这种平衡艺术让你成为钓鱼圈最受欢迎的‘全能型伙伴’。",
      formula: "true",
      suggestion: "继续提升多任务处理能力（如边安抚同伴边控制钓线），参与跨领域学习（如户外安全+鱼类学），让你的平衡更有技术支撑。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择多功能钓包（集成急救仓+钓具仓），搭配轻量化钓竿（减轻操作负担），用装备支持你的全能表现。 */"
    }
  ],
  resultProbabilities: {
    "责任磐石（Responsibility）": "8.64",
    "共情守护者（Empathy）": "1.01",
    "风险精算师（Riskassessment）": "20.12",
    "规则践行者（Ruleadherence）": "2.97",
    "长期视角者（Longtermview）": "7.32",
    "冲动修正者（Impulse+Longtermview）": "1.60",
    "资源调配师（Resourceallocation）": "2.06",
    "平衡艺术者（Multi-Dimension）": "56.29"
  }
};
const fishingRecordHabitTest= {
  id: 32,
  title: "钓获记录习惯深度分析",
  titleshort: "钓获记录习惯深度分析",
  type: 5,
  questions: [
    {
      id: 1,
      text: "每次作钓结束后，你会？",
      options: [
        {
          text: "立即用专业APP记录（时间/天气/钓点坐标/鱼获尺寸/用饵型号）",
          resultKey: [
            [
              "Record",
              5
            ],
            [
              "Tech",
              3
            ],
            [
              "Analyze",
              2
            ]
          ],
          icon: "📱"
        },
        {
          text: "在笔记本上画简易钓点图+标注鱼群活跃区域",
          resultKey: [
            [
              "Detail",
              6
            ],
            [
              "Routine",
              4
            ]
          ],
          icon: "📓"
        },
        {
          text: "只拍鱼获照片发朋友圈，不额外记录具体数据",
          resultKey: [
            [
              "Memory",
              5
            ],
            [
              "Enjoy",
              5
            ]
          ],
          icon: "📸"
        }
      ]
    },
    {
      id: 2,
      text: "遇到罕见鱼种时，你会？",
      options: [
        {
          text: "测量体长/称重/记录鳞片特征+查询图鉴补充生态数据",
          resultKey: [
            [
              "Detail",
              8
            ],
            [
              "Improve",
              2
            ]
          ],
          icon: "🔍"
        },
        {
          text: "拍视频后放生，仅备注'今日钓到XX鱼'关键词",
          resultKey: [
            [
              "Record",
              5
            ],
            [
              "Routine",
              5
            ]
          ],
          icon: "🎥"
        },
        {
          text: "拍完照放回，觉得'反正下次不一定遇到'无需记录",
          resultKey: [
            [
              "Memory",
              6
            ],
            [
              "Enjoy",
              4
            ]
          ],
          icon: "🐟"
        }
      ]
    },
    {
      id: 3,
      text: "整理历史记录时，你会？",
      options: [
        {
          text: "用表格统计各季节/气压值/饵型的中鱼率，生成趋势图",
          resultKey: [
            [
              "Analyze",
              7
            ],
            [
              "Improve",
              3
            ]
          ],
          icon: "📊"
        },
        {
          text: "按钓点分类存放记录，偶尔翻出来回忆作钓场景",
          resultKey: [
            [
              "Routine",
              6
            ],
            [
              "Enjoy",
              4
            ]
          ],
          icon: "🗂️"
        },
        {
          text: "觉得记录太零散，基本不回头看",
          resultKey: [
            [
              "Memory",
              8
            ],
            [
              "Record",
              2
            ]
          ],
          icon: "❌"
        }
      ]
    },
    {
      id: 4,
      text: "选择记录工具时最看重？",
      options: [
        {
          text: "数据同步功能+支持多维度筛选（如APP/云笔记）",
          resultKey: [
            [
              "Record",
              5
            ],
            [
              "Tech",
              5
            ]
          ],
          icon: "💻"
        },
        {
          text: "便携性+防水防污（如防水笔记本+速干笔）",
          resultKey: [
            [
              "Detail",
              6
            ],
            [
              "Routine",
              4
            ]
          ],
          icon: "📒"
        },
        {
          text: "不刻意选工具，用手机备忘录或钓箱贴纸应付",
          resultKey: [
            [
              "Memory",
              5
            ],
            [
              "Enjoy",
              5
            ]
          ],
          icon: "📝"
        }
      ]
    },
    {
      id: 5,
      text: "连续3次空军后，你会？",
      options: [
        {
          text: "对比历史空军记录，分析是否钓点/天气/饵型重复",
          resultKey: [
            [
              "Analyze",
              5
            ],
            [
              "Improve",
              5
            ]
          ],
          icon: "🔄"
        },
        {
          text: "在记录本上标记'此钓点近期需规避'并调整目标鱼种",
          resultKey: [
            [
              "Record",
              5.5
            ],
            [
              "Detail",
              4.5
            ]
          ],
          icon: "🚫"
        },
        {
          text: "觉得是运气问题，换个钓点继续试不查记录",
          resultKey: [
            [
              "Memory",
              7
            ],
            [
              "Enjoy",
              3
            ]
          ],
          icon: "🎲"
        }
      ]
    },
    {
      id: 6,
      text: "朋友问你'某钓点最近鱼情如何'，你会？",
      options: [
        {
          text: "打开记录APP，调出近3个月该钓点的鱼获统计数据",
          resultKey: [
            [
              "Record",
              6
            ],
            [
              "Tech",
              2
            ],
            [
              "Analyze",
              2
            ]
          ],
          icon: "📅"
        },
        {
          text: "回忆上次去时的情况，补充'记得水草区有口'等细节",
          resultKey: [
            [
              "Detail",
              6
            ],
            [
              "Memory",
              4
            ]
          ],
          icon: "🧠"
        },
        {
          text: "说'大概还行吧'，具体情况记不清",
          resultKey: [
            [
              "Memory",
              7
            ],
            [
              "Enjoy",
              3
            ]
          ],
          icon: "🤷"
        }
      ]
    },
    {
      id: 7,
      text: "发现记录工具丢失/损坏时，你会？",
      options: [
        {
          text: "立即购买同款工具，补录近1个月的关键数据",
          resultKey: [
            [
              "Routine",
              7
            ],
            [
              "Record",
              3
            ]
          ],
          icon: "🔄"
        },
        {
          text: "用新工具继续记录，丢失的部分顺其自然",
          resultKey: [
            [
              "Routine",
              5
            ],
            [
              "Enjoy",
              5
            ]
          ],
          icon: "✅"
        },
        {
          text: "觉得麻烦，干脆停止系统记录",
          resultKey: [
            [
              "Memory",
              6
            ],
            [
              "Record",
              4
            ]
          ],
          icon: "🛑"
        }
      ]
    },
    {
      id: 8,
      text: "参加钓鱼讲座时，你最关注？",
      options: [
        {
          text: "讲师分享的'数据复盘方法'和'记录模板设计'",
          resultKey: [
            [
              "Analyze",
              5
            ],
            [
              "Improve",
              5
            ]
          ],
          icon: "📚"
        },
        {
          text: "实战案例中的'钓点特征'和'用饵细节'",
          resultKey: [
            [
              "Detail",
              7
            ],
            [
              "Routine",
              3
            ]
          ],
          icon: "🔍"
        },
        {
          text: "钓鱼过程的趣味故事和风景分享",
          resultKey: [
            [
              "Enjoy",
              8
            ],
            [
              "Memory",
              2
            ]
          ],
          icon: "🏞️"
        }
      ]
    }
  ],
  dimensionWeights: {
    Record: 1.45,
    Analyze: 1.5,
    Detail: 1.4,
    Routine: 1.2,
    Memory: 1,
    Improve: 1.8,
    Enjoy: 1,
    Tech: 2
  },
  results: [
    {
      title: "数据归档师（Record）",
      description: "你是钓鱼圈的'数据管家'，对钓获记录的系统性近乎偏执。从钓点经纬度到饵型编号，每个细节都被精准归档。你的记录本/APP就像钓鱼版'维基百科'，不仅记录过去，更为未来的每一次出钓提供可靠依据。",
      formula: "Record*1.1 >= 31",
      suggestion: "可尝试将记录与生态保护结合，例如记录稀有鱼种出现位置时主动模糊坐标，避免过度开发。定期备份电子记录，防止数据丢失。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐使用支持GPS定位+多维度标签的钓鱼记录APP（如Fishbrain），搭配防水蓝牙秤（可自动同步鱼获数据），户外则备防水笔记本+速干笔作为应急工具。 */"
    },
    {
      title: "复盘分析师（Analyze）",
      description: "记录对你而言不是终点，而是分析的起点。你擅长从零散数据中挖掘规律，气压变化与中鱼率的关系、不同季节的饵型偏好，这些隐藏的'钓鱼密码'都被你一一破解。你的钓技提升速度远超他人，因为每次出钓都是'用数据说话'。",
      formula: "Analyze>=21",
      suggestion: "尝试建立个人钓鱼数据库，将记录的变量（如水温/风向）与结果（鱼获量）做相关性分析。可参加钓鱼数据研讨会，学习专业统计方法。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择支持数据导出的记录工具（如Excel模板/Notion数据库），搭配钓鱼气象仪（实时监测气压/湿度），辅助验证分析结论。 */"
    },
    {
      title: "细节捕捉者（Detail）",
      description: "你像钓鱼界的'福尔摩斯'，连水面涟漪的方向、鱼咬钩时的竿稍抖动幅度都能精准记录。你的记录本里画满了钓点结构图、鱼群活动路线图，这些'细节宝藏'让你在陌生水域也能快速找到鱼道。",
      formula: "Detail*1.15 >= 33",
      suggestion: "可尝试用绘图软件（如Procreate）将手绘记录电子化，方便分类检索。记录时增加'环境干扰因素'（如船只经过次数），提升细节的参考价值。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐防水速写本+彩色记号笔（区分不同鱼种活动区域），搭配微距相机（拍摄鱼口细节），让记录更生动。 */"
    },
    {
      title: "习惯坚守者（Routine）",
      description: "记录对你而言已成为肌肉记忆，无论鱼获好坏，收竿后整理记录的动作雷打不动。你可能不追求数据的深度分析，但稳定的记录习惯让你在长期钓鱼生涯中积累了独一无二的'时间胶囊'，每一页都藏着岁月的痕迹。",
      formula: "Routine>=20",
      suggestion: "偶尔尝试打破固定记录模板，加入'当日心情'/'遇到的趣事'等感性内容，让记录更有温度。可定期举办'记录分享会'，与钓友交换记录习惯。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择设计简洁的便携记录工具（如Moleskine防水本），搭配磁吸式钓箱记录板（可随时粘贴便签补充信息），保持记录的仪式感。 */"
    },
    {
      title: "记忆依赖者（Memory）",
      description: "你相信'好记性不如烂笔头'，但更依赖大脑的即时记忆。记录对你来说是'辅助工具'而非'强制任务'，偶尔补记的关键信息足够支撑你的钓鱼经验总结。这种随性反而让你保持了对钓鱼最本真的热爱。",
      formula: "Memory>=26",
      suggestion: "可尝试'关键词记录法'（如'暴雨后/浅滩/米诺'），用最少文字触发记忆。设置每周'记忆复盘日'，将零散记忆整理成系统经验。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择轻量化记录工具（如手机便签/钓箱贴纸），搭配录音笔（口述记录关键信息），减少记录负担。 */"
    },
    {
      title: "提升驱动者（Improve）",
      description: "你的每一次记录都带着明确的'进步目标'——今天记录是为了明天钓得更好。从'空军记录'到'爆护分析'，你把钓鱼变成了一场'自我升级'的游戏，这种强烈的提升欲让你在钓鱼技术上持续突破。",
      formula: "Improve>=17",
      suggestion: "建立'问题-记录-改进'闭环，例如记录'某钓点总脱钩'后，针对性测试不同钩型/调性。可设定阶段性目标（如'3个月内提升翘嘴中鱼率20%'）。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择支持对比分析的记录工具（如自定义表格），搭配可调式钓竿（方便测试不同调性效果），助力技术突破。 */"
    },
    {
      title: "享受型钓手（Enjoy）",
      description: "对钓鱼的热爱让你更关注过程而非记录，鱼获照片里的笑容、与钓友的调侃，这些'非数据化'的美好才是你最珍视的'记录'。你的钓鱼生活像一首散文诗，记录与否都藏着最纯粹的快乐。",
      formula: "Enjoy>=17.5",
      suggestion: "可尝试'趣味记录法'（如用拍立得打印鱼获+手写趣味备注），让记录成为回忆的载体。偶尔参与'无记录挑战'，纯粹享受钓鱼的当下。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择高颜值记录工具（如复古拍立得相机），搭配可爱钓箱贴（记录当日心情），让记录本身成为钓鱼乐趣的一部分。 */"
    },
    {
      title: "工具技术流（Tech）",
      description: "你是钓鱼圈的'科技达人'，从智能APP到物联网设备，总能第一时间用新技术优化记录体验。技术不是你的目的，而是让记录更高效、分析更精准的'利器'，这种'技术为我所用'的态度让你走在钓鱼记录的前沿。",
      formula: "Tech*1.3 >= 19",
      suggestion: "关注钓鱼科技新品（如智能假饵/AI鱼情分析工具），但避免过度依赖技术忽略自然观察。定期清理电子记录，保持数据的有效性。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐智能钓鱼手表（支持定位/气象/鱼获记录）+蓝牙饵盒（自动记录用饵数据），实现全流程数字化记录。 */"
    },
    {
      title: "综合记录者（Multi-Dimension）",
      description: "你在记录习惯的多个维度都表现出色——既重视数据系统，又不缺细节捕捉；既保持记录习惯，也享受钓鱼过程。这种'平衡感'让你的钓鱼生涯既专业又有趣，每一次出钓都是经验的积累与快乐的叠加。",
      formula: "true",
      suggestion: "根据不同作钓场景调整记录策略（如野钓侧重环境记录，黑坑侧重饵型分析），保持灵活性。继续探索适合自己的记录方式，让习惯为钓鱼服务而非束缚。",
      equip: "数据正在准备中",
      _originalEquip: "/* 准备'全能记录套装'：专业APP（电子记录）+防水本（手绘细节）+拍立得（趣味记录），满足不同场景需求。 */"
    }
  ],
  resultProbabilities: {
    "数据归档师（Record）": "12.57",
    "复盘分析师（Analyze）": "11.03",
    "细节捕捉者（Detail）": "12.30",
    "习惯坚守者（Routine）": "12.10",
    "记忆依赖者（Memory）": "12.71",
    "提升驱动者（Improve）": "5.90",
    "享受型钓手（Enjoy）": "10.50",
    "工具技术流（Tech）": "2.83",
    "综合记录者（Multi-Dimension）": "20.04"
  }
};
const  companionFishingTest= {
  id: 33,
  title: "同伴作钓互动模式心理测评",
  titleshort: "同伴互动模式心理",
  type: 3,
  questions: [
    {
      id: 1,
      text: "到达钓点后，发现同行钓友对地形不熟悉，你会？",
      options: [
        {
          text: "主动带他绕岸观察，边指认深浅结构边讲解标点逻辑",
          resultKey: [
            [
              "Teach",
              6
            ],
            [
              "Collaborate",
              4
            ]
          ],
          icon: "👥"
        },
        {
          text: "简单指了指对岸说'那边出鱼'，自己先开竿试钓",
          resultKey: [
            [
              "Independent",
              7
            ],
            [
              "Adapt",
              3
            ]
          ],
          icon: "🎣"
        },
        {
          text: "等他主动问'哪里好钓'，再结合自己经验回答",
          resultKey: [
            [
              "Learn",
              5
            ],
            [
              "Empathy",
              5
            ]
          ],
          icon: "🤔"
        }
      ]
    },
    {
      id: 2,
      text: "你刚中鱼时，同伴在5米外频繁抛空竿，你会？",
      options: [
        {
          text: "立即收线过去，现场演示'刚才我是这样抽竿的'，并递饵让他试",
          resultKey: [
            [
              "Teach",
              5.5
            ],
            [
              "Share",
              4.5
            ]
          ],
          icon: "🎯"
        },
        {
          text: "举竿示意鱼获，喊'我用的银色VIB'，继续专注自己作钓",
          resultKey: [
            [
              "Independent",
              6
            ],
            [
              "Adapt",
              4
            ]
          ],
          icon: "🌟"
        },
        {
          text: "先溜鱼入护，再走过去问'你用的什么饵？需要我帮你看手法吗？'",
          resultKey: [
            [
              "Empathy",
              6
            ],
            [
              "Collaborate",
              4
            ]
          ],
          icon: "❤️"
        }
      ]
    },
    {
      id: 3,
      text: "同伴提出想试试你的新钓竿，你会？",
      options: [
        {
          text: "边递竿边详细讲解'这竿适合7-15g饵，刺鱼要快'，并观察他使用反馈",
          resultKey: [
            [
              "Teach",
              7
            ],
            [
              "Share",
              3
            ]
          ],
          icon: "🔧"
        },
        {
          text: "直接递过去说'随便用'，继续调整自己的线组不关注他的操作",
          resultKey: [
            [
              "Independent",
              8
            ],
            [
              "Adapt",
              2
            ]
          ],
          icon: "🛠️"
        },
        {
          text: "笑着说'你要是喜欢下次借你玩'，但暂时不想出借新装备",
          resultKey: [
            [
              "Learn",
              4
            ],
            [
              "Empathy",
              6
            ]
          ],
          icon: "🙌"
        }
      ]
    },
    {
      id: 4,
      text: "两人作钓节奏不同（你想守钓，他想走钓），你会？",
      options: [
        {
          text: "提议'我们分头行动，半小时后交换钓点交流鱼情'",
          resultKey: [
            [
              "Collaborate",
              6
            ],
            [
              "Adapt",
              4
            ]
          ],
          icon: "⏳"
        },
        {
          text: "坚持自己节奏说'守钓更容易等鱼窝'，不管他是否跟随",
          resultKey: [
            [
              "Independent",
              7
            ],
            [
              "Teach",
              3
            ]
          ],
          icon: "🚧"
        },
        {
          text: "妥协说'那我跟你走钓吧，刚好试试我的远投竿'",
          resultKey: [
            [
              "Empathy",
              5.5
            ],
            [
              "Learn",
              4.5
            ]
          ],
          icon: "🤝"
        }
      ]
    },
    {
      id: 5,
      text: "同伴空军时情绪低落，你会？",
      options: [
        {
          text: "翻出自己鱼护说'送你两条，回去好交差'，并分析他可能的失误点",
          resultKey: [
            [
              "Share",
              6
            ],
            [
              "Empathy",
              4
            ]
          ],
          icon: "🎁"
        },
        {
          text: "安慰'我上周也空军三次'，但继续专注自己补窝不深入交流",
          resultKey: [
            [
              "Independent",
              5
            ],
            [
              "Adapt",
              5
            ]
          ],
          icon: "🌱"
        },
        {
          text: "收起自己的鱼护说'其实我也没口，咱们换个饵再试试？'",
          resultKey: [
            [
              "Learn",
              4
            ],
            [
              "Collaborate",
              6
            ]
          ],
          icon: "🔄"
        }
      ]
    },
    {
      id: 6,
      text: "收竿复盘时，同伴反复强调'我刚才那个抛投超远'，你会？",
      options: [
        {
          text: "顺着说'确实远！但下次可以试试压低竿稍减少炸线'，引导技术讨论",
          resultKey: [
            [
              "Teach",
              5
            ],
            [
              "Share",
              5
            ]
          ],
          icon: "📝"
        },
        {
          text: "点头敷衍'厉害厉害'，心里想着赶紧回家整理鱼获",
          resultKey: [
            [
              "Independent",
              7
            ],
            [
              "Adapt",
              3
            ]
          ],
          icon: "🏠"
        },
        {
          text: "认真回应'远投需要手腕发力，我之前跟教练学过，要教你吗？'",
          resultKey: [
            [
              "Learn",
              3
            ],
            [
              "Empathy",
              7
            ]
          ],
          icon: "💡"
        }
      ]
    },
    {
      id: 7,
      text: "同伴临时说想尝试你擅长的雷强钓法，你会？",
      options: [
        {
          text: "立刻帮他调整装备，现场演示'雷蛙要抽停结合'，陪他练习半小时",
          resultKey: [
            [
              "Teach",
              6.5
            ],
            [
              "Collaborate",
              3.5
            ]
          ],
          icon: "🎮"
        },
        {
          text: "把自己的雷强竿借他说'小心挂草'，自己继续玩软饵",
          resultKey: [
            [
              "Share",
              5
            ],
            [
              "Independent",
              5
            ]
          ],
          icon: "🎣"
        },
        {
          text: "提醒'雷强很耗体力，你确定？'，根据他的坚持程度决定是否协助",
          resultKey: [
            [
              "Empathy",
              6
            ],
            [
              "Learn",
              4
            ]
          ],
          icon: "⚠️"
        }
      ]
    },
    {
      id: 8,
      text: "结束作钓返程时，你会主动聊？",
      options: [
        {
          text: "今天你用的饵型对我有启发，下次我想试试...（具体技术点）",
          resultKey: [
            [
              "Learn",
              6
            ],
            [
              "Share",
              4
            ]
          ],
          icon: "💬"
        },
        {
          text: "前面有家鱼馆不错，要不要去吃？（转移话题）",
          resultKey: [
            [
              "Adapt",
              7
            ],
            [
              "Independent",
              3
            ]
          ],
          icon: "🍴"
        },
        {
          text: "你刚才抄鱼的手法很稳，是跟谁学的？（主动请教）",
          resultKey: [
            [
              "Empathy",
              5
            ],
            [
              "Collaborate",
              5
            ]
          ],
          icon: "🙋"
        }
      ]
    }
  ],
  dimensionWeights: {
    Teach: 1.5,
    Collaborate: 1.6,
    Independent: 1.2,
    Share: 1.45,
    Learn: 1.55,
    Empathy: 1.65,
    Adapt: 1.3
  },
  results: [
    {
      title: "导师型钓友（Teach+Collaborate）",
      description: "你是同伴作钓中的「移动教学站」，不仅主动分享经验，更会观察对方需求调整指导方式。你享受通过钓鱼传递知识的过程，常能把技术交流变成愉快的互动，同伴跟你出钓不仅能提升钓技，更能感受到被重视的温暖。",
      formula: "Teach>=23 && Collaborate>=17",
      suggestion: "保持你的教学热情，但可尝试更开放的引导方式（如提问代替直接告知），让同伴获得探索的乐趣。注意观察对方接受度，避免过度输出造成压力。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐带便携多格饵盒（方便展示不同饵型）+ 可调节握把的演示竿（适应不同身高同伴试用），搭配防水笔记本记录同伴问题，针对性解答更高效。 */"
    },
    {
      title: "独立型钓手（Independent+Adapt）",
      description: "你享受钓鱼的纯粹性，更关注自我提升而非社交互动。作钓时专注度高，能快速适应不同同伴的节奏，但更倾向保持「协作但不依赖」的距离感。你像钓鱼场的独行侠，高效且洒脱。",
      formula: "Independent>=28 && Adapt>=15",
      suggestion: "偶尔尝试主动发起技术讨论，你积累的经验对新手可能很有价值。适当增加与同伴的互动，能让钓鱼之旅更有温度。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择快拆式钓箱（方便快速转移钓点）+ 远投套装（减少频繁调整装备的干扰），搭配可单手操作的控鱼器，保持专注作钓的流畅性。 */"
    },
    {
      title: "共情分享者（Share+Empathy）",
      description: "你像钓鱼圈的「情绪调和剂」，能敏锐感知同伴状态，分享时会考虑对方需求而非单向输出。鱼获分享有温度，挫折时的安慰更有力量，同伴和你出钓不仅为钓鱼，更为那份被理解的安心。",
      formula: "Share>=18 && Empathy>=20",
      suggestion: "继续发挥你的共情优势，可尝试组织小型钓友交流会，把个人温暖扩散成群体联结。注意保护自己的情绪边界，避免过度照顾他人而忽略需求。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐带双仓钓包（自己装备+备用小物）+ 折叠马扎（方便与同伴并肩交流），搭配可挂式鱼护（展示鱼获时不遮挡视线，增加互动感）。 */"
    },
    {
      title: "学习型伙伴（Learn+Collaborate）",
      description: "你是钓鱼互动中的「成长型选手」，主动请教但不盲目，分享时会结合自己的学习心得。你相信「教学相长」，常能通过与同伴的交流碰撞出新思路，是团队中最能带动进步的「催化剂」。",
      formula: "Learn>=18 && Collaborate>=17",
      suggestion: "保持你的学习热情，可尝试发起「主题作钓」（如「本周研究倒钓钓组」），与同伴制定共同目标，让互动更有深度。记录学习笔记并分享，能帮助更多人。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐带防水录音笔（记录同伴经验）+ 可擦写钓场地图（边讨论边标注），搭配多节式演示竿（拆解讲解结构更直观），学习工具就是你的互动武器。 */"
    },
    {
      title: "平衡协调者（Adapt+Empathy）",
      description: "你是作钓团队的「隐形纽带」，能灵活调整自己适应不同同伴，同时关注每个人的体验。你很少成为焦点，却总能让团队氛围轻松愉快，同伴常说「和你出钓最舒服，不用迁就谁」。",
      formula: "Adapt>=16 && Empathy>=16",
      suggestion: "你的协调能力是宝贵的财富，可尝试组织多人作钓活动，发挥「中间人」优势。偶尔也可以表达自己的偏好，让同伴更了解真实的你。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择通用型装备（如M调竿+2000型轮），方便临时借给同伴使用。搭配多口袋马甲（装小药、子线等备用物资），随时解决同伴的小需求。 */"
    },
    {
      title: "技术联结者（Teach+Share）",
      description: "你是钓鱼技术的「传播大使」，擅长把专业知识转化为易懂的经验分享。你不满足于自己钓得好，更希望同伴也能掌握核心技巧，常被评价「跟你学钓鱼，进步特别快」。",
      formula: "Teach>=18 && Share>=18",
      suggestion: "可尝试制作简单的「钓法卡片」（如「VIB操作三步骤」），方便同伴快速查阅。参加钓鱼培训师认证，把个人经验转化为系统化教学。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐带可调节角度的钓鱼相机（录制教学视频）+ 多饵展示板（标注饵重/适用场景），搭配带刻度的子线板（直观演示线组长度），技术分享更有说服力。 */"
    },
    {
      title: "体验优先派（Independent+Learn）",
      description: "你享受钓鱼的「自我对话」过程，作钓时更关注个人体验，但也不排斥从同伴身上学习。你像钓鱼场的「观察者」，既保持独立思考，又能吸收他人长处，形成独特的作钓风格。",
      formula: "Independent>=16 && Learn>=16",
      suggestion: "尝试与风格差异大的钓友组队（如传统钓vs路亚），跨领域学习能激发新灵感。偶尔分享你的「体验笔记」，让同伴了解你独特的作钓视角。",
      equip: "数据正在准备中",
      _originalEquip: "/* 选择轻量化装备（如28调软竿+微物轮），减少装备负担更专注体验。搭配防水日记本（记录作钓感受），学习和独立思考都需要「记录」来沉淀。 */"
    },
    {
      title: "百搭型钓友（All-Rounder）",
      description: "你是钓鱼互动中的「多面手」，能根据同伴特点切换互动模式——对新手耐心教学，对高手虚心请教，对慢热型同伴主动调和。你的灵活性和包容性，让你成为最受欢迎的「万能搭子」。",
      formula: "true",
      suggestion: "继续保持你的百搭特质，可尝试总结不同同伴的互动「关键词」（如「技术型聊参数」「体验型聊感受」），让互动更精准。注意保留自己的核心作钓原则，避免过度迎合。",
      equip: "数据正在准备中",
      _originalEquip: "/* 推荐「模块化」装备组合（如可换导环的竿体+通用渔轮），适应不同钓法需求。搭配多功能钓伞（防晒+遮雨+临时交流空间），为各种互动场景提供支持。 */"
    }
  ],
  resultProbabilities: {
    "导师型钓友（Teach+Collaborate）": "11.96",
    "独立型钓手（Independent+Adapt）": "12.04",
    "共情分享者（Share+Empathy）": "12.27",
    "学习型伙伴（Learn+Collaborate）": "10.35",
    "平衡协调者（Adapt+Empathy）": "10.09",
    "技术联结者（Teach+Share）": "8.00",
    "体验优先派（Independent+Learn）": "9.30",
    "百搭型钓友（All-Rounder）": "25.99"
  }
};

module.exports = {
  personalityTest,
  emergencyTest, 
  natureAbilityTest,
  juece,
  fishingKnowledgeTest,
  yuhuochuli,
  baoyang,
  nierxuanze,
  shejiao,
  tianqi,
  dongji,
  zhexue,
  airForce,
  personality,
  luresGearTest,
  fishingSpotStrategyTest,
  luresObsessionTest,
  personality2,
  fishingResilienceTest,
  catchAndReleaseTest,
  socialSharingTest,
  fishingComparisonTest,
  patienceTest,
  memoryFilterTest ,
  personalityTest1,
  environmentalConsistencyTest,
  equipmentInvestmentTest,
  competitionMotivationTest,
  personalityTest2,
  virtualFishingTest,
  crisisPriorityTest,
  fishingRecordHabitTest,
  companionFishingTest
};

