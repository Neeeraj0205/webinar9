function downloadedfile(url,downloaded){
    console.log("downloadingfile:"+ url)
    setTimeout(function(){
        let filepath="C:\codingblocks\webinar9"
        console.log("file is downloaded to"+filepath)
        downloaded(filepath)},3000)
    
}

downloadedfile("https://www.google.com/search?q=google&rlz=1C1CHBD_enIN829IN829&oq=gooo&aqs=chrome.1.69i57j0l5.3210j0j8&sourceid=chrome&ie=UTF-8",function(path){
    console.log("we got the file at:"+path)
})