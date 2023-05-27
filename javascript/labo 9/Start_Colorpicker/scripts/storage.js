

const storeSliderValues = () => {

    let slider = {};
    slider.red =  document.getElementById('sldRed').value;
    slider.green = document.getElementById('sldGreen').value
    slider.blue=  document.getElementById('sldBlue').value
    sliderjson = JSON.stringify(slider);

    localStorage.setItem('vives.be.Slider', sliderjson);


};

const restoreSliderValues = () => {
        let sliderjson = localStorage.getItem('vives.be.Slider');
        if (sliderjson) {
            let slider = JSON.parse(sliderjson);
            document.getElementById('sldRed').value = slider.red;
            document.getElementById('sldGreen').value = slider.green;
            document.getElementById('sldBlue').value = slider.blue;
        }


    }
    ;

    const storeSwatches = () => {
        let swatches = [];
        let swatch= {};
        let swatchComponent = document.getElementsByClassName("swatch");
        for (let i = 1; i < swatchComponent.length; i++) {
            let swatch = swatchComponent[i];
            swatch.red = swatch.getAttribute("data-red");
            swatch.green = swatch.getAttribute("data-green");
            swatch.blue = swatch.getAttribute("data-blue");
            swatches.push(swatch);

        }
        localStorage.setItem("vives.be.Swatches", JSON.stringify(swatches));



    };

    const restoreSwatches = () => {

     let swatchesJson = localStorage.getItem("vives.be.Swatches");
      if (swatchesJson) {
          console.log ("swatchJson");
    let swatches = JSON.parse(swatchesJson);
    for (let i = 0; i < swatches.length; i++) {
        let swatchInfo = swatches[i];
        addSwatchComponent(swatchInfo.red, swatchInfo.green, swatchInfo.blue);

    };
      }}


