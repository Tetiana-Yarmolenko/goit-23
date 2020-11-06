export const promisifyImage = (imageTag) => {
  return new Promise((resolve, reject) => {
    imageTag.onload = () => resolve(imageTag)
    imageTag.onerror = () => reject()
  })
}

export const delay = ms => {
  return new Promise((resolve, reject) => {
      setTimeout(() => resolve(ms), ms);
    });
}; 