let a = document.getElementById('password');
let b = document.getElementById('re_password');
let c = document.getElementById('phone_number');

function password_check()
{
    if(a.value!==b.value)
    {
        document.getElementById('wrong_password').innerText = '两次输入的密码不一致';
    }
    else
    {
        document.getElementById('wrong_password').innerText = ' ';
    }
}

function phone_number_check()
{
    if(c.value.length!==11)
    {
        document.getElementById('wrong_phone_number').innerText = '这不是一个正确的手机号码';
        return 0;
    }
    for(let i = 0;i<11;i++)
    {
        if(isNaN(c.value[i]))
        {
            document.getElementById('wrong_phone_number').innerText = '这不是一个正确的手机号码';
            return 0;
        }
    }
    document.getElementById('wrong_phone_number').innerText = '';
}