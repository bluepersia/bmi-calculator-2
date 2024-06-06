const metricRadio = document.getElementById ('bmi__metric-radio');
const imperialRadio = document.getElementById ('bmi__imperial-radio');
const metricContainer = document.getElementById ('bmi__metric-container');
const imperialContainer = document.getElementById ('bmi__imperial-container');
const form = document.getElementById ('bmi__form');

metricRadio.addEventListener ('change', radioChanged);
imperialRadio.addEventListener ('change', radioChanged);
form.addEventListener ('submit', submit);

metricContainer.classList.add ('active');

function radioChanged (e)
{
   metricContainer.classList.remove ('active');
   imperialContainer.classList.remove ('active');

   if (e.target.checked)
    {
        if (e.target.value === 'metric')
            metricContainer.classList.add ('active');
        else   
            imperialContainer.classList.add ('active');
    }
}

function submit (e)
{
    console.log ('yes');
    e.preventDefault ();

    document.getElementById ('bmi').classList.add ('submitted');
}