function formAll() {
  let message = {
    loading: 'идет отправка',
    success: 'отправлено',
    failure: 'ошибка'
  };

  let form = document.querySelector("#formHome"),
      input = form.getElementsByTagName("input"),
      statusMessage = document.createElement("div");
  statusMessage.classList.add("status");

  function sendForm(elem) {
    elem.addEventListener("submit", function (e) {
      e.preventDefault();
      elem.appendChild(statusMessage);
      statusMessage.innerHTML = message.loading;
      let formData = new FormData(elem);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          let request = new XMLHttpRequest();

          request.open("POST", "smart.php");

          request.setRequestHeader(
            "Content-Type",
            "application/json; charset=utf-8"
          );

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4) {
              if (request.status == 200 && request.status < 3) {
                resolve();
              } else {
                reject();
              }
            }
          };
          request.send(data);
        });
      }

      function clearInputs() {
        [...input].forEach(elem => (elem.value = ""));
      }
      function clearMessage() {
        statusMessage.innerHTML = '';
      }
      postData(formData)
        .then(() => (statusMessage.innerHTML = message.loading))
        .then(() => (statusMessage.innerHTML = message.success))
        .catch(() => (statusMessage.innerHTML = message.failure))
        .then(clearInputs)
        .then(setTimeout(clearMessage, 3000));
    });
  }

  sendForm(form);

  //Mask phone
  let inputPhone = document.getElementsByName("phone");

  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    }
    else {
      if (elem.createTextRange) {
        let range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
      }
    }
  }

  function mask(event) {
    let matrix = "+7 (___) ___-__-__",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ?
        val.charAt(i++) : i >= val.length ? "" : a;
    });
    if (event.type == "blur") {
      if (this.value.length == 2) {
        this.value = "";
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  inputPhone.forEach((item) => {
    item.addEventListener("input", mask, false);
    item.addEventListener("focus", mask, false);
    item.addEventListener("blur", mask, false);
  });

  //input Text Rus
  let inputName = document.getElementsByName("name"),
    inputMessage = document.getElementsByName("message");
  function onlyRus(input) {
    input.addEventListener('keyup', () => {
      input.value = input.value.replace(/[^А-ЯЁ ]/ig, '');
    });
  }
  inputName.forEach((item) => {
    onlyRus(item);
  });
  inputMessage.forEach((item) => {
    onlyRus(item);
  });

  //Form other
 let formDesign = document.querySelector('#formDesign'),
     formConsultation = document.querySelector('#formConsultation');
  function formModal(form) {
    let message = {
      loading: 'идет отправка',
      success: `<img src="img/send.png" alt="отправлено"><div class="status">отправлено</div>`,
      failure: `<img src="img/error.png" alt="ошибка"><div class="status">ошибка</div>`
  };
  statusMessage = document.createElement("div");
  statusMessage.classList.add("status");

  function sendForm(elem) {
    elem.addEventListener("submit", function (e) {
      e.preventDefault();
      elem.appendChild(statusMessage);
      statusMessage.innerHTML = message.loading;
      let formData = new FormData(elem);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          let request = new XMLHttpRequest();

          request.open("POST", "smart.php");

          request.setRequestHeader(
            "Content-Type",
            "application/json; charset=utf-8"
          );

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4) {
              if (request.status == 200 && request.status < 3) {
                resolve();
              } else {
                reject();
              }
            }
          };
          request.send(data);
        });
      }

      postData(formData)
        .then(() => (statusMessage.innerHTML = message.loading))
        .then(() => (form.innerHTML = message.success))
        .catch(() => (form.innerHTML = message.failure))
    });
  }
  sendForm(form);
  }
  formModal(formDesign);
  formModal(formConsultation);

}
module.exports = formAll;
