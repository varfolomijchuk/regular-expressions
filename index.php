 $text = preg_replace('/([а-яё]+)\s+(\d+)\s+штук?а?/ui',"'$1;$2'", 'яблоки 5 штук бананы 10 штук помидоры 1 штука огурцы 0 штук');
 $sold_out = preg_replace("/'([^']+);0'|'[^']+;[1-9]\d*'\s*/","$1", $text);

 $html = '
    <html>
    <body>
    <div class="main">
    <div class="block delete">удалить этот блок <div>X</div></div><div class="block">оставить этот блок <div>V</div></div>

    <div class="block delete">удалить этот блок</div>
    <div class="block">оставить этот блок</div>

    <div class="block delete">удалить <div>этот</div> блок </div><div class="block">оставить <div>этот</div> блок</div>
    </div>
    </body>
    </html>';

    $without_delete = preg_replace('/<div\s+class="block delete">(?:[^<]*+|<(?!\/div>))*<\/div>/i', '', $html);
