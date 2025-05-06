let passwordInput = document.querySelector('#password');
let progressBar = document.querySelector('.progress .bar');

passwordInput.addEventListener('keyup', () => {
    let strength = 0;

    strength += renderRule(
        '.lower-case',
        passwordInput.value.match(/([a-z])/)
    );

    strength += renderRule(
        '.upper-case',
        passwordInput.value.match(/([A-Z])/)
    );

    strength += renderRule(
        '.one-number',
        passwordInput.value.match(/([0-9])/)
    );

    strength += renderRule(
        '.one-special-char',
        passwordInput.value.match(/([!@#$%&*_])/)
    );

    strength += renderRule(
        '.six-caracteres',
        passwordInput.value.length >= 6
    );
    
    let pct = Math.floor((strength / 5) * 100);
    progressBar.style.width = `${pct}%`;

    if(pct <= 25){
        progressBar.style.backgroundColor = 'red';
    } else if(pct <= 50){
        progressBar.style.backgroundColor = 'orange';
    } else if(pct <= 75){
        progressBar.style.backgroundColor = '#FFD633';
    } else {
        progressBar.style.backgroundColor = 'green';
    }
});

function renderRule(ruleClass, valid) {
    let ruleArea = document.querySelector(ruleClass);
    ruleArea.querySelector('.validator-point').style.backgroundColor = valid ? 'green' : 'red';
    ruleArea.querySelector('.valid-text').style.color = valid ? 'green' : 'red';
    
    return valid ? 1 : 0;
}
