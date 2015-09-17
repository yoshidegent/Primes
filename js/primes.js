$(document).ready(function(){

    var showGridWithColloredPrimes = function(maxNumber) {

        var table = $("#table");

        table.empty();

        var numberOfColumns = Math.sqrt(maxNumber);

        for(var i=1; i<=maxNumber;)
        {
            var row = $("<tr></tr>");
            table.append(row);

            for(var j=0; j<numberOfColumns && i<=maxNumber; j++)
            {
                var cell = $("<td></td>");
                cell.append(i + "");
                row.append(cell);

                if(isPrime(i))
                {
                    cell.css("background", "red");
                }

                i++;
            }
        }
    };

    var isPrime = function(number)
    {
        if(number <= 1)
            return false;

        var top = Math.sqrt(number) + 1;

        for (var i = 2; i < top; i++)
        {
            if (number % i == 0) {
                return false;
            }
        }

        return true;
    };

    var maxNumberInput = $('#maxNumberInput');

    maxNumberInput.on('input', function(){
        var maxNumber = maxNumberInput.val();

        maxNumber = parseInt(maxNumber)

        console.log(typeof maxNumber);

        if(typeof maxNumber == "number")
            showGridWithColloredPrimes(maxNumber);
    });
});
