function hideAllVideos() {
  const videoIds = ["Livelbc", "SoFarAway", "Warmness", "UNCF", "BC", "AL", "NM", "HK", "TS", "NBD"];
  videoIds.forEach(id => {
    const video = document.getElementById(id);
    if (video) {
      video.style.visibility = "hidden";
    }
  });
}
function vdlbc() 
{
  hideAllVideos();
  const img = document.getElementById("Livelbc");
  img.style.visibility = "visible";
}
function vdsfa() 
{
  hideAllVideos();
  const img = document.getElementById("SoFarAway");
  img.style.visibility = "visible";
}
function vdwarmness()
{
  hideAllVideos();

  showlink("https://www.youtube.com/embed/ICqGpVVfN0Q?si=zjL0S_NIQW4Y1oRy");
}
function vduncf()
{
  hideAllVideos();
 
  showlink("https://www.youtube.com/embed/vSaBveD7zvA?si=OaksGQ8BRgrET509" );
}
function vdbc()
{
  hideAllVideos();

  showlink("https://www.youtube.com/embed/OR0f3qtadjg?si=wc1KVL0GeQzzHRRI" );
}
function vdal()
{
  hideAllVideos();

  showlink("https://www.youtube.com/embed/Rhy__BcFtbM?si=_SpJ1cuXZZATQUcM");
}
function vdnm()
{
  hideAllVideos();
 
  showlink("https://www.youtube.com/embed/94bGzWyHbu0?si=dINhSB3ziS6tgPh6" );
}
function vdhk()
{
  hideAllVideos();

  showlink("https://www.youtube.com/embed/DelhLppPSxY?si=Qkz_SL2QDaN2mYqc");
}
function vdts()
{
  hideAllVideos();

  showlink("https://www.youtube.com/embed/nFF6p-4LSkg?si=KeQSX3yC2PMhe3vE");
}
function vdnbd()
{
  hideAllVideos();

   showlink("https://www.youtube.com/embed/UjrRTY2UDjw?si=tByXrULfGn11rr1w");
}

function showlink(link)
{
  document.getElementById("videoIframe").src = link;
}