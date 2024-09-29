import { useEffect, useState } from "react"


export default function useColor(value) {

    const [color, setColor] = useState('#FF5733')

    const colorList = {
        "А": "#FF5733",
        "Б": "#33FF57",
        "В": "#5733FF",
        "Г": "#FF33A8",
        "Д": "#33A8FF",
        "Е": "#A8FF33",
        "Ё": "#FF3333",
        "Ж": "#33FFA8",
        "З": "#A833FF",
        "И": "#33FF33",
        "Й": "#FF33FF",
        "К": "#33A8A8",
        "Л": "#FFA833",
        "М": "#A8FF57",
        "Н": "#A8A833",
        "О": "#33A8FF",
        "П": "#FF5733",
        "Р": "#57FF33",
        "С": "#FF33A8",
        "Т": "#33A8FF",
        "У": "#FF33A8",
        "Ф": "#33FFA8",
        "Х": "#A8FF33",
        "Ц": "#FF33FF",
        "Ч": "#33FFA8",
        "Ш": "#FFA833",
        "Щ": "#5733FF",
        "Ъ": "#33FF33",
        "Ы": "#FF33A8",
        "Ь": "#A8FF57",
        "Э": "#33A8FF",
        "Ю": "#FFA833",
        "Я": "#FF33FF"
      }

      useEffect(() => {

        if(value) {
            setColor(colorList[value])
        }

      }, [value])

      return [color]

}