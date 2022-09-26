
    /* все твои блоки*/
    let    
        block1 = "#rec494569085";
        block2 = "#rec494569853";
        block3 = "#rec494575543";
        block4 = "#rec494576321";
        block5 = "#rec494576688";
        block6 = "#rec494577390";
        block7 = "#rec494578347";
        block8 = "#rec494578571";
        block9 = "#rec494578859";
        block10 = "#rec494579071";

    /*Сама наша фукнция, если больше блоков, прописываешь их сюда тоже*/
    function not_hideBlock(blocks) {

        //Скрываем все блоки (1-10)
        $(block1).css("display", "none");
        $(block2).css("display", "none");
        $(block3).css("display", "none");
        $(block4).css("display", "none");
        $(block5).css("display", "none");
        $(block6).css("display", "none");
        $(block7).css("display", "none");
        $(block8).css("display", "none");
        $(block9).css("display", "none");
        $(block10).css("display", "none");

        /* открывает тот блок, который ты прописал*/
        $(blocks).css("display", "block");
    }
    
    /*Так как изначально 1 блок открыт, Вызовем фукнцию*/
    not_hideBlock(block1)

    /* Тут сами кнопки */
    /* Вместо  #collection" пишем класс или как в данном случае id блока(кнопки)*/
    
    $('[href = "#collection"]').click(function () {
        not_hideBlock(block1);
    });
    $('[href = "#collection1"]').click(function () {
        not_hideBlock(block2);
    });
    $('[href = "#collection2"]').click(function () {
        not_hideBlock(block3);
    });
    $('[href = "#collection3"]').click(function () {
        not_hideBlock(block4);
    });
    $('[href = "#collection4"]').click(function () {
        not_hideBlock(block5);
    });
    $('[href = "#collection5"]').click(function () {
        not_hideBlock(block6);
    });
    $('[href = "#collection6"]').click(function () {
        not_hideBlock(block7);
    });
    $('[href = "#collection7"]').click(function () {
        not_hideBlock(block8);
    });
    $('[href = "#collection8"]').click(function () {
        not_hideBlock(block9);
    });
    $('[href = "#collection9"]').click(function () {
        not_hideBlock(block10);
    });

