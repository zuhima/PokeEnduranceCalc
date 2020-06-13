/*
MIT License

Copyright (c) 2020 zuhima(TW:@null_cats)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

#define FILENAME_IN "pokeData.csv"   //入力ファイル名
#define FILENAME_OUT "pokeData.js"   //出力ファイル名
#define BUF_LEN 128      //csvファイルの1行の最大文字数
#define DATA_ELEMENT 11  //1ポケあたりのデータ属性数
#define FORMAT 500  //1ポケあたりのデータの文字数
#define ELEMENT_LEN 20 //1属性の最大文字数

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>

#include "createPokeData.h"

void createFormat(char csv[BUF_LEN], char *p);


int main()
{
  char buf[BUF_LEN];     //1行分読み込むバッファ
  FILE *ifp;
  FILE *ofp;
  char format[FORMAT];
  int i;
  bool is_first_read = true; //csvの1番目のデータか？

  for(i = 0; i < FORMAT; i++)
    format[i] = '\0';

  /*読み込みファイルオープン*/
  ifp = fopen(FILENAME_IN, "r");
  if(ifp == NULL)
  {
    printf("Can't open an input_file...: %s\n", FILENAME_IN);
    exit(1);
  }

  /*書き込みファイルオープン*/
  ofp = fopen(FILENAME_OUT, "w");
  if(ofp == NULL)
  {
    printf("Can't open an output_file...: %s\n", FILENAME_OUT);
    fclose(ifp);
    exit(1);
  }
  printf("file open !\n");

  fprintf(ofp, "var POKEDATA =\n[\n");
  fgets(buf, BUF_LEN - 1, ifp);   //csvの1行目は読み飛ばす
  while(fgets(buf, BUF_LEN - 1, ifp) != NULL)
  {
    //書き込むデータのフォーマットを作成
    createFormat(buf, format);
    // printf("%s\n", format);
    if(is_first_read)
    {
      is_first_read = false;
    } else {
      fprintf(ofp, ",\n");
    }
    fprintf(ofp, format);
  }
  fprintf(ofp, "\n];");

  fclose(ifp);
  fclose(ofp);
  printf("file close...\n");
  printf("finish!");

  return 0;
}

/*
  書き込むデータのフォーマットを作る関数
  char csv[BUF_LEN] : csvから読み込んだ1行分の文字列
  char *p           : main関数の変数formatの先頭アドレス
*/
void createFormat(char csv[BUF_LEN], char *p)
{
  char *p_data;
  char data[DATA_ELEMENT][ELEMENT_LEN];
  int i, j, k, l;
  char stack[ELEMENT_LEN];   //1属性分のデータ文字列
  struct pokeData poke;

  /****1行分をカンマ区切りで配列に格納*****/
  /*stackを空にして初期化*/
  for(l = 0; l < ELEMENT_LEN; l++)
  {
    stack[l] = '\0';
  }

  i = 0;   //1行分の文字列の何文字目かを示す変数
  j = 0;   //その属性のデータの何文字目かを表す変数
  k = 0;   //何属性目のデータかを表す変数
  while(csv[i] != '\0' && i < BUF_LEN)
  {
    //カンマであれば1属性分のデータを配列に入れる
    //各種変数の初期化or更新
    if(csv[i] == ',')
    {
      strcpy(data[k], stack);
      i++;
      j = 0;
      k++;
      for(l = 0; l < ELEMENT_LEN; l++)
      {
        stack[l] = '\0';
      }
      continue;
    }

    //カンマでなければstackに入れる
    stack[j] = csv[i];

    i++;
    j++;
  }
  /***********************************/

  /**** csvファイルの左から右の順で構造体に格納 ****/
  /** 以後，csvファイルにデータを追加するときは各行の後ろの付け足していくようにすること **/
  poke.no = atoi(data[0]); //文字列->intに変換必要
  strcpy(poke.name, data[1]);
  strcpy(poke.ability1, data[2]);
  strcpy(poke.ability2, data[3]);
  strcpy(poke.hidden_ability, data[4]);
  poke.H = atoi(data[5]);
  poke.A = atoi(data[6]);
  poke.B = atoi(data[7]);
  poke.C = atoi(data[8]);
  poke.D = atoi(data[9]);
  poke.S = atoi(data[10]);
  /****************************************/

  /****1ポケ分のデータフォーマットを決定している****/
  /*
    デフォルトのフォーマットは以下の通り(***にデータそのものが入る)
    {
      no: ***,
      name: "***",
      ability1: "***",
      ability2: "***",
      hidden_ability: "***",
      base {
        H: ***,
        A: ***,
        B: ***,
        C: ***,
        D: ***,
        S: ***,
        total: ***
      }
    }
  */
  sprintf(p,
    "\t{\n\t\tno: %d,\n\t\tname: \"%s\",\n\t\tability1: \"%s\",\n\t\tability2: \"%s\",\n\t\thidden_ability: \"%s\",\n\t\tbase: {\n\t\t\tH: %d,\n\t\t\tA: %d,\n\t\t\tB: %d,\n\t\t\tC: %d,\n\t\t\tD: %d,\n\t\t\tS: %d,\n\t\t\ttotal: %d\n\t\t}\n\t}", poke.no, poke.name, poke.ability1, poke.ability2, poke.hidden_ability, poke.H, poke.A, poke.B, poke.C, poke.D, poke.S, poke.H + poke.A + poke.B + poke.C + poke.D + poke.S);
    /***********************************************/

}
