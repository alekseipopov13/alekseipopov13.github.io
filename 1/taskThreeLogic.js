function whereIs() {
  let N = "Север",
    S = "Юг",
    W = "Запад",
    E = "Восток";
  let position = document.getElementById("C3").value;
  let n13 = document.getElementById("n13").value;
  let n23 = document.getElementById("n23").value;
  switch (position) {

    case "N":
      switch (+n13 + +n23) {
        case 4:
          alert("Север");
          break;
        case 3:
          alert("Восток");
          break;
        case 1:
          alert("Запад");
          break;
        case -1:
          alert("Восток");
          break;
        case 2:
          alert("Юг");
          break;
        case -2:
          alert("Юг");
          break;
        case 0:
          alert("Север");
          break;
        default:
          alert("Проверьте данные, вы, наверное, заблудились");
      }
      break;

      case "S":
        switch (+n13 + +n23) {
          case 4:
            alert("Юг");
            break;
          case 3:
            alert("Запад");
            break;
          case 1:
            alert("Восток");
            break;
          case -1:
            alert("Запад");
            break;
          case 2:
            alert("Север");
            break;
          case -2:
            alert("Север");
            break;
          case 0:
            alert("Юг");
            break;
          default:
            alert("Проверьте данные, вы, наверное, заблудились");
        }
        break;

        case "W":
          switch (+n13 + +n23) {
            case 4:
              alert("Запад");
              break;
            case 3:
              alert("Север");
              break;
            case 1:
              alert("Юг");
              break;
            case -1:
              alert("Север");
              break;
            case 2:
              alert("Восток");
              break;
            case -2:
              alert("Восток");
              break;
            case 0:
              alert("Запад");
              break;
            default:
              alert("Проверьте данные, вы, наверное, заблудились");
          }
          break;

          case "E":
            switch (+n13 + +n23) {
              case 4:
                alert("Восток");
                break;
              case 3:
                alert("Юг");
                break;
              case 1:
                alert("Север");
                break;
              case -1:
                alert("Юг");
                break;
              case 2:
                alert("Запад");
                break;
              case -2:
                alert("Запад");
                break;
              case 0:
                alert("Восток");
                break;
              default:
                alert("Проверьте данные, вы, наверное, заблудились");
            }
            break;

  }
}
