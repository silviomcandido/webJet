document.getElementById('fieldSelect').addEventListener('change', function() {
    updateImage();
});

document.getElementById('vectorFieldSelect').addEventListener('change', function() {
    updateImage();
});

function updateImage() {
    let selectedField = document.getElementById('fieldSelect').value;
    let selectedVectorField = document.getElementById('vectorFieldSelect').value;

    if (selectedField && selectedVectorField) {
        let imageName = `images/2DFIELDS/Field_${selectedField}_Vector_${selectedVectorField}.png`;
        document.getElementById('selectedImage').src = imageName;
        document.getElementById('selectedImage').style.display = 'block';
    }
}
