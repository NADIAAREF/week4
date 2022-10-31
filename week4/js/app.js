// const showOverlay = () => {
//     document.getElementById('bg').style.transform = 'translateY(0)';
//     }
    
//     const removeOverlay = () => {
//     const overlay = document.getElementById('overlay');
//     overlay.style.display = 'none';
//     overlay.style.transform = 'translateX(-100%)';
//     }
    
//     window.onload = () => {
//     setTimeout(showOverlay, 100);
//     setTimeout(removeOverlay, 5000);
//     }
    document.getElementById('button').addEventListener('click',
     () => {
        window.location.assign('/tool.html')
     });