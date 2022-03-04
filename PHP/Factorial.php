<html>
    <head>
        <title>FactorialprogramusingloopinPHP</title>
    </head>
    <body>
        <form method="post">
            Enter the number :<br>
            <input type="number" name="Hai" id="number">
            <input type="submit" name="submit" value="Submit"/>
        </form>
    <?php
    if($_POST){
        $fact=1;
        $number=$_POST['Hai'];
        echo"Factorial of $number : <br><br>";
        for($i=1;$i<=$number;$i++){
            $fact=$fact*$i;
        }
    }
    ?>
    </body>
</html>