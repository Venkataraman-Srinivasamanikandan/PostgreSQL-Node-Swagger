/**
 * @swagger
 * /book:
 *  get:
 *    tags:
 *      - WEB Book Service
 *    summary: List Book API
 *    description: This API is used to list all the books with pagination and search with book name.
 *    parameters:
 *      - in: query
 *        name: pageNo
 *        schema:
 *          type: integer
 *        description: Which page that you wanted to view.
 *        example: 1
 *      - in: query
 *        name: size
 *        schema:
 *          type: integer
 *        description: Size of the page that you wanted to view.
 *        example: 5
 *      - in: query
 *        name: search
 *        schema:
 *          type: string
 *        description: Search by name of the book.
 *        example: one
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
 *                pages:
 *                  type: integer
 *                  description: Number of pages possible for pagination.
 *                message:
 *                  type: string
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      book_id:
 *                        type: integer
 *                      book_name:
 *                        type: string
 *                      authorid:
 *                        type: integer
 *                      author_name:
 *                        type: string
 *              example:
 *                status: 200
 *                pages: 2
 *                message: "Books found successfully"
 *                data: [{
 *                  book_id: 1,
 *                  book_name: One indian girl,
 *                  authorid: 1,
 *                  author_name: Chetan bhagat
 *                }]
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
 *  post:
 *    tags:
 *      - WEB Book Service
 *    summary: Add Book API
 *    description: This API is used to add book with author id for reference.
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               description: Any book name
 *             authorId:
 *               type: integer
 *               description: Id of author from database, if author is not in DB insert author first and use their Id
 *           required:
 *             - name
 *             - authorId
 *           example:
 *             "name": "One indian girl"
 *             "authorId": 1
 *    responses:
 *      '200':
 *        desctiption : Success Response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: boolean
 *                message:
 *                  type: string
 *              example:
 *                status: true
 *                message: "Book inserted successfully"
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
 *  put:
 *    tags:
 *      - WEB Book Service
 *    summary: Edit Book API
 *    description: This API is used to edit the book details valid parameters.
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               description: Unique Id of the book that you want to edit
 *             name:
 *               type: string
 *               description: Any book name
 *             authorId:
 *               type: integer
 *               description: Id of author from database, if author is not in DB insert author first and use their Id
 *           required:
 *             - id
 *             - name
 *             - authorId
 *           example:
 *             "name": "One indian girl"
 *             "authorId": 1
 *             "id": 2
 *    responses:
 *      '200':
 *        desctiption : Success Response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: boolean
 *                message:
 *                  type: string
 *              example:
 *                status: true
 *                message: "Book updated successfully"
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
 *  delete:
 *    tags:
 *      - WEB Book Service
 *    summary: Delete Book API
 *    description: This API is used to delete the book details with the book id.
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               description: Unique Id of the book that you want to delete
 *           required:
 *             - id
 *           example:
 *             "id": 2
 *    responses:
 *      '200':
 *        desctiption : Success Response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: boolean
 *                message:
 *                  type: string
 *              example:
 *                status: true
 *                message: "Book deleted successfully"
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
 */
