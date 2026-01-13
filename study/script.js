const messages = [
    "你确定吗",
    "真的吗？？",
    "你认真的？？？",
    "啊求你了~快开始吧~",
    "你真的忍心吗？",
    "如果你还没开始，我真的会伤心的...",
    "呜呜呜呜呜呜呜...",
    "嗷嗷嗷嗷嗷嗷嗷嗷啊...",
    "好吧...我不会再问了",
    "哈哈我在开玩笑，快选肯定啊衰！"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}