import csv
import copy

from common.helpers import create_file, get_file_real_path

items = {}
regions_schema = {}
sub_regions_schema = {}
years_range = {'start': None, 'stop': None}
region_types = {
    '0': [],
    '1': [],
    '2': [],
    '3': []
}
temporary_region_types_helpers = {
    'NOT_GROUPED': '0',
    '1': 'city',
    '2': 'state/province',
    '3': 'country'
}
temporary_region_helper_id_set = {}
sub_schema_region_id = 0
small_details_columns = {
    'Date_time': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    'UFO_shape': 4,
    'length_of_encounter_seconds': 5,
    'described_duration_of_encounter': 6,
    'description': 7,
    'latitude': 9,
    'longitude': 10
}


def set_year_range(year):
    if years_range['start'] is not None:
        if year < years_range['start']:
            years_range['start'] = year

        elif year > years_range['stop']:
            years_range['stop'] = year

    else:
        years_range['start'] = year
        years_range['stop'] = year


def set_schema_item(item, date_variants_dict):
    for date_key, date_value in date_variants_dict.items():  # 7 variants
        global sub_schema_region_id
        if date_value not in regions_schema:
            regions_schema[date_value] = copy.deepcopy(region_types)  # sets unic date key

        for region_type in region_types:
            sub_schema_region_id += 1
            region_id = temporary_region_types_helpers['NOT_GROUPED'] + str(sub_schema_region_id) if \
                region_type == temporary_region_types_helpers['NOT_GROUPED'] else item[region_type]

            region_id_unic_key = region_type + '_' + region_id + '_' + date_value

            if region_id_unic_key in temporary_region_helper_id_set:
                current_region_id = temporary_region_helper_id_set[region_id_unic_key]

                if item['item_id'] not in sub_regions_schema[current_region_id]:
                    sub_regions_schema[current_region_id].append(item['item_id'])
            else:
                region_ids = regions_schema[date_value][region_type]
                regions_schema[date_value][region_type] = [sub_schema_region_id, *region_ids]
                temporary_region_helper_id_set[region_id_unic_key] = sub_schema_region_id
                sub_regions_schema[sub_schema_region_id] = [item['item_id']]


def create_short_dataset():
    count = 0
    csvfile = open(get_file_real_path('ufo_sighting_data.csv'), 'r')
    data = csv.reader(csvfile)
    header = next(data)

    for row in data:
        count += 1
        print(count)

        item = {'item_id': count}

        for key, value in small_details_columns.items():
            item[key] = row[value]

        month_day_year, item_time = map(str, item['Date_time'].split(' '))
        month, day, year = map(int, month_day_year.split('/'))

        date_variants = {
            'day_month': str(day) + '/' + str(month),
            'day_year': str(day) + '/' + str(year),
            'day_month_year': str(day) + '/' + str(month) + '/' + str(year),
            'month_year': str(month) + '/' + str(year),
            'only_day': str(day),
            'only_month': str(month),
            'only_year': str(year)
        }

        set_schema_item(item, date_variants)
        set_year_range(year)

        items[item['item_id']] = item

    create_file('items.json', items)
    create_file('years_range.json', years_range)
    create_file('regions_schema.json', regions_schema)
    create_file('sub_regions_schema.json', sub_regions_schema)
