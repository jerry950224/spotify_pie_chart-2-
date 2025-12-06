d3.csv('https://raw.githubusercontent.com/jerry950224/spotify_churn_dataset/refs/heads/main/%E5%B9%B4%E9%BD%A1%E5%88%86%E5%B1%A4%20-%20spotify_churn_dataset.csv%20(3).csv').then(
    res => {
        
        let agegroup0to9 = 0;
        let agegroup10to19 = 0;
        let agegroup20to29 = 0;
        let agegroup30to39 = 0;
        let agegroup40to49 = 0;
        let agegroup50to59 = 0;
        let ageabove60 = 0;
        res.forEach(row => {
            if ((row.subscription_type === 'Premium' || row.subscription_type === 'Student' || row.subscription_type === 'Family')) {
                const age = parseInt(row.age);
                if (age >= 0 && age < 10) agegroup0to9++;
                else if (age >= 10 && age < 20) agegroup10to19++;
                else if (age >= 20 && age < 30) agegroup20to29++;
                else if (age >= 30 && age < 40) agegroup30to39++;
                else if (age >= 40 && age < 50) agegroup40to49++;
                else if (age >= 50 && age < 60) agegroup50to59++;
                else if (age >= 60) ageabove60++;
            }
        });

        let trace1 = {
            type: 'pie',
            labels: ['0~9', '10~19', '20~29', '30~39', '40~49', '50~59', '60+'],
            values: [agegroup0to9, agegroup10to19, agegroup20to29, agegroup30to39, agegroup40to49, agegroup50to59, ageabove60],
        textinfo: 'value+percent',
        textposition: 'inside',
            automargin: true,
            marker: { colors: ['orange', 'royalblue', 'green', 'red', 'purple', 'brown', 'pink'] }
        };

        Plotly.newPlot('myGraph', [trace1], {
            title: {text: 'Premium Member Age Distribution', font: {size: 20}},
            margin: {t: 50, b: 15},
            showlegend: true,
            height: 400,
            width: 400
        });
    }
);

d3.csv('https://raw.githubusercontent.com/jerry950224/spotify_churn_dataset/refs/heads/main/%E5%B9%B4%E9%BD%A1%E5%88%86%E5%B1%A4%20-%20spotify_churn_dataset.csv%20(3).csv').then(
    res => {
        
        let agegroup0to9 = 0;
        let agegroup10to19 = 0;
        let agegroup20to29 = 0;
        let agegroup30to39 = 0;
        let agegroup40to49 = 0;
        let agegroup50to59 = 0;
        let ageabove60 = 0;
        res.forEach(row => {
            if ((row.subscription_type === 'Student')) {
                const age = parseInt(row.age);
                if (age >= 0 && age < 10) agegroup0to9++;
                else if (age >= 10 && age < 20) agegroup10to19++;
                else if (age >= 20 && age < 30) agegroup20to29++;
                else if (age >= 30 && age < 40) agegroup30to39++;
                else if (age >= 40 && age < 50) agegroup40to49++;
                else if (age >= 50 && age < 60) agegroup50to59++;
                else if (age >= 60) ageabove60++;
            }
        });

        let trace3 = {
            type: 'pie',
            labels: ['0~9', '10~19', '20~29', '30~39', '40~49', '50~59', '60+'],
            values: [agegroup0to9, agegroup10to19, agegroup20to29, agegroup30to39, agegroup40to49, agegroup50to59, ageabove60],
        textinfo: 'value+percent',
        textposition: 'inside',
            automargin: true,
            marker: { colors: ['orange', 'royalblue', 'green', 'red', 'purple', 'brown', 'pink'] }
        };

        Plotly.newPlot('myGraph3', [trace3], {
            title: {text: 'Student', font: {size: 20}},
            margin: {t: 50, b: 15},
            showlegend: true,
            height: 400,
            width: 400
        });
    }
);

d3.csv('https://raw.githubusercontent.com/jerry950224/spotify_churn_dataset/refs/heads/main/%E5%B9%B4%E9%BD%A1%E5%88%86%E5%B1%A4%20-%20spotify_churn_dataset.csv%20(3).csv').then(
    res => {
        
        let agegroup0to9 = 0;
        let agegroup10to19 = 0;
        let agegroup20to29 = 0;
        let agegroup30to39 = 0;
        let agegroup40to49 = 0;
        let agegroup50to59 = 0;
        let ageabove60 = 0;
        res.forEach(row => {
            if ((row.subscription_type === 'Premium')) {
                const age = parseInt(row.age);
                if (age >= 0 && age < 10) agegroup0to9++;
                else if (age >= 10 && age < 20) agegroup10to19++;
                else if (age >= 20 && age < 30) agegroup20to29++;
                else if (age >= 30 && age < 40) agegroup30to39++;
                else if (age >= 40 && age < 50) agegroup40to49++;
                else if (age >= 50 && age < 60) agegroup50to59++;
                else if (age >= 60) ageabove60++;
            }
        });

        let trace2 = {
            type: 'pie',
            labels: ['0~9', '10~19', '20~29', '30~39', '40~49', '50~59', '60+'],
            values: [agegroup0to9, agegroup10to19, agegroup20to29, agegroup30to39, agegroup40to49, agegroup50to59, ageabove60],
        textinfo: 'value+percent',
        textposition: 'inside',
            automargin: true,
            marker: { colors: ['orange', 'royalblue', 'green', 'red', 'purple', 'brown', 'pink'] }
        };

        Plotly.newPlot('myGraph2', [trace2], {
            title: {text: 'Premium', font: {size: 20}},
            margin: {t: 50, b: 15},
            showlegend: true,
            height: 400,
            width: 400
        });
    }
);

d3.csv('https://raw.githubusercontent.com/jerry950224/spotify_churn_dataset/refs/heads/main/%E5%B9%B4%E9%BD%A1%E5%88%86%E5%B1%A4%20-%20spotify_churn_dataset.csv%20(3).csv').then(
    res => {
        
        let agegroup0to9 = 0;
        let agegroup10to19 = 0;
        let agegroup20to29 = 0;
        let agegroup30to39 = 0;
        let agegroup40to49 = 0;
        let agegroup50to59 = 0;
        let ageabove60 = 0;
        res.forEach(row => {
            if ((row.subscription_type === 'Family')) {
                const age = parseInt(row.age);
                if (age >= 0 && age < 10) agegroup0to9++;
                else if (age >= 10 && age < 20) agegroup10to19++;
                else if (age >= 20 && age < 30) agegroup20to29++;
                else if (age >= 30 && age < 40) agegroup30to39++;
                else if (age >= 40 && age < 50) agegroup40to49++;
                else if (age >= 50 && age < 60) agegroup50to59++;
                else if (age >= 60) ageabove60++;
            }
        });

        let trace4 = {
            type: 'pie',
            labels: ['0~9', '10~19', '20~29', '30~39', '40~49', '50~59', '60+'],
            values: [agegroup0to9, agegroup10to19, agegroup20to29, agegroup30to39, agegroup40to49, agegroup50to59, ageabove60],
        textinfo: 'value+percent',
        textposition: 'inside',
            automargin: true,
            marker: { colors: ['orange', 'royalblue', 'green', 'red', 'purple', 'brown', 'pink'] }
        };

        Plotly.newPlot('myGraph4', [trace4], {
            title: {text: 'Family', font: {size: 20}},
            margin: {t: 50, b: 15},
            showlegend: true,
            height: 400,
            width: 400
        });
    }
);