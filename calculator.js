let a = document.getElementById('main');



function refresh()
{
    document.getElementById('result').innerText  = cal(a.value);
    let para=document.createElement("p");
    let node=document.createTextNode(a.value + '='+ cal(a.value));
    para.appendChild(node);

    let element=document.getElementById("history");
    element.appendChild(para);
}

function cal(inputText)
{
    let calResult = 0.0;
    let arr1,arr2,arr3,arr4;

    for(let i = inputText.length-1;i>=0;i--)
    {
        if(inputText[i] === '+')
        {
            arr1 = inputText.split('+');
            for (let j = 0; j < arr1.length; j++)
            {
                while (isNoNum(arr1[j]))
                {
                    arr1[j] = cal(arr1[j]);
                }
                calResult += arr1[j] * 1;
            }
            console.log(inputText);
            console.log(calResult);
            return calResult;
        }

        if(inputText[i] === '-')
        {
            arr2 = inputText.split('-');
            while(isNoNum(arr2[0]))
            {
                arr2[0] = cal(arr2[0]);
            }
            calResult += arr2[0];
            for (let j = 1; j < arr2.length; j++)
            {
                while (isNoNum(arr2[j]))
                {
                    arr2[j] = cal(arr2[j]);
                }
                calResult -= arr2[j]*1;
            }
            console.log(inputText);
            console.log(calResult);
                return calResult;
        }
    }

    for(let i = inputText.length-1;i>=0;i--)
    {
        if(inputText[i] === '*')
        {
            arr3 = inputText.split('*');
            while (isNoNum(arr3[0]))
            {
                arr3[0] = cal(arr3[0]);
            }
            calResult = arr3[0];
            for (let j = 1; j < arr3.length; j++)
            {
                while (isNoNum(arr3[j]))
                {
                    arr3[j] = cal(arr3[j]);
                }
                calResult *= arr3[j]*1;
            }
            console.log(inputText);
            console.log(calResult);
            return calResult;
        }
    }

    for(let i = inputText.length-1;i>=0;i--)
    {
        if(inputText[i] === '/')
        {
            arr4 = inputText.split('/');
            while (isNoNum(arr4[0])) {
                arr4[0] = cal(arr4[0]);
            }
            calResult = arr4[0];
            for (let j = 1; j < arr4.length; j++) {
                while (isNoNum(arr4[j])) {
                    arr4[j] = cal(arr4[j]);
                }
                calResult /= arr4[j] * 1;
            }
            console.log(inputText);
            console.log(calResult);
            return calResult;
        }
    }

    return inputText;
}

function isNoNum(arr)
{
    // console.log(arr);
    for(let i = 0;i<arr.length;i++)
    {
        // console.log(arr[i]);
        if(isNaN(arr[i])&& arr[i] !== '.')
        {
            return true;
        }
    }
    return false;
}