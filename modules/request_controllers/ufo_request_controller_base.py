import json
from flask import jsonify

import common.helpers as helpers


class BaseController:
    def read_file(self, file_name):
        return helpers.read_file(file_name)

    def parse(self, data_to_parse):
        return json.loads(data_to_parse)

    def jsonify(self, data_to_jsonify):
        return jsonify(data_to_jsonify)
