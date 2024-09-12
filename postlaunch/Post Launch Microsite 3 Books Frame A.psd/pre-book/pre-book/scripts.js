document.getElementById('preBookBtn').addEventListener('click', () => {
    document.getElementById('preBookPage').classList.remove('hidden');
});

document.getElementById('yesBtn').addEventListener('click', () => {
    document.getElementById('enterCodeSection').classList.remove('hidden');
    document.getElementById('requestFormSection').classList.add('hidden');
});

document.getElementById('noBtn').addEventListener('click', () => {
    document.getElementById('requestFormSection').classList.remove('hidden');
    document.getElementById('enterCodeSection').classList.add('hidden');
});

document.getElementById('validateCodeBtn').addEventListener('click', () => {
    const code = document.getElementById('inviteCode').value;
    const validCode = 'tbook-69';
    
    if (code === validCode) {
        document.getElementById('codeMessage').textContent = 'Code validated! Proceed to payment.';
        document.getElementById('paymentSection').classList.remove('hidden');
    } else {
        document.getElementById('invalidCodeMessage').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('invalidCodeMessage').classList.add('hidden');
        }, 3000);
    }
});

document.getElementById('submitRequestBtn').addEventListener('click', () => {
    document.getElementById('waitlistMessage').classList.remove('hidden');
});

document.getElementById('payBtn').addEventListener('click', () => {
    window.location.href = 'https://pages.razorpay.com/techbook';
});
