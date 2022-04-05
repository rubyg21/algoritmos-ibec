const R = [1, 2, 3]
        const C = [0.8, 1, 1]
        const K = 100
        const t = 10

        const _popt = function (ram, cpu, t){
            if(ram.length === cpu.length){
                let popt = 0
                for (let i = 0; i < ram.length; i++){
                    popt += ram[i] * cpu[i] * t
                }
                return popt
            } else {
                return 0
            }
        }

        let count = 0
        // j va a ser el tiempo de 1 en 1
        for (let j = 1; j <= t; j++){
            count += _popt(R, C, j)
            if( count > K){
                console.log("Error se paro el servidor ::")
                break;
            } else {
                console.log("Servidor running ::")
            }
        }