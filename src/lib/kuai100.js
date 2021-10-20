const list = [
  {
    'label': '韵达快递',
    'code': 'yunda'
  },
  {
    'label': '中通快递',
    'code': 'zhongtong'
  },
  {
    'label': '申通快递',
    'code': 'shentong'
  },
  {
    'label': '百世快递',
    'code': 'huitongkuaidi'
  },
  {
    'label': '顺丰速运',
    'code': 'shunfeng'
  },
  {
    'label': '邮政快递包裹',
    'code': 'youzhengguonei'
  },
  {
    'label': 'EMS',
    'code': 'ems'
  },
  {
    'label': '京东物流',
    'code': 'jd'
  },
  {
    'label': '极兔速递',
    'code': 'jtexpress'
  },
  {
    'label': '邮政标准快递',
    'code': 'youzhengbk'
  },
  {
    'label': '德邦',
    'code': 'debangwuliu'
  },
  {
    'label': '德邦快递',
    'code': 'debangkuaidi'
  },
  {
    'label': '优速快递',
    'code': 'youshuwuliu'
  },
  {
    'label': '圆通快运',
    'code': 'yuantongkuaiyun'
  },
  {
    'label': '宅急送',
    'code': 'zhaijisong'
  },
  {
    'label': '韵达快运',
    'code': 'yundakuaiyun'
  },
  {
    'label': '中通快运',
    'code': 'zhongtongkuaiyun'
  },
  {
    'label': '百世快运',
    'code': 'baishiwuliu'
  },
  {
    'label': '中通国际',
    'code': 'zhongtongguoji'
  },
  {
    'label': '安能快运',
    'code': 'annengwuliu'
  },
  {
    'label': '顺丰快运',
    'code': 'shunfengkuaiyun'
  },
  {
    'label': '特急送',
    'code': 'lntjs'
  },
  {
    'label': 'DHL-中国件',
    'code': 'dhl'
  },
  {
    'label': 'UPS-全球件',
    'code': 'upsen'
  },
  {
    'label': '丹鸟',
    'code': 'danniao'
  },
  {
    'label': 'UPS',
    'code': 'ups'
  },
  {
    'label': 'D速快递',
    'code': 'dsukuaidi'
  },
  {
    'label': '九曳供应链',
    'code': 'jiuyescm'
  },
  {
    'label': '安得物流',
    'code': 'annto'
  },
  {
    'label': '跨越速运',
    'code': 'kuayue'
  },
  {
    'label': 'FedEx-国际件',
    'code': 'fedex'
  },
  {
    'label': '国际包裹',
    'code': 'youzhengguoji'
  },
  {
    'label': 'EWE全球快递',
    'code': 'ewe'
  },
  {
    'label': '顺心捷达',
    'code': 'sxjdfreight'
  },
  {
    'label': '京广速递',
    'code': 'jinguangsudikuaijian'
  },
  {
    'label': '壹米滴答',
    'code': 'yimidida'
  },
  {
    'label': 'USPS',
    'code': 'usps'
  },
  {
    'label': '日日顺物流',
    'code': 'rrs'
  },
  {
    'label': '递四方',
    'code': 'disifang'
  },
  {
    'label': '加运美',
    'code': 'jiayunmeiwuliu'
  },
  {
    'label': 'DHL-全球件',
    'code': 'dhlen'
  },
  {
    'label': '联昊通',
    'code': 'lianhaowuliu'
  },
  {
    'label': 'EMS包裹',
    'code': 'emsbg'
  },
  {
    'label': '速尔快递',
    'code': 'suer'
  },
  {
    'label': '同城快寄',
    'code': 'shpost'
  },
  {
    'label': '签收快递',
    'code': 'signedexpress'
  },
  {
    'label': '速腾快递',
    'code': 'suteng'
  },
  {
    'label': 'EMS-国际件',
    'code': 'emsguoji'
  },
  {
    'label': 'Fedex-国际件-中文',
    'code': 'fedexcn'
  },
  {
    'label': '众邮快递',
    'code': 'zhongyouex'
  },
  {
    'label': '美快国际物流',
    'code': 'meiquick'
  },
  {
    'label': '汇森速运',
    'code': 'huisenky'
  },
  {
    'label': '信丰物流',
    'code': 'xinfengwuliu'
  },
  {
    'label': 'DPD',
    'code': 'dpd'
  },
  {
    'label': '宇鑫物流',
    'code': 'yuxinwuliu'
  },
  {
    'label': '天天快递',
    'code': 'tiantian'
  },
  {
    'label': 'Purolator',
    'code': 'purolator'
  },
  {
    'label': 'YUN TRACK',
    'code': 'yuntrack'
  },
  {
    'label': '速必达',
    'code': 'subida'
  },
  {
    'label': '三态速递',
    'code': 'santaisudi'
  },
  {
    'label': '丰网速运',
    'code': 'fengwang'
  },
  {
    'label': '品骏快递',
    'code': 'pjbest'
  },
  {
    'label': '行云物流',
    'code': 'xyb2b'
  },
  {
    'label': 'Titan泰坦国际速递',
    'code': 'timelytitan'
  },
  {
    'label': '优邦速运',
    'code': 'ubonex'
  },
  {
    'label': '招金精炼',
    'code': 'zhaojin'
  },
  {
    'label': '苏宁物流',
    'code': 'suning'
  },
  {
    'label': '联邦快递',
    'code': 'lianbangkuaidi'
  },
  {
    'label': '中邮速递',
    'code': 'wondersyd'
  },
  {
    'label': '联合快递',
    'code': 'gslhkd'
  },
  {
    'label': '燕文物流',
    'code': 'yw56'
  },
  {
    'label': '海信物流',
    'code': 'savor'
  },
  {
    'label': '拉火速运',
    'code': 'lahuoex'
  },
  {
    'label': 'CJ物流',
    'code': 'doortodoor'
  },
  {
    'label': '威时沛运货运',
    'code': 'wtdchina'
  },
  {
    'label': '京东快运',
    'code': 'jingdongkuaiyun'
  },
  {
    'label': '申通国际',
    'code': 'stosolution'
  },
  {
    'label': 'Xlobo贝海国际',
    'code': 'xlobo'
  },
  {
    'label': 'UBI Australia',
    'code': 'gotoubi'
  },
  {
    'label': '如家国际快递',
    'code': 'homecourier'
  },
  {
    'label': '平安达腾飞',
    'code': 'pingandatengfei'
  },
  {
    'label': '荣庆物流',
    'code': 'rokin'
  },
  {
    'label': 'DPD Germany',
    'code': 'dpdgermany'
  },
  {
    'label': '转运四方',
    'code': 'zhuanyunsifang'
  },
  {
    'label': '中远e环球',
    'code': 'cosco'
  },
  {
    'label': '日本（Japan Post）',
    'code': 'japanposten'
  },
  {
    'label': '威盛快递',
    'code': 'wherexpess'
  },
  {
    'label': '嘉里大通',
    'code': 'jialidatong'
  },
  {
    'label': '大马鹿',
    'code': 'idamalu'
  },
  {
    'label': '中铁快运',
    'code': 'ztky'
  },
  {
    'label': '圆通国际',
    'code': 'yuantongguoji'
  },
  {
    'label': '雪域易购',
    'code': 'qhxyyg'
  },
  {
    'label': '澳邮中国快运',
    'code': 'auexpress'
  },
  {
    'label': '程光快递',
    'code': 'flyway'
  },
  {
    'label': 'TNT-全球件',
    'code': 'tnten'
  },
  {
    'label': '黄马甲',
    'code': 'huangmajia'
  },
  {
    'label': '芝麻开门',
    'code': 'zhimakaimen'
  },
  {
    'label': '卓志速运',
    'code': 'chinaicip'
  },
  {
    'label': 'Austa国际速递',
    'code': 'austa'
  },
  {
    'label': '无忧物流',
    'code': 'aliexpress'
  },
  {
    'label': '鑫正一快递',
    'code': 'zhengyikuaidi'
  },
  {
    'label': '新顺丰（NSF）',
    'code': 'nsf'
  },
  {
    'label': '天地华宇',
    'code': 'tiandihuayu'
  },
  {
    'label': '天马迅达',
    'code': 'tianma'
  },
  {
    'label': '安能快递',
    'code': 'ane66'
  },
  {
    'label': '龙邦速递',
    'code': 'longbanwuliu'
  },
  {
    'label': 'EFS Post（平安快递）',
    'code': 'efs'
  },
  {
    'label': '安信达',
    'code': 'anxindakuaixi'
  },
  {
    'label': 'TNT',
    'code': 'tnt'
  },
  {
    'label': '中邮物流',
    'code': 'zhongyouwuliu'
  },
  {
    'label': '迅达速递',
    'code': 'xdexpress'
  },
  {
    'label': '盛丰物流',
    'code': 'sfwl'
  },
  {
    'label': '转运中国',
    'code': 'uszcn'
  },
  {
    'label': '金岸物流',
    'code': 'jinan'
  },
  {
    'label': '微特派',
    'code': 'weitepai'
  },
  {
    'label': '易客满',
    'code': 'ecmscn'
  },
  {
    'label': '盛辉物流',
    'code': 'shenghuiwuliu'
  },
  {
    'label': '泰进物流',
    'code': 'taijin'
  },
  {
    'label': '快捷速递',
    'code': 'kuaijiesudi'
  },
  {
    'label': '递四方美国',
    'code': 'disifangus'
  },
  {
    'label': 'Superb Express',
    'code': 'superb'
  },
  {
    'label': '邦泰快运',
    'code': 'btexpress'
  },
  {
    'label': '德坤物流',
    'code': 'dekuncn'
  },
  {
    'label': '国通快递',
    'code': 'guotongkuaidi'
  },
  {
    'label': 'OCS',
    'code': 'ocs'
  },
  {
    'label': '安迅物流',
    'code': 'anxl'
  },
  {
    'label': '方舟速递',
    'code': 'arkexpress'
  },
  {
    'label': '苏通快运',
    'code': 'zjstky'
  },
  {
    'label': '诚和通',
    'code': 'cht361'
  },
  {
    'label': '富腾达国际货运',
    'code': 'ftd'
  },
  {
    'label': '澳大利亚(Australia Post)',
    'code': 'auspost'
  },
  {
    'label': '龙邦物流',
    'code': 'lbex'
  },
  {
    'label': '联合速运',
    'code': 'unitedex'
  },
  {
    'label': '速通物流',
    'code': 'sut56'
  },
  {
    'label': '澳洲飞跃物流',
    'code': 'rlgaus'
  },
  {
    'label': '源安达',
    'code': 'yuananda'
  },
  {
    'label': '百事亨通',
    'code': 'bsht'
  },
  {
    'label': 'Aramex',
    'code': 'aramex'
  },
  {
    'label': '比利时（Bpost）',
    'code': 'bpost'
  },
  {
    'label': 'AAE-中国件',
    'code': 'aae'
  },
  {
    'label': '出口易',
    'code': 'chukou1'
  },
  {
    'label': '宏递快运',
    'code': 'hd'
  },
  {
    'label': '叁虎物流',
    'code': 'sanhuwuliu'
  },
  {
    'label': '荷兰邮政(PostNL international registered mail)',
    'code': 'postnl'
  },
  {
    'label': 'EMS-国际件-英文',
    'code': 'emsinten'
  },
  {
    'label': '中铁飞豹',
    'code': 'zhongtiewuliu'
  },
  {
    'label': '鼎润物流',
    'code': 'la911'
  },
  {
    'label': '极地快递',
    'code': 'polarexpress'
  },
  {
    'label': '景光物流',
    'code': 'jgwl'
  },
  {
    'label': '泛捷国际速递',
    'code': 'epanex'
  },
  {
    'label': '远航国际快运',
    'code': 'yuanhhk'
  },
  {
    'label': 'LUCFLOW EXPRESS',
    'code': 'longfx'
  },
  {
    'label': '海欣斯快递',
    'code': 'highsince'
  },
  {
    'label': '新杰物流',
    'code': 'sunjex'
  },
  {
    'label': '中速快递',
    'code': 'zhongsukuaidi'
  },
  {
    'label': '全联速运',
    'code': 'guexp'
  },
  {
    'label': '安达速递',
    'code': 'adapost'
  },
  {
    'label': '铁中快运',
    'code': 'tzky'
  },
  {
    'label': '疯狂快递',
    'code': 'crazyexpress'
  },
  {
    'label': 'DPD UK',
    'code': 'dpduk'
  },
  {
    'label': '达发物流',
    'code': 'dfwl'
  },
  {
    'label': 'GLS',
    'code': 'gls'
  },
  {
    'label': '速达通',
    'code': 'sdto'
  },
  {
    'label': '澳天速运',
    'code': 'aotsd'
  },
  {
    'label': '联合速递',
    'code': 'lhexpressus'
  },
  {
    'label': '斑马物流',
    'code': 'banma'
  },
  {
    'label': '富吉速运',
    'code': 'fujisuyun'
  },
  {
    'label': '成都立即送',
    'code': 'lijisong'
  },
  {
    'label': '山西建华',
    'code': 'shanxijianhua'
  },
  {
    'label': '快捷快物流',
    'code': 'gdkjk56'
  },
  {
    'label': '万家物流',
    'code': 'wanjiawuliu'
  },
  {
    'label': '广东邮政',
    'code': 'guangdongyouzhengwuliu'
  },
  {
    'label': '速递中国',
    'code': 'sendtochina'
  },
  {
    'label': '亚风速递',
    'code': 'yafengsudi'
  },
  {
    'label': '鸿泰物流',
    'code': 'hnht56'
  },
  {
    'label': '商桥物流',
    'code': 'shangqiao56'
  },
  {
    'label': '新西兰（New Zealand Post）',
    'code': 'newzealand'
  },
  {
    'label': 'E2G速递',
    'code': 'express2global'
  },
  {
    'label': '合众速递(UCS）',
    'code': 'ucs'
  },
  {
    'label': '万象物流',
    'code': 'wanxiangwuliu'
  },
  {
    'label': '长江国际速递',
    'code': 'changjiang'
  },
  {
    'label': '贰仟家物流',
    'code': 'erqianjia56'
  },
  {
    'label': '百福东方',
    'code': 'baifudongfang'
  },
  {
    'label': '时达通',
    'code': 'jssdt56'
  },
  {
    'label': '优优速递',
    'code': 'youyou'
  },
  {
    'label': '亚洲顺物流',
    'code': 'yzswuliu'
  },
  {
    'label': '帮帮发',
    'code': 'bangbangpost'
  },
  {
    'label': '顺丰-繁体',
    'code': 'shunfenghk'
  },
  {
    'label': 'beiou express',
    'code': 'beiou'
  },
  {
    'label': '中集冷云',
    'code': 'cccc58'
  },
  {
    'label': '可可树美中速运',
    'code': 'excocotree'
  },
  {
    'label': '宅急便',
    'code': 'zhaijibian'
  },
  {
    'label': '中途速递',
    'code': 'ztcce'
  },
  {
    'label': '恒路物流',
    'code': 'hengluwuliu'
  },
  {
    'label': '丰通快运',
    'code': 'ftky365'
  },
  {
    'label': '御风速运',
    'code': 'yufeng'
  },
  {
    'label': '速派快递',
    'code': 'fastgoexpress'
  },
  {
    'label': '新元国际',
    'code': 'xynyc'
  },
  {
    'label': '美通',
    'code': 'valueway'
  },
  {
    'label': 'COE',
    'code': 'coe'
  },
  {
    'label': 'SYNSHIP快递',
    'code': 'synship'
  },
  {
    'label': '佐川急便',
    'code': 'sagawa'
  },
  {
    'label': '一正达速运',
    'code': 'yizhengdasuyun'
  },
  {
    'label': '三真驿道',
    'code': 'zlink'
  },
  {
    'label': '英国邮政大包EMS',
    'code': 'parcelforcecn'
  },
  {
    'label': 'MoreLink',
    'code': 'morelink56'
  },
  {
    'label': '大田物流',
    'code': 'datianwuliu'
  },
  {
    'label': '直德邮',
    'code': 'zdepost'
  },
  {
    'label': 'Fastway Ireland',
    'code': 'fastway'
  },
  {
    'label': '邮邦国际',
    'code': 'youban'
  },
  {
    'label': '中外运',
    'code': 'esinotrans'
  },
  {
    'label': '三志物流',
    'code': 'sanzhi56'
  },
  {
    'label': '黑猫宅急便',
    'code': 'tcat'
  },
  {
    'label': '澳德物流',
    'code': 'auod'
  },
  {
    'label': '百腾物流',
    'code': 'baitengwuliu'
  },
  {
    'label': '小飞侠速递',
    'code': 'cyxfx'
  },
  {
    'label': '原飞航',
    'code': 'yuanfeihangwuliu'
  },
  {
    'label': '易达通快递',
    'code': 'qexpress'
  },
  {
    'label': '荷兰邮政-中文(PostNL international registered mail)',
    'code': 'postnlcn'
  },
  {
    'label': '加拿大龙行速运',
    'code': 'longcps'
  },
  {
    'label': '联邦快递-英文',
    'code': 'lianbangkuaidien'
  },
  {
    'label': '安捷物流',
    'code': 'anjie88'
  },
  {
    'label': '全峰快递',
    'code': 'quanfengkuaidi'
  },
  {
    'label': '家家通快递',
    'code': 'newsway'
  },
  {
    'label': '运通中港快递',
    'code': 'ytkd'
  },
  {
    'label': '德国(Deutsche Post)',
    'code': 'deutschepost'
  },
  {
    'label': '荷兰邮政-中国件',
    'code': 'postnlchina'
  },
  {
    'label': 'YDH',
    'code': 'ydhex'
  },
  {
    'label': '增益速递',
    'code': 'zengyisudi'
  },
  {
    'label': '飞远配送',
    'code': 'feiyuanvipshop'
  },
  {
    'label': '安鲜达',
    'code': 'exfresh'
  },
  {
    'label': '能达速递',
    'code': 'ganzhongnengda'
  },
  {
    'label': '友家速递',
    'code': 'youjia'
  },
  {
    'label': '锦程快递',
    'code': 'hrex'
  },
  {
    'label': '加拿大(Canada Post)',
    'code': 'canpost'
  },
  {
    'label': 'DHL-德国件（DHL Deutschland）',
    'code': 'dhlde'
  },
  {
    'label': '明通国际快递',
    'code': 'tnjex'
  },
  {
    'label': 'Hermes',
    'code': 'hermes'
  },
  {
    'label': '优速通达',
    'code': 'yousutongda'
  },
  {
    'label': '佳怡物流',
    'code': 'jiayiwuliu'
  },
  {
    'label': '全一快递',
    'code': 'quanyikuaidi'
  },
  {
    'label': 'TST速运通',
    'code': 'tstexp'
  },
  {
    'label': 'EMS物流',
    'code': 'emswuliu'
  },
  {
    'label': 'wedepot物流',
    'code': 'wedepot'
  },
  {
    'label': 'DPD Poland',
    'code': 'dpdpoland'
  },
  {
    'label': '顺达快递',
    'code': 'sundarexpress'
  },
  {
    'label': 'airpak expresss',
    'code': 'airpak'
  },
  {
    'label': '城晓国际快递',
    'code': 'ckeex'
  },
  {
    'label': '汇达物流',
    'code': 'hdcexpress'
  },
  {
    'label': '汇峰物流',
    'code': 'huif56'
  },
  {
    'label': '西班牙(Correos de Espa?a)',
    'code': 'correosdees'
  },
  {
    'label': '永昌物流',
    'code': 'yongchangwuliu'
  },
  {
    'label': '科捷物流',
    'code': 'kejie'
  },
  {
    'label': '中环快递',
    'code': 'zhonghuan'
  },
  {
    'label': '佰麒快递',
    'code': 'beckygo'
  },
  {
    'label': '魔速达',
    'code': 'mosuda'
  },
  {
    'label': '星云速递',
    'code': 'nebuex'
  },
  {
    'label': '上海缤纷物流',
    'code': 'bflg'
  },
  {
    'label': 'CCES/国通快递',
    'code': 'cces'
  },
  {
    'label': '商壹国际物流',
    'code': 'com1express'
  },
  {
    'label': '中国香港(HongKong Post)',
    'code': 'hkpost'
  },
  {
    'label': '日本郵便',
    'code': 'japanpost'
  },
  {
    'label': '如风达',
    'code': 'rufengda'
  },
  {
    'label': '皮牙子快递',
    'code': 'bazirim'
  },
  {
    'label': '德国优拜物流',
    'code': 'ubuy'
  },
  {
    'label': '易境达国际物流',
    'code': 'uscbexpress'
  },
  {
    'label': '耀飞同城快递',
    'code': 'yaofeikuaidi'
  },
  {
    'label': 'TRAKPAK',
    'code': 'trakpak'
  },
  {
    'label': '汇通天下物流',
    'code': 'httx56'
  },
  {
    'label': '广州安能聚创物流',
    'code': 'gzanjcwl'
  },
  {
    'label': '佳成快递 ',
    'code': 'jiacheng'
  },
  {
    'label': '海带宝',
    'code': 'haidaibao'
  },
  {
    'label': '店通快递',
    'code': 'diantongkuaidi'
  },
  {
    'label': '佳吉快运',
    'code': 'jiajiwuliu'
  },
  {
    'label': '6LS EXPRESS',
    'code': 'lsexpress'
  },
  {
    'label': 'EMS-英文',
    'code': 'emsen'
  },
  {
    'label': '联运通物流',
    'code': 'szuem'
  },
  {
    'label': '一智通',
    'code': '1ziton'
  },
  {
    'label': '宇佳物流',
    'code': 'yujiawl'
  },
  {
    'label': '递五方云仓',
    'code': 'di5pll'
  },
  {
    'label': 'Newgistics',
    'code': 'newgistics'
  },
  {
    'label': '久久物流',
    'code': 'jiujiuwl'
  },
  {
    'label': '无限配',
    'code': 'omni2'
  },
  {
    'label': '飞洋快递',
    'code': 'shipgce'
  },
  {
    'label': '中邮电商',
    'code': 'chinapostcb'
  },
  {
    'label': '速舟物流',
    'code': 'cnspeedster'
  },
  {
    'label': 'DPEX',
    'code': 'dpex'
  },
  {
    'label': '雅澳物流',
    'code': 'yourscm'
  },
  {
    'label': '运通中港',
    'code': 'yuntongkuaidi'
  },
  {
    'label': '英国大包、EMS（Parcel Force）',
    'code': 'parcelforce'
  },
  {
    'label': '西游寄',
    'code': 'xiyoug'
  },
  {
    'label': '聚盟共建',
    'code': 'jumstc'
  },
  {
    'label': '韩国邮政',
    'code': 'koreapostcn'
  },
  {
    'label': '上大物流',
    'code': 'shangda'
  },
  {
    'label': 'GTS快递',
    'code': 'gts'
  },
  {
    'label': '全时速运',
    'code': 'runhengfeng'
  },
  {
    'label': '明达国际速递',
    'code': 'tmwexpress'
  },
  {
    'label': '天天欧洲物流',
    'code': 'ttkeurope'
  },
  {
    'label': 'FedEx-美国件',
    'code': 'fedexus'
  },
  {
    'label': '卡塔尔（Qatar Post）',
    'code': 'qpost'
  },
  {
    'label': '申通新西兰',
    'code': 'stonewzealand'
  },
  {
    'label': '百世云配',
    'code': 'baishiyp'
  },
  {
    'label': '昌宇国际',
    'code': 'changwooair'
  },
  {
    'label': '顺捷美中速递',
    'code': 'passerbyaexpress'
  },
  {
    'label': '武汉优进汇',
    'code': 'yjhgo'
  },
  {
    'label': '迅速快递',
    'code': 'xunsuexpress'
  },
  {
    'label': '奔腾物流',
    'code': 'benteng'
  },
  {
    'label': 'CNE',
    'code': 'cnexps'
  },
  {
    'label': '尚橙物流',
    'code': 'shangcheng'
  },
  {
    'label': '法国(La Poste)',
    'code': 'csuivi'
  },
  {
    'label': '7号速递',
    'code': 'express7th'
  },
  {
    'label': '明大快递',
    'code': 'adaexpress'
  },
  {
    'label': '意大利(Poste Italiane)',
    'code': 'italiane'
  },
  {
    'label': '佳吉快递',
    'code': 'jiajikuaidi'
  },
  {
    'label': '晟邦物流',
    'code': 'nanjingshengbang'
  },
  {
    'label': 'TNT Australia',
    'code': 'tntau'
  },
  {
    'label': '中翼国际物流',
    'code': 'chnexp'
  },
  {
    'label': '传喜物流',
    'code': 'chuanxiwuliu'
  },
  {
    'label': 'Gati-中文',
    'code': 'gaticn'
  },
  {
    'label': '汇强快递',
    'code': 'huiqiangkuaidi'
  },
  {
    'label': '一速递',
    'code': 'oneexpress'
  },
  {
    'label': '中华邮政',
    'code': 'postserv'
  },
  {
    'label': '春风物流',
    'code': 'spring56'
  },
  {
    'label': '三象速递',
    'code': 'sxexpress'
  },
  {
    'label': '英超物流',
    'code': 'yingchao'
  },
  {
    'label': 'CDEK',
    'code': 'cdek'
  },
  {
    'label': '欧亚专线',
    'code': 'euasia'
  },
  {
    'label': '上海航瑞货运',
    'code': 'hangrui'
  },
  {
    'label': '海派国际速递',
    'code': 'hpexpress'
  },
  {
    'label': '中国香港环球快运',
    'code': 'huanqiuabc'
  },
  {
    'label': '全速物流',
    'code': 'quansu'
  },
  {
    'label': '安世通快递',
    'code': 'astexpress'
  },
  {
    'label': '比利时国际(Bpost international)',
    'code': 'bpostinter'
  },
  {
    'label': '喀麦隆(CAMPOST)',
    'code': 'cameroon'
  },
  {
    'label': '北京EMS',
    'code': 'bjemstckj'
  },
  {
    'label': '创一快递',
    'code': 'chuangyi'
  },
  {
    'label': '大韩通运',
    'code': 'cjkoreaexpress'
  },
  {
    'label': '飞豹快递',
    'code': 'feibaokuaidi'
  },
  {
    'label': '飞康达',
    'code': 'feikangda'
  },
  {
    'label': '华美快递',
    'code': 'hmus'
  },
  {
    'label': '皇家云仓',
    'code': 'hotwms'
  },
  {
    'label': '环球速运',
    'code': 'huanqiu'
  },
  {
    'label': '韩国（Korea Post）',
    'code': 'koreapost'
  },
  {
    'label': '乌克兰邮政包裹',
    'code': 'ukrpostcn'
  },
  {
    'label': '易达通',
    'code': 'yidatong'
  },
  {
    'label': 'DHL Benelux',
    'code': 'dhlbenelux'
  },
  {
    'label': 'EASY EXPRESS',
    'code': 'easyexpress'
  },
  {
    'label': '集先锋快递',
    'code': 'jxfex'
  },
  {
    'label': '泰国（Thailand Thai Post）',
    'code': 'thailand'
  },
  {
    'label': '洋口岸',
    'code': 'ykouan'
  },
  {
    'label': '中粮鲜到家物流',
    'code': 'zlxdjwl'
  },
  {
    'label': '贝业物流',
    'code': 'boyol'
  },
  {
    'label': '大洋物流',
    'code': 'dayangwuliu'
  },
  {
    'label': '成都东骏物流',
    'code': 'dongjun'
  },
  {
    'label': '瀚朝物流',
    'code': 'hac56'
  },
  {
    'label': '好来运',
    'code': 'hlyex'
  },
  {
    'label': '佳辰国际速递',
    'code': 'jiachenexpress'
  },
  {
    'label': 'OnTrac',
    'code': 'ontrac'
  },
  {
    'label': '荷兰包裹(PostNL International Parcels)',
    'code': 'postnlpacle'
  },
  {
    'label': 'TransRush',
    'code': 'transrush'
  },
  {
    'label': 'Toll Priority(Toll Online)',
    'code': 'tollpriority'
  },
  {
    'label': '永邦国际物流',
    'code': 'yongbangwuliu'
  },
  {
    'label': '远成物流',
    'code': 'yuanchengwuliu'
  },
  {
    'label': '玥玛速运',
    'code': 'yue777'
  },
  {
    'label': '阿森迪亚',
    'code': 'asendia'
  },
  {
    'label': '颿达国际快递',
    'code': 'fardarww'
  },
  {
    'label': 'GSM',
    'code': 'gsm'
  },
  {
    'label': '黑猫速运',
    'code': 'heimao56'
  },
  {
    'label': '龙枫国际快递',
    'code': 'lfexpress'
  },
  {
    'label': '腾达速递',
    'code': 'nntengda'
  },
  {
    'label': '皇家物流',
    'code': 'pfcexpress'
  },
  {
    'label': '全川物流',
    'code': 'quanchuan56'
  },
  {
    'label': '泰国138国际物流',
    'code': 'sd138'
  },
  {
    'label': 'USPSCN',
    'code': 'uspscn'
  },
  {
    'label': '黑猫同城送',
    'code': 'ynztsy'
  },
  {
    'label': '比利时(Belgium Post)',
    'code': 'belgiumpost'
  },
  {
    'label': 'BHT',
    'code': 'bht'
  },
  {
    'label': '东瀚物流',
    'code': 'donghanwl'
  },
  {
    'label': '澳州顺风快递',
    'code': 'emms'
  },
  {
    'label': '日日顺智慧物联',
    'code': 'gooday365'
  },
  {
    'label': '中国香港(HongKong Post)英文',
    'code': 'hkposten'
  },
  {
    'label': '诺尔国际物流',
    'code': 'nuoer'
  },
  {
    'label': '秦邦快运',
    'code': 'qbexpress'
  },
  {
    'label': '秦远物流',
    'code': 'qinyuan'
  },
  {
    'label': '一起送',
    'code': 'yiqisong'
  },
  {
    'label': '志腾物流',
    'code': 'zhitengwuliu'
  },
  {
    'label': '中外运速递',
    'code': 'zhongwaiyun'
  },
  {
    'label': '澳捷物流',
    'code': 'ajlogistics'
  },
  {
    'label': 'CHS中环国际快递',
    'code': 'chszhonghuanguoji'
  },
  {
    'label': '城市映急',
    'code': 'city56'
  },
  {
    'label': '法国小包（colissimo）',
    'code': 'colissimo'
  },
  {
    'label': '捷安达',
    'code': 'jieanda'
  },
  {
    'label': '拉脱维亚(Latvijas Pasts)',
    'code': 'latvia'
  },
  {
    'label': '陆本速递 LUBEN EXPRESS',
    'code': 'luben'
  },
  {
    'label': '秦岭智能速运',
    'code': 'qinling'
  },
  {
    'label': '瑞典（Sweden Post）',
    'code': 'ruidianyouzheng'
  },
  {
    'label': '伍圆速递',
    'code': 'wuyuansudi'
  },
  {
    'label': '宇捷通',
    'code': 'yujtong'
  },
  {
    'label': '远为快递',
    'code': 'ywexpress'
  },
  {
    'label': 'Asendia USA',
    'code': 'asendiausa'
  },
  {
    'label': '银雁专送',
    'code': 'cfss'
  },
  {
    'label': '柬埔寨中通',
    'code': 'khzto'
  },
  {
    'label': '浩博物流',
    'code': 'njhaobo'
  },
  {
    'label': '瑞士(Swiss Post)',
    'code': 'swisspost'
  },
  {
    'label': 'track-parcel',
    'code': 'trackparcel'
  },
  {
    'label': '承诺达',
    'code': 'ytchengnuoda'
  },
  {
    'label': 'dhl小包',
    'code': 'dhlecommerce'
  },
  {
    'label': '海联快递',
    'code': 'hltop'
  },
  {
    'label': '红背心',
    'code': 'hongbeixin'
  },
  {
    'label': '牙买加（Jamaica Post）',
    'code': 'jamaicapost'
  },
  {
    'label': '林道国际快递-英文',
    'code': 'ldxpres'
  },
  {
    'label': '乐递供应链',
    'code': 'ledii'
  },
  {
    'label': '一号线',
    'code': 'lineone'
  },
  {
    'label': '世华通物流',
    'code': 'szshihuatong56'
  },
  {
    'label': '中运全速',
    'code': 'topspeedex'
  },
  {
    'label': '韵达国际',
    'code': 'udalogistic'
  },
  {
    'label': '远成快运',
    'code': 'ycgky'
  },
  {
    'label': '宜送物流',
    'code': 'yiex'
  },
  {
    'label': '三三国际物流',
    'code': 'zenzen'
  },
  {
    'label': '创运物流',
    'code': 'zjcy56'
  },
  {
    'label': 'A2U速递',
    'code': 'a2u'
  },
  {
    'label': '心怡物流',
    'code': 'alog'
  },
  {
    'label': '八达通',
    'code': 'bdatong'
  },
  {
    'label': '锋鸟物流',
    'code': 'beebird'
  },
  {
    'label': '泛远国际物流',
    'code': 'farlogistis'
  },
  {
    'label': 'globaltracktrace',
    'code': 'globaltracktrace'
  },
  {
    'label': '飞豹速递',
    'code': 'hkeex'
  },
  {
    'label': 'LaserShip',
    'code': 'lasership'
  },
  {
    'label': '马来西亚小包（Malaysia Post(Registered)）',
    'code': 'malaysiapost'
  },
  {
    'label': '尼尔快递',
    'code': 'nell'
  },
  {
    'label': '丹麦(Post Denmark)',
    'code': 'postdanmarken'
  },
  {
    'label': '丰程物流',
    'code': 'sccod'
  },
  {
    'label': '泰实货运',
    'code': 'tjkjwl'
  },
  {
    'label': '宇航通物流',
    'code': 'yhtlogistics'
  },
  {
    'label': '运通速运',
    'code': 'yuntong'
  },
  {
    'label': '中宏物流',
    'code': 'zhonghongwl'
  },
  {
    'label': '卓实快运',
    'code': 'zhuoshikuaiyun'
  },
  {
    'label': '河北橙配',
    'code': 'chengpei'
  },
  {
    'label': '邦通国际',
    'code': 'comexpress'
  },
  {
    'label': '大道物流',
    'code': 'dadaoex'
  },
  {
    'label': '丹递56',
    'code': 'dande56'
  },
  {
    'label': '高考通知书',
    'code': 'emsluqu'
  },
  {
    'label': '易优包裹',
    'code': 'eupackage'
  },
  {
    'label': 'E速达',
    'code': 'exsuda'
  },
  {
    'label': '凡宇快递',
    'code': 'fanyukuaidi'
  },
  {
    'label': '高捷快运',
    'code': 'goldjet'
  },
  {
    'label': '极光转运',
    'code': 'jiguang'
  },
  {
    'label': '聚鼎物流',
    'code': 'juding'
  },
  {
    'label': '美国快递',
    'code': 'meiguokuaidi'
  },
  {
    'label': '明亮物流',
    'code': 'mingliangwuliu'
  },
  {
    'label': '鹏远国际速递',
    'code': 'pengyuanexpress'
  },
  {
    'label': '坦桑尼亚（Tanzania Posts Corporation）',
    'code': 'posta'
  },
  {
    'label': '顺捷达',
    'code': 'shunjieda'
  },
  {
    'label': '顺捷丰达',
    'code': 'shunjiefengda'
  },
  {
    'label': '中外运速递-中文',
    'code': 'sinoex'
  },
  {
    'label': '天翼快递',
    'code': 'tykd'
  },
  {
    'label': '万庚国际速递',
    'code': 'vangenexpress'
  },
  {
    'label': '51跨境通',
    'code': 'wykjt'
  },
  {
    'label': '远盾物流',
    'code': 'yuandun'
  },
  {
    'label': '智通物流',
    'code': 'ztong'
  },
  {
    'label': 'ADP国际快递',
    'code': 'adp'
  },
  {
    'label': '亚马逊中国订单',
    'code': 'amazoncnorder'
  },
  {
    'label': 'amazon-国内订单',
    'code': 'amcnorder'
  },
  {
    'label': '澳世速递',
    'code': 'ausexpress'
  },
  {
    'label': '百通物流',
    'code': 'buytong'
  },
  {
    'label': '捷克（?eská po?ta）',
    'code': 'ceskaposta'
  },
  {
    'label': 'CNPEX中邮快递',
    'code': 'cnpex'
  },
  {
    'label': '达方物流',
    'code': 'dfpost'
  },
  {
    'label': 'DHL HK',
    'code': 'dhlhk'
  },
  {
    'label': '东方汇',
    'code': 'est365'
  },
  {
    'label': '飞力士物流',
    'code': 'flysman'
  },
  {
    'label': '华通快运',
    'code': 'htongexpress'
  },
  {
    'label': '货拉拉',
    'code': 'huolala'
  },
  {
    'label': '景顺物流',
    'code': 'jingshun'
  },
  {
    'label': '林安物流',
    'code': 'lasy56'
  },
  {
    'label': '民航快递',
    'code': 'minghangkuaidi'
  },
  {
    'label': 'PCA Express',
    'code': 'pcaexpress'
  },
  {
    'label': '雪域快递',
    'code': 'qhxykd'
  },
  {
    'label': '全日通',
    'code': 'quanritongkuaidi'
  },
  {
    'label': '赛澳递',
    'code': 'saiaodi'
  },
  {
    'label': '圣安物流',
    'code': 'shenganwuliu'
  },
  {
    'label': 'wish邮',
    'code': 'shpostwish'
  },
  {
    'label': '中外运空运',
    'code': 'sinoairinex'
  },
  {
    'label': '深圳邮政',
    'code': 'szyouzheng'
  },
  {
    'label': '通和天下',
    'code': 'tonghetianxia'
  },
  {
    'label': '越南EMS(VNPost Express)',
    'code': 'vnpost'
  },
  {
    'label': '维普恩物流',
    'code': 'vps'
  },
  {
    'label': '豌豆物流',
    'code': 'wandougongzhu'
  },
  {
    'label': '祥龙运通物流',
    'code': 'xianglongyuntong'
  },
  {
    'label': '亚马逊中国',
    'code': 'yamaxunwuliu'
  },
  {
    'label': '云达通',
    'code': 'ydglobe'
  },
  {
    'label': '美国云达',
    'code': 'yundaexus'
  },
  {
    'label': '中技物流',
    'code': 'zhongjiwuliu'
  },
  {
    'label': '中天万运',
    'code': 'zhongtianwanyun'
  },
  {
    'label': '准实快运',
    'code': 'zsky123'
  },
  {
    'label': 'ABF',
    'code': 'abf'
  },
  {
    'label': '捷记方舟',
    'code': 'ajexpress'
  },
  {
    'label': '青岛安捷快递',
    'code': 'anjiekuaidi'
  },
  {
    'label': 'AOL澳通速递',
    'code': 'aolau'
  },
  {
    'label': '蜜蜂速递',
    'code': 'bee001'
  },
  {
    'label': '巴西(Brazil Post/Correios)',
    'code': 'brazilposten'
  },
  {
    'label': '河南次晨达',
    'code': 'ccd'
  },
  {
    'label': '城铁速递',
    'code': 'cex'
  },
  {
    'label': '华欣物流',
    'code': 'chinastarlogistics'
  },
  {
    'label': '中骅物流',
    'code': 'chunghwa56'
  },
  {
    'label': 'City-Link',
    'code': 'citylink'
  },
  {
    'label': '澳通华人物流',
    'code': 'cllexpress'
  },
  {
    'label': '云南诚中物流',
    'code': 'czwlyn'
  },
  {
    'label': '加拿大联通快运',
    'code': 'fastontime'
  },
  {
    'label': 'FedRoad 联邦转运',
    'code': 'fedroad'
  },
  {
    'label': '凤凰快递',
    'code': 'fenghuangkuaidi'
  },
  {
    'label': '安的快递',
    'code': 'gda'
  },
  {
    'label': 'GTT EXPRESS快递',
    'code': 'gttexpress'
  },
  {
    'label': '天天快物流',
    'code': 'guoeryue'
  },
  {
    'label': '海外环球',
    'code': 'haiwaihuanqiu'
  },
  {
    'label': '海星桥快递',
    'code': 'haixingqiao'
  },
  {
    'label': '飞鹰物流',
    'code': 'hnfy'
  },
  {
    'label': '居家通',
    'code': 'homexpress'
  },
  {
    'label': '红远物流',
    'code': 'hongywl'
  },
  {
    'label': '驿扬国际速运',
    'code': 'iyoungspeed'
  },
  {
    'label': 'jcex',
    'code': 'jcex'
  },
  {
    'label': 'JDIEX',
    'code': 'jdiex'
  },
  {
    'label': '加州猫速递',
    'code': 'jiazhoumao'
  },
  {
    'label': '捷邦物流',
    'code': 'jieborne'
  },
  {
    'label': '货运皇',
    'code': 'kingfreight'
  },
  {
    'label': '中国澳门(Macau Post)',
    'code': 'macao'
  },
  {
    'label': '美西快递',
    'code': 'meixi'
  },
  {
    'label': '猛犸速递',
    'code': 'mmlogi'
  },
  {
    'label': '俄罗斯邮政(Russian Post)',
    'code': 'pochta'
  },
  {
    'label': '急顺通',
    'code': 'pzhjst'
  },
  {
    'label': '叙利亚(Syrian Post)',
    'code': 'republic'
  },
  {
    'label': '日昱物流',
    'code': 'riyuwuliu'
  },
  {
    'label': 'rpx',
    'code': 'rpx'
  },
  {
    'label': '速呈',
    'code': 'sczpds'
  },
  {
    'label': '申必达',
    'code': 'speedoex'
  },
  {
    'label': '顺通快递',
    'code': 'stkd'
  },
  {
    'label': '美国申通',
    'code': 'stoexpress'
  },
  {
    'label': '新速航',
    'code': 'sunspeedy'
  },
  {
    'label': 'TNT Post',
    'code': 'tntpostcn'
  },
  {
    'label': '优海国际速递',
    'code': 'uhi'
  },
  {
    'label': '鑫世锐达',
    'code': 'xsrd'
  },
  {
    'label': 'YODEL',
    'code': 'yodel'
  },
  {
    'label': '壹品速递',
    'code': 'ypsd'
  },
  {
    'label': '运通快运',
    'code': 'ytky168'
  },
  {
    'label': '增速跨境 ',
    'code': 'zyzoom'
  },
  {
    'label': '全球快运',
    'code': 'abcglobal'
  },
  {
    'label': '德方物流',
    'code': 'ahdf'
  },
  {
    'label': '加拿大民航快递',
    'code': 'airgtc'
  },
  {
    'label': '阿尔巴尼亚(Posta shqipatre)',
    'code': 'albania'
  },
  {
    'label': 'amazon-国际订单',
    'code': 'amusorder'
  },
  {
    'label': '爱尔兰(An Post)',
    'code': 'anposten'
  },
  {
    'label': '中联速递',
    'code': 'auvanda'
  },
  {
    'label': '青云物流',
    'code': 'bjqywl'
  },
  {
    'label': '鑫锐达',
    'code': 'bjxsrd'
  },
  {
    'label': '鑫宸物流',
    'code': 'cdxinchen56'
  },
  {
    'label': 'CEVA Logistic',
    'code': 'cevalogistics'
  },
  {
    'label': 'Chronopost Portugal',
    'code': 'chronopostport'
  },
  {
    'label': '长吉物流',
    'code': 'cjqy'
  },
  {
    'label': 'CL日中速运',
    'code': 'clsp'
  },
  {
    'label': 'CNAIR',
    'code': 'cnair'
  },
  {
    'label': 'C&C国际速递',
    'code': 'cncexp'
  },
  {
    'label': '深圳德创物流',
    'code': 'dechuangwuliu'
  },
  {
    'label': 'Toll',
    'code': 'dpexen'
  },
  {
    'label': 'ECMS Express',
    'code': 'ecmsglobal'
  },
  {
    'label': '龙象国际物流',
    'code': 'edragon'
  },
  {
    'label': '阿联酋(Emirates Post)',
    'code': 'emirates'
  },
  {
    'label': 'E通速递',
    'code': 'etong'
  },
  {
    'label': '飞快达',
    'code': 'feikuaida'
  },
  {
    'label': 'FQ狂派速递',
    'code': 'freakyquick'
  },
  {
    'label': '全速快递',
    'code': 'fsexp'
  },
  {
    'label': 'Gati-英文',
    'code': 'gatien'
  },
  {
    'label': '共速达',
    'code': 'gongsuda'
  },
  {
    'label': '广通速递',
    'code': 'gtongsudi'
  },
  {
    'label': '海盟速递',
    'code': 'haimengsudi'
  },
  {
    'label': '华瀚快递',
    'code': 'hhair56'
  },
  {
    'label': '云邮跨境快递',
    'code': 'hkems'
  },
  {
    'label': '宏品物流',
    'code': 'hongpinwuliu'
  },
  {
    'label': '华企快运',
    'code': 'huaqikuaiyun'
  },
  {
    'label': '上海昊宏国际货物',
    'code': 'hyk'
  },
  {
    'label': '大达物流',
    'code': 'idada'
  },
  {
    'label': '印度(India Post)',
    'code': 'india'
  },
  {
    'label': '佳家通货运',
    'code': 'jiajiatong56'
  },
  {
    'label': '哈萨克斯坦(Kazpost)',
    'code': 'kazpost'
  },
  {
    'label': 'KCS',
    'code': 'kcs'
  },
  {
    'label': '嘉里大荣物流',
    'code': 'kerrytj'
  },
  {
    'label': '韩国邮政韩文',
    'code': 'koreapostkr'
  },
  {
    'label': '快8速运',
    'code': 'kuai8'
  },
  {
    'label': '四川快优达速递',
    'code': 'kuaiyouda'
  },
  {
    'label': '跨跃国际',
    'code': 'kyue'
  },
  {
    'label': '立白宝凯物流',
    'code': 'lbbk'
  },
  {
    'label': '楽道物流',
    'code': 'ledaowuliu'
  },
  {
    'label': '联通快递',
    'code': 'ltparcel'
  },
  {
    'label': '鲁通快运',
    'code': 'lutong'
  },
  {
    'label': '卢森堡(Luxembourg Post)',
    'code': 'luxembourg'
  },
  {
    'label': '美泰物流',
    'code': 'meitai'
  },
  {
    'label': '民邦速递',
    'code': 'minbangsudi'
  },
  {
    'label': 'MyHermes',
    'code': 'myhermes'
  },
  {
    'label': '南方传媒物流',
    'code': 'ndwl'
  },
  {
    'label': '亚欧专线',
    'code': 'nlebv'
  },
  {
    'label': '新西兰中通',
    'code': 'nzzto'
  },
  {
    'label': '配思货运',
    'code': 'peisihuoyunkuaidi'
  },
  {
    'label': '鹏程快递',
    'code': 'pengcheng'
  },
  {
    'label': '菲律宾（Philippine Postal）',
    'code': 'phlpost'
  },
  {
    'label': '品信快递',
    'code': 'pinxinkuaidi'
  },
  {
    'label': '葡萄牙（Portugal CTT）',
    'code': 'portugalctt'
  },
  {
    'label': '7E速递',
    'code': 'qesd'
  },
  {
    'label': 'Quantium',
    'code': 'quantium'
  },
  {
    'label': '人人转运',
    'code': 'renrenex'
  },
  {
    'label': '日日顺快线',
    'code': 'rrskx'
  },
  {
    'label': 'S2C',
    'code': 's2c'
  },
  {
    'label': '中加国际快递',
    'code': 'scic'
  },
  {
    'label': '上海快通',
    'code': 'shanghaikuaitong'
  },
  {
    'label': '闪货极速达',
    'code': 'shanhuodidi'
  },
  {
    'label': '顺昌国际',
    'code': 'shunchangguoji'
  },
  {
    'label': '顺丰冷链',
    'code': 'shunfenglengyun'
  },
  {
    'label': '新加坡小包(Singapore Post)',
    'code': 'singpost'
  },
  {
    'label': '南非（South African Post Office）',
    'code': 'southafrican'
  },
  {
    'label': '新加坡EMS、大包(Singapore Speedpost)',
    'code': 'speedpost'
  },
  {
    'label': '穗佳物流',
    'code': 'suijiawuliu'
  },
  {
    'label': '老扬州物流',
    'code': 'tjlyz56'
  },
  {
    'label': 'TNT Italy',
    'code': 'tntitaly'
  },
  {
    'label': '西翼物流',
    'code': 'westwing'
  },
  {
    'label': '威速递',
    'code': 'wexpress'
  },
  {
    'label': '新元快递',
    'code': 'xingyuankuaidi'
  },
  {
    'label': '鑫通宝物流',
    'code': 'xtb'
  },
  {
    'label': 'YCG物流',
    'code': 'ycgglobal'
  },
  {
    'label': '银捷速递',
    'code': 'yinjiesudi'
  },
  {
    'label': '元智捷诚',
    'code': 'yuanzhijiecheng'
  },
  {
    'label': '越丰物流',
    'code': 'yuefengwuliu'
  },
  {
    'label': '众川国际',
    'code': 'zhongchuan'
  },
  {
    'label': '振捷国际货运',
    'code': 'zjgj56'
  },
  {
    'label': '中融泰隆',
    'code': 'zrtl'
  },
  {
    'label': '中远快运',
    'code': 'zy100'
  },
  {
    'label': 'aCommerce',
    'code': 'acommerce'
  },
  {
    'label': '安达易国际速递',
    'code': 'adiexpress'
  },
  {
    'label': '德国雄鹰速递',
    'code': 'adlerlogi'
  },
  {
    'label': 'ADSone',
    'code': 'adsone'
  },
  {
    'label': '安达信',
    'code': 'advancing'
  },
  {
    'label': '阿富汗(Afghan Post)',
    'code': 'afghan'
  },
  {
    'label': 'AFL',
    'code': 'afl'
  },
  {
    'label': '全程快递',
    'code': 'agopost'
  },
  {
    'label': '卡邦配送',
    'code': 'ahkbps'
  },
  {
    'label': 'AlfaTrex',
    'code': 'alfatrex'
  },
  {
    'label': 'Algeria Post',
    'code': 'algeria'
  },
  {
    'label': 'ALLIED',
    'code': 'alliedexpress'
  },
  {
    'label': '安家同城快运',
    'code': 'anjiatongcheng'
  },
  {
    'label': '新干线快递',
    'code': 'anlexpress'
  },
  {
    'label': 'Anteraja',
    'code': 'anteraja'
  },
  {
    'label': '澳速物流',
    'code': 'aosu'
  },
  {
    'label': 'apgecommerce',
    'code': 'apgecommerce'
  },
  {
    'label': '美国汉邦快递',
    'code': 'aplus100'
  },
  {
    'label': 'ARC',
    'code': 'arc'
  },
  {
    'label': '艾瑞斯远',
    'code': 'ariesfar'
  },
  {
    'label': '阿鲁巴[荷兰]（Post Aruba）',
    'code': 'aruba'
  },
  {
    'label': '澳达国际物流',
    'code': 'auadexpress'
  },
  {
    'label': '澳货通',
    'code': 'auex'
  },
  {
    'label': '澳邦国际物流',
    'code': 'ausbondexpress'
  },
  {
    'label': '奥地利(Austrian Post)',
    'code': 'austria'
  },
  {
    'label': 'AUV国际快递',
    'code': 'auvexpress'
  },
  {
    'label': '澳新物流',
    'code': 'axexpress'
  },
  {
    'label': '阿塞拜疆EMS(EMS AzerExpressPost)',
    'code': 'azerbaijan'
  },
  {
    'label': '巴林(Bahrain Post)',
    'code': 'bahrain'
  },
  {
    'label': '百世国际',
    'code': 'baishiguoji'
  },
  {
    'label': '孟加拉国(EMS)',
    'code': 'bangladesh'
  },
  {
    'label': '邦送物流',
    'code': 'bangsongwuliu'
  },
  {
    'label': '宝通快递',
    'code': 'baotongkd'
  },
  {
    'label': '报通快递',
    'code': 'baoxianda'
  },
  {
    'label': '巴巴多斯(Barbados Post)',
    'code': 'barbados'
  },
  {
    'label': 'BCWELT',
    'code': 'bcwelt'
  },
  {
    'label': 'BDC快递',
    'code': 'bdcgcc'
  },
  {
    'label': 'BEE express',
    'code': 'beeexpress'
  },
  {
    'label': '伯利兹(Belize Postal)',
    'code': 'belize'
  },
  {
    'label': '白俄罗斯(Belpochta)',
    'code': 'belpost'
  },
  {
    'label': '笨鸟国际',
    'code': 'benniao'
  },
  {
    'label': '飛斯特',
    'code': 'bester'
  },
  {
    'label': '不丹邮政 Bhutan Post',
    'code': 'bhutan'
  },
  {
    'label': '彪记快递',
    'code': 'biaojikuaidi'
  },
  {
    'label': '远通盛源',
    'code': 'bjytsywl'
  },
  {
    'label': '佰乐捷通',
    'code': 'bljt56'
  },
  {
    'label': 'BlueDart',
    'code': 'bluedart'
  },
  {
    'label': '标杆物流',
    'code': 'bmlchina'
  },
  {
    'label': '波黑(JP BH Posta)',
    'code': 'bohei'
  },
  {
    'label': '玻利维亚',
    'code': 'bolivia'
  },
  {
    'label': 'BorderGuru',
    'code': 'borderguru'
  },
  {
    'label': '堡昕德速递',
    'code': 'bosind'
  },
  {
    'label': '博茨瓦纳',
    'code': 'botspost'
  },
  {
    'label': '速方(Sufast)',
    'code': 'bphchina'
  },
  {
    'label': '百千诚物流',
    'code': 'bqcwl'
  },
  {
    'label': '宏桥国际物流',
    'code': 'briems'
  },
  {
    'label': 'BRT',
    'code': 'brt'
  },
  {
    'label': '文莱(Brunei Postal)',
    'code': 'brunei'
  },
  {
    'label': '保加利亚（Bulgarian Posts）',
    'code': 'bulgarian'
  },
  {
    'label': '展勤快递',
    'code': 'byht'
  },
  {
    'label': '新喀里多尼亚[法国](New Caledonia)',
    'code': 'caledonia'
  },
  {
    'label': '柬埔寨(Cambodia Post)',
    'code': 'cambodia'
  },
  {
    'label': '到了港',
    'code': 'camekong'
  },
  {
    'label': 'Campbell’s Express',
    'code': 'campbellsexpress'
  },
  {
    'label': '能装能送',
    'code': 'canhold'
  },
  {
    'label': 'Canpar',
    'code': 'canpar'
  },
  {
    'label': '加拿大邮政',
    'code': 'canpostfr'
  },
  {
    'label': '卢森堡航空',
    'code': 'cargolux'
  },
  {
    'label': '钏博物流',
    'code': 'cbo56'
  },
  {
    'label': '捷祥物流',
    'code': 'cdjx56'
  },
  {
    'label': '长宇物流',
    'code': 'changyuwuliu'
  },
  {
    'label': '成达国际速递',
    'code': 'chengda'
  },
  {
    'label': '城际快递',
    'code': 'chengji'
  },
  {
    'label': '城通物流',
    'code': 'chengtong'
  },
  {
    'label': '智利(Correos Chile)',
    'code': 'chile'
  },
  {
    'label': '荣通国际',
    'code': 'chinaqingguan'
  },
  {
    'label': 'SQK国际速递',
    'code': 'chinasqk'
  },
  {
    'label': '同舟行物流',
    'code': 'chinatzx'
  },
  {
    'label': '嘉荣物流',
    'code': 'chllog'
  },
  {
    'label': '法国大包、EMS-法文（Chronopost France）',
    'code': 'chronopostfra'
  },
  {
    'label': '法国大包、EMS-英文(Chronopost France)',
    'code': 'chronopostfren'
  },
  {
    'label': '中国香港骏辉物流',
    'code': 'chunfai'
  },
  {
    'label': 'citysprint',
    'code': 'citysprint'
  },
  {
    'label': 'CE易欧通国际速递',
    'code': 'cloudexpress'
  },
  {
    'label': '群航国际物流',
    'code': 'cloudlogistics365'
  },
  {
    'label': '中澳速递',
    'code': 'cnausu'
  },
  {
    'label': '中欧物流',
    'code': 'cneulogistics'
  },
  {
    'label': 'CNUP 中联邮',
    'code': 'cnup'
  },
  {
    'label': '中国翼',
    'code': 'cnws'
  },
  {
    'label': '哥伦比亚(4-72 La Red Postal de Colombia)',
    'code': 'colombia'
  },
  {
    'label': 'Corporate couriers logistics',
    'code': 'corporatecouriers'
  },
  {
    'label': '莫桑比克（Correios de Moçambique）',
    'code': 'correios'
  },
  {
    'label': '乌拉圭（Correo Uruguayo）',
    'code': 'correo'
  },
  {
    'label': '阿根廷(Correo Argentina)',
    'code': 'correoargentino'
  },
  {
    'label': '哥斯达黎加(Correos de Costa Rica)',
    'code': 'correos'
  },
  {
    'label': '华中快递',
    'code': 'cpsair'
  },
  {
    'label': '重庆星程快递',
    'code': 'cqxingcheng'
  },
  {
    'label': '环旅快运',
    'code': 'crossbox'
  },
  {
    'label': '新时速物流',
    'code': 'csxss'
  },
  {
    'label': '泰国中通CTO',
    'code': 'ctoexp'
  },
  {
    'label': '塞浦路斯(Cyprus Post)',
    'code': 'cypruspost'
  },
  {
    'label': '达速物流',
    'code': 'dasu'
  },
  {
    'label': 'DCS',
    'code': 'dcs'
  },
  {
    'label': '叮当同城',
    'code': 'ddotbase'
  },
  {
    'label': '德中快递',
    'code': 'decnlh'
  },
  {
    'label': 'Delhivery',
    'code': 'delhivery'
  },
  {
    'label': 'Deltec Courier',
    'code': 'deltec'
  },
  {
    'label': '澳行快递',
    'code': 'desworks'
  },
  {
    'label': '东风全球速递',
    'code': 'dfglobalex'
  },
  {
    'label': 'DHL-荷兰（DHL Netherlands）',
    'code': 'dhlnetherlands'
  },
  {
    'label': 'DHL-波兰（DHL Poland）',
    'code': 'dhlpoland'
  },
  {
    'label': 'dhluk',
    'code': 'dhluk'
  },
  {
    'label': '云南滇驿物流',
    'code': 'dianyi'
  },
  {
    'label': '递达速运',
    'code': 'didasuyun'
  },
  {
    'label': '叮咚澳洲转运',
    'code': 'dindon'
  },
  {
    'label': '叮咚快递',
    'code': 'dingdong'
  },
  {
    'label': 'Direct Link',
    'code': 'directlink'
  },
  {
    'label': '递四方澳洲',
    'code': 'disifangau'
  },
  {
    'label': '天翔东捷运',
    'code': 'djy56'
  },
  {
    'label': '东红物流',
    'code': 'donghong'
  },
  {
    'label': 'Dotzot',
    'code': 'dotzot'
  },
  {
    'label': '老司机国际快递',
    'code': 'driverfastgo'
  },
  {
    'label': '德淘邦',
    'code': 'dt8ang'
  },
  {
    'label': 'DTDC India',
    'code': 'dtdcindia'
  },
  {
    'label': '多道供应链',
    'code': 'duodao56'
  },
  {
    'label': '东方航空物流',
    'code': 'ealceair'
  },
  {
    'label': 'E跨通',
    'code': 'ecallturn'
  },
  {
    'label': 'EC-Firstclass',
    'code': 'ecfirstclass'
  },
  {
    'label': 'Ecom Express',
    'code': 'ecomexpress'
  },
  {
    'label': '东西E全运',
    'code': 'ecotransite'
  },
  {
    'label': '厄瓜多尔(Correos del Ecuador)',
    'code': 'ecuador'
  },
  {
    'label': '易达快运',
    'code': 'edaeuexpress'
  },
  {
    'label': 'e直运',
    'code': 'edtexpress'
  },
  {
    'label': 'EFSPOST',
    'code': 'efspost'
  },
  {
    'label': '埃及（Egypt Post）',
    'code': 'egypt'
  },
  {
    'label': '艾菲尔国际速递',
    'code': 'eiffel'
  },
  {
    'label': 'Ekart',
    'code': 'ekart'
  },
  {
    'label': '易联通达',
    'code': 'el56'
  },
  {
    'label': '希腊包裹（ELTA Hellenic Post）',
    'code': 'elta'
  },
  {
    'label': '希腊EMS（ELTA Courier）',
    'code': 'eltahell'
  },
  {
    'label': '阿联酋(Emirates Post)',
    'code': 'emiratesen'
  },
  {
    'label': '波兰小包(Poczta Polska)',
    'code': 'emonitoring'
  },
  {
    'label': '波兰小包(Poczta Polska)',
    'code': 'emonitoringen'
  },
  {
    'label': '南非EMS',
    'code': 'emssouthafrica'
  },
  {
    'label': '乌克兰EMS(EMS Ukraine)',
    'code': 'emsukraine'
  },
  {
    'label': '乌克兰EMS-中文(EMS Ukraine)',
    'code': 'emsukrainecn'
  },
  {
    'label': '英国(大包,EMS)',
    'code': 'england'
  },
  {
    'label': '联众国际',
    'code': 'epspost'
  },
  {
    'label': '俄顺达',
    'code': 'eshunda'
  },
  {
    'label': 'Estafeta',
    'code': 'estafeta'
  },
  {
    'label': 'Estes',
    'code': 'estes'
  },
  {
    'label': '易达国际速递',
    'code': 'eta100'
  },
  {
    'label': 'ETEEN专线',
    'code': 'eteenlog'
  },
  {
    'label': '埃塞俄比亚(Ethiopian postal)',
    'code': 'ethiopia'
  },
  {
    'label': '埃塞俄比亚(Ethiopian Post)',
    'code': 'ethiopian'
  },
  {
    'label': '中欧国际物流',
    'code': 'eucnrail'
  },
  {
    'label': '德国 EUC POST',
    'code': 'eucpost'
  },
  {
    'label': 'EU-EXPRESS',
    'code': 'euexpress'
  },
  {
    'label': '易邮国际',
    'code': 'euguoji'
  },
  {
    'label': '败欧洲',
    'code': 'europe8'
  },
  {
    'label': 'europeanecom',
    'code': 'europeanecom'
  },
  {
    'label': '优莎速运',
    'code': 'eusacn'
  },
  {
    'label': '飛斯特運通',
    'code': 'exbtr'
  },
  {
    'label': 'Expeditors',
    'code': 'expeditors'
  },
  {
    'label': '探路速运',
    'code': 'explorer56'
  },
  {
    'label': '澳洲新干线快递',
    'code': 'expressplus'
  },
  {
    'label': '易转运',
    'code': 'ezhuanyuan'
  },
  {
    'label': '颿达国际快递-英文',
    'code': 'fandaguoji'
  },
  {
    'label': '正途供应链',
    'code': 'fastzt'
  },
  {
    'label': '飞邦快递',
    'code': 'fbkd'
  },
  {
    'label': 'FedEx-英国件（FedEx UK)',
    'code': 'fedexuk'
  },
  {
    'label': 'FedEx-英国件',
    'code': 'fedexukcn'
  },
  {
    'label': '飞狐快递',
    'code': 'feihukuaidi'
  },
  {
    'label': '奉天物流',
    'code': 'fengtianexpress'
  },
  {
    'label': '丰羿',
    'code': 'fengyee'
  },
  {
    'label': '斐济(Fiji Post)',
    'code': 'fiji'
  },
  {
    'label': '芬兰(Itella Posti Oy)',
    'code': 'finland'
  },
  {
    'label': 'First Flight',
    'code': 'firstflight'
  },
  {
    'label': 'First Logistics',
    'code': 'firstlogistics'
  },
  {
    'label': 'Flash Express',
    'code': 'flashexpress'
  },
  {
    'label': '花瓣转运',
    'code': 'flowerkd'
  },
  {
    'label': '四方格',
    'code': 'fourpxus'
  },
  {
    'label': 'FOX国际快递',
    'code': 'fox'
  },
  {
    'label': '法翔速运',
    'code': 'ftlexpress'
  },
  {
    'label': '飞云快递系统',
    'code': 'fyex'
  },
  {
    'label': '高铁快运',
    'code': 'gaotieex'
  },
  {
    'label': 'Gati-KWE',
    'code': 'gatikwe'
  },
  {
    'label': '广东诚通物流',
    'code': 'gdct56'
  },
  {
    'label': '全网物流',
    'code': 'gdqwwl'
  },
  {
    'label': '容智快运',
    'code': 'gdrz58'
  },
  {
    'label': '新鹏快递',
    'code': 'gdxp'
  },
  {
    'label': 'GE2D跨境物流',
    'code': 'ge2d'
  },
  {
    'label': '格鲁吉亚(Georgian Pos）',
    'code': 'georgianpost'
  },
  {
    'label': '加纳',
    'code': 'ghanapost'
  },
  {
    'label': '环创物流',
    'code': 'ghl'
  },
  {
    'label': 'GHT物流',
    'code': 'ghtexpress'
  },
  {
    'label': '直布罗陀[英国]( Royal Gibraltar Post)',
    'code': 'gibraltar'
  },
  {
    'label': 'GIZTIX',
    'code': 'giztix'
  },
  {
    'label': '冠捷物流 ',
    'code': 'gjwl'
  },
  {
    'label': '全球特快',
    'code': 'global99'
  },
  {
    'label': '英脉物流',
    'code': 'gml'
  },
  {
    'label': '时安达速递',
    'code': 'goex'
  },
  {
    'label': 'GOGOX',
    'code': 'gogox'
  },
  {
    'label': 'gojavas',
    'code': 'gojavas'
  },
  {
    'label': 'Grab',
    'code': 'grab'
  },
  {
    'label': '格陵兰[丹麦]（TELE Greenland A/S）',
    'code': 'greenland'
  },
  {
    'label': '潍鸿',
    'code': 'grivertek'
  },
  {
    'label': '哥士传奇速递',
    'code': 'gscq365'
  },
  {
    'label': '德尚国际速递',
    'code': 'gslexpress'
  },
  {
    'label': '万通快递',
    'code': 'gswtkd'
  },
  {
    'label': 'GT国际快运',
    'code': 'gtgogo'
  },
  {
    'label': '广东通路',
    'code': 'guangdongtonglu'
  },
  {
    'label': '永邦快递',
    'code': 'guangdongyongbang'
  },
  {
    'label': '冠庭国际物流',
    'code': 'guanting'
  },
  {
    'label': '国送快运',
    'code': 'guosong'
  },
  {
    'label': '宏观国际快递',
    'code': 'gvpexpress'
  },
  {
    'label': '光线速递',
    'code': 'gxwl'
  },
  {
    'label': '贵州星程快递',
    'code': 'gzxingcheng'
  },
  {
    'label': '海红for买卖宝',
    'code': 'haihongmmb'
  },
  {
    'label': '海红网送',
    'code': 'haihongwangsong'
  },
  {
    'label': '海中转运',
    'code': 'haizhongzhuanyun'
  },
  {
    'label': '汉邦国际速递',
    'code': 'handboy'
  },
  {
    'label': '翰丰快递',
    'code': 'hanfengjl'
  },
  {
    'label': '航宇快递',
    'code': 'hangyu'
  },
  {
    'label': '好又快物流',
    'code': 'haoyoukuai'
  },
  {
    'label': '开心快递',
    'code': 'happylink'
  },
  {
    'label': '亚美尼亚(Haypost-Armenian Postal)',
    'code': 'haypost'
  },
  {
    'label': '恒瑞物流',
    'code': 'hengrui56'
  },
  {
    'label': '合心速递',
    'code': 'hexinexpress'
  },
  {
    'label': '环国运物流',
    'code': 'hgy56'
  },
  {
    'label': 'Hi淘易快递',
    'code': 'hitaoe'
  },
  {
    'label': '猴急送',
    'code': 'hjs'
  },
  {
    'label': '汇捷物流',
    'code': 'hjwl'
  },
  {
    'label': '互联快运',
    'code': 'hlkytj'
  },
  {
    'label': '共联配',
    'code': 'hlpgyl'
  },
  {
    'label': '河南全速通',
    'code': 'hnqst'
  },
  {
    'label': '顺时达物流',
    'code': 'hnssd56'
  },
  {
    'label': '中强物流',
    'code': 'hnzqwl'
  },
  {
    'label': 'Holisol',
    'code': 'holisollogistics'
  },
  {
    'label': '宏捷国际物流',
    'code': 'hongjie'
  },
  {
    'label': '环球通达 ',
    'code': 'hqtd'
  },
  {
    'label': '卓烨快递',
    'code': 'hrbzykd'
  },
  {
    'label': '高铁速递',
    'code': 'hre'
  },
  {
    'label': '克罗地亚（Hrvatska Posta）',
    'code': 'hrvatska'
  },
  {
    'label': '海硕高铁速递',
    'code': 'hsgtsd'
  },
  {
    'label': '海淘物流',
    'code': 'ht22'
  },
  {
    'label': '华通务达物流',
    'code': 'htwd'
  },
  {
    'label': '华达快运',
    'code': 'huada'
  },
  {
    'label': '环东物流',
    'code': 'huandonglg'
  },
  {
    'label': '华夏货运',
    'code': 'huaxiahuoyun'
  },
  {
    'label': '汇霖大货网',
    'code': 'huilin56'
  },
  {
    'label': '驼峰国际',
    'code': 'humpline'
  },
  {
    'label': '匈牙利（Magyar Posta）',
    'code': 'hungary'
  },
  {
    'label': 'hunter Express',
    'code': 'hunterexpress'
  },
  {
    'label': '兰州伙伴物流',
    'code': 'huoban'
  },
  {
    'label': '户通物流',
    'code': 'hutongwuliu'
  },
  {
    'label': '鸿远物流',
    'code': 'hyeship'
  },
  {
    'label': '恒宇运通',
    'code': 'hyytes'
  },
  {
    'label': '华航快递',
    'code': 'hzpl'
  },
  {
    'label': '爱拜物流',
    'code': 'ibuy8'
  },
  {
    'label': '冰岛(Iceland Post)',
    'code': 'iceland'
  },
  {
    'label': '泛太优达',
    'code': 'iex'
  },
  {
    'label': 'iExpress',
    'code': 'iexpress'
  },
  {
    'label': '无限速递',
    'code': 'igcaexpress'
  },
  {
    'label': 'logen路坚',
    'code': 'ilogen'
  },
  {
    'label': 'ILYANG',
    'code': 'ilyang'
  },
  {
    'label': '艾姆勒',
    'code': 'imlb2c'
  },
  {
    'label': '印度尼西亚EMS(Pos Indonesia-EMS)',
    'code': 'indonesia'
  },
  {
    'label': 'INDOPAKET',
    'code': 'indopaket'
  },
  {
    'label': '多米尼加（INPOSDOM – Instituto Postal Dominicano）',
    'code': 'inposdom'
  },
  {
    'label': '捷运达快递',
    'code': 'interjz'
  },
  {
    'label': 'Interlink Express',
    'code': 'interlink'
  },
  {
    'label': 'Interparcel',
    'code': 'interparcel'
  },
  {
    'label': 'UPS i-parcel',
    'code': 'iparcel'
  },
  {
    'label': '伊朗（Iran Post）',
    'code': 'iran'
  },
  {
    'label': '以色列(Israel Post)',
    'code': 'israelpost'
  },
  {
    'label': 'Italy SDA',
    'code': 'italysad'
  },
  {
    'label': 'IXPRESS',
    'code': 'ixpress'
  },
  {
    'label': 'janio',
    'code': 'janio'
  },
  {
    'label': '嘉诚速达',
    'code': 'jcsuda'
  },
  {
    'label': '骏达快递',
    'code': 'jdexpressusa'
  },
  {
    'label': '急递',
    'code': 'jdpplus'
  },
  {
    'label': '泽西岛',
    'code': 'jerseypost'
  },
  {
    'label': 'J＆T Express ',
    'code': 'jet'
  },
  {
    'label': '澳速通国际速递',
    'code': 'jetexpressgroup'
  },
  {
    'label': 'J&T Express',
    'code': 'jetexpresszh'
  },
  {
    'label': '加佳物流',
    'code': 'jiajiawl'
  },
  {
    'label': '锦程物流',
    'code': 'jinchengwuliu'
  },
  {
    'label': '金大物流',
    'code': 'jindawuliu'
  },
  {
    'label': '劲通快递',
    'code': 'jintongkd'
  },
  {
    'label': '晋越快递',
    'code': 'jinyuekuaidi'
  },
  {
    'label': '冀速物流',
    'code': 'jisu'
  },
  {
    'label': '九宫物流',
    'code': 'jiugong'
  },
  {
    'label': '久易快递',
    'code': 'jiuyicn'
  },
  {
    'label': '急先达',
    'code': 'jixianda'
  },
  {
    'label': '吉祥邮（澳洲）',
    'code': 'jixiangyouau'
  },
  {
    'label': '佳捷翔物流',
    'code': 'jjx888'
  },
  {
    'label': 'JNE',
    'code': 'jne'
  },
  {
    'label': '约旦(Jordan Post)',
    'code': 'jordan'
  },
  {
    'label': '骏绅物流',
    'code': 'jsexpress'
  },
  {
    'label': '骏丰国际速递',
    'code': 'junfengguoji'
  },
  {
    'label': '聚物物流',
    'code': 'juwu'
  },
  {
    'label': '聚中大',
    'code': 'juzhongda'
  },
  {
    'label': 'Kaha Epress',
    'code': 'kahaexpress'
  },
  {
    'label': '考拉国际速递',
    'code': 'kaolaexpress'
  },
  {
    'label': '肯尼亚(POSTA KENYA)',
    'code': 'kenya'
  },
  {
    'label': 'Kerry Express',
    'code': 'kerryexpress'
  },
  {
    'label': '启邦国际物流',
    'code': 'keypon'
  },
  {
    'label': '快服务',
    'code': 'kfwnet'
  },
  {
    'label': '跨境直邮通',
    'code': 'kjde'
  },
  {
    'label': '考拉速递',
    'code': 'koalaexp'
  },
  {
    'label': '番薯国际货运',
    'code': 'koali'
  },
  {
    'label': '淘韩国际快递',
    'code': 'krtao'
  },
  {
    'label': '快速递',
    'code': 'ksudi'
  },
  {
    'label': '快达物流',
    'code': 'kuaidawuliu'
  },
  {
    'label': '快淘快递',
    'code': 'kuaitao'
  },
  {
    'label': 'Kuehne+Nagel',
    'code': 'kuehnenagel'
  },
  {
    'label': 'KURASI',
    'code': 'kurasi'
  },
  {
    'label': '凯信达',
    'code': 'kxda'
  },
  {
    'label': '吉尔吉斯斯坦(Kyrgyz Post)',
    'code': 'kyrgyzpost'
  },
  {
    'label': '蓝镖快递',
    'code': 'lanbiaokuaidi'
  },
  {
    'label': 'Landmark Global',
    'code': 'landmarkglobal'
  },
  {
    'label': '蓝弧快递',
    'code': 'lanhukuaidi'
  },
  {
    'label': '老挝(Lao Express) ',
    'code': 'lao'
  },
  {
    'label': '塞内加尔',
    'code': 'laposte'
  },
  {
    'label': '拉脱维亚(Latvijas Pasts)',
    'code': 'latviaen'
  },
  {
    'label': '两点之间',
    'code': 'ldzy168'
  },
  {
    'label': '乐达全球速递',
    'code': 'ledaexpress'
  },
  {
    'label': '云豹国际货运',
    'code': 'leopard'
  },
  {
    'label': '莱索托(Lesotho Post)',
    'code': 'lesotho'
  },
  {
    'label': '美联快递',
    'code': 'letseml'
  },
  {
    'label': 'Laxship',
    'code': 'lexship'
  },
  {
    'label': 'lazada',
    'code': 'lgs'
  },
  {
    'label': '联运快递',
    'code': 'lianyun'
  },
  {
    'label': '黎巴嫩(Liban Post)',
    'code': 'libanpost'
  },
  {
    'label': 'Linex',
    'code': 'linex'
  },
  {
    'label': '领送送',
    'code': 'lingsong'
  },
  {
    'label': 'Lion Parcel',
    'code': 'lionparcel'
  },
  {
    'label': '丽狮物流',
    'code': 'lishi'
  },
  {
    'label': '立陶宛（Lietuvos pa?tas）',
    'code': 'lithuania'
  },
  {
    'label': '小熊物流',
    'code': 'littlebearbear'
  },
  {
    'label': '良藤国际速递',
    'code': 'lmfex'
  },
  {
    'label': '新易泰',
    'code': 'lnet'
  },
  {
    'label': '華信物流WTO',
    'code': 'logistics'
  },
  {
    'label': '隆浪快递',
    'code': 'longlangkuaidi'
  },
  {
    'label': '长风物流',
    'code': 'longvast'
  },
  {
    'label': 'Loomis Express',
    'code': 'loomisexpress'
  },
  {
    'label': '恒通快递',
    'code': 'lqht'
  },
  {
    'label': '乐天速递',
    'code': 'ltexp'
  },
  {
    'label': '路邦物流',
    'code': 'lubang56'
  },
  {
    'label': '吉捷国际速递',
    'code': 'luckyfastex'
  },
  {
    'label': '论道国际物流',
    'code': 'lundao'
  },
  {
    'label': '卢森堡(Luxembourg Post)',
    'code': 'luxembourgde'
  },
  {
    'label': '卢森堡(Luxembourg Post)',
    'code': 'luxembourgfr'
  },
  {
    'label': 'LWE',
    'code': 'lwe'
  },
  {
    'label': '马其顿(Macedonian Post)',
    'code': 'macedonia'
  },
  {
    'label': 'Maersk',
    'code': 'maersk'
  },
  {
    'label': 'mailamericas',
    'code': 'mailamericas'
  },
  {
    'label': '麦力快递',
    'code': 'mailikuaidi'
  },
  {
    'label': '迈隆递运',
    'code': 'mailongdy'
  },
  {
    'label': 'Mainfreight',
    'code': 'mainfreight'
  },
  {
    'label': '马来西亚大包、EMS（Malaysia Post(parcel,EMS)）',
    'code': 'malaysiaems'
  },
  {
    'label': '马尔代夫(Maldives Post)',
    'code': 'maldives'
  },
  {
    'label': '马耳他（Malta Post）',
    'code': 'malta'
  },
  {
    'label': '芒果速递',
    'code': 'mangguo'
  },
  {
    'label': '今枫国际快运',
    'code': 'mapleexpress'
  },
  {
    'label': '毛里求斯(Mauritius Post)',
    'code': 'mauritius'
  },
  {
    'label': '澳洲迈速快递',
    'code': 'maxeedexpress'
  },
  {
    'label': '木春货运',
    'code': 'mchy'
  },
  {
    'label': '美邦国际快递',
    'code': 'meibang'
  },
  {
    'label': '美达快递',
    'code': 'meidaexpress'
  },
  {
    'label': '墨西哥（Correos de Mexico）',
    'code': 'mexico'
  },
  {
    'label': 'Mexico Senda Express',
    'code': 'mexicodenda'
  },
  {
    'label': '银河物流',
    'code': 'milkyway'
  },
  {
    'label': '美龙快递',
    'code': 'mjexp'
  },
  {
    'label': 'Mitsui OSK Lines',
    'code': 'mol'
  },
  {
    'label': '摩尔多瓦(Posta Moldovei)',
    'code': 'moldova'
  },
  {
    'label': '蒙古国(Mongol Post) ',
    'code': 'mongolpost'
  },
  {
    'label': '黑山(Posta Crne Gore)',
    'code': 'montenegro'
  },
  {
    'label': '摩洛哥 ( Morocco Post )',
    'code': 'morocco'
  },
  {
    'label': 'MRW',
    'code': 'mrw'
  },
  {
    'label': 'Mexico Multipack',
    'code': 'multipack'
  },
  {
    'label': '中俄速通（淼信）',
    'code': 'mxe56'
  },
  {
    'label': '新亚物流',
    'code': 'nalexpress'
  },
  {
    'label': '纳米比亚(NamPost)',
    'code': 'namibia'
  },
  {
    'label': 'NandanCourier',
    'code': 'nandan'
  },
  {
    'label': 'Nationex',
    'code': 'nationex'
  },
  {
    'label': '红马速递',
    'code': 'nedahm'
  },
  {
    'label': '荷兰速递(Nederland Post)',
    'code': 'nederlandpost'
  },
  {
    'label': '尼泊尔（Nepal Postal Services）',
    'code': 'nepalpost'
  },
  {
    'label': 'Network Courier',
    'code': 'networkcourier'
  },
  {
    'label': '尼日利亚(Nigerian Postal)',
    'code': 'nigerianpost'
  },
  {
    'label': 'ninja xpress',
    'code': 'ninjaxpress'
  },
  {
    'label': 'Nippon Express',
    'code': 'nipponexpress'
  },
  {
    'label': '牛仔速运',
    'code': 'niuzaiexpress'
  },
  {
    'label': 'NLE',
    'code': 'nle'
  },
  {
    'label': '华赫物流',
    'code': 'nmhuahe'
  },
  {
    'label': 'Nova Poshta',
    'code': 'novaposhta'
  },
  {
    'label': '偌亚奥国际快递',
    'code': 'nuoyaao'
  },
  {
    'label': 'NYK Line',
    'code': 'nyk'
  },
  {
    'label': 'OCA Argentina',
    'code': 'ocaargen'
  },
  {
    'label': 'OC-Post',
    'code': 'ocpost'
  },
  {
    'label': '﻿OCS ANA Group',
    'code': 'ocsindia'
  },
  {
    'label': '阿曼(Oman Post)',
    'code': 'oman'
  },
  {
    'label': '爱沙尼亚(Eesti Post)',
    'code': 'omniva'
  },
  {
    'label': '一号仓',
    'code': 'onehcang'
  },
  {
    'label': '昂威物流',
    'code': 'onway'
  },
  {
    'label': 'OPEK',
    'code': 'opek'
  },
  {
    'label': '波音速递',
    'code': 'overseaex'
  },
  {
    'label': '巴基斯坦(Pakistan Post)',
    'code': 'pakistan'
  },
  {
    'label': 'Pandu Logistics',
    'code': 'pandulogistics'
  },
  {
    'label': '巴拉圭(Correo Paraguayo)',
    'code': 'paraguay'
  },
  {
    'label': '诚一物流',
    'code': 'parcelchina'
  },
  {
    'label': 'Park N Pracel',
    'code': 'parknparcel'
  },
  {
    'label': 'paxel',
    'code': 'paxel'
  },
  {
    'label': 'paxelen',
    'code': 'paxelen'
  },
  {
    'label': '普畅物流',
    'code': 'pcwl56'
  },
  {
    'label': '全球速递',
    'code': 'pdstow'
  },
  {
    'label': '派尔快递',
    'code': 'peex'
  },
  {
    'label': '陪行物流',
    'code': 'peixingwuliu'
  },
  {
    'label': '秘鲁(SERPOST)',
    'code': 'peru'
  },
  {
    'label': 'Parcel Freight Logistics',
    'code': 'pflogistics'
  },
  {
    'label': 'pickupp',
    'code': 'pickupp'
  },
  {
    'label': '品速心达快递',
    'code': 'pinsuxinda'
  },
  {
    'label': '先锋国际快递',
    'code': 'pioneer'
  },
  {
    'label': '龙行天下',
    'code': 'pmt0704be'
  },
  {
    'label': '北极星快运',
    'code': 'polarisexpress'
  },
  {
    'label': '葡萄牙（Portugal CTT）',
    'code': 'portugalctten'
  },
  {
    'label': 'Portugal Seur',
    'code': 'portugalseur'
  },
  {
    'label': 'POS INDONESIA',
    'code': 'posindonesia'
  },
  {
    'label': 'PostElbe',
    'code': 'postelbe'
  },
  {
    'label': 'PostNord(Posten AB)',
    'code': 'postenab'
  },
  {
    'label': '挪威（Posten Norge）',
    'code': 'postennorge'
  },
  {
    'label': '巴布亚新几内亚(PNG Post)',
    'code': 'postpng'
  },
  {
    'label': 'PT Prima Multi Cipta',
    'code': 'primamulticipta'
  },
  {
    'label': '土耳其',
    'code': 'ptt'
  },
  {
    'label': 'ANTS EXPRESS',
    'code': 'qdants'
  },
  {
    'label': '千里速递',
    'code': 'qianli'
  },
  {
    'label': '启辰国际速递',
    'code': 'qichen'
  },
  {
    'label': '千顺快递',
    'code': 'qskdyxgs'
  },
  {
    'label': '全际通',
    'code': 'quanjitong'
  },
  {
    'label': '全速通',
    'code': 'quansutong'
  },
  {
    'label': '全通快运',
    'code': 'quantwl'
  },
  {
    'label': '全信通快递',
    'code': 'quanxintong'
  },
  {
    'label': 'Qxpress',
    'code': 'qxpress'
  },
  {
    'label': '全之鑫物流',
    'code': 'qzx56'
  },
  {
    'label': 'Red Express',
    'code': 'redexpress'
  },
  {
    'label': '睿和泰速运',
    'code': 'rhtexpress'
  },
  {
    'label': '罗马尼亚（Posta Romanian）',
    'code': 'romanian'
  },
  {
    'label': '皇家国际速运',
    'code': 'royal'
  },
  {
    'label': '日日通国际',
    'code': 'rrthk'
  },
  {
    'label': '瑞典（Sweden Post）',
    'code': 'ruidianyouzhengen'
  },
  {
    'label': '卢旺达(Rwanda i-posita)',
    'code': 'rwanda'
  },
  {
    'label': 'Safexpress',
    'code': 'safexpress'
  },
  {
    'label': '赛澳递for买卖宝',
    'code': 'saiaodimmb'
  },
  {
    'label': 'Correo El Salvador',
    'code': 'salvador'
  },
  {
    'label': '萨摩亚(Samoa Post)',
    'code': 'samoa'
  },
  {
    'label': '三盛快递',
    'code': 'sanshengco'
  },
  {
    'label': 'SAP EXPRESS',
    'code': 'sapexpress'
  },
  {
    'label': '沙特阿拉伯(Saudi Post)',
    'code': 'saudipost'
  },
  {
    'label': 'SCG',
    'code': 'scglogistics'
  },
  {
    'label': '速佳达快运',
    'code': 'scsujiada'
  },
  {
    'label': '四川星程快递',
    'code': 'scxingcheng'
  },
  {
    'label': '首达速运',
    'code': 'sdsy888'
  },
  {
    'label': 'Selektvracht',
    'code': 'selektvracht'
  },
  {
    'label': '森鼎国际物流',
    'code': 'sendinglog'
  },
  {
    'label': 'Sendle',
    'code': 'sendle'
  },
  {
    'label': '塞尔维亚(PE Post of Serbia)',
    'code': 'serbia'
  },
  {
    'label': 'International Seur',
    'code': 'seur'
  },
  {
    'label': '澳丰速递',
    'code': 'sfau'
  },
  {
    'label': '十方通物流',
    'code': 'sfift'
  },
  {
    'label': '圣飞捷快递',
    'code': 'sfjhd'
  },
  {
    'label': '曹操到',
    'code': 'sfpost'
  },
  {
    'label': 'Shadowfax',
    'code': 'shadowfax'
  },
  {
    'label': '衫达快运',
    'code': 'shanda56'
  },
  {
    'label': '上海无疆for买卖宝',
    'code': 'shanghaiwujiangmmb'
  },
  {
    'label': '尚途国际货运',
    'code': 'shangtuguoji'
  },
  {
    'label': '捎客物流',
    'code': 'shaoke'
  },
  {
    'label': '杰响物流',
    'code': 'shbwch'
  },
  {
    'label': '商海德物流',
    'code': 'shd56'
  },
  {
    'label': '盛通快递',
    'code': 'shengtongscm'
  },
  {
    'label': '神骏物流',
    'code': 'shenjun'
  },
  {
    'label': '神马快递',
    'code': 'shenma'
  },
  {
    'label': '阳光快递',
    'code': 'shiningexpress'
  },
  {
    'label': '王牌快递',
    'code': 'shipbyace'
  },
  {
    'label': '苏豪快递',
    'code': 'shipsoho'
  },
  {
    'label': '世运快递',
    'code': 'shiyunkuaidi'
  },
  {
    'label': 'SHL畅灵国际物流',
    'code': 'shlexp'
  },
  {
    'label': '林道国际快递',
    'code': 'shlindao'
  },
  {
    'label': 'shreeanjanicourier',
    'code': 'shreeanjanicourier'
  },
  {
    'label': '顺邦国际物流',
    'code': 'shunbang'
  },
  {
    'label': '顺士达速运',
    'code': 'shunshid'
  },
  {
    'label': 'SiCepat Ekspres',
    'code': 'sicepat'
  },
  {
    'label': '四海快递',
    'code': 'sihaiet'
  },
  {
    'label': '四海捷运',
    'code': 'sihiexpress'
  },
  {
    'label': 'Siodemka',
    'code': 'siodemka'
  },
  {
    'label': '易普递',
    'code': 'sixroad'
  },
  {
    'label': '四季安物流',
    'code': 'sja56'
  },
  {
    'label': 'skynet',
    'code': 'skynet'
  },
  {
    'label': 'SkyNet Malaysia',
    'code': 'skynetmalaysia'
  },
  {
    'label': 'skynetworldwide',
    'code': 'skynetworldwide'
  },
  {
    'label': '荷兰Sky Post',
    'code': 'skypost'
  },
  {
    'label': '斯洛伐克(Slovenská Posta)',
    'code': 'slovak'
  },
  {
    'label': '斯洛文尼亚(Slovenia Post)',
    'code': 'slovenia'
  },
  {
    'label': '斯里兰卡(Sri Lanka Post)',
    'code': 'slpost'
  },
  {
    'label': '嗖一下同城快递',
    'code': 'sofast56'
  },
  {
    'label': '行必达',
    'code': 'speeda'
  },
  {
    'label': 'Spoton',
    'code': 'spoton'
  },
  {
    'label': '速速达',
    'code': 'ssd'
  },
  {
    'label': '首通快运',
    'code': 'staky'
  },
  {
    'label': '星速递',
    'code': 'starex'
  },
  {
    'label': '星运快递',
    'code': 'staryvr'
  },
  {
    'label': '智德物流',
    'code': 'stzd56'
  },
  {
    'label': '速豹',
    'code': 'subaoex'
  },
  {
    'label': '速呈宅配',
    'code': 'sucheng'
  },
  {
    'label': '特急便物流',
    'code': 'sucmj'
  },
  {
    'label': '苏丹（Sudapost）',
    'code': 'sudapost'
  },
  {
    'label': '速风快递',
    'code': 'sufengkuaidi'
  },
  {
    'label': '郑州速捷',
    'code': 'sujievip'
  },
  {
    'label': '速配欧翼',
    'code': 'superoz'
  },
  {
    'label': '速品快递',
    'code': 'supinexpress'
  },
  {
    'label': '瑞士邮政',
    'code': 'swisspostcn'
  },
  {
    'label': '红马甲物流',
    'code': 'sxhongmajia'
  },
  {
    'label': '顺友物流',
    'code': 'sypost'
  },
  {
    'label': '深圳DPEX',
    'code': 'szdpex'
  },
  {
    'label': '天美快递',
    'code': 'taimek'
  },
  {
    'label': '坦桑尼亚(Tanzania Posts)',
    'code': 'tanzania'
  },
  {
    'label': '淘布斯国际物流',
    'code': 'taoplus'
  },
  {
    'label': '淘特物流快递',
    'code': 'taote'
  },
  {
    'label': 'TCI XPS',
    'code': 'tcixps'
  },
  {
    'label': 'TCXB国际物流',
    'code': 'tcxbthai'
  },
  {
    'label': 'TD Cargo',
    'code': 'tdcargo'
  },
  {
    'label': 'The BlueBhell Couriers',
    'code': 'thebluebhellcouriers'
  },
  {
    'label': '加拿大雷霆快递',
    'code': 'thunderexpress'
  },
  {
    'label': '天翔快递',
    'code': 'tianxiang'
  },
  {
    'label': '天纵物流',
    'code': 'tianzong'
  },
  {
    'label': 'TiKi',
    'code': 'tiki'
  },
  {
    'label': '万家通快递',
    'code': 'timedg'
  },
  {
    'label': 'Shree Tirupati',
    'code': 'tirupati'
  },
  {
    'label': '天联快运',
    'code': 'tlky'
  },
  {
    'label': '株式会社T.M.G',
    'code': 'tmg'
  },
  {
    'label': 'TNT UK',
    'code': 'tntuk'
  },
  {
    'label': 'TNY物流',
    'code': 'tny'
  },
  {
    'label': '通达兴物流',
    'code': 'tongdaxing'
  },
  {
    'label': '顶世国际物流',
    'code': 'topshey'
  },
  {
    'label': 'The Professional Couriers',
    'code': 'tpcindia'
  },
  {
    'label': 'Trans Kargo',
    'code': 'transkargologistics'
  },
  {
    'label': '突尼斯EMS(Rapid-Poste)',
    'code': 'tunisia'
  },
  {
    'label': '海龟国际快递',
    'code': 'turtle'
  },
  {
    'label': '天翼物流',
    'code': 'tywl99'
  },
  {
    'label': 'UEQ快递',
    'code': 'ueq'
  },
  {
    'label': 'UEX国际物流',
    'code': 'uex'
  },
  {
    'label': '欧洲UEX',
    'code': 'uexiex'
  },
  {
    'label': '乌干达(Posta Uganda)',
    'code': 'uganda'
  },
  {
    'label': '邮鸽速运',
    'code': 'ugoexpress'
  },
  {
    'label': '乌克兰小包、大包(UkrPoshta)',
    'code': 'ukraine'
  },
  {
    'label': '乌克兰小包、大包(UkrPost)',
    'code': 'ukrpost'
  },
  {
    'label': '优联吉运',
    'code': 'uluckex'
  },
  {
    'label': 'Uni Express',
    'code': 'uniexpress'
  },
  {
    'label': 'UParcel',
    'code': 'uparcel'
  },
  {
    'label': 'UPS Freight',
    'code': 'upsfreight'
  },
  {
    'label': 'UPS Mail Innovations',
    'code': 'upsmailinno'
  },
  {
    'label': '华夏国际速递',
    'code': 'uschuaxia'
  },
  {
    'label': 'UTAO优到',
    'code': 'utaoscm'
  },
  {
    'label': '乌兹别克斯坦(Post of Uzbekistan)',
    'code': 'uzbekistan'
  },
  {
    'label': '瓦努阿图(Vanuatu Post)',
    'code': 'vanuatu'
  },
  {
    'label': '越中国际物流',
    'code': 'vctrans'
  },
  {
    'label': '越南小包(Vietnam Posts)',
    'code': 'vietnam'
  },
  {
    'label': '鹰运国际速递',
    'code': 'vipexpress'
  },
  {
    'label': 'Wahana',
    'code': 'wahana'
  },
  {
    'label': '万博快递',
    'code': 'wanboex'
  },
  {
    'label': '宁夏万家通',
    'code': 'wanjiatong'
  },
  {
    'label': '万达美',
    'code': 'wdm'
  },
  {
    'label': '文捷航空',
    'code': 'wenjiesudi'
  },
  {
    'label': '香港伟豪国际物流',
    'code': 'whgjkd'
  },
  {
    'label': '万邑通',
    'code': 'winit'
  },
  {
    'label': '万家康物流',
    'code': 'wjkwl'
  },
  {
    'label': '凡仕特物流',
    'code': 'wlfast'
  },
  {
    'label': '星空国际',
    'code': 'wlwex'
  },
  {
    'label': '渥途国际速运',
    'code': 'wotu'
  },
  {
    'label': 'wowexpress',
    'code': 'wowexpress'
  },
  {
    'label': '沃埃家',
    'code': 'wowvip'
  },
  {
    'label': 'WTD海外通',
    'code': 'wtdex'
  },
  {
    'label': '臣邦同城',
    'code': 'wto56kj'
  },
  {
    'label': '五六快运',
    'code': 'wuliuky'
  },
  {
    'label': '万运国际快递',
    'code': 'wygj168'
  },
  {
    'label': '微转运',
    'code': 'wzhaunyun'
  },
  {
    'label': '国晶物流',
    'code': 'xdshipping'
  },
  {
    'label': '蓝天物流',
    'code': 'xflt56'
  },
  {
    'label': '鑫宏福物流',
    'code': 'xhf56'
  },
  {
    'label': '西安城联速递',
    'code': 'xianchengliansudi'
  },
  {
    'label': '湘达物流',
    'code': 'xiangdawuliu'
  },
  {
    'label': '翔腾物流',
    'code': 'xiangteng'
  },
  {
    'label': '小C海淘',
    'code': 'xiaocex'
  },
  {
    'label': '西安喜来快递',
    'code': 'xilaikd'
  },
  {
    'label': '新宁物流',
    'code': 'xinning'
  },
  {
    'label': '西邮寄',
    'code': 'xipost'
  },
  {
    'label': 'XpressBees',
    'code': 'xpressbees'
  },
  {
    'label': '鑫远东速运',
    'code': 'xyd666'
  },
  {
    'label': '西游寄速递',
    'code': 'xyjexpress'
  },
  {
    'label': '洋包裹',
    'code': 'yangbaoguo'
  },
  {
    'label': '一辉物流',
    'code': 'yatfai'
  },
  {
    'label': '易达丰国际速递',
    'code': 'ydfexpress'
  },
  {
    'label': '也门(Yemen Post)',
    'code': 'yemen'
  },
  {
    'label': '一邦速递',
    'code': 'yibangwuliu'
  },
  {
    'label': '驿递汇速递',
    'code': 'yidihui'
  },
  {
    'label': '艺凡快递',
    'code': 'yifankd'
  },
  {
    'label': '易航物流',
    'code': 'yihangmall'
  },
  {
    'label': 'yikonn',
    'code': 'yikonn'
  },
  {
    'label': '亿领速运',
    'code': 'yilingsuyun'
  },
  {
    'label': '易欧洲国际物流',
    'code': 'yiouzhou'
  },
  {
    'label': '一柒国际物流',
    'code': 'yiqiguojiwuliu'
  },
  {
    'label': '亿顺航',
    'code': 'yishunhang'
  },
  {
    'label': '宜送',
    'code': 'yisong'
  },
  {
    'label': '易通达',
    'code': 'yitongda'
  },
  {
    'label': '易邮速运',
    'code': 'yiyou'
  },
  {
    'label': '益加盛快递',
    'code': 'yjs'
  },
  {
    'label': '优胜国际速递',
    'code': 'yoseus'
  },
  {
    'label': '邮来速递',
    'code': 'youlai'
  },
  {
    'label': '粤中国际货运代理（上海）有限公司',
    'code': 'yuezhongsh'
  },
  {
    'label': '韵丰物流',
    'code': 'yunfeng56'
  },
  {
    'label': '西安运逸快递',
    'code': 'yyexp'
  },
  {
    'label': '一运全成物流',
    'code': 'yyqc56'
  },
  {
    'label': '珠峰速运',
    'code': 'zf365'
  },
  {
    'label': '众辉达物流',
    'code': 'zhdwl'
  },
  {
    'label': '智谷特货',
    'code': 'zhiguil'
  },
  {
    'label': '中环转运',
    'code': 'zhonghuanus'
  },
  {
    'label': '忠信达',
    'code': 'zhongxinda'
  },
  {
    'label': '众派速递',
    'code': 'zhpex'
  },
  {
    'label': '转瞬达集运',
    'code': 'zsda56'
  },
  {
    'label': '明辉物流',
    'code': 'zsmhwl'
  },
  {
    'label': 'ZTE中兴物流',
    'code': 'zteexpress'
  },
  {
    'label': '泰捷达国际物流',
    'code': 'ztjieda'
  }
]
export default list
