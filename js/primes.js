$(document).ready(function(){

    const MAX_NUMBER = 1000;

    var showGridWithColloredPrimes = function(maxNumber) {

        var table = $("#table");

        var numberOfColumns = Math.sqrt(maxNumber);

        for(var i=0; i<=maxNumber;)
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

    showGridWithColloredPrimes(MAX_NUMBER);
});
