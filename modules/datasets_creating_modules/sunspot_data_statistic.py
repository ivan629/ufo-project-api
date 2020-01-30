import csv

from common.helpers import create_file, get_file_real_path, dict_update
from common.constants import STOCK_CHART_DATA_GROUPED_TYPES

sunspot_dataset_details_columns = {
    'Year': 1,
    'Month': 2,
    'Day': 3,
    'Date In Fraction Of Year': 4,
    'Number of Sunspots': 5,
    'Observations': 7,
    'Indicator': 8
}


def create_sunspot_chart_data():
    count = 0
    sunspot_chart_data = {}

    path = get_file_real_path('sunspot_data.csv')
    csvfile = open(path, 'r')
    data = csv.reader(csvfile)
    header = next(data)

    for row in data:
        count += 1
        print(count)

        item = {'item_id': count}

        for key, value in sunspot_dataset_details_columns.items():
            item[key] = row[value]

        for chart_data_grouped_type_key, get_milliseconds_by_group_type in STOCK_CHART_DATA_GROUPED_TYPES.items():
            item_milliseconds_date = get_milliseconds_by_group_type(item['Year'], item['Month'], item['Day'])

            value_to_set = {
                            "milliseconds_date": item_milliseconds_date,
                            "value": int(item['Number of Sunspots'])
                        }

            dict_update(
                sunspot_chart_data,
                [item['Year'], chart_data_grouped_type_key, item_milliseconds_date],
                item_milliseconds_date,
                value_to_set,
                None
            )

    create_file('sunspot_chart_data.json', sunspot_chart_data)
