let slideShow = {
  photoList: ['photo1', 'photo2', 'photo3', 'photo4', 'photo5',],
  currentPhotoIndex: 0,
  nextPhoto: function () {
    this.currentPhotoIndex++;
    if (this.photoList[this.currentPhotoIndex]) {
      console.log(this.photoList[this.currentPhotoIndex]);
    } else {
      console.log("End of slideshow.")
      this.currentPhotoIndex--;
    }
  },
  prevPhoto: function () {
    this.currentPhotoIndex--;
    if (this.photoList[this.currentPhotoIndex]) {
      console.log(this.photoList[this.currentPhotoIndex]);
    } else {
      console.log("Beginning of slideshow.")
      this.currentPhotoIndex++;
    }
  },
  getCurrentPhoto: function () {
    console.log(this.photoList[this.currentPhotoIndex]);
  }

}

// ==== testing methods ====

slideShow.getCurrentPhoto(); // photo1
slideShow.nextPhoto(); // photo2
slideShow.nextPhoto(); // photo3
slideShow.prevPhoto(); // photo2
slideShow.prevPhoto(); // photo1
slideShow.prevPhoto(); // Beginning of slideshow
slideShow.getCurrentPhoto(); // photo1
slideShow.nextPhoto(); // photo2
slideShow.nextPhoto(); // photo3
slideShow.nextPhoto(); // photo4
slideShow.nextPhoto(); // photo5
slideShow.nextPhoto(); // end of slideshow
slideShow.nextPhoto(); // end of slideshow



