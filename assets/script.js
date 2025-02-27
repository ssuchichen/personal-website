const langToggle = document.getElementById('lang-toggle');
const content = {
    en: {
        name: 'Ssu-chi Chen',
        github1: '<b>Github:</b> <a href="https://github.com/ssuchichen" target="_blank">https://github.com/ssuchichen</a>',
        github2: '<b>Github:</b> <a href="https://github.com/ssuchichen" target="_blank">https://github.com/ssuchichen</a>',
        wechat: '<b>WeChat:</b> ssuchichen',
        phone: '<b>Phone:</b> (+86) 19150303250',
        email: '<b>Email:</b> ssuchichen9010@gmail.com',
        bioTitle: 'Bio',
        bio1: 'I am a programming enthusiast and programmer.',
        bio2: 'I have rich programming experience.',
        bio3: 'My undergraduate major is computer science and technology.',
        skillsTitle: 'Key Skills',
        skill1: '5+ years of back-end engineering with Rust Experience and Blockchain.',
        skill2: 'Proficient in backend technologies including Rust, Python, GoLang.',
        skill3: 'Expertise in PostgreSQL database management and Redis caching system.',
        skill4: 'Solid understanding and experience in Linux.',
        skill5: 'Deep understanding of Rust and its ecosystem, with a proven track record of building and deploying production-quality code.',
        skill6: 'Having significant experience in building products from the ground up, with a deep understanding of the full product lifecycle from conception to deployment.',
        skill7: 'Passion for high-quality code and effective software engineering processes with a focus on execution and delivery.',
        skill8: 'Strong verbal and written communication skills, ability to articulate the vision and influence stakeholders across the company.'
    },
    zh: {
        name: '陈思齐',
        github1: '<b>Github:</b> <a href="https://github.com/ssuchichen" target="_blank">https://github.com/ssuchichen</a>',
        github2: '<b>Github:</b> <a href="https://github.com/ssuchichan" target="_blank">https://github.com/ssuchichan</a>',
        wechat: '<b>微信:</b> ssuchichen',
        phone: '<b>电话:</b> (+86) 19150303250',
        email: '<b>邮箱:</b> ssuchichen9010@gmail.com',
        bioTitle: '简介',
        bio1: '我是一个编程爱好者和程序员。',
        bio2: '我拥有丰富的编程经验。',
        bio3: '我的本科专业是计算机科学与技术。',
        skillsTitle: '关键技能',
        skill1: '5年以上Rust后端工程和区块链经验。',
        skill2: '精通 Rust、Python、GoLang 等后端技术。',
        skill3: '精通 PostgreSQL 数据库管理和 Redis 缓存系统。',
        skill4: '扎实的Linux操作系统理解和经验。',
        skill5: '深入理解Rust及其生态系统，具有构建和部署生产质量代码的良好记录。',
        skill6: '在从头开始构建产品方面拥有丰富的经验，对从概念到部署的完整产品生命周期有深入的了解。',
        skill7: '对高质量代码和高效的软件工程流程充满热情，注重执行和交付。',
        skill8: '强大的口头和书面沟通能力，能够清晰表达愿景并影响公司内的利益相关者。'
    }
};

let currentLang = 'zh';

function updateContent() {
    const langData = content[currentLang];
    document.getElementById('name').innerHTML = langData.name;
    document.getElementById('github1').innerHTML = langData.github1;
    document.getElementById('github2').innerHTML = langData.github2;
    document.getElementById('wechat').innerHTML = langData.wechat;
    document.getElementById('phone').innerHTML = langData.phone;
    document.getElementById('email').innerHTML = langData.email;
    document.getElementById('bio-title').textContent = langData.bioTitle;
    document.getElementById('bio1').textContent = langData.bio1;
    document.getElementById('bio2').textContent = langData.bio2;
    document.getElementById('bio3').textContent = langData.bio3;
    document.getElementById('skills-title').textContent = langData.skillsTitle;
    document.getElementById('skill1').textContent = langData.skill1;
    document.getElementById('skill2').textContent = langData.skill2;
    document.getElementById('skill3').textContent = langData.skill3;
    document.getElementById('skill4').textContent = langData.skill4;
    document.getElementById('skill5').textContent = langData.skill5;
    document.getElementById('skill6').textContent = langData.skill6;
    document.getElementById('skill7').textContent = langData.skill7;
    document.getElementById('skill8').textContent = langData.skill8;
    langToggle.textContent = currentLang === 'en' ? '中文' : 'English';
}

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    updateContent();
});

updateContent();