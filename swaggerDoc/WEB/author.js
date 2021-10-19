/**
 * @swagger
 * /author:
 *  post:
 *    tags:
 *      - WEB Author Service
 *    summary: Add Author API
 *    description: API should add author requested by user
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               description: Any author name
 *           required:
 *             - name
 *           example:
 *             "name": "Chetan baghat"
 *    responses:
 *      '200':
 *        desctiption : Success Response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "Author inserted successfully"
 *      '400':
 *        desctiption : Failure Response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "Invalid parameters"
 * /author/search:
 *  get:
 *    tags:
 *      - WEB Author Service
 *    summary: Search author API
 *    description: API should search author using author name
 *    parameters:
 *      - in: query
 *        name: search
 *        schema:
 *          type: string
 *        description: The name of author that you wanted search for.
 *        example: Chetan baghat
 *    responses:
 *      '200':
 *        desctiption : Success Response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: integer
 *                message:
 *                  type: string
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: integer
 *                      name:
 *                        type: string
 *                      created_by:
 *                        type: string
 *                      created_at:
 *                        type: string
 *                      updated_at:
 *                        type: string
 *              example:
 *                status: 200
 *                message: "Authors found successfully"
 *                data: [{
 *                  id: 1,
 *                  name: Chetan baghat,
 *                  created_by: system,
 *                  created_at: 2021-10-01T10:22:05.407Z,
 *                  updated_at: 2021-10-01T10:22:05.407Z
 *                }]
 * /author/{id}:
 *  get:
 *    tags:
 *      - WEB Author Service
 *    summary: Find author API
 *    description: API should find author using author id
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The id of author that you wanted find from DB.
 *        example: 1
 *    responses:
 *      '200':
 *        desctiption : Success Response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: integer
 *                message:
 *                  type: string
 *                data:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: integer
 *                    name:
 *                      type: string
 *                    created_by:
 *                      type: string
 *                    created_at:
 *                      type: string
 *                    updated_at:
 *                      type: string
 *              example:
 *                status: 200
 *                message: "Author found successfully"
 *                data: {
 *                  id: 1,
 *                  name: Chetan baghat,
 *                  created_by: system,
 *                  created_at: 2021-10-01T10:22:05.407Z,
 *                  updated_at: 2021-10-01T10:22:05.407Z
 *                }
 *      '400':
 *        desctiption : Failure Response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "Author not found"
 */
