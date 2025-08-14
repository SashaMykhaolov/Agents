console.clear()







const s = document.querySelector(".sec")
const m = document.querySelector(".min")
const h = document.querySelector(".hour")

setInterval(() => {
    const now = new Date()
    const sec = now.getSeconds()
    const min = now.getMinutes()
    const hs = now.getHours()

    s.style.transform = `rotate(${sec * 6}deg)`
    m.style.transform = `rotate(${min * 6 + sec * 0.1}deg)`
    h.style.transform = `rotate(${hs * 30 + min * 0.5}deg)`
}, 1000)



function changeLanguageUa() {

    let targets = document.querySelectorAll(".target");
    console.log(targets)
    for (let i = 0; i < targets.length && i < [
    ].length; i++) {
        targets[i].textContent = [
            " Агенти",
            "Покупцям",
            "Ресурси",
            "Увійти",
            "Зареєструйтесь",
            "Впевненість на шляху до власного житла.",
            "Гарантуємо завершення угоди з готівкою без умов для всіх сторін.",
            "Зареєструйтесь",
            "Детальніше",
            "У ЗМІ",
            "Кого ми підтримуємо",
            "Агенти покупців",
            "Покупці",
            "Агенти продавців",
            "Продавці",
            "Кредитори",
            "Агенти покупців",
            "Готівка для ваших клієнтів",
            "Без умов — найсильніша пропозиція на ринку.",
            "Сертифікуйтесь",
            "Комісія залишається вам",
            "Більше перемог",
            "Гарантія завершення",
            "Нам довіряють",
            "«Ribbon — ваша перевага для перемоги клієнта.»",
            "Едґар Гонсалес",
            "eXp Realty",
            "Ribbon не забирає вашу комісію, а допомагає.",
            "Більше",
            "$5 млрд+",
            "Будинків куплено",
            "Агенти",
            "Платоспроможність",
            "Наші рішення",
            "Пропозиція за готівку",
            "Купівля до продажу",
            "Порятунок угоди",
            "Орландо, Флорида",
            "будинок з Ribbon",
            "Покупець",
            "Продавець",
            "виграла будинок мрії у конкуренції.",
            "отримав завершення без умов.",
            "Пропозиція за готівку",
            "Після схвалення — оновіть пропозицію до готівки.",
            "Більше",
            "Прочитати успішну історія",
            "Все під рукою",
            "Ribbon — пропозиції з телефона будь-коли.",
            "Агенти",
            "Купівля",
            "Продаж",
            "Додаток iOS",
            "Сертифікація",
            "Житла",
            "Покупці",
            "Купити до продажу",
            "Новобудови",
            "Порятунок угоди",
            "Продавцям",
            "Партнери",
            "Кредитори",
            "Будівельники",
            "Агентства",
            "Ресурси",
            "Ціни",
            "ЧаПи",
            "Як діє",
            "Блог",
            "Посібники",
            "Вебінари",
            "Про нас",
            "Місія",
            "Культура",
            "Кар’єра",
            "Преса",
            "Залишити відгук",
            "Умови",
            "Конфіденційність",
            "© 2022 Ribbon Home. Всі права захищено."
        ][i];
    } 
}



function changeLanguageEng() {
    let engtexts = [
        "Agents",
        "Homebuyers",
        "Resources",
        "Log In",
        "Sign up now",
        "Providing certainty on the journey to homeownership.",

        "Guarantee your home closes with cash-backed, contingency-free offers for buyers, sellers, their agents, and loan officers.",
        "Sign up now",
        "Learn more",
        "FEATURED IN",
        "Who we empower",
        "BuyEr's AgentS",
        "Buyers",
        "Listing agents",
        "sellers",
        "Loan officers",
        "BuyER's agents",
        "Give your buyers the certainty of cash",
        "Waive common contingencies, including the home-sale contingency, to allow your buyers to make their strongest offer in any market.",
        "Get Certified Today",
        "Keep Your Commission",
        "Write More Winning Offers",
        "Guaranteed to Close",
        "You’re in good company",
        "«Ribbon is a huge advantage for you as the buyer's agent - and definitely gives you the extra edge needed to have your buyer's offer accepted.»",
        "Edgar Gonzalez",
        "eXp Realty",
        "Agents love us because we empower their buyers with cash and don't compete for their commissions.",
        "Learn More", "$5 B+",
        "Homes Purchased",
        "Agents",
        "Buying Power",
        "Our solutions",
        "Turn an offer to all cash",
        "Buy before you sell",
        "Save an existing deal", "ORLANDO, FL",
        "home won with", "The buyer",
        "The seller",
        "won her dream house in multiple-offers situation.",
        "got a guaranteed closing with no contingencies.",
        "Turn an offer to all cash",
        "Once your buyer is preapproved, upgrade your buying power to cash to make your strongest offer, first.",
        "Learn more",
        "Read the success story",
        "Everything you need is only a tap away",
        "Ribbon let’s you write an offer anytime, anywhere — right from your mobile device.",
        "agents",
        "Buying",
        "Listing",
        "iOS App",
        "Get Certified",
        "homebuyers",
        "Buyers",
        "Buy Before You Sell",
        "New Construction",
        "Rescue Your Closing",
        "Sellers",
        "partners",
        "Lenders",
        "Builders",
        "Brokerages",
        "resources",
        "Pricing",
        "FAQs",
        "How it works",
        "Blog",
        "Guides",
        "Webinars",
        "about",
        "Mission",
        "Culture",
        "Careers",
        "Press",
        "Click for Review",
        "Terms",
        "Privacy",
        "Copyright 2022 Ribbon Home Inc, All Rights Reserved."
    ];
    let targets = document.querySelectorAll(".target");
    console.log(targets)
    for (let i = 0; i < targets.length && i < engtexts.length; i++) {
        targets[i].textContent = engtexts[i];
    }
}









