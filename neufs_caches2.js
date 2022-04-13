                   
            function CreaTableau(source){
            //mot à traduire  
            console.log("coucou")
            var mot=document.getElementById("source").value 
            console.log(mot)
            //var mot='chaise'
            //passage des lettres en majuscule et séparation de chaque lettre
            var lettres=mot.toUpperCase().split("")
            console.log(lettres)


            //définition du tableau de valeurs aléatoires
            var tableau=[]
            for (i=0; i<7; i++){
                tableau[i]=[]
                for (j=0; j<=lettres.length*6; j++){
                    tableau[i][j]=parseInt(Math.random()*9,10)
                }
            }
            var c=0
                //Ecriture du mot en neuf dans le tableau
                for (var k=0; k<lettres.length; k++){
                    if(lettres[k]=='A') {
                        tableau[1][c+2]=9							
                        tableau[1][c+3]=9							
                        tableau[1][c+4]=9							
                        tableau[2][c+2]=9							
                        tableau[2][c+4]=9							
                        tableau[3][c+2]=9							
                        tableau[3][c+3]=9							
                        tableau[3][c+4]=9							
                        tableau[4][c+2]=9							
                        tableau[4][c+4]=9							
                        tableau[5][c+2]=9							
                        tableau[5][c+4]=9							
                    }else if (lettres[k]=='B'){							
                        tableau[1][c+2]=9							
                        tableau[1][c+3]=9							
                        tableau[1][c+4]=9							
                        tableau[2][c+2]=9							
                        tableau[2][c+4]=9							
                        tableau[3][c+2]=9							
                        tableau[3][c+3]=9							
                        tableau[4][c+2]=9							
                        tableau[4][c+4]=9							
                        tableau[5][c+2]=9							
                        tableau[5][c+3]=9							
                        tableau[5][c+4]=9							
                    }else if (lettres[k]=='C'){							
                        tableau[1][c+2]=9							
                        tableau[1][c+3]=9							
                        tableau[1][c+4]=9							
                        tableau[2][c+2]=9							
                        tableau[3][c+2]=9							
                        tableau[4][c+2]=9							
                        tableau[5][c+2]=9							
                        tableau[5][c+3]=9							
                        tableau[5][c+4]=9							
                    }else if (lettres[k]=='D'){							
                        tableau[1][c+2]=9							
                        tableau[1][c+3]=9							
                        tableau[2][c+2]=9							
                        tableau[2][c+4]=9							
                        tableau[3][c+2]=9							
                        tableau[3][c+4]=9							
                        tableau[4][c+2]=9							
                        tableau[4][c+4]=9							
                        tableau[5][c+2]=9							
                        tableau[5][c+3]=9							
                    }else if (lettres[k]=='E'){							
                        tableau[1][c+2]=9							
                        tableau[1][c+3]=9							
                        tableau[1][c+4]=9							
                        tableau[2][c+2]=9							
                        tableau[3][c+2]=9							
                        tableau[3][c+3]=9							
                        tableau[4][c+2]=9							
                        tableau[5][c+2]=9							
                        tableau[5][c+3]=9							
                        tableau[5][c+4]=9							
                    }else if (lettres[k]=='F'){							
                        tableau[1][c+2]=9							
                        tableau[1][c+3]=9							
                        tableau[1][c+4]=9							
                        tableau[2][c+2]=9							
                        tableau[3][c+2]=9							
                        tableau[3][c+3]=9							
                        tableau[4][c+2]=9							
                        tableau[5][c+2]=9							
                    }else if (lettres[k]=='G'){							
                        tableau[1][c+2]=9							
                        tableau[1][c+3]=9							
                        tableau[1][c+4]=9							
                        tableau[2][c+2]=9							
                        tableau[3][c+2]=9							
                        tableau[4][c+2]=9							
                        tableau[4][c+4]=9							
                        tableau[5][c+2]=9							
                        tableau[5][c+3]=9							
                        tableau[5][c+4]=9							
                    }else if (lettres[k]=='H'){							
                        tableau[1][c+2]=9							
                        tableau[1][c+4]=9							
                        tableau[2][c+2]=9							
                        tableau[2][c+4]=9							
                        tableau[3][c+2]=9							
                        tableau[3][c+3]=9							
                        tableau[3][c+4]=9							
                        tableau[4][c+2]=9							
                        tableau[4][c+4]=9							
                        tableau[5][c+2]=9							
                        tableau[5][c+4]=9							
                    }else if (lettres[k]=='I'){							
                        tableau[1][c+3]=9							
                        tableau[2][c+3]=9							
                        tableau[3][c+3]=9							
                        tableau[4][c+3]=9							
                        tableau[5][c+3]=9							
                    }else if (lettres[k]=='J'){							
                        tableau[1][c+2]=9							
                        tableau[1][c+3]=9							
                        tableau[1][c+4]=9							
                        tableau[2][c+3]=9							
                        tableau[3][c+3]=9							
                        tableau[4][c+3]=9							
                        tableau[5][c+2]=9							
                        tableau[5][c+3]=9							
                    }else if (lettres[k]=='K'){							
                        tableau[1][c+2]=9							
                        tableau[1][c+4]=9							
                        tableau[2][c+2]=9							
                        tableau[2][c+4]=9							
                        tableau[3][c+2]=9							
                        tableau[3][c+3]=9							
                        tableau[4][c+2]=9							
                        tableau[4][c+4]=9							
                        tableau[5][c+2]=9							
                        tableau[5][c+4]=9							
                    }else if (lettres[k]=='L'){							
                        tableau[1][c+2]=9							
                        tableau[2][c+2]=9							
                        tableau[3][c+2]=9							
                        tableau[4][c+2]=9							
                        tableau[5][c+2]=9							
                        tableau[5][c+3]=9							
                        tableau[5][c+4]=9							
                    }else if (lettres[k]=='M'){							
                        tableau[1][c+1]=9							
                        tableau[1][c+5]=9							
                        tableau[2][c+1]=9							
                        tableau[2][c+2]=9							
                        tableau[2][c+4]=9							
                        tableau[2][c+5]=9							
                        tableau[3][c+1]=9							
                        tableau[3][c+3]=9							
                        tableau[3][c+5]=9							
                        tableau[4][c+1]=9							
                        tableau[4][c+5]=9							
                        tableau[5][c+1]=9							
                        tableau[5][c+5]=9							
                    }else if (lettres[k]=='N'){							
                        tableau[1][c+1]=9							
                        tableau[1][c+5]=9							
                        tableau[2][c+1]=9							
                        tableau[2][c+2]=9							
                        tableau[2][c+5]=9							
                        tableau[3][c+1]=9							
                        tableau[3][c+3]=9							
                        tableau[3][c+5]=9							
                        tableau[4][c+1]=9							
                        tableau[4][c+4]=9							
                        tableau[4][c+5]=9							
                        tableau[5][c+1]=9							
                        tableau[5][c+5]=9							
                    }else if (lettres[k]=='O'){							
                        tableau[1][c+2]=9							
                        tableau[1][c+3]=9							
                        tableau[1][c+4]=9							
                        tableau[2][c+2]=9							
                        tableau[2][c+4]=9							
                        tableau[3][c+2]=9							
                        tableau[3][c+4]=9							
                        tableau[4][c+2]=9							
                        tableau[4][c+4]=9							
                        tableau[5][c+2]=9							
                        tableau[5][c+3]=9							
                        tableau[5][c+4]=9							
                    }else if (lettres[k]=='P'){							
                        tableau[1][c+2]=9							
                        tableau[1][c+3]=9							
                        tableau[1][c+4]=9							
                        tableau[2][c+2]=9							
                        tableau[2][c+4]=9							
                        tableau[3][c+2]=9							
                        tableau[3][c+3]=9							
                        tableau[3][c+4]=9							
                        tableau[4][c+2]=9							
                        tableau[5][c+2]=9							
                    }else if (lettres[k]=='Q'){							
                        tableau[1][c+2]=9							
                        tableau[1][c+3]=9							
                        tableau[1][c+4]=9							
                        tableau[2][c+2]=9							
                        tableau[2][c+4]=9							
                        tableau[3][c+2]=9							
                        tableau[3][c+4]=9							
                        tableau[4][c+2]=9							
                        tableau[4][c+4]=9							
                        tableau[5][c+2]=9							
                        tableau[5][c+3]=9							
                        tableau[5][c+4]=9							
                        tableau[5][c+5]=9							
                    }else if (lettres[k]=='R'){							
                        tableau[1][c+2]=9							
                        tableau[1][c+3]=9							
                        tableau[1][c+4]=9							
                        tableau[2][c+2]=9							
                        tableau[2][c+4]=9							
                        tableau[3][c+2]=9							
                        tableau[3][c+3]=9							
                        tableau[3][c+4]=9							
                        tableau[4][c+2]=9							
                        tableau[4][c+3]=9							
                        tableau[5][c+2]=9							
                        tableau[5][c+4]=9							
                    }else if (lettres[k]=='S'){							
                        tableau[1][c+2]=9							
                        tableau[1][c+3]=9							
                        tableau[1][c+4]=9							
                        tableau[2][c+2]=9							
                        tableau[3][c+2]=9							
                        tableau[3][c+3]=9							
                        tableau[3][c+4]=9							
                        tableau[4][c+4]=9							
                        tableau[5][c+2]=9							
                        tableau[5][c+3]=9							
                        tableau[5][c+4]=9							
                    }else if (lettres[k]=='T'){							
                        tableau[1][c+2]=9							
                        tableau[1][c+3]=9							
                        tableau[1][c+4]=9							
                        tableau[2][c+3]=9							
                        tableau[3][c+3]=9							
                        tableau[4][c+3]=9							
                        tableau[5][c+3]=9							
                    }else if (lettres[k]=='U'){							
                        tableau[1][c+2]=9							
                        tableau[1][c+4]=9							
                        tableau[2][c+2]=9							
                        tableau[2][c+4]=9							
                        tableau[3][c+2]=9							
                        tableau[3][c+4]=9							
                        tableau[4][c+2]=9							
                        tableau[4][c+4]=9							
                        tableau[5][c+2]=9							
                        tableau[5][c+3]=9							
                        tableau[5][c+4]=9							
                    }else if (lettres[k]=='V'){							
                        tableau[1][c+2]=9							
                        tableau[1][c+4]=9							
                        tableau[2][c+2]=9							
                        tableau[2][c+4]=9							
                        tableau[3][c+2]=9							
                        tableau[3][c+4]=9							
                        tableau[4][c+2]=9							
                        tableau[4][c+4]=9							
                        tableau[5][c+3]=9							
                    }else if (lettres[k]=='W'){							
                        tableau[1][c+1]=9							
                        tableau[1][c+3]=9							
                        tableau[1][c+5]=9							
                        tableau[2][c+1]=9							
                        tableau[2][c+3]=9							
                        tableau[2][c+5]=9							
                        tableau[3][c+1]=9							
                        tableau[3][c+3]=9							
                        tableau[3][c+5]=9							
                        tableau[4][c+1]=9							
                        tableau[4][c+3]=9							
                        tableau[4][c+2]=9							
                        tableau[5][c+2]=9							
                        tableau[5][c+4]=9							
                    }else if (lettres[k]=='X'){							
                        tableau[1][c+2]=9							
                        tableau[1][c+4]=9							
                        tableau[2][c+2]=9							
                        tableau[2][c+4]=9							
                        tableau[3][c+3]=9							
                        tableau[4][c+2]=9							
                        tableau[4][c+4]=9							
                        tableau[5][c+2]=9							
                        tableau[5][c+4]=9							
                    }else if (lettres[k]=='Y'){							
                        tableau[1][c+2]=9							
                        tableau[1][c+4]=9							
                        tableau[2][c+2]=9							
                        tableau[2][c+4]=9							
                        tableau[3][c+2]=9							
                        tableau[3][c+3]=9							
                        tableau[3][c+4]=9							
                        tableau[4][c+3]=9							
                        tableau[5][c+3]=9							
                    }else if (lettres[k]=='Z'){							
                        tableau[1][c+2]=9							
                        tableau[1][c+3]=9							
                        tableau[1][c+4]=9							
                        tableau[2][c+4]=9							
                        tableau[3][c+3]=9							
                        tableau[4][c+2]=9							
                        tableau[5][c+2]=9							
                        tableau[5][c+3]=9							
                        tableau[5][c+4]=9							
                        }							

                    c=c+6
                }

                //affichage du tableau
                var tbody = document.querySelector( '#table-neufs-caches' ).querySelector( 'tbody');
                for (i=0; i<7; i++){
                    const ligne = tbody.insertRow();
                    for (j=0; j<=lettres.length*6; j++){
                        let cellActivite = ligne.insertCell()
                        cellActivite.innerHTML = tableau[i][j]
                    }
                }
            }

