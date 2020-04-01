let slideShow = {
  photoList: ['photo1', 'photo2', 'photo3', 'photo4', 'photo5',],
  currentPhotoIndex: 0,
  nextPhoto: function () {
    if (this.currentPhotoIndex < this.photoList.length - 1) {
      this.currentPhotoIndex++;
      console.log(this.photoList[this.currentPhotoIndex]);
      return this.photoList[this.currentPhotoIndex];
    } else {
      console.log("End of slideshow.");
      this.pause();
      return "End of slideshow.";
    }
  },
  prevPhoto: function () {
    if (this.currentPhotoIndex > 0) {
      this.currentPhotoIndex--;
      console.log(this.photoList[this.currentPhotoIndex]);
      return this.photoList[this.currentPhotoIndex];
    } else {
      console.log("Beginning of slideshow.")
      return "Beginning of slideshow.";
    }
  },
  getCurrentPhoto: function () {
    return this.photoList[this.currentPhotoIndex];
  },
  playInterval: null,
  play: function () {
    var self = this;
    this.playInterval = setInterval(function () {
      self.nextPhoto();
    }, 2000);
  },
  pause: function () {
    var self = this;
    clearInterval(self.playInterval);
  }
}

slideShow.play();

// ==== testing methods ====
// console.log(
//   slideShow.getCurrentPhoto(), // photo1
//   slideShow.nextPhoto(), // photo2
//   slideShow.nextPhoto(), // photo3
//   slideShow.prevPhoto(), // photo2
//   slideShow.prevPhoto(), // photo1
//   slideShow.prevPhoto(), // Beginning of slideshow
//   slideShow.getCurrentPhoto(), // photo1
//   slideShow.nextPhoto(), // photo2
//   slideShow.nextPhoto(), // photo3
//   slideShow.nextPhoto(), // photo4
//   slideShow.nextPhoto(), // photo5
//   slideShow.nextPhoto(), // end of slideshow
//   slideShow.nextPhoto() // end of slideshow
// );



