function MudaTema(tema) {
    
    if (tema==='Love') {
        document.body.classList.remove('Beach');
        document.body.classList.add('Love');
    }
    else{
        document.body.classList.remove('Love');
        document.body.classList.add('Beach');

    }


}

