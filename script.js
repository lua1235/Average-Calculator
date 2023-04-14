document.getElementById("submit").addEventListener("click", calc);
function calc() {
    const nums = [
                document.getElementById("num1").value, 
                document.getElementById("num2").value,
                document.getElementById("num3").value,
            ]
    const average = (parseInt(nums[0])+parseInt(nums[1])+parseInt(nums[2]))/3;
    document.getElementById("output").innerHTML = average;
    document.getElementById("outArea").style.visibility = "visible";
}