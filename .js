function factorial(){
    
    var i, n, fact;
    fact=1;
    n= window.prompt("Enter the number");
    for(i=1; i<=n; i++)
    {
        fact= fact*i;
    }
    document.getElementById("ans").value= fact;
}
