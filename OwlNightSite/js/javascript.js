function valid (form) {
            var fail = false;
            var textUser = form.textUser.value;
            var email = form.email.value;
            var job = form.job.value;
            
            var adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,3}/i;
            
            else if (adr_pattern.test(email) == false) fail = "Некорректный E-mail!";
            else if (job == "") fail = "Укажите должность!";
            if (textUser == "" || textUser == " ") fail = "Вы не ввели свое имя!";
            
            if(fail) alert(fail);
            else window.location = "jobs.html";
        }