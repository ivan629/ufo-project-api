import os
import json
import glom
import datetime

epoch = datetime.datetime.utcfromtimestamp(0)

countries_fullname_map = {
    'us': 'USA',
    'gb': 'Great Britain',
    'ca': 'Canada',
    'au': 'Australia',
    'de': 'Germany'
}


def handle_get_item_country(country):
    other = 'Other'

    return countries_fullname_map[country] if country != "" else other


def unix_time_millis(dt):
    return (dt - epoch).total_seconds() * 1000.0


def get_date_millisecods(*args):
    year, month, day = map(int, list(args))

    dt = datetime.datetime(year, month, day)
    return unix_time_millis(dt)


def pie_chart_month_helper(item_value):
    month_day_year, item_time = map(str, item_value['Date_time'].split(' '))
    month, day, year = map(str, month_day_year.split('/'))
    return month


def get_file_real_path(file_name):
    return os.path.join(os.path.dirname(__file__), '..', 'datasets', file_name)


def read_file(file_name):
    real_path = get_file_real_path(file_name)

    with open(real_path) as file:
        return json.load(file)


def create_file(file_name, data):
    real_path = get_file_real_path(file_name)

    with open(real_path, 'w') as outfile:
        json.dump(data, outfile, indent=4, default=str)


def get_full_range_from_extremes(range_extremes):
    full_range = []

    for range_item in range(range_extremes['start'], range_extremes['stop']):
        full_range.append(range_item)

    return full_range


def dict_update(dictionary, path, unic_key, value, value_format_callback=None):
    path_length = len(path) - 1

    for index, path_level_item in enumerate(path):
        is_last_iteration = path_length == index
        str_unic_key = unic_key
        step_path = ".".join(path[:index + 1])
        current_step_depth_level_value = {}

        try:
            current_step_depth_level_value = glom.glom(dictionary, step_path)

            if is_last_iteration:
                if value_format_callback is not None:
                    current_step_depth_level_value[str_unic_key] = value_format_callback(
                        current_step_depth_level_value[str_unic_key])
                step_path_level_value = current_step_depth_level_value
                dictionary = glom.assign(dictionary, step_path, step_path_level_value)
        except:
            step_path_level_value = {}

            if is_last_iteration:
                current_step_depth_level_value[str_unic_key] = value
                step_path_level_value = current_step_depth_level_value

            dictionary = glom.assign(dictionary, step_path, step_path_level_value)
