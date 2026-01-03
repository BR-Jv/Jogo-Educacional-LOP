function ensinando(){
  //esc
  background(img);
  textSize(15);
  fill('#35A101');
  rect(10, 10, 50, 30);
  fill('white');
  text('Voltar', 17, 30);
  
  //Quadro
  fill('#35A101') 
  rect(10, 60, 380, 270);
  
  fill('white'); 
  textSize(14);
  
  if(telaEnsino === 0){
    //monossílabos tônicos terminados em (a,e,o)
    
      text("Monossílabos são palavras que têm apenas uma sílaba. \nOs monossílabos tônicos possuem autonomia fonética \ne semântica, ou seja, são proferidos com força e \nmantêm o seu significado próprio, independentemente \nde virem inseridos numa frase ou isolados.", 20, 90);
      text("Exemplos de monossílabos tônicos acentuados", 20, 220)
      text("pá , má, lá ,cá , chás, já, há, fãs, lã, sã", 20, 250)
      text("pé, ré, vê, lê, sê, dê, crê, mês, três, fé", 20, 270)
      text("pó, só, nó, dó, cós, pôs, pós, nós, vós", 20, 290);
      
  }else if(telaEnsino === 1){
    //Oxítonas terminados em (a(s), e(s), o(s))
      text("palavras oxítonas são palavras que tem a última \nsílaba tônica", 20, 80);
      text("exemplo: ( a-ba-jur )", 20 , 120);
      text("cipós (ci-pós);\ncomplô (com-plô);\ncrachás (cra-chás);\ncrochê (cro-chê);\ndominó (do-mi-nó);\nfilé (fi-lé);\njacarés (já-ca-rés);\nmetrô (me-trô);\npurê (pu-rê);\nsofá (so-fá).", 20, 150);

  }
}
