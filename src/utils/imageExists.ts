const imageExists = (image_url: string): boolean => {
  var http = new XMLHttpRequest();

  http.open("HEAD", image_url, false);
  http.send();

  return http.status !== 404;
};

export { imageExists };
