# Banco-de-Dados-N-o-Relacional
Material das Aulas de BD Não Relacional  
Table = collection  
Line = document  
Field (Campo) = fiel  
DataBase = database  
**Operadores no MongoDb**  
*Relacionais*  
|-------------------------|  
Igual(=) --> $eq  
<> --> $ne  
Maior que(>) --> $gt  
Maior igual que(=>) --> $gte  
Menor que(<) --> $lt  
Menor igual que(=<) --> $lte  
IN --> $in  
!=(diferente de) --> $nor
  
*Lógicos*  
|-------------------------|  
AND --> $and  
OR --> $or  
NOT --> $not
  
*Regex*  
|-------------------------|  
// --> em qualquer parte  
/^ / --> que inicie  
/ $/ --> que termine  
  
*Ativação*  
|-------------------------|  
$set  
$inc  
$unset  
$push  
$pull  
    
*sort()*    
|-------------------------|  
ASC (ascendente) --> de A até Z 
DESC (descadente) --> de Z até A    

**limit()** é utilizado para limitar o nº de documentos que seram carregados da coleção.  
**skip()** é utilizado para pular um certo nº de documentos na coleção.
