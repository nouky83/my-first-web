// =========================================================
// theme.js : 오른쪽 위 스위치로 다크/라이트 모드를 바꾸는 코드
// 고른 모드는 브라우저에 기억해 두어서, 다른 페이지로 가거나
// 다시 열어도 그대로 유지됩니다.
// =========================================================

// 1) 페이지가 그려지기 전에, 전에 골라 둔 모드가 있으면 바로 적용
//    (그래야 페이지가 잠깐 반대 색으로 번쩍이지 않습니다)
try {
    var saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
        document.documentElement.setAttribute("data-theme", saved);
    }
} catch (e) {
    // 브라우저가 저장을 막아 두었으면 그냥 컴퓨터 설정을 따릅니다.
}

// 2) 지금 화면이 다크 모드인지 알아내기
function isDark() {
    var theme = document.documentElement.getAttribute("data-theme");
    if (theme) {
        return theme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

// 3) 페이지가 다 열리면 스위치에 "누르면 모드 바꾸기"를 연결
document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("theme-toggle");

    function updateLabel() {
        button.setAttribute("aria-label", isDark() ? "라이트 모드로 바꾸기" : "다크 모드로 바꾸기");
        button.title = button.getAttribute("aria-label");
    }

    button.addEventListener("click", function () {
        var next = isDark() ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        try {
            localStorage.setItem("theme", next);
        } catch (e) {}
        updateLabel();
    });

    updateLabel();
});
