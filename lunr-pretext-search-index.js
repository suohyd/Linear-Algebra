var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  copyright  "
},
{
  "id": "preface-1",
  "level": "1",
  "url": "preface-1.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": "These notes are the companion to online lectures and are a work in progress. All results are standard. We refer the reader to the following references.  Linear Algebra by Hoffman and Kunze  Linear Algebra: A Geometric Approach by Kumaresan  Linear Algebra by Insel, Spence, and Friedberg  Algebra by Artin  Linear Algebra and Geometry by I. R. Shafarevich and A. O. Remizov  Linear\/Multilinear Algebra section in K. Conrad's webpage .    "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Elementary row operations",
  "body": "Elementary row operations  We discussed elementary row operations and row reduced echelon form of a matrix in the class. Please refer class notes for more details.  "
},
{
  "id": "Elt-row-exercises",
  "level": "1",
  "url": "Elt-row-exercises.html",
  "type": "Exercises",
  "number": "1.2",
  "title": "Exercises",
  "body": " Let be an elementary row operation (of any type).  Let . Show that  Keep the notations of the above exercise. If we multiply by on the right, i.e., if we consider the matrix then, what matrix one gets? Relate this with \"elementary column operations\".  Keep notations of the above exercise. Compute determinant of for each type of elementary row operations. Is invertible matrix? Justify your answer.  Let us denote by  the matrix obtained by multiplying -th row of by and adding this row to -th row of ;  the matrix obtained by multiplying -th row of by ;  be the matrix obtained by interchanging -th row with -th row of .    Check that  ;  ;  .     Is \"row-equivalence\" an equivalence relation?  Let be matrices over a field . Assume that homogeneous systems of linear equations and have same solutions. Is it true that and are row-equivalent? [ Note that this was a question asked by one of the student. ] See  "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "Elt-row-exercises.html#exercise-1",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "",
  "body": "Let . Show that "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "Elt-row-exercises.html#exercise-2",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "",
  "body": "Keep the notations of the above exercise. If we multiply by on the right, i.e., if we consider the matrix then, what matrix one gets? Relate this with \"elementary column operations\". "
},
{
  "id": "generators-of-GL",
  "level": "2",
  "url": "Elt-row-exercises.html#generators-of-GL",
  "type": "Exercise",
  "number": "1.2.3",
  "title": "",
  "body": "Keep notations of the above exercise. Compute determinant of for each type of elementary row operations. Is invertible matrix? Justify your answer.  Let us denote by  the matrix obtained by multiplying -th row of by and adding this row to -th row of ;  the matrix obtained by multiplying -th row of by ;  be the matrix obtained by interchanging -th row with -th row of .    Check that  ;  ;  .    "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "Elt-row-exercises.html#exercise-4",
  "type": "Exercise",
  "number": "1.2.4",
  "title": "",
  "body": "Is \"row-equivalence\" an equivalence relation? "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "Elt-row-exercises.html#exercise-5",
  "type": "Exercise",
  "number": "1.2.5",
  "title": "",
  "body": "Let be matrices over a field . Assume that homogeneous systems of linear equations and have same solutions. Is it true that and are row-equivalent? [ Note that this was a question asked by one of the student. ] See "
},
{
  "id": "sec-sage-echelon-form",
  "level": "1",
  "url": "sec-sage-echelon-form.html",
  "type": "Section",
  "number": "1.3",
  "title": "Row echelon form using SageMath",
  "body": " Row echelon form using SageMath  We use online computer algebra system SageMath to compute the rank and the nullity of a given matrix. In the following example A=matrix(RR,[[1,2,0,-1],[1,6,0,1],[1,-2,2,8]]) represents matrix over . The entries [1,2,0,-1] , [1,6,0,1] , and [1,-2,2,8] represents the first, the second, and the third row of , respectively.  You may input the matrix of your choice (you can change the number of rows, and column) to get row reduced echelon form. Please first do the calculations yourself and then verify using SageMath.     In the following SageMath can compute the solution of the system . You may change (on this page itself!) and appropriately.   In the following we can reduced the augmented matrix to row reduced echelon form. You may change (on this page itself!) and appropriately.   "
},
{
  "id": "sec-uniqueness-echelon-forms",
  "level": "1",
  "url": "sec-uniqueness-echelon-forms.html",
  "type": "Section",
  "number": "1.4",
  "title": "Uniqueness of row reduced echelon form",
  "body": " Uniqueness of row reduced echelon form  Recall from the class that given a matrix , by applying a sequence of elementary row operations, can be reduced to a row-reduced echelon form of . The matrix has the following properties.  If a row of is nonzero then the first nonzero entry is .  All zero rows occurs at the bottom of .  In any two successive nonzero rows of , the leading in the lower row occurs to the right of the leading in the higher row.  Each column of that contains the leading (this term is explained in an illustrative example below) has zero everywhere else.   The natural question arises: Does the sequence in which row operations are performed change the resulting row-reduced echelon form of The answer is no!  We present a proof of this fact following Thomas Yuster's article The reduced row echelon form of a matrix is unique: a simple proof from Mathematics Magazine.   We begin with the following example. The last column of the row-reduced echelon form does not contain the leading . The solution of can be obtained by assigning an arbitrary value to the last variable . Following T. Yuster we call the last column a free column.   (Uniqueness of Row-Reduced Echelon Form)  The row-reduced echelon form of a matrix is unique.   Let be an matrix over a field . Following T. Yuster, we proceed by induction on . If , i.e., is an matrix, then the result is true.  Now assume that . Let be the matrix obtained from by deleting the -th column of . Note that any sequence of elementary row operations that reduces to a row-reduced echelon form also reduces to the row-reduced echelon form. We assume that are two row-reduced echelon forms of . By induction the row-reduced echelon forms of differs only in their -th column. In other words, the first columns of and are the same.  Suppose that . Therefore, the -th row of will be different from the -th row of for some . Now if is a column vector such that then , because the solutions of coincides with solutions of as well as solutions of . Hence, . Since the first columns of are zero, the -th coordinate of is . As we must have . Therefore, the -th column of both and contains the leading ; otherwise the -th column of both and will become free column and then, we could choose an arbitrary value for .  Since the first columns of and are identical the leading of the -th column must occur in the first zero row of the row-reduced echelon form of . Since the remaining entries of the -th column are all zero we get that , a contradiction. Hence, the result is proved.    The ensures that the row-reduced echelon form of a matrix obtained by you or someone else, or a computer program like SageMath will always give the same result, irrespective of the sequence of row operations.   "
},
{
  "id": "p-13",
  "level": "2",
  "url": "sec-uniqueness-echelon-forms.html#p-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "free "
},
{
  "id": "uniquenss-rref",
  "level": "2",
  "url": "sec-uniqueness-echelon-forms.html#uniquenss-rref",
  "type": "Theorem",
  "number": "1.4.1",
  "title": "(Uniqueness of Row-Reduced Echelon Form).",
  "body": " (Uniqueness of Row-Reduced Echelon Form)  The row-reduced echelon form of a matrix is unique.  "
},
{
  "id": "proof-1",
  "level": "2",
  "url": "sec-uniqueness-echelon-forms.html#proof-1",
  "type": "Proof",
  "number": "1.4.1",
  "title": "",
  "body": "Let be an matrix over a field . Following T. Yuster, we proceed by induction on . If , i.e., is an matrix, then the result is true.  Now assume that . Let be the matrix obtained from by deleting the -th column of . Note that any sequence of elementary row operations that reduces to a row-reduced echelon form also reduces to the row-reduced echelon form. We assume that are two row-reduced echelon forms of . By induction the row-reduced echelon forms of differs only in their -th column. In other words, the first columns of and are the same.  Suppose that . Therefore, the -th row of will be different from the -th row of for some . Now if is a column vector such that then , because the solutions of coincides with solutions of as well as solutions of . Hence, . Since the first columns of are zero, the -th coordinate of is . As we must have . Therefore, the -th column of both and contains the leading ; otherwise the -th column of both and will become free column and then, we could choose an arbitrary value for .  Since the first columns of and are identical the leading of the -th column must occur in the first zero row of the row-reduced echelon form of . Since the remaining entries of the -th column are all zero we get that , a contradiction. Hence, the result is proved.  "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "sec-uniqueness-echelon-forms.html#remark-1",
  "type": "Remark",
  "number": "1.4.2",
  "title": "",
  "body": " The ensures that the row-reduced echelon form of a matrix obtained by you or someone else, or a computer program like SageMath will always give the same result, irrespective of the sequence of row operations.  "
},
{
  "id": "vs-def",
  "level": "1",
  "url": "vs-def.html",
  "type": "Section",
  "number": "2.1",
  "title": "Definition of a vector space",
  "body": " Definition of a vector space  Let be an abelian group . We write the binary operation on additively. Thus have the following properties:  For , .  For , .  There exists a unique element such that for any , .  For every there exists a unique element (which is denoted by ) such that .    Now we give the definition of a vector space over a field. (Vector space over a field)  Let be a field and let be an abelian group. We call a vector space over or an -vector space if there is a map, called scalar multiplication  satisfying the following conditions. First, for a given and , let us denote the image of under this map simply by .  Let be the unity in . Then, for every .  For and , we have  For and we have  For and , we have  The elements of are called scalars and elements of are called vectors .   Often we omit \" \" for scalar multiplication and simply write .  Please try not to confuse the terminology of a vector that you have studied in 12th, viz., a vector is something that has a 'length', 'base', and it is denoted by an arrow, etc.. The definition above is what we will use throughout!   Let be the field of real numbers. Consider . The componentwise addition turns into an abelian group. We define a scalar multiplication as follows: where . Note that (resp., ) is the usual multiplication in , while is a scalar multiplication . Check that is a vector space over . If we fix then, for given we get In this way, we may say that sits inside .   Let . Consider . Show that is a vector space over .  "
},
{
  "id": "vector-space",
  "level": "2",
  "url": "vs-def.html#vector-space",
  "type": "Definition",
  "number": "2.1.1",
  "title": "(Vector space over a field).",
  "body": "(Vector space over a field)  Let be a field and let be an abelian group. We call a vector space over or an -vector space if there is a map, called scalar multiplication  satisfying the following conditions. First, for a given and , let us denote the image of under this map simply by .  Let be the unity in . Then, for every .  For and , we have  For and we have  For and , we have  The elements of are called scalars and elements of are called vectors .  "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "vs-def.html#remark-2",
  "type": "Remark",
  "number": "2.1.2",
  "title": "",
  "body": "Often we omit \" \" for scalar multiplication and simply write . "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "vs-def.html#remark-3",
  "type": "Remark",
  "number": "2.1.3",
  "title": "",
  "body": "Please try not to confuse the terminology of a vector that you have studied in 12th, viz., a vector is something that has a 'length', 'base', and it is denoted by an arrow, etc.. The definition above is what we will use throughout! "
},
{
  "id": "example-1",
  "level": "2",
  "url": "vs-def.html#example-1",
  "type": "Example",
  "number": "2.1.4",
  "title": "",
  "body": "Let be the field of real numbers. Consider . The componentwise addition turns into an abelian group. We define a scalar multiplication as follows: where . Note that (resp., ) is the usual multiplication in , while is a scalar multiplication . Check that is a vector space over . If we fix then, for given we get In this way, we may say that sits inside .  "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "vs-def.html#exercise-6",
  "type": "Checkpoint",
  "number": "2.1.5",
  "title": "",
  "body": "Let . Consider . Show that is a vector space over . "
},
{
  "id": "vs-examples",
  "level": "1",
  "url": "vs-examples.html",
  "type": "Section",
  "number": "2.2",
  "title": "Examples of vector spaces",
  "body": " Examples of vector spaces  In this section we list some examples of vector spaces. More examples will be discussed in the class. In most of the instances the checking is left to the reader.   (Zero-dimensional vector space) A trivial abelian group over a field is a vector space. The scalar multiplication is given by for . Note that zero-dimensional vector spaces over different fields are different !  ( -dimensional vector space over a field) Let be a field, and let We consider as an abelian group by componentwise addition. We make as an vector space by defining scalar multiplication as follows: Note that is the multiplication in the field while is a scalar multiplication. Check that with this scalar multiplication is an vector space.  (Vector space of -linear maps over ) For consider the map defined by for . Consider Addition of functions give additive structure on . We may define scalar multiplication by   (Vector space of matrices) Let be a field and consider the set of matrices over . The additive structure on can be given by usual addition of matrices. We define scalar multiplication as follows:   (A ring containing a field) Let be a ring with unity , and let be a subfield in (we always assume that the unity of a ring and its subring is the same). Then is a vector space over with the ring multiplication in considered as a scalar multiplication. Note that elements of can be considered as scalars as well as vectors.  (Direct sum of two vector spaces) Let be vector spaces over a field . Consider Additive structure is defined by where and . The addition (resp., ) is defined by using additive structure in (resp., ). We define scalar multiplication as follows: Here, (resp., ) is the scalar multiplication defined for (resp., ). Check that is a vector space over .   (Product of vector spaces) Let be an indexing set and let ( ) be vector spaces over a field . Consider the (Cartesian) product , this is the set of all functions such that . This is a vector space over with following operations: if and are any two elements of then   ; component wise addition.  For any the scalar multiplication is define by      (Square classes of rationals) Consider the multiplicative group of rationals, and its subgroup . Consider the quotient group . Note that the group operation on is multiplication , and the identity element of is . We claim that is a vector space over . We define the scalar multiplication as follows. given by The scalar multiplication by is decided by one of the axioms of vector space, viz., . The scalar multiplication is a consequence of the vector space axioms: ( is ).  "
},
{
  "id": "zero-dime-vs",
  "level": "2",
  "url": "vs-examples.html#zero-dime-vs",
  "type": "Example",
  "number": "2.2.1",
  "title": "(Zero-dimensional vector space).",
  "body": " (Zero-dimensional vector space) A trivial abelian group over a field is a vector space. The scalar multiplication is given by for . Note that zero-dimensional vector spaces over different fields are different ! "
},
{
  "id": "n-dim-vs",
  "level": "2",
  "url": "vs-examples.html#n-dim-vs",
  "type": "Example",
  "number": "2.2.2",
  "title": "(<span class=\"process-math\">\\(n\\)<\/span>-dimensional vector space over a field).",
  "body": "( -dimensional vector space over a field) Let be a field, and let We consider as an abelian group by componentwise addition. We make as an vector space by defining scalar multiplication as follows: Note that is the multiplication in the field while is a scalar multiplication. Check that with this scalar multiplication is an vector space. "
},
{
  "id": "Endomorphisms-R",
  "level": "2",
  "url": "vs-examples.html#Endomorphisms-R",
  "type": "Example",
  "number": "2.2.3",
  "title": "(Vector space of <span class=\"process-math\">\\(\\R\\)<\/span>-linear maps over <span class=\"process-math\">\\(\\R\\)<\/span>).",
  "body": "(Vector space of -linear maps over ) For consider the map defined by for . Consider Addition of functions give additive structure on . We may define scalar multiplication by  "
},
{
  "id": "example-5",
  "level": "2",
  "url": "vs-examples.html#example-5",
  "type": "Example",
  "number": "2.2.4",
  "title": "(Vector space of matrices).",
  "body": "(Vector space of matrices) Let be a field and consider the set of matrices over . The additive structure on can be given by usual addition of matrices. We define scalar multiplication as follows:  "
},
{
  "id": "example-6",
  "level": "2",
  "url": "vs-examples.html#example-6",
  "type": "Example",
  "number": "2.2.5",
  "title": "(A ring containing a field).",
  "body": "(A ring containing a field) Let be a ring with unity , and let be a subfield in (we always assume that the unity of a ring and its subring is the same). Then is a vector space over with the ring multiplication in considered as a scalar multiplication. Note that elements of can be considered as scalars as well as vectors. "
},
{
  "id": "direct-sum-vs",
  "level": "2",
  "url": "vs-examples.html#direct-sum-vs",
  "type": "Example",
  "number": "2.2.6",
  "title": "(Direct sum of two vector spaces).",
  "body": "(Direct sum of two vector spaces) Let be vector spaces over a field . Consider Additive structure is defined by where and . The addition (resp., ) is defined by using additive structure in (resp., ). We define scalar multiplication as follows: Here, (resp., ) is the scalar multiplication defined for (resp., ). Check that is a vector space over . "
},
{
  "id": "product-of-vector-spaces",
  "level": "2",
  "url": "vs-examples.html#product-of-vector-spaces",
  "type": "Example",
  "number": "2.2.7",
  "title": "(Product of vector spaces).",
  "body": " (Product of vector spaces) Let be an indexing set and let ( ) be vector spaces over a field . Consider the (Cartesian) product , this is the set of all functions such that . This is a vector space over with following operations: if and are any two elements of then   ; component wise addition.  For any the scalar multiplication is define by    "
},
{
  "id": "Square-classes",
  "level": "2",
  "url": "vs-examples.html#Square-classes",
  "type": "Example",
  "number": "2.2.8",
  "title": "(Square classes of rationals).",
  "body": " (Square classes of rationals) Consider the multiplicative group of rationals, and its subgroup . Consider the quotient group . Note that the group operation on is multiplication , and the identity element of is . We claim that is a vector space over . We define the scalar multiplication as follows. given by The scalar multiplication by is decided by one of the axioms of vector space, viz., . The scalar multiplication is a consequence of the vector space axioms: ( is ). "
},
{
  "id": "Ex-VS",
  "level": "1",
  "url": "Ex-VS.html",
  "type": "Exercises",
  "number": "2.3",
  "title": "Exercises",
  "body": " Show that the set of all sequences with values in a field is a vector space under the componentwise addition and the scalar multiplication  Show that the set of all real-valued sequences converging to is a vector space. Use the same operations defined in an earlier exercise.  Show that the set is a vector space over . The addition is given by and the scalar multiplication by   Let be a field. Show that the set is a vector space over .  Show that the set is a vector space over .  Is the set of all real-valued continuous functions on a vector space over ? Justify your answer.  Let be two planes in passing through the origin . Is a vector space over ? Justify your answer.  Is the set a vector space over ? Justify your answer.  The transpose of a matrix is denoted by . Is the set a vector space over ? Justify your answer.  For , is a vector space over ? Justify your answer.  "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "Ex-VS.html#exercise-7",
  "type": "Exercise",
  "number": "2.3.1",
  "title": "",
  "body": "Show that the set of all sequences with values in a field is a vector space under the componentwise addition and the scalar multiplication "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "Ex-VS.html#exercise-8",
  "type": "Exercise",
  "number": "2.3.2",
  "title": "",
  "body": "Show that the set of all real-valued sequences converging to is a vector space. Use the same operations defined in an earlier exercise. "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "Ex-VS.html#exercise-9",
  "type": "Exercise",
  "number": "2.3.3",
  "title": "",
  "body": "Show that the set is a vector space over . The addition is given by and the scalar multiplication by  "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "Ex-VS.html#exercise-10",
  "type": "Exercise",
  "number": "2.3.4",
  "title": "",
  "body": "Let be a field. Show that the set is a vector space over . "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "Ex-VS.html#exercise-11",
  "type": "Exercise",
  "number": "2.3.5",
  "title": "",
  "body": "Show that the set is a vector space over . "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "Ex-VS.html#exercise-12",
  "type": "Exercise",
  "number": "2.3.6",
  "title": "",
  "body": "Is the set of all real-valued continuous functions on a vector space over ? Justify your answer. "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "Ex-VS.html#exercise-13",
  "type": "Exercise",
  "number": "2.3.7",
  "title": "",
  "body": "Let be two planes in passing through the origin . Is a vector space over ? Justify your answer. "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "Ex-VS.html#exercise-14",
  "type": "Exercise",
  "number": "2.3.8",
  "title": "",
  "body": "Is the set a vector space over ? Justify your answer. "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "Ex-VS.html#exercise-15",
  "type": "Exercise",
  "number": "2.3.9",
  "title": "",
  "body": "The transpose of a matrix is denoted by . Is the set a vector space over ? Justify your answer. "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "Ex-VS.html#exercise-16",
  "type": "Exercise",
  "number": "2.3.10",
  "title": "",
  "body": "For , is a vector space over ? Justify your answer. "
},
{
  "id": "linear-combination",
  "level": "1",
  "url": "linear-combination.html",
  "type": "Section",
  "number": "2.4",
  "title": "Linear combination",
  "body": " Linear combination  We define a linear combination of vectors in a vector space.   Let be a vector space over a field . A vector is said to be a linear combination or an -linear combination of vectors in if there are scalars such that    Consider as a vector space over (refer to ). A vector is a linear combination of vector as well as a linear combination of vectors and . Indeed, we have and    If are such that then, Furthermore, for any    What are all vectors in that can be written as linear combinations of vectors and ? Think geometrically.   "
},
{
  "id": "linear-combination-def",
  "level": "2",
  "url": "linear-combination.html#linear-combination-def",
  "type": "Definition",
  "number": "2.4.1",
  "title": "",
  "body": " Let be a vector space over a field . A vector is said to be a linear combination or an -linear combination of vectors in if there are scalars such that   "
},
{
  "id": "example-10",
  "level": "2",
  "url": "linear-combination.html#example-10",
  "type": "Example",
  "number": "2.4.2",
  "title": "",
  "body": "Consider as a vector space over (refer to ). A vector is a linear combination of vector as well as a linear combination of vectors and . Indeed, we have and  "
},
{
  "id": "remark-4",
  "level": "2",
  "url": "linear-combination.html#remark-4",
  "type": "Remark",
  "number": "2.4.3",
  "title": "",
  "body": " If are such that then, Furthermore, for any   "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "linear-combination.html#exercise-17",
  "type": "Checkpoint",
  "number": "2.4.4",
  "title": "",
  "body": "What are all vectors in that can be written as linear combinations of vectors and ? Think geometrically. "
},
{
  "id": "subspace",
  "level": "1",
  "url": "subspace.html",
  "type": "Section",
  "number": "2.5",
  "title": "Subspace of a vector space",
  "body": " Subspace of a vector space   We define subspace of a vector space in this section.    Let be a vector space over a field . A (nonempty) subset of is said to be a subspace of if is a vector space over on its own right with operations of vector addition and scalar multiplication on .    A subspace of is written as , and if it is a proper subspace (i.e., and ) then it is written as .   We give following criterion to check whether a given nonempty subset of a vector space is a subspace or not.   Let be a vector space over a field . A nonempty subset of is subspace if and only if is closed under addition and scalar multiplication or equivalently    (Trivial subspace)  For any vector space over a field , and are subspaces. The is called the trivial subspace.   (A subspace of -dimensional vector space)  Consider an -dimensional vector space over a field (refer to ). Let where is at the -th place and . Consider a subset This is a subspace of .   (A subspace of matrices)  Consider vector space of matrices over a field (refer to ). A subset of all diagonal matrices in , i.e., is a subspace of .   (A subspace of the direct sum of two vector spaces)  Consider the direct sum of vector spaces over a field (refer to ). A subset is a subspace of .   (Intersection of subspaces)  Let be a vector space over a field , and be an indexing set. Let ( ) be subspaces of . The set is a subspace of .   (Sum of subspaces)  Let be a vector space over a field and be an indexing set. For each , let be a subspace. The set is a subspace.   (Solutions of homogeneous system of linear equations)  Let . The set is a subspace of .   (Subspace spanned by a nonempty subset) Let be a nonempty subset of a vector space . The subspace spanned by is the intersection of all subspaces containing . We denote it by or by . By , the intersection of subspaces is again a subspace. Note that a subspace spanned by is the smallest subspace of containing .    The subspace spanned by a nonempty subset of a vector space is the set of all linear combinations of vectors in .    Let be a subspace of a vector space over a field . A subset of is said to span subspace if the subspace generated by , .   If spans then, any subset of containing also spans .   Let be a vector space over a field , and let be a nonzero vector in . The subspace spanned by , is called line through .   "
},
{
  "id": "subspace-of-vs",
  "level": "2",
  "url": "subspace.html#subspace-of-vs",
  "type": "Definition",
  "number": "2.5.1",
  "title": "",
  "body": " Let be a vector space over a field . A (nonempty) subset of is said to be a subspace of if is a vector space over on its own right with operations of vector addition and scalar multiplication on .  "
},
{
  "id": "remark-5",
  "level": "2",
  "url": "subspace.html#remark-5",
  "type": "Remark",
  "number": "2.5.2",
  "title": "",
  "body": " A subspace of is written as , and if it is a proper subspace (i.e., and ) then it is written as .  "
},
{
  "id": "subspace-criterion",
  "level": "2",
  "url": "subspace.html#subspace-criterion",
  "type": "Theorem",
  "number": "2.5.3",
  "title": "",
  "body": " Let be a vector space over a field . A nonempty subset of is subspace if and only if is closed under addition and scalar multiplication or equivalently   "
},
{
  "id": "example-11",
  "level": "2",
  "url": "subspace.html#example-11",
  "type": "Example",
  "number": "2.5.4",
  "title": "(Trivial subspace).",
  "body": "(Trivial subspace)  For any vector space over a field , and are subspaces. The is called the trivial subspace.  "
},
{
  "id": "example-12",
  "level": "2",
  "url": "subspace.html#example-12",
  "type": "Example",
  "number": "2.5.5",
  "title": "(A subspace of <span class=\"process-math\">\\(n\\)<\/span>-dimensional vector space).",
  "body": "(A subspace of -dimensional vector space)  Consider an -dimensional vector space over a field (refer to ). Let where is at the -th place and . Consider a subset This is a subspace of .  "
},
{
  "id": "example-13",
  "level": "2",
  "url": "subspace.html#example-13",
  "type": "Example",
  "number": "2.5.6",
  "title": "(A subspace of <span class=\"process-math\">\\(n\\times n\\)<\/span> matrices).",
  "body": "(A subspace of matrices)  Consider vector space of matrices over a field (refer to ). A subset of all diagonal matrices in , i.e., is a subspace of .  "
},
{
  "id": "example-14",
  "level": "2",
  "url": "subspace.html#example-14",
  "type": "Example",
  "number": "2.5.7",
  "title": "(A subspace of the direct sum of two vector spaces).",
  "body": "(A subspace of the direct sum of two vector spaces)  Consider the direct sum of vector spaces over a field (refer to ). A subset is a subspace of .  "
},
{
  "id": "intersection-of-subspace",
  "level": "2",
  "url": "subspace.html#intersection-of-subspace",
  "type": "Example",
  "number": "2.5.8",
  "title": "(Intersection of subspaces).",
  "body": "(Intersection of subspaces)  Let be a vector space over a field , and be an indexing set. Let ( ) be subspaces of . The set is a subspace of .  "
},
{
  "id": "example-16",
  "level": "2",
  "url": "subspace.html#example-16",
  "type": "Example",
  "number": "2.5.9",
  "title": "(Sum of subspaces).",
  "body": "(Sum of subspaces)  Let be a vector space over a field and be an indexing set. For each , let be a subspace. The set is a subspace.  "
},
{
  "id": "example-17",
  "level": "2",
  "url": "subspace.html#example-17",
  "type": "Example",
  "number": "2.5.10",
  "title": "(Solutions of homogeneous system of linear equations).",
  "body": "(Solutions of homogeneous system of linear equations)  Let . The set is a subspace of .  "
},
{
  "id": "subspace-span",
  "level": "2",
  "url": "subspace.html#subspace-span",
  "type": "Definition",
  "number": "2.5.11",
  "title": "(Subspace spanned by a nonempty subset).",
  "body": "(Subspace spanned by a nonempty subset) Let be a nonempty subset of a vector space . The subspace spanned by is the intersection of all subspaces containing . We denote it by or by . By , the intersection of subspaces is again a subspace. Note that a subspace spanned by is the smallest subspace of containing .  "
},
{
  "id": "span-linear-combination",
  "level": "2",
  "url": "subspace.html#span-linear-combination",
  "type": "Theorem",
  "number": "2.5.12",
  "title": "",
  "body": " The subspace spanned by a nonempty subset of a vector space is the set of all linear combinations of vectors in .  "
},
{
  "id": "vs-spanned-by",
  "level": "2",
  "url": "subspace.html#vs-spanned-by",
  "type": "Definition",
  "number": "2.5.13",
  "title": "",
  "body": " Let be a subspace of a vector space over a field . A subset of is said to span subspace if the subspace generated by , .  "
},
{
  "id": "remark-6",
  "level": "2",
  "url": "subspace.html#remark-6",
  "type": "Remark",
  "number": "2.5.14",
  "title": "",
  "body": "If spans then, any subset of containing also spans . "
},
{
  "id": "line",
  "level": "2",
  "url": "subspace.html#line",
  "type": "Definition",
  "number": "2.5.15",
  "title": "",
  "body": " Let be a vector space over a field , and let be a nonzero vector in . The subspace spanned by , is called line through .  "
},
{
  "id": "Ex-subspace",
  "level": "1",
  "url": "Ex-subspace.html",
  "type": "Exercises",
  "number": "2.6",
  "title": "Exercises",
  "body": " Let be a line passing through the origin in . Determine for which vectors , the subset is a subspace of . Think geometrically.  Find all subspaces in that contain the vector .  Show that a set with two vectors from can not span .  Consider a map given by . Show that the image of is a subspace of .  Find all subspaces of the vector space over .  Determine whether is a linear combination of the vectors . Here we consider as a vector space over .  Consider a vector space of matrices over a field . Show that the span of is .  Let be a vector space over a field , and let . Suppose that for some . Is ?  Show that a union of subspaces of a vector space need not be a subspace of .  Let be a nontrivial (i.e., ) vector space over an infinite field . Show that is not a union of a finite number of proper subspaces. Suppose that is a union of a finite number of proper subspaces , . We may assume that . Choose and . Consider the line through and parallel to , i.e., the set . Show that is an infinite set and that each contains at most one vector from .  "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "Ex-subspace.html#exercise-18",
  "type": "Exercise",
  "number": "2.6.1",
  "title": "",
  "body": "Let be a line passing through the origin in . Determine for which vectors , the subset is a subspace of . Think geometrically. "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "Ex-subspace.html#exercise-19",
  "type": "Exercise",
  "number": "2.6.2",
  "title": "",
  "body": "Find all subspaces in that contain the vector . "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "Ex-subspace.html#exercise-20",
  "type": "Exercise",
  "number": "2.6.3",
  "title": "",
  "body": "Show that a set with two vectors from can not span . "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "Ex-subspace.html#exercise-21",
  "type": "Exercise",
  "number": "2.6.4",
  "title": "",
  "body": "Consider a map given by . Show that the image of is a subspace of . "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "Ex-subspace.html#exercise-22",
  "type": "Exercise",
  "number": "2.6.5",
  "title": "",
  "body": "Find all subspaces of the vector space over . "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "Ex-subspace.html#exercise-23",
  "type": "Exercise",
  "number": "2.6.6",
  "title": "",
  "body": "Determine whether is a linear combination of the vectors . Here we consider as a vector space over . "
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "Ex-subspace.html#exercise-24",
  "type": "Exercise",
  "number": "2.6.7",
  "title": "",
  "body": "Consider a vector space of matrices over a field . Show that the span of is . "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "Ex-subspace.html#exercise-25",
  "type": "Exercise",
  "number": "2.6.8",
  "title": "",
  "body": "Let be a vector space over a field , and let . Suppose that for some . Is ? "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "Ex-subspace.html#exercise-26",
  "type": "Exercise",
  "number": "2.6.9",
  "title": "",
  "body": "Show that a union of subspaces of a vector space need not be a subspace of . "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "Ex-subspace.html#exercise-27",
  "type": "Exercise",
  "number": "2.6.10",
  "title": "",
  "body": "Let be a nontrivial (i.e., ) vector space over an infinite field . Show that is not a union of a finite number of proper subspaces. Suppose that is a union of a finite number of proper subspaces , . We may assume that . Choose and . Consider the line through and parallel to , i.e., the set . Show that is an infinite set and that each contains at most one vector from . "
},
{
  "id": "sec-linear-dependence",
  "level": "1",
  "url": "sec-linear-dependence.html",
  "type": "Section",
  "number": "3.1",
  "title": "Linearly independent vectors",
  "body": " Linearly independent vectors  We define linear independence of vectors. We begin with the following.   (Linearly dependent vectors)   Let be a vector space over a field . A set of vectors is said to be linearly dependent over or vectors are linear dependent if there exists scalars not all zero such that   An infinite subset of is said to be linearly dependent over if there is a finite nonempty subset of which is linearly dependent over .      Any subset of containing the zero vector is linearly dependent.  If and are linearly dependent then, there exists a nonzero (resp., a nonzero ) such that (resp., ). In other words, and lie on the same line (refer ) and hence are collinear.  The relation ' and are linearly dependent' is an equivalence relation on the set of nonzero vectors of (Verify this statement). The equivalence classes are lines with zero removed.     (Linearly independent vectors)  A nonempty set of vectors in are said to be linearly independent over if is not linearly dependent over .  In other words, is linearly independent over if for any distinct vectors     A nonempty set of vectors is linearly independent if and only if each nonempty finite subset of is linearly independent.  We make the following conventions.  The empty set is linearly independent.  The span of the empty set is the zero space .    "
},
{
  "id": "linearly-dependent",
  "level": "2",
  "url": "sec-linear-dependence.html#linearly-dependent",
  "type": "Definition",
  "number": "3.1.1",
  "title": "(Linearly dependent vectors).",
  "body": " (Linearly dependent vectors)   Let be a vector space over a field . A set of vectors is said to be linearly dependent over or vectors are linear dependent if there exists scalars not all zero such that   An infinite subset of is said to be linearly dependent over if there is a finite nonempty subset of which is linearly dependent over .   "
},
{
  "id": "remark-dependence",
  "level": "2",
  "url": "sec-linear-dependence.html#remark-dependence",
  "type": "Remark",
  "number": "3.1.2",
  "title": "",
  "body": "  Any subset of containing the zero vector is linearly dependent.  If and are linearly dependent then, there exists a nonzero (resp., a nonzero ) such that (resp., ). In other words, and lie on the same line (refer ) and hence are collinear.  The relation ' and are linearly dependent' is an equivalence relation on the set of nonzero vectors of (Verify this statement). The equivalence classes are lines with zero removed.   "
},
{
  "id": "linearly-independent",
  "level": "2",
  "url": "sec-linear-dependence.html#linearly-independent",
  "type": "Definition",
  "number": "3.1.3",
  "title": "(Linearly independent vectors).",
  "body": " (Linearly independent vectors)  A nonempty set of vectors in are said to be linearly independent over if is not linearly dependent over .  In other words, is linearly independent over if for any distinct vectors    "
},
{
  "id": "remark-8",
  "level": "2",
  "url": "sec-linear-dependence.html#remark-8",
  "type": "Remark",
  "number": "3.1.4",
  "title": "",
  "body": "A nonempty set of vectors is linearly independent if and only if each nonempty finite subset of is linearly independent. "
},
{
  "id": "zero-vs-basis",
  "level": "2",
  "url": "sec-linear-dependence.html#zero-vs-basis",
  "type": "Remark",
  "number": "3.1.5",
  "title": "",
  "body": "We make the following conventions.  The empty set is linearly independent.  The span of the empty set is the zero space .   "
},
{
  "id": "ex-linear-dependence",
  "level": "1",
  "url": "ex-linear-dependence.html",
  "type": "Exercises",
  "number": "3.2",
  "title": "Exercises",
  "body": "  In each of the following determine whether a given subset is linearly dependent or independent.  Consider as a vector space over and .  Consider as a vector space over , and .  Consider the set of matrices over , as a vector space over , and .  Consider to be the vector space over a field of all polynomials in variable of degree at most , and .  Consider the vector space over (refer to ), and .   "
},
{
  "id": "exercise-28",
  "level": "2",
  "url": "ex-linear-dependence.html#exercise-28",
  "type": "Exercise",
  "number": "3.2.1",
  "title": "",
  "body": "Consider as a vector space over and . "
},
{
  "id": "exercise-29",
  "level": "2",
  "url": "ex-linear-dependence.html#exercise-29",
  "type": "Exercise",
  "number": "3.2.2",
  "title": "",
  "body": "Consider as a vector space over , and . "
},
{
  "id": "exercise-30",
  "level": "2",
  "url": "ex-linear-dependence.html#exercise-30",
  "type": "Exercise",
  "number": "3.2.3",
  "title": "",
  "body": "Consider the set of matrices over , as a vector space over , and . "
},
{
  "id": "exercise-31",
  "level": "2",
  "url": "ex-linear-dependence.html#exercise-31",
  "type": "Exercise",
  "number": "3.2.4",
  "title": "",
  "body": "Consider to be the vector space over a field of all polynomials in variable of degree at most , and . "
},
{
  "id": "exercise-32",
  "level": "2",
  "url": "ex-linear-dependence.html#exercise-32",
  "type": "Exercise",
  "number": "3.2.5",
  "title": "",
  "body": "Consider the vector space over (refer to ), and . "
},
{
  "id": "sec-basis-dim",
  "level": "1",
  "url": "sec-basis-dim.html",
  "type": "Section",
  "number": "3.3",
  "title": "Basis and Dimension",
  "body": " Basis and Dimension  We are now in a position to give the definition of dimension of a vector space. We begin with the definition of a basis.  (Basis of a vector space)  Let be a vector space over a field . A basis of over is a set of linearly independent vectors in which spans (refer to ).   Now we define the dimension of a vector space.   (Dimension of a vector space)   Let be a vector space over a field . The cardinality of a basis of is called the dimension of . It is denoted by or by .  If is finite then, is said to be a finite-dimensional vector space over or if the context is clear then simply finite-dimensional.  If is infinite then, is said to be an infinite dimensional vector space over or if the context is clear then simply infinite dimensional.    It may not be immediately clear from the definition of finite-dimensional vector space ( ) that every basis has the same cardinality. This will be proven in .  The dimension of a vector space is an invariant of . This will be made precise later.   Every vector space (not necessarily finite-dimensional) has a basis.   A proof is based on an application of Zorn's lemma.  "
},
{
  "id": "def-basis",
  "level": "2",
  "url": "sec-basis-dim.html#def-basis",
  "type": "Definition",
  "number": "3.3.1",
  "title": "(Basis of a vector space).",
  "body": "(Basis of a vector space)  Let be a vector space over a field . A basis of over is a set of linearly independent vectors in which spans (refer to ).  "
},
{
  "id": "def-dim",
  "level": "2",
  "url": "sec-basis-dim.html#def-dim",
  "type": "Definition",
  "number": "3.3.2",
  "title": "(Dimension of a vector space).",
  "body": " (Dimension of a vector space)   Let be a vector space over a field . The cardinality of a basis of is called the dimension of . It is denoted by or by .  If is finite then, is said to be a finite-dimensional vector space over or if the context is clear then simply finite-dimensional.  If is infinite then, is said to be an infinite dimensional vector space over or if the context is clear then simply infinite dimensional.   "
},
{
  "id": "remark-10",
  "level": "2",
  "url": "sec-basis-dim.html#remark-10",
  "type": "Remark",
  "number": "3.3.3",
  "title": "",
  "body": "It may not be immediately clear from the definition of finite-dimensional vector space ( ) that every basis has the same cardinality. This will be proven in . "
},
{
  "id": "invariant-remark",
  "level": "2",
  "url": "sec-basis-dim.html#invariant-remark",
  "type": "Remark",
  "number": "3.3.4",
  "title": "",
  "body": "The dimension of a vector space is an invariant of . This will be made precise later. "
},
{
  "id": "existence-basis",
  "level": "2",
  "url": "sec-basis-dim.html#existence-basis",
  "type": "Theorem",
  "number": "3.3.5",
  "title": "",
  "body": " Every vector space (not necessarily finite-dimensional) has a basis.  "
},
{
  "id": "proof-2",
  "level": "2",
  "url": "sec-basis-dim.html#proof-2",
  "type": "Proof",
  "number": "3.3.1",
  "title": "",
  "body": "A proof is based on an application of Zorn's lemma. "
},
{
  "id": "sec-results-basis-dim",
  "level": "1",
  "url": "sec-results-basis-dim.html",
  "type": "Section",
  "number": "3.4",
  "title": "Invariance of dimension",
  "body": " Invariance of dimension  In this section we show that every basis of a finite-dimensional vector space has the same cardinality. Throughout this section we assume that is a finite-dimensional vector space over a field . We begin with the following lemma.   If are linearly independent over , and are linearly dependent over , then can be written as an -linear combination of .   There exists scalars , not all zero, such that If then the linear independence of implies that , which will be a contradiction. Hence, . Therefore,    Let ( ) and let for and for some . Then, are linearly independent if and only if are linearly independent.   We only show that if are linearly independent then are linearly independent. Suppose that there are such that i.e., Because are linearly independent, we get that Hence all and are linearly independent.  We now prove the following important result. This result show that any two basis of a vector space have the same cardinality.   Let be a finite-dimensional vector space over a field . If a basis of has vectors then any vectors in are linearly dependent.    We use induction to prove this theorem. Suppose that is a basis of . Let be vectors in . If then, there are scalars such that and . In view of it is enough to consider the case when and . Thus, (resp., ) implies that (resp., . Hence, we are done when .  We now assume that the result is true for vector spaces having number of vectors in its basis. Now assume that are linearly independent. As is a basis it spans , in particular we have Without loss of generality we assume that . So, one of the scalars, say . Set and for . Note that in the expression of ( ) the vector does not occur. Repeated application of implies that is linearly independent. In particular, is linearly independent. As seen above, each ( ) is a linear combination of . Induction hypothesis applied to a vector subspace implies that are linearly dependent, a contradiction.   (Invariance of dimension)  Any two bases of a finite-dimensional vector space have the same number of elements.    Let (refer to ). Then any subset of with elements with is linearly dependent.   (Completing to a basis)  Let be a finite-dimensional vector space over a field , and let be a nonempty subset. Consider linearly independent vectors . Then either every subset with is linearly dependent or there exists such that is linearly independent.  Similarly, either every with is linearly dependent or there exists such that is linearly independent. Continuing in this way, after a finite number of steps, we obtain a linearly independent subset of such that any bigger subset of is linearly dependent.  Therefore, any linearly independent subset can be expanded to a maximal linearly independent susbset.    In fact we have the following result.   Let be a finite-dimensional vector space over , and let be a basis of . If is linearly independent then, can be extended to a basis of by adding vectors from .    Consider the set . Choose, in this set, a maximal linearly independent set that includes all .   "
},
{
  "id": "pre-invariance-dimension",
  "level": "2",
  "url": "sec-results-basis-dim.html#pre-invariance-dimension",
  "type": "Lemma",
  "number": "3.4.1",
  "title": "",
  "body": " If are linearly independent over , and are linearly dependent over , then can be written as an -linear combination of .  "
},
{
  "id": "proof-3",
  "level": "2",
  "url": "sec-results-basis-dim.html#proof-3",
  "type": "Proof",
  "number": "3.4.1",
  "title": "",
  "body": "There exists scalars , not all zero, such that If then the linear independence of implies that , which will be a contradiction. Hence, . Therefore,  "
},
{
  "id": "linear-combination-independence",
  "level": "2",
  "url": "sec-results-basis-dim.html#linear-combination-independence",
  "type": "Lemma",
  "number": "3.4.2",
  "title": "",
  "body": " Let ( ) and let for and for some . Then, are linearly independent if and only if are linearly independent.  "
},
{
  "id": "proof-4",
  "level": "2",
  "url": "sec-results-basis-dim.html#proof-4",
  "type": "Proof",
  "number": "3.4.2",
  "title": "",
  "body": "We only show that if are linearly independent then are linearly independent. Suppose that there are such that i.e., Because are linearly independent, we get that Hence all and are linearly independent. "
},
{
  "id": "well-definedness-dim",
  "level": "2",
  "url": "sec-results-basis-dim.html#well-definedness-dim",
  "type": "Theorem",
  "number": "3.4.3",
  "title": "",
  "body": " Let be a finite-dimensional vector space over a field . If a basis of has vectors then any vectors in are linearly dependent.  "
},
{
  "id": "proof-5",
  "level": "2",
  "url": "sec-results-basis-dim.html#proof-5",
  "type": "Proof",
  "number": "3.4.3",
  "title": "",
  "body": " We use induction to prove this theorem. Suppose that is a basis of . Let be vectors in . If then, there are scalars such that and . In view of it is enough to consider the case when and . Thus, (resp., ) implies that (resp., . Hence, we are done when .  We now assume that the result is true for vector spaces having number of vectors in its basis. Now assume that are linearly independent. As is a basis it spans , in particular we have Without loss of generality we assume that . So, one of the scalars, say . Set and for . Note that in the expression of ( ) the vector does not occur. Repeated application of implies that is linearly independent. In particular, is linearly independent. As seen above, each ( ) is a linear combination of . Induction hypothesis applied to a vector subspace implies that are linearly dependent, a contradiction.  "
},
{
  "id": "any-two-bases-same-number",
  "level": "2",
  "url": "sec-results-basis-dim.html#any-two-bases-same-number",
  "type": "Corollary",
  "number": "3.4.4",
  "title": "(Invariance of dimension).",
  "body": "(Invariance of dimension)  Any two bases of a finite-dimensional vector space have the same number of elements.  "
},
{
  "id": "corollary-2",
  "level": "2",
  "url": "sec-results-basis-dim.html#corollary-2",
  "type": "Corollary",
  "number": "3.4.5",
  "title": "",
  "body": " Let (refer to ). Then any subset of with elements with is linearly dependent.  "
},
{
  "id": "completing-to-basis",
  "level": "2",
  "url": "sec-results-basis-dim.html#completing-to-basis",
  "type": "Remark",
  "number": "3.4.6",
  "title": "(Completing to a basis).",
  "body": "(Completing to a basis)  Let be a finite-dimensional vector space over a field , and let be a nonempty subset. Consider linearly independent vectors . Then either every subset with is linearly dependent or there exists such that is linearly independent.  Similarly, either every with is linearly dependent or there exists such that is linearly independent. Continuing in this way, after a finite number of steps, we obtain a linearly independent subset of such that any bigger subset of is linearly dependent.  Therefore, any linearly independent subset can be expanded to a maximal linearly independent susbset.   "
},
{
  "id": "theorem-6",
  "level": "2",
  "url": "sec-results-basis-dim.html#theorem-6",
  "type": "Theorem",
  "number": "3.4.7",
  "title": "",
  "body": " Let be a finite-dimensional vector space over , and let be a basis of . If is linearly independent then, can be extended to a basis of by adding vectors from .  "
},
{
  "id": "proof-6",
  "level": "2",
  "url": "sec-results-basis-dim.html#proof-6",
  "type": "Proof",
  "number": "3.4.4",
  "title": "",
  "body": " Consider the set . Choose, in this set, a maximal linearly independent set that includes all .  "
},
{
  "id": "ex-basis-dim",
  "level": "1",
  "url": "ex-basis-dim.html",
  "type": "Exercises",
  "number": "3.5",
  "title": "Exercises",
  "body": "  In the following exercises find a basis and the dimension of vector space.   over .   over a field (refer to )   over (refer to ).   over a field .  Vector space of all polynomials in one variable of degree at most over a field .    In the following exercises assume that is a finite-dimensional vector space over a field .  Let be a basis of . Show that vectors are linearly dependent if and only if has a nontrivial solution.  Show that considered as a vector space over is not finite-dimensional.  If is a proper subspace then, .   Determine all -dimensional subspaces of .  Let a prime, and let be the field with elements. Show the cardinality of a finite-dimensional vector space over is finite.  Let be a vector space over a field with a basis . Show that every can be written uniquely as a linear combination of .   "
},
{
  "id": "exercise-33",
  "level": "2",
  "url": "ex-basis-dim.html#exercise-33",
  "type": "Exercise",
  "number": "3.5.1",
  "title": "",
  "body": " over . "
},
{
  "id": "exercise-34",
  "level": "2",
  "url": "ex-basis-dim.html#exercise-34",
  "type": "Exercise",
  "number": "3.5.2",
  "title": "",
  "body": " over a field (refer to ) "
},
{
  "id": "exercise-35",
  "level": "2",
  "url": "ex-basis-dim.html#exercise-35",
  "type": "Exercise",
  "number": "3.5.3",
  "title": "",
  "body": " over (refer to ). "
},
{
  "id": "exercise-36",
  "level": "2",
  "url": "ex-basis-dim.html#exercise-36",
  "type": "Exercise",
  "number": "3.5.4",
  "title": "",
  "body": " over a field . "
},
{
  "id": "exercise-37",
  "level": "2",
  "url": "ex-basis-dim.html#exercise-37",
  "type": "Exercise",
  "number": "3.5.5",
  "title": "",
  "body": "Vector space of all polynomials in one variable of degree at most over a field . "
},
{
  "id": "exercise-38",
  "level": "2",
  "url": "ex-basis-dim.html#exercise-38",
  "type": "Exercise",
  "number": "3.5.6",
  "title": "",
  "body": "Let be a basis of . Show that vectors are linearly dependent if and only if has a nontrivial solution. "
},
{
  "id": "exercise-39",
  "level": "2",
  "url": "ex-basis-dim.html#exercise-39",
  "type": "Exercise",
  "number": "3.5.7",
  "title": "",
  "body": "Show that considered as a vector space over is not finite-dimensional. "
},
{
  "id": "exercise-40",
  "level": "2",
  "url": "ex-basis-dim.html#exercise-40",
  "type": "Exercise",
  "number": "3.5.8",
  "title": "",
  "body": "If is a proper subspace then, .  "
},
{
  "id": "exercise-41",
  "level": "2",
  "url": "ex-basis-dim.html#exercise-41",
  "type": "Exercise",
  "number": "3.5.9",
  "title": "",
  "body": "Determine all -dimensional subspaces of . "
},
{
  "id": "exercise-42",
  "level": "2",
  "url": "ex-basis-dim.html#exercise-42",
  "type": "Exercise",
  "number": "3.5.10",
  "title": "",
  "body": "Let a prime, and let be the field with elements. Show the cardinality of a finite-dimensional vector space over is finite. "
},
{
  "id": "unique-lin-combination",
  "level": "2",
  "url": "ex-basis-dim.html#unique-lin-combination",
  "type": "Exercise",
  "number": "3.5.11",
  "title": "",
  "body": "Let be a vector space over a field with a basis . Show that every can be written uniquely as a linear combination of . "
},
{
  "id": "sec-basis-examples",
  "level": "1",
  "url": "sec-basis-examples.html",
  "type": "Section",
  "number": "3.6",
  "title": "Examples",
  "body": " Examples  In this section we give few examples of basis of a given vector space. First recall the definition of Kronecker delta: We begin with the following example.  (Standard basis of and )  Let be a field and consider as a vector space over (refer to ). For , let , where is at the -th place. In other words, We claim that is a basis of . We first show that is linearly independent. Suppose . Therefore, for each we get Hence, .  Now we show that spans . Let . We can write as a linear combination of vectors in , indeed,   This also shows that We call the standard basis of .  Similarly, is a basis of . We call the standard basis .   (A basis of solution space - particular case)  Consider the matrix over  Its row-reduced echelon form is We want to find a basis for the solution space of . In we saw that the solution space of the system and the system is same. So, we work with the matrix .  Only the first row of is nonzero and the leading term occurs in the first column. We have Solutions of the system are obtained by assigning arbitrary values to and then computing the corresponding value for . Consider the vectors and . We claim that forms a basis for the space of solutions of . It is easy to see that is linearly independent.  Now suppose that is a solution of . Then, is also a solution of . Moreover, as we get that is a linear combination of . Hence, spans the space of solutions of .   (A basis of solution space - general case)  Let be a matrix and be its row-reduced echelon form. Let be the subspace of solutions of . Then, is also the subspace of solutions of . Suppose that the leading nonzero entries of nonzero rows of occur in columns . Let . Thus if then, for and for some we get the following: Solutions of can be obtained by assigning arbitrary values to ( ) and then obtaining corresponding values for ( ). Consider for each vectors obtained by putting at the -th place and at -th place for . Therefore, -th place of will be for To summarize, for , the -th place of the vector ( ) is given by   We claim that is linearly independent. Suppose that . We thus have . Therefore, for we get and thus . Hence, the claim is proved.   We now show that spans . Let . In particular, by eq. , . Hence, we have .  This also shows that    (A basis for polynomials of degree at most ) Let be a field and let be the subspace of all polynomials in one variable over of degree at most . Consider . Check that is a basis of . In particular .   (A basis of direct sum of two vector spaces)  Let and be finite-dimensional vector spaces over a field . Suppose that and are bases of and , respectively. Consider the vector space (refer to ). We claim that is a basis of . Indeed, if then, and . Since are bases, all and . Further, if then there are scalars such that . Therefore,   In particular, .   "
},
{
  "id": "standard-basis",
  "level": "2",
  "url": "sec-basis-examples.html#standard-basis",
  "type": "Example",
  "number": "3.6.1",
  "title": "(Standard basis of <span class=\"process-math\">\\(F^n\\)<\/span> and <span class=\"process-math\">\\(M_{n\\times 1}(F)\\)<\/span>).",
  "body": "(Standard basis of and )  Let be a field and consider as a vector space over (refer to ). For , let , where is at the -th place. In other words, We claim that is a basis of . We first show that is linearly independent. Suppose . Therefore, for each we get Hence, .  Now we show that spans . Let . We can write as a linear combination of vectors in , indeed,   This also shows that We call the standard basis of .  Similarly, is a basis of . We call the standard basis .  "
},
{
  "id": "example-19",
  "level": "2",
  "url": "sec-basis-examples.html#example-19",
  "type": "Example",
  "number": "3.6.2",
  "title": "(A basis of solution space - particular case).",
  "body": "(A basis of solution space - particular case)  Consider the matrix over  Its row-reduced echelon form is We want to find a basis for the solution space of . In we saw that the solution space of the system and the system is same. So, we work with the matrix .  Only the first row of is nonzero and the leading term occurs in the first column. We have Solutions of the system are obtained by assigning arbitrary values to and then computing the corresponding value for . Consider the vectors and . We claim that forms a basis for the space of solutions of . It is easy to see that is linearly independent.  Now suppose that is a solution of . Then, is also a solution of . Moreover, as we get that is a linear combination of . Hence, spans the space of solutions of .  "
},
{
  "id": "basis-of-homogeneous-solution-space",
  "level": "2",
  "url": "sec-basis-examples.html#basis-of-homogeneous-solution-space",
  "type": "Example",
  "number": "3.6.3",
  "title": "(A basis of solution space - general case).",
  "body": "(A basis of solution space - general case)  Let be a matrix and be its row-reduced echelon form. Let be the subspace of solutions of . Then, is also the subspace of solutions of . Suppose that the leading nonzero entries of nonzero rows of occur in columns . Let . Thus if then, for and for some we get the following: Solutions of can be obtained by assigning arbitrary values to ( ) and then obtaining corresponding values for ( ). Consider for each vectors obtained by putting at the -th place and at -th place for . Therefore, -th place of will be for To summarize, for , the -th place of the vector ( ) is given by   We claim that is linearly independent. Suppose that . We thus have . Therefore, for we get and thus . Hence, the claim is proved.   We now show that spans . Let . In particular, by eq. , . Hence, we have .  This also shows that   "
},
{
  "id": "example-21",
  "level": "2",
  "url": "sec-basis-examples.html#example-21",
  "type": "Example",
  "number": "3.6.4",
  "title": "(A basis for polynomials of degree at most <span class=\"process-math\">\\(n\\)<\/span>).",
  "body": "(A basis for polynomials of degree at most ) Let be a field and let be the subspace of all polynomials in one variable over of degree at most . Consider . Check that is a basis of . In particular .  "
},
{
  "id": "example-22",
  "level": "2",
  "url": "sec-basis-examples.html#example-22",
  "type": "Example",
  "number": "3.6.5",
  "title": "(A basis of direct sum of two vector spaces).",
  "body": "(A basis of direct sum of two vector spaces)  Let and be finite-dimensional vector spaces over a field . Suppose that and are bases of and , respectively. Consider the vector space (refer to ). We claim that is a basis of . Indeed, if then, and . Since are bases, all and . Further, if then there are scalars such that . Therefore,   In particular, .  "
},
{
  "id": "sec-new-vs",
  "level": "1",
  "url": "sec-new-vs.html",
  "type": "Section",
  "number": "3.7",
  "title": "Sum and direct sum of vector subspaces",
  "body": " Sum and direct sum of vector subspaces  This section describes a couple of ways to obtain a new vector space from given vector spaces.  (Sum of vector subspaces)  Let be subspaces of a vector space over a field . The sum of is denoted by and is defined by It is a subspace of .    It follows that the sum of is the smallest subspace of containing every .   We have the following result for the sum of two vector subspaces.   Let be finite-dimensional subspaces of a vector space . Then is finite-dimensional and    Assume that is an -basis for . By the definition of the sum of vector subspaces, we get that generates . Hence, is finite-dimensional. Since , the subspace is also finite-dimensional. Consider to be a basis of . By , can be completed to a basis for . Say is a basis for and is a basis for . The set spans . Now suppose We thus get , and hence, for every . Therefore, from the above equations, . As the set is linearly independent, for every . Thus, is linearly independent and hence a basis for . The equality for dimension now follows.   (Direct sum of vector subspaces)  Let be a vector space over a field , and let ( ) be vector subspaces. A subspace is said to be the direct sum of if every vector can be uniquely represented in the form , where . In this case, we write .    Let be a finite-dimensional vector space over a field . Let be subspaces of a vector space . Then, if and only if any of the following conditions hold:  and . for all .  and .      Let be a finite-dimensional vector space over a field and let be a proper subspace of . Then there exists a subspace of such that    Let be a basis for . By , there exists such that is a basis for . Consider to be the subspace spanned by . We claim that . Since is a basis of , given any there exists unique scalars such that . In particular, .  If then, for some scalars , we have the following. The linear independence of implies that all and all . Therefore, .  By using the first condition in , we get the required result.   "
},
{
  "id": "Sum-of-two-vector-spaces",
  "level": "2",
  "url": "sec-new-vs.html#Sum-of-two-vector-spaces",
  "type": "Definition",
  "number": "3.7.1",
  "title": "(Sum of vector subspaces).",
  "body": "(Sum of vector subspaces)  Let be subspaces of a vector space over a field . The sum of is denoted by and is defined by It is a subspace of .  "
},
{
  "id": "remark-13",
  "level": "2",
  "url": "sec-new-vs.html#remark-13",
  "type": "Remark",
  "number": "3.7.2",
  "title": "",
  "body": " It follows that the sum of is the smallest subspace of containing every .  "
},
{
  "id": "theorem-7",
  "level": "2",
  "url": "sec-new-vs.html#theorem-7",
  "type": "Theorem",
  "number": "3.7.3",
  "title": "",
  "body": " Let be finite-dimensional subspaces of a vector space . Then is finite-dimensional and   "
},
{
  "id": "proof-7",
  "level": "2",
  "url": "sec-new-vs.html#proof-7",
  "type": "Proof",
  "number": "3.7.1",
  "title": "",
  "body": "Assume that is an -basis for . By the definition of the sum of vector subspaces, we get that generates . Hence, is finite-dimensional. Since , the subspace is also finite-dimensional. Consider to be a basis of . By , can be completed to a basis for . Say is a basis for and is a basis for . The set spans . Now suppose We thus get , and hence, for every . Therefore, from the above equations, . As the set is linearly independent, for every . Thus, is linearly independent and hence a basis for . The equality for dimension now follows. "
},
{
  "id": "direct-sum",
  "level": "2",
  "url": "sec-new-vs.html#direct-sum",
  "type": "Definition",
  "number": "3.7.4",
  "title": "(Direct sum of vector subspaces).",
  "body": " (Direct sum of vector subspaces)  Let be a vector space over a field , and let ( ) be vector subspaces. A subspace is said to be the direct sum of if every vector can be uniquely represented in the form , where . In this case, we write .  "
},
{
  "id": "direct-sum-equivalent-conditions",
  "level": "2",
  "url": "sec-new-vs.html#direct-sum-equivalent-conditions",
  "type": "Theorem",
  "number": "3.7.5",
  "title": "",
  "body": " Let be a finite-dimensional vector space over a field . Let be subspaces of a vector space . Then, if and only if any of the following conditions hold:  and . for all .  and .    "
},
{
  "id": "complementary-subspace",
  "level": "2",
  "url": "sec-new-vs.html#complementary-subspace",
  "type": "Proposition",
  "number": "3.7.6",
  "title": "",
  "body": " Let be a finite-dimensional vector space over a field and let be a proper subspace of . Then there exists a subspace of such that   "
},
{
  "id": "proof-8",
  "level": "2",
  "url": "sec-new-vs.html#proof-8",
  "type": "Proof",
  "number": "3.7.2",
  "title": "",
  "body": "Let be a basis for . By , there exists such that is a basis for . Consider to be the subspace spanned by . We claim that . Since is a basis of , given any there exists unique scalars such that . In particular, .  If then, for some scalars , we have the following. The linear independence of implies that all and all . Therefore, .  By using the first condition in , we get the required result.  "
},
{
  "id": "sec-def-linear-transformation",
  "level": "1",
  "url": "sec-def-linear-transformation.html",
  "type": "Section",
  "number": "4.1",
  "title": "Definition of linear transformation",
  "body": " Definition of linear transformation   We begin with an example. Consider the map defined by . This is the anticlockwise rotation by in . This map has following two properties.  For any and any we have .  For any we have .  The above two properties will be a part of the defining properties of linear transformations.  Let , and define a map by We see that satisfies the above two properties as well. Moreover, and define the same map.    (Linear Transformation) Let and be vector spaces over a field . A mapping is said to be a linear transformation over or an -linear transformation if for every and any we have   .     A linear transformation over (resp., -linear transformation) is also called a linear map over (resp., an -linear map).     Show that any -linear transformation maps the zero vector to the zero vector.  Let be an -linear transformation. Show that for every and any  .  Show that .  Show that a composition of -linear transformation is an -linear transformation.    The first condition in may be considered as the commutativity between scalars and the map (this is elaborated in ). The second condition in corresponds to a group homomorphism between groups and .  (Linear extension of a map) A linear transformation on a vector space is completely determined by its action on a basis. Indeed, if is a basis of and then for some . Using properties of linear transformation we have . This process is called extending map linearly on or linear extension of the map.   The set of all -linear mappings between vector spaces and over is denoted by or when the context is clear by . We denote by . The set is called the dual space of , and it is denoted by . The dual space is in fact a vector space over (see ). An element of is called a linear functional .    Note that is a vector space over . The addition is given by . The scalar multiplication is given by     The vector space is also a ring with unity if we take composition of functions as multiplicative operation and identity map as the unity.   "
},
{
  "id": "def-linear-transformation",
  "level": "2",
  "url": "sec-def-linear-transformation.html#def-linear-transformation",
  "type": "Definition",
  "number": "4.1.1",
  "title": "(Linear Transformation).",
  "body": " (Linear Transformation) Let and be vector spaces over a field . A mapping is said to be a linear transformation over or an -linear transformation if for every and any we have   .   "
},
{
  "id": "remark-14",
  "level": "2",
  "url": "sec-def-linear-transformation.html#remark-14",
  "type": "Remark",
  "number": "4.1.2",
  "title": "",
  "body": " A linear transformation over (resp., -linear transformation) is also called a linear map over (resp., an -linear map).  "
},
{
  "id": "zero-maps-to-zero",
  "level": "2",
  "url": "sec-def-linear-transformation.html#zero-maps-to-zero",
  "type": "Checkpoint",
  "number": "4.1.3",
  "title": "",
  "body": "  Show that any -linear transformation maps the zero vector to the zero vector.  Let be an -linear transformation. Show that for every and any  .  Show that .  Show that a composition of -linear transformation is an -linear transformation.   "
},
{
  "id": "remark-15",
  "level": "2",
  "url": "sec-def-linear-transformation.html#remark-15",
  "type": "Remark",
  "number": "4.1.4",
  "title": "",
  "body": "The first condition in may be considered as the commutativity between scalars and the map (this is elaborated in ). The second condition in corresponds to a group homomorphism between groups and . "
},
{
  "id": "extending-linearly",
  "level": "2",
  "url": "sec-def-linear-transformation.html#extending-linearly",
  "type": "Remark",
  "number": "4.1.5",
  "title": "(Linear extension of a map).",
  "body": "(Linear extension of a map) A linear transformation on a vector space is completely determined by its action on a basis. Indeed, if is a basis of and then for some . Using properties of linear transformation we have . This process is called extending map linearly on or linear extension of the map. "
},
{
  "id": "End-vs",
  "level": "2",
  "url": "sec-def-linear-transformation.html#End-vs",
  "type": "Definition",
  "number": "4.1.6",
  "title": "",
  "body": " The set of all -linear mappings between vector spaces and over is denoted by or when the context is clear by . We denote by . The set is called the dual space of , and it is denoted by . The dual space is in fact a vector space over (see ). An element of is called a linear functional .  "
},
{
  "id": "Hom-as-vs",
  "level": "2",
  "url": "sec-def-linear-transformation.html#Hom-as-vs",
  "type": "Remark",
  "number": "4.1.7",
  "title": "",
  "body": " Note that is a vector space over . The addition is given by . The scalar multiplication is given by   "
},
{
  "id": "End-as-ring",
  "level": "2",
  "url": "sec-def-linear-transformation.html#End-as-ring",
  "type": "Remark",
  "number": "4.1.8",
  "title": "",
  "body": " The vector space is also a ring with unity if we take composition of functions as multiplicative operation and identity map as the unity.  "
},
{
  "id": "sec-examples-linear-transformations",
  "level": "1",
  "url": "sec-examples-linear-transformations.html",
  "type": "Section",
  "number": "4.2",
  "title": "Examples of linear transformations",
  "body": " Examples of linear transformations  We give examples of linear transformations. Most of the details are left to the reader.   (Left multiplication by a scalar)   Let be a vector space over a field . For consider the map left multiplication by , This is an -linear transformation.  A group homomorphism is a linear transformation if and only if for every , maps and commute with each other, i.e., .  We may consider a map defined by . This map is an -linear transformation as well.     (Linear transformation induced by a matrix)  Let be a field and let . The map is an -linear transformation. If then, is the -th column of .    (Formal derivative)  For a natural number consider a vector space of all polynomials in one variable of degree at most over a field . The formal derivative mapping is an -linear transformation.    (Hyperplane reflection) Consider the vector space over and let . We define a hyperplane reflection by Note that any vector on the -axis, say maps to itself under this map. On the other hand, any vector on the -axis, say is mapped to . So, the the map is a reflection along -axis . Check that is an -linear transformation.   (Trace as a linear map)  Let be a field and let be the vector space of matrices over . Consider as a vector space over itself. The trace map  is given by Check that this is an -linear transformation.   "
},
{
  "id": "left-multiplication",
  "level": "2",
  "url": "sec-examples-linear-transformations.html#left-multiplication",
  "type": "Example",
  "number": "4.2.1",
  "title": "(Left multiplication by a scalar).",
  "body": " (Left multiplication by a scalar)   Let be a vector space over a field . For consider the map left multiplication by , This is an -linear transformation.  A group homomorphism is a linear transformation if and only if for every , maps and commute with each other, i.e., .  We may consider a map defined by . This map is an -linear transformation as well.   "
},
{
  "id": "induced-by-matrix",
  "level": "2",
  "url": "sec-examples-linear-transformations.html#induced-by-matrix",
  "type": "Example",
  "number": "4.2.2",
  "title": "(Linear transformation induced by a matrix).",
  "body": " (Linear transformation induced by a matrix)  Let be a field and let . The map is an -linear transformation. If then, is the -th column of .  "
},
{
  "id": "formal-derivative",
  "level": "2",
  "url": "sec-examples-linear-transformations.html#formal-derivative",
  "type": "Example",
  "number": "4.2.3",
  "title": "(Formal derivative).",
  "body": " (Formal derivative)  For a natural number consider a vector space of all polynomials in one variable of degree at most over a field . The formal derivative mapping is an -linear transformation.  "
},
{
  "id": "hyperplane-reflection",
  "level": "2",
  "url": "sec-examples-linear-transformations.html#hyperplane-reflection",
  "type": "Example",
  "number": "4.2.4",
  "title": "(Hyperplane reflection).",
  "body": " (Hyperplane reflection) Consider the vector space over and let . We define a hyperplane reflection by Note that any vector on the -axis, say maps to itself under this map. On the other hand, any vector on the -axis, say is mapped to . So, the the map is a reflection along -axis . Check that is an -linear transformation. "
},
{
  "id": "trace",
  "level": "2",
  "url": "sec-examples-linear-transformations.html#trace",
  "type": "Example",
  "number": "4.2.5",
  "title": "(Trace as a linear map).",
  "body": " (Trace as a linear map)  Let be a field and let be the vector space of matrices over . Consider as a vector space over itself. The trace map  is given by Check that this is an -linear transformation.  "
},
{
  "id": "ex-lin-trans",
  "level": "1",
  "url": "ex-lin-trans.html",
  "type": "Exercises",
  "number": "4.3",
  "title": "Exercises",
  "body": "  In the following exercises verify that the given map is an -linear transformation.   given by .   given by . Here is considered as a vector space over .  Let be the set of all real-valued continuous functions on . Consider   Let be a finite-dimensional vector space over a field . Let be its basis. For each define as follows. Consider defined by    Let be vector spaces over a field . Show that if is an -linear map then there exists an -linear map . If is a linear functional then, we define . In diagrammatic terms (refer ):     "
},
{
  "id": "transpose-as-lin-trans",
  "level": "2",
  "url": "ex-lin-trans.html#transpose-as-lin-trans",
  "type": "Exercise",
  "number": "4.3.1",
  "title": "",
  "body": " given by . "
},
{
  "id": "exercise-46",
  "level": "2",
  "url": "ex-lin-trans.html#exercise-46",
  "type": "Exercise",
  "number": "4.3.2",
  "title": "",
  "body": " given by . Here is considered as a vector space over . "
},
{
  "id": "exercise-47",
  "level": "2",
  "url": "ex-lin-trans.html#exercise-47",
  "type": "Exercise",
  "number": "4.3.3",
  "title": "",
  "body": "Let be the set of all real-valued continuous functions on . Consider  "
},
{
  "id": "exercise-48",
  "level": "2",
  "url": "ex-lin-trans.html#exercise-48",
  "type": "Exercise",
  "number": "4.3.4",
  "title": "",
  "body": "Let be a finite-dimensional vector space over a field . Let be its basis. For each define as follows. Consider defined by  "
},
{
  "id": "contravariant-Hom",
  "level": "2",
  "url": "ex-lin-trans.html#contravariant-Hom",
  "type": "Exercise",
  "number": "4.3.5",
  "title": "",
  "body": "Let be vector spaces over a field . Show that if is an -linear map then there exists an -linear map . If is a linear functional then, we define . In diagrammatic terms (refer ):   "
},
{
  "id": "sec-kernel-image-of-hom",
  "level": "1",
  "url": "sec-kernel-image-of-hom.html",
  "type": "Section",
  "number": "4.4",
  "title": "Kernel and image of a linear homomorphism",
  "body": " Kernel and image of a linear homomorphism  We describe two important subspaces associated with a linear transformation, viz., the kernel and the image.  We define the kernel of a linear transformation.   Let be vector spaces over a field , and let be an -linear transformation. The kernel of is     Note that     We keep the notations of . The kernel of an -linear transformation is a subspace of .    We keep the notations of . The map is injective if and only if .    Suppose that is injective. If is such that then, we have (see ). Injectivity of implies that .  Now assume that . If are such that then, by -linearity of , we have . Therefore, .   We now define the image of a linear map.   Let be an -linear map between -vector spaces and . The image of is defined by     The image of is an -vector subspace of .   "
},
{
  "id": "def-kernel",
  "level": "2",
  "url": "sec-kernel-image-of-hom.html#def-kernel",
  "type": "Definition",
  "number": "4.4.1",
  "title": "",
  "body": " Let be vector spaces over a field , and let be an -linear transformation. The kernel of is   "
},
{
  "id": "remark-19",
  "level": "2",
  "url": "sec-kernel-image-of-hom.html#remark-19",
  "type": "Remark",
  "number": "4.4.2",
  "title": "",
  "body": " Note that   "
},
{
  "id": "lemma-3",
  "level": "2",
  "url": "sec-kernel-image-of-hom.html#lemma-3",
  "type": "Lemma",
  "number": "4.4.3",
  "title": "",
  "body": " We keep the notations of . The kernel of an -linear transformation is a subspace of .  "
},
{
  "id": "injective-iff-kenerl-is-zero",
  "level": "2",
  "url": "sec-kernel-image-of-hom.html#injective-iff-kenerl-is-zero",
  "type": "Lemma",
  "number": "4.4.4",
  "title": "",
  "body": " We keep the notations of . The map is injective if and only if .  "
},
{
  "id": "proof-9",
  "level": "2",
  "url": "sec-kernel-image-of-hom.html#proof-9",
  "type": "Proof",
  "number": "4.4.1",
  "title": "",
  "body": " Suppose that is injective. If is such that then, we have (see ). Injectivity of implies that .  Now assume that . If are such that then, by -linearity of , we have . Therefore, .  "
},
{
  "id": "def-image",
  "level": "2",
  "url": "sec-kernel-image-of-hom.html#def-image",
  "type": "Definition",
  "number": "4.4.5",
  "title": "",
  "body": " Let be an -linear map between -vector spaces and . The image of is defined by   "
},
{
  "id": "remark-20",
  "level": "2",
  "url": "sec-kernel-image-of-hom.html#remark-20",
  "type": "Remark",
  "number": "4.4.6",
  "title": "",
  "body": " The image of is an -vector subspace of .  "
},
{
  "id": "sec-rank-nullity",
  "level": "1",
  "url": "sec-rank-nullity.html",
  "type": "Section",
  "number": "4.5",
  "title": "Rank-Nullity Theorem",
  "body": " Rank-Nullity Theorem  We begin with a couple of definitions.   Let and be vector spaces over a field . Let be an -linear map. The dimension of the kernel of is called the nullity of . So,     Let and be vector spaces over a field . Let be an -linear map. The dimension of the image of is called the rank of . So,     (Rank-Nullity Theorem)  Let and be vector spaces over a field . Let be an -linear map. If is a finite-dimensional vector space over then,     Let be a basis for . We extend this basis to a basis of , say . We claim that is a basis for . We first check the independence. Suppose that Thus, and hence there exists such that Since is a basis we have and for each and . Therefore, is linearly independent.  Given any there exists such that . Let Using is a basis of we have the following. Hence spans . Since is linearly independent and spans the it is a basis of . We thus have Therefore,     Let and be finite-dimensional vector spaces over a field of the same dimension. Then, an linear map is injective if and only if it is surjective.   "
},
{
  "id": "def-nullity",
  "level": "2",
  "url": "sec-rank-nullity.html#def-nullity",
  "type": "Definition",
  "number": "4.5.1",
  "title": "",
  "body": " Let and be vector spaces over a field . Let be an -linear map. The dimension of the kernel of is called the nullity of . So,   "
},
{
  "id": "def-rank",
  "level": "2",
  "url": "sec-rank-nullity.html#def-rank",
  "type": "Definition",
  "number": "4.5.2",
  "title": "",
  "body": " Let and be vector spaces over a field . Let be an -linear map. The dimension of the image of is called the rank of . So,   "
},
{
  "id": "rank-nullity-theorem",
  "level": "2",
  "url": "sec-rank-nullity.html#rank-nullity-theorem",
  "type": "Theorem",
  "number": "4.5.3",
  "title": "(Rank-Nullity Theorem).",
  "body": " (Rank-Nullity Theorem)  Let and be vector spaces over a field . Let be an -linear map. If is a finite-dimensional vector space over then,   "
},
{
  "id": "proof-10",
  "level": "2",
  "url": "sec-rank-nullity.html#proof-10",
  "type": "Proof",
  "number": "4.5.1",
  "title": "",
  "body": " Let be a basis for . We extend this basis to a basis of , say . We claim that is a basis for . We first check the independence. Suppose that Thus, and hence there exists such that Since is a basis we have and for each and . Therefore, is linearly independent.  Given any there exists such that . Let Using is a basis of we have the following. Hence spans . Since is linearly independent and spans the it is a basis of . We thus have Therefore,   "
},
{
  "id": "injective-iff-surjective",
  "level": "2",
  "url": "sec-rank-nullity.html#injective-iff-surjective",
  "type": "Corollary",
  "number": "4.5.4",
  "title": "",
  "body": " Let and be finite-dimensional vector spaces over a field of the same dimension. Then, an linear map is injective if and only if it is surjective.  "
},
{
  "id": "sec-kernel-of-trace",
  "level": "1",
  "url": "sec-kernel-of-trace.html",
  "type": "Section",
  "number": "4.6",
  "title": "A basis for the kernel of trace map",
  "body": " A basis for the kernel of trace map  Using Rank-Nullity Theorem, we give an explicit basis for the kernel of the trace map.  Let be a natural number. Consider matrices over a field , . Let be the matrix with -th entry and all other entries zero. We have observed that is a basis for . Recall that we defined the trace of map in as follows.    We keep the notations of the above paragraph. A basis of the kernel of the trace map is     By Rank-Nullity Theorem ( ), For any the trace of the matrix is . Thus is surjective. Therefore, and   Note that for every and for every .  Suppose that there exists such that In other words the above equation is Hence, . We thus get is linearly independent.  The cardinality of the set is . Since the the set is a maximal linearly independent subset of , i.e., it is a basis of (see and ).   "
},
{
  "id": "theorem-10",
  "level": "2",
  "url": "sec-kernel-of-trace.html#theorem-10",
  "type": "Theorem",
  "number": "4.6.1",
  "title": "",
  "body": " We keep the notations of the above paragraph. A basis of the kernel of the trace map is   "
},
{
  "id": "proof-11",
  "level": "2",
  "url": "sec-kernel-of-trace.html#proof-11",
  "type": "Proof",
  "number": "4.6.1",
  "title": "",
  "body": " By Rank-Nullity Theorem ( ), For any the trace of the matrix is . Thus is surjective. Therefore, and   Note that for every and for every .  Suppose that there exists such that In other words the above equation is Hence, . We thus get is linearly independent.  The cardinality of the set is . Since the the set is a maximal linearly independent subset of , i.e., it is a basis of (see and ).  "
},
{
  "id": "sec-ordered-basis-linear-trans",
  "level": "1",
  "url": "sec-ordered-basis-linear-trans.html",
  "type": "Section",
  "number": "4.7",
  "title": "Ordered basis and linear maps",
  "body": " Ordered basis and linear maps  In this section we give a matrix representation of a linear transformation. We consider only finite-dimensional vector spaces in this section.   Ordered basis  In this subsection, we define notion of an ordered basis of a finite-dimensional vector space. Once an ordered basis for a vector space is fixed one may then define coordinates for the vector space.   (Ordered basis) Let be a finite-dimensional vector space over a field . An ordered basis for is a finite sequence of vectors which is linearly independent and spans .   If a sequence is an ordered basis for then we write it as . Thus, we consider ordered basis and ordered basis to be distinct for every non-identity permutation .  To put it in different words, in an ordered basis the order in which basis vectors occur is important. For instance, the ordered basis is different from . However, as sets and are the same.    Let be an ordered basis of . Given there is a unique -tuple of scalars such that (see ). We call the -th coordinate of relative to the ordered basis  .     Matrix representation of a linear transformation  Now we are in a position to give matrix representation for linear transformation with respect to ordered bases.  Let and be finite-dimensional vector spaces over a field . Suppose that and are ordered bases of and , respectively. Let be an -linear transformation.  Since is a basis, for a given there are uniquely determined such that (see ). Then, Hence, is completely determined by for .  Because the ordered set is a basis of we get, for every , Therefore, Therefore, the -th coordinate of with respect to is .  We obtain the matrix of relative to ordered bases  and , We observe the following. In particular, if then Thus, the action of on gives the -th column of the matrix.  We emphasize that matrix of a linear transformation depends on the choice of bases.   "
},
{
  "id": "ordered-basis",
  "level": "2",
  "url": "sec-ordered-basis-linear-trans.html#ordered-basis",
  "type": "Definition",
  "number": "4.7.1",
  "title": "(Ordered basis).",
  "body": " (Ordered basis) Let be a finite-dimensional vector space over a field . An ordered basis for is a finite sequence of vectors which is linearly independent and spans . "
},
{
  "id": "remark-21",
  "level": "2",
  "url": "sec-ordered-basis-linear-trans.html#remark-21",
  "type": "Remark",
  "number": "4.7.2",
  "title": "",
  "body": " If a sequence is an ordered basis for then we write it as . Thus, we consider ordered basis and ordered basis to be distinct for every non-identity permutation .  To put it in different words, in an ordered basis the order in which basis vectors occur is important. For instance, the ordered basis is different from . However, as sets and are the same.  "
},
{
  "id": "coordinates",
  "level": "2",
  "url": "sec-ordered-basis-linear-trans.html#coordinates",
  "type": "Definition",
  "number": "4.7.3",
  "title": "",
  "body": " Let be an ordered basis of . Given there is a unique -tuple of scalars such that (see ). We call the -th coordinate of relative to the ordered basis  .  "
},
{
  "id": "p-82",
  "level": "2",
  "url": "sec-ordered-basis-linear-trans.html#p-82",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matrix of relative to ordered bases "
},
{
  "id": "remark-22",
  "level": "2",
  "url": "sec-ordered-basis-linear-trans.html#remark-22",
  "type": "Remark",
  "number": "4.7.4",
  "title": "",
  "body": "We emphasize that matrix of a linear transformation depends on the choice of bases. "
},
{
  "id": "ex-ordered-basis",
  "level": "1",
  "url": "ex-ordered-basis.html",
  "type": "Exercises",
  "number": "4.8",
  "title": "Exercises",
  "body": "  In the following exercises, compute the matrix of a given linear transformation with respect to given bases.  Let over . Consider ordered bases . Let be a linear transformation given by .   Let and be vector spaces over a field . Let . Consider ordered bases and of and , respectively. Consider the linear transformation given by .  Suppose that are finite-dimensional vector spaces over a field . Let and be ordered bases of and , respectively. Consider the following set. This is an ordered basis of . Consider the projection given by .  Let be the standard ordered basis of (refer ) and let be another ordered basis of over . Let be defined by . Let be defined by . Find and .   Let and be finite-dimensional vector spaces over a field with bases , and respectively. Consider -linear maps and . Show that the matrix of with respect to bases and is .   "
},
{
  "id": "exercise-50",
  "level": "2",
  "url": "ex-ordered-basis.html#exercise-50",
  "type": "Exercise",
  "number": "4.8.1",
  "title": "",
  "body": "Let over . Consider ordered bases . Let be a linear transformation given by . "
},
{
  "id": "exercise-51",
  "level": "2",
  "url": "ex-ordered-basis.html#exercise-51",
  "type": "Exercise",
  "number": "4.8.2",
  "title": "",
  "body": "Let and be vector spaces over a field . Let . Consider ordered bases and of and , respectively. Consider the linear transformation given by . "
},
{
  "id": "exercise-52",
  "level": "2",
  "url": "ex-ordered-basis.html#exercise-52",
  "type": "Exercise",
  "number": "4.8.3",
  "title": "",
  "body": "Suppose that are finite-dimensional vector spaces over a field . Let and be ordered bases of and , respectively. Consider the following set. This is an ordered basis of . Consider the projection given by . "
},
{
  "id": "exercise-53",
  "level": "2",
  "url": "ex-ordered-basis.html#exercise-53",
  "type": "Exercise",
  "number": "4.8.4",
  "title": "",
  "body": "Let be the standard ordered basis of (refer ) and let be another ordered basis of over . Let be defined by . Let be defined by . Find and . "
},
{
  "id": "linear-map-matrix-composition",
  "level": "2",
  "url": "ex-ordered-basis.html#linear-map-matrix-composition",
  "type": "Exercise",
  "number": "4.8.5",
  "title": "",
  "body": "Let and be finite-dimensional vector spaces over a field with bases , and respectively. Consider -linear maps and . Show that the matrix of with respect to bases and is .  "
},
{
  "id": "sec-exact-seq",
  "level": "1",
  "url": "sec-exact-seq.html",
  "type": "Section",
  "number": "4.9",
  "title": "Exact sequences (Optional)",
  "body": " Exact sequences (Optional)  We define an useful notion of exact sequences. Throughout this section we assume that and are vector spaces (not necessarily finite-dimensional) over a field .   Diagram of vector spaces : Let be an -linear map from to , and an -linear map from to , be an -linear map from to . This information we write schematically in the form of a diagram:   We emphasize that the diagram is not a mathematical object but a valuable tool to facilitate reading an argument.  We make the following conventions.  The trivial subspace of a vector space will be denoted by when used in a diagram.  Since there is a unique linear map from the trivial subspace to the vector space (resp., from a vector space to its trivial subspace) we will not write the name for this linear map.    Let and be -linear maps. The ordered pair is called an exact sequence if    By and , the pair is an exact sequence if and only if .    A diagram of vector spaces with -linear maps  is called an exact sequence if the ordered pair is exact, i.e., if .    Consider the following diagram of vector spaces with -linear maps , and . This diagram is said to be exact at Y if is exact. Similarly, this diagram is said to be exact at Z if is exact.    A diagram of vector spaces with -linear maps  is called a short exact sequence if is injective, is surjective, and the diagram is exact at .    (Dimension as an additive function)  Let , and be finite-dimensional vector spaces over a field . Consider the following short exact sequence of vector spaces with -linear maps . We then have    By , is injective, is surjective, and . Let be a basis for . We claim that is a basis for . Suppose that , i.e., . Hence, . Since is injective, we get . The linear independence of implies that for each . Therefore, is linearly independent.  We now show that spans . Indeed, suppose that . There exists unique such that . Hence, .  We thus have proved that is a basis (this shows that is -isomorphic to , see ). Therefore, using , we have .  Furthermore, using is surjective, we have  By Rank-Nullity Theorem (see ), applied to the linear transformation , we get that In other words, , and hence the theorem is proved.   In fact following more general result is true. Let be finite-dimensional vector spaces over a field . Suppose that we have the following exact sequence with -linear maps . Thus, we have is injective, is surjective, and for each . Then,   We will not prove this result. A possible way to prove this result is by 'splitting' the exact sequence into several short exact sequences: One may then apply for every short exact sequence obtained above to get the result.    "
},
{
  "id": "p-83",
  "level": "2",
  "url": "sec-exact-seq.html#p-83",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Diagram of vector spaces "
},
{
  "id": "exact-seq",
  "level": "2",
  "url": "sec-exact-seq.html#exact-seq",
  "type": "Definition",
  "number": "4.9.1",
  "title": "",
  "body": "Let and be -linear maps. The ordered pair is called an exact sequence if  "
},
{
  "id": "remark-23",
  "level": "2",
  "url": "sec-exact-seq.html#remark-23",
  "type": "Remark",
  "number": "4.9.2",
  "title": "",
  "body": " By and , the pair is an exact sequence if and only if .  "
},
{
  "id": "exact-diagram",
  "level": "2",
  "url": "sec-exact-seq.html#exact-diagram",
  "type": "Definition",
  "number": "4.9.3",
  "title": "",
  "body": " A diagram of vector spaces with -linear maps  is called an exact sequence if the ordered pair is exact, i.e., if .  "
},
{
  "id": "exact-at",
  "level": "2",
  "url": "sec-exact-seq.html#exact-at",
  "type": "Definition",
  "number": "4.9.4",
  "title": "",
  "body": " Consider the following diagram of vector spaces with -linear maps , and . This diagram is said to be exact at Y if is exact. Similarly, this diagram is said to be exact at Z if is exact.  "
},
{
  "id": "short-exact-seq",
  "level": "2",
  "url": "sec-exact-seq.html#short-exact-seq",
  "type": "Definition",
  "number": "4.9.5",
  "title": "",
  "body": " A diagram of vector spaces with -linear maps  is called a short exact sequence if is injective, is surjective, and the diagram is exact at .  "
},
{
  "id": "additivity-of-dim",
  "level": "2",
  "url": "sec-exact-seq.html#additivity-of-dim",
  "type": "Theorem",
  "number": "4.9.6",
  "title": "(Dimension as an additive function).",
  "body": " (Dimension as an additive function)  Let , and be finite-dimensional vector spaces over a field . Consider the following short exact sequence of vector spaces with -linear maps . We then have   "
},
{
  "id": "proof-12",
  "level": "2",
  "url": "sec-exact-seq.html#proof-12",
  "type": "Proof",
  "number": "4.9.1",
  "title": "",
  "body": "By , is injective, is surjective, and . Let be a basis for . We claim that is a basis for . Suppose that , i.e., . Hence, . Since is injective, we get . The linear independence of implies that for each . Therefore, is linearly independent.  We now show that spans . Indeed, suppose that . There exists unique such that . Hence, .  We thus have proved that is a basis (this shows that is -isomorphic to , see ). Therefore, using , we have .  Furthermore, using is surjective, we have  By Rank-Nullity Theorem (see ), applied to the linear transformation , we get that In other words, , and hence the theorem is proved. "
},
{
  "id": "remark-24",
  "level": "2",
  "url": "sec-exact-seq.html#remark-24",
  "type": "Remark",
  "number": "4.9.7",
  "title": "",
  "body": " In fact following more general result is true. Let be finite-dimensional vector spaces over a field . Suppose that we have the following exact sequence with -linear maps . Thus, we have is injective, is surjective, and for each . Then,   We will not prove this result. A possible way to prove this result is by 'splitting' the exact sequence into several short exact sequences: One may then apply for every short exact sequence obtained above to get the result.   "
},
{
  "id": "ex-exact-seq",
  "level": "1",
  "url": "ex-exact-seq.html",
  "type": "Exercises",
  "number": "4.10",
  "title": "Exercises",
  "body": "  We gather some easy to derive properties of exact sequences. We assume that and are vector spaces (not necessarily finite-dimensional) over a field .  We make the following conventions.  The trivial subspace of a vector space will be denoted by when used in a diagram.  Since there is a unique linear map from the trivial subspace to the vector space (resp., from a vector space to its trivial subspace) we will not write the name for this linear map.     If is an exact sequence then .  Show that is exact if and only if is injective.  Show that is exact if and only if is surjective.  Show that is exact if and only if is bijective if and only if is an -isomorphism.  Show that given an -linear map we have the following short exact sequence.   Let be a finite-dimensional vector space over a field . Suppose that we have the following diagram with exact row and is an -linear map: Show that there exists an -linear transformation such that . Let be a basis for over . Since, is surjective (see ), there exists such that for each . Define .  Let be a finite-dimensional vector space and be a vector space over . Suppose that we have the following diagram with exact row and is an -linear map: Show that there exists an -linear map such that . By , is injective and hence is also finite-dimensional. Let be a basis of . Then, is an -linearly independent subset of . Extend to a basis for , say . Put and .  "
},
{
  "id": "exercise-55",
  "level": "2",
  "url": "ex-exact-seq.html#exercise-55",
  "type": "Exercise",
  "number": "4.10.1",
  "title": "",
  "body": "If is an exact sequence then . "
},
{
  "id": "injective-ses",
  "level": "2",
  "url": "ex-exact-seq.html#injective-ses",
  "type": "Exercise",
  "number": "4.10.2",
  "title": "",
  "body": "Show that is exact if and only if is injective. "
},
{
  "id": "surjective-ses",
  "level": "2",
  "url": "ex-exact-seq.html#surjective-ses",
  "type": "Exercise",
  "number": "4.10.3",
  "title": "",
  "body": "Show that is exact if and only if is surjective. "
},
{
  "id": "exercise-58",
  "level": "2",
  "url": "ex-exact-seq.html#exercise-58",
  "type": "Exercise",
  "number": "4.10.4",
  "title": "",
  "body": "Show that is exact if and only if is bijective if and only if is an -isomorphism. "
},
{
  "id": "exercise-59",
  "level": "2",
  "url": "ex-exact-seq.html#exercise-59",
  "type": "Exercise",
  "number": "4.10.5",
  "title": "",
  "body": "Show that given an -linear map we have the following short exact sequence.  "
},
{
  "id": "projective-module",
  "level": "2",
  "url": "ex-exact-seq.html#projective-module",
  "type": "Exercise",
  "number": "4.10.6",
  "title": "",
  "body": "Let be a finite-dimensional vector space over a field . Suppose that we have the following diagram with exact row and is an -linear map: Show that there exists an -linear transformation such that . Let be a basis for over . Since, is surjective (see ), there exists such that for each . Define . "
},
{
  "id": "injective-module",
  "level": "2",
  "url": "ex-exact-seq.html#injective-module",
  "type": "Exercise",
  "number": "4.10.7",
  "title": "",
  "body": "Let be a finite-dimensional vector space and be a vector space over . Suppose that we have the following diagram with exact row and is an -linear map: Show that there exists an -linear map such that . By , is injective and hence is also finite-dimensional. Let be a basis of . Then, is an -linearly independent subset of . Extend to a basis for , say . Put and . "
},
{
  "id": "sec-isomorphisms",
  "level": "1",
  "url": "sec-isomorphisms.html",
  "type": "Section",
  "number": "5.1",
  "title": "Definition of Isomorphism",
  "body": " Definition of Isomorphism  We define a notion of isomorphism of vector spaces. Isomorphic vector spaces will have the same vector space structures.    Let be a linear transformation of vector spaces over a field . We say that is an isomorphism over (resp., -isomorphism ) between and if is bijective.  Vector spaces and are said to be isomorphic if there is a bijective -linear transformation from onto .  Isomorphic vector spaces are denoted by . The set of all isomorphisms between and is denoted by . We denote by and it is called -automorphisms of .     Let be a bijective -linear transformation. The set-theoretic inverse of is also an -linear transformation.    Let be the set-theoretic inverse of . We need to show that for any and any , .  Since is bijective, there exists unique such that and . Further, the -linearity and bijectivity of implies that and . Thus, we also get . Hence,     In view of , an -linear map is an -isomorphism if and only if there exists an -linear map such that and .    If is an injective -linear transformation then, .   See the first part of the proof of    Let be finite-dimensional vector spaces over a field of the same dimension, and let be an -linear map. If is injective (resp., surjective) then is an -isomorphism.   This follows from and .   Let be an -isomorphism. If is a basis of then is a basis of . In particular, isomorphic vector spaces have the same dimension.   A linear functional (see ) is an isomorphism if and only if .  Let and be vector spaces over a field . Let . Consider ordered bases and of and , respectively. Then, linear transformation given by is an -isomorphism.   Every finite-dimensional vector space over a field of dimension is isomorphic to .   Let be a vector space over , and let . Fix an ordered basis for and consider the standard ordered basis for (refer ). By , for every there exists unique scalars such that . Thus, the map is well-defined. It is also easy to verify that is an -isomorphism.   Let and be bases of and , respectively. Consider the mapping such that . Extend the map linearly on (see ). Then, the map is an isomorphism.   We observed earlier ( ) that is a ring. We denote the group of all units in by . The group is called the general linear group of . So, an element of is an -isomorphism of onto itself.  "
},
{
  "id": "isomorphism",
  "level": "2",
  "url": "sec-isomorphisms.html#isomorphism",
  "type": "Definition",
  "number": "5.1.1",
  "title": "",
  "body": "  Let be a linear transformation of vector spaces over a field . We say that is an isomorphism over (resp., -isomorphism ) between and if is bijective.  Vector spaces and are said to be isomorphic if there is a bijective -linear transformation from onto .  Isomorphic vector spaces are denoted by . The set of all isomorphisms between and is denoted by . We denote by and it is called -automorphisms of .   "
},
{
  "id": "linearity-of-inverse",
  "level": "2",
  "url": "sec-isomorphisms.html#linearity-of-inverse",
  "type": "Lemma",
  "number": "5.1.2",
  "title": "",
  "body": " Let be a bijective -linear transformation. The set-theoretic inverse of is also an -linear transformation.  "
},
{
  "id": "proof-13",
  "level": "2",
  "url": "sec-isomorphisms.html#proof-13",
  "type": "Proof",
  "number": "5.1.1",
  "title": "",
  "body": " Let be the set-theoretic inverse of . We need to show that for any and any , .  Since is bijective, there exists unique such that and . Further, the -linearity and bijectivity of implies that and . Thus, we also get . Hence,   "
},
{
  "id": "remark-25",
  "level": "2",
  "url": "sec-isomorphisms.html#remark-25",
  "type": "Remark",
  "number": "5.1.3",
  "title": "",
  "body": " In view of , an -linear map is an -isomorphism if and only if there exists an -linear map such that and .  "
},
{
  "id": "injective-iso-to-image",
  "level": "2",
  "url": "sec-isomorphisms.html#injective-iso-to-image",
  "type": "Lemma",
  "number": "5.1.4",
  "title": "",
  "body": " If is an injective -linear transformation then, .  "
},
{
  "id": "proof-14",
  "level": "2",
  "url": "sec-isomorphisms.html#proof-14",
  "type": "Proof",
  "number": "5.1.2",
  "title": "",
  "body": "See the first part of the proof of  "
},
{
  "id": "inj-iff-iso",
  "level": "2",
  "url": "sec-isomorphisms.html#inj-iff-iso",
  "type": "Lemma",
  "number": "5.1.5",
  "title": "",
  "body": " Let be finite-dimensional vector spaces over a field of the same dimension, and let be an -linear map. If is injective (resp., surjective) then is an -isomorphism.  "
},
{
  "id": "proof-15",
  "level": "2",
  "url": "sec-isomorphisms.html#proof-15",
  "type": "Proof",
  "number": "5.1.3",
  "title": "",
  "body": "This follows from and . "
},
{
  "id": "iso-implies-same-dim",
  "level": "2",
  "url": "sec-isomorphisms.html#iso-implies-same-dim",
  "type": "Lemma",
  "number": "5.1.6",
  "title": "",
  "body": " Let be an -isomorphism. If is a basis of then is a basis of . In particular, isomorphic vector spaces have the same dimension.  "
},
{
  "id": "exercise-62",
  "level": "2",
  "url": "sec-isomorphisms.html#exercise-62",
  "type": "Checkpoint",
  "number": "5.1.7",
  "title": "",
  "body": "A linear functional (see ) is an isomorphism if and only if . "
},
{
  "id": "row-column-space-iso",
  "level": "2",
  "url": "sec-isomorphisms.html#row-column-space-iso",
  "type": "Checkpoint",
  "number": "5.1.8",
  "title": "",
  "body": "Let and be vector spaces over a field . Let . Consider ordered bases and of and , respectively. Then, linear transformation given by is an -isomorphism. "
},
{
  "id": "iso-to-n-dim-vs",
  "level": "2",
  "url": "sec-isomorphisms.html#iso-to-n-dim-vs",
  "type": "Proposition",
  "number": "5.1.9",
  "title": "",
  "body": " Every finite-dimensional vector space over a field of dimension is isomorphic to .  "
},
{
  "id": "proof-16",
  "level": "2",
  "url": "sec-isomorphisms.html#proof-16",
  "type": "Proof",
  "number": "5.1.4",
  "title": "",
  "body": "Let be a vector space over , and let . Fix an ordered basis for and consider the standard ordered basis for (refer ). By , for every there exists unique scalars such that . Thus, the map is well-defined. It is also easy to verify that is an -isomorphism. "
},
{
  "id": "iso-different-bases-endo",
  "level": "2",
  "url": "sec-isomorphisms.html#iso-different-bases-endo",
  "type": "Lemma",
  "number": "5.1.10",
  "title": "",
  "body": " Let and be bases of and , respectively. Consider the mapping such that . Extend the map linearly on (see ). Then, the map is an isomorphism.  "
},
{
  "id": "remark-26",
  "level": "2",
  "url": "sec-isomorphisms.html#remark-26",
  "type": "Remark",
  "number": "5.1.11",
  "title": "",
  "body": "We observed earlier ( ) that is a ring. We denote the group of all units in by . The group is called the general linear group of . So, an element of is an -isomorphism of onto itself. "
},
{
  "id": "sec-iso-between-matrices-Hom",
  "level": "1",
  "url": "sec-iso-between-matrices-Hom.html",
  "type": "Section",
  "number": "5.2",
  "title": "Matrices and a space of linear transformations",
  "body": " Matrices and a space of linear transformations  In this section we give dictionary between the space of all matrices over a field and the space of all -linear transformations between vector spaces and of dimensions and , respectively. We begin with the following observations.  Let be a matrix representation of a linear transformation with respect to bases and . By , there are -isomorphisms By we have -isomorphisms Consider the following composition of maps. The map is the left multiplication by the matrix (see ). The composition above is denoted by . Thus, By eq. it follows that the given linear transformation is the same as the composition transformation given in eq. . Furthermore, given a matrix we can define using and eq. .  Suppose that and are ordered bases for and , respectively. The composition in the eq. is given by While the composition in eq. is given by    (An illustrative example for the map ) Consider vector spaces and over . Let and be standard bases for and , respectively. Consider the following matrix. The map is given by The map is given by The map is given by Combining all the above maps we obtained that the is given by   Fixing bases and we have defined following maps: one is and the other one is The next theorem shows that these maps are in fact -linear inverses of each other.   Let and be vector spaces over a field . Fix bases and of and , respectively. Further assume that and . Consider the map Here is as defined in . The map is an -isomorphism.   It is left to the reader to check that is an -linear transformation. The observations made above eq. shows that is surjective. We show the injectivity of by showing (see ). Suppose that is such that . Therefore, for any we have Since, and are isomorphisms, we get for every . Furthermore, and are isomorphisms, and hence their composition is surjective. Therefore, . Recall that is a basis for , and is the -th column of (see eq. ). Hence, , and is injective.   We have .   "
},
{
  "id": "remark-27",
  "level": "2",
  "url": "sec-iso-between-matrices-Hom.html#remark-27",
  "type": "Remark",
  "number": "5.2.1",
  "title": "",
  "body": "Suppose that and are ordered bases for and , respectively. The composition in the eq. is given by While the composition in eq. is given by  "
},
{
  "id": "example-28",
  "level": "2",
  "url": "sec-iso-between-matrices-Hom.html#example-28",
  "type": "Example",
  "number": "5.2.2",
  "title": "(An illustrative example  for the map <span class=\"process-math\">\\(\\ell_A\\)<\/span>).",
  "body": " (An illustrative example for the map ) Consider vector spaces and over . Let and be standard bases for and , respectively. Consider the following matrix. The map is given by The map is given by The map is given by Combining all the above maps we obtained that the is given by  "
},
{
  "id": "iso-matrices-Hom",
  "level": "2",
  "url": "sec-iso-between-matrices-Hom.html#iso-matrices-Hom",
  "type": "Theorem",
  "number": "5.2.3",
  "title": "",
  "body": " Let and be vector spaces over a field . Fix bases and of and , respectively. Further assume that and . Consider the map Here is as defined in . The map is an -isomorphism.  "
},
{
  "id": "proof-17",
  "level": "2",
  "url": "sec-iso-between-matrices-Hom.html#proof-17",
  "type": "Proof",
  "number": "5.2.1",
  "title": "",
  "body": "It is left to the reader to check that is an -linear transformation. The observations made above eq. shows that is surjective. We show the injectivity of by showing (see ). Suppose that is such that . Therefore, for any we have Since, and are isomorphisms, we get for every . Furthermore, and are isomorphisms, and hence their composition is surjective. Therefore, . Recall that is a basis for , and is the -th column of (see eq. ). Hence, , and is injective. "
},
{
  "id": "dim-of-matrices",
  "level": "2",
  "url": "sec-iso-between-matrices-Hom.html#dim-of-matrices",
  "type": "Corollary",
  "number": "5.2.4",
  "title": "",
  "body": " We have .  "
},
{
  "id": "sec-isomorphism-invertible-matrix",
  "level": "1",
  "url": "sec-isomorphism-invertible-matrix.html",
  "type": "Section",
  "number": "5.3",
  "title": "Isomorphism and invertible matrix",
  "body": " Isomorphism and invertible matrix  We show that a matrix representation of an isomorphism is invertible. We keep the notations of .   A matrix represented by an isomorphism is invertible.    Let and be finite-dimensional vector spaces over a field . Suppose that and are ordered bases of and , respectively. Let be an -linear isomorphism. Let the matrix of relative to ordered bases and be Recall from that .  By , the set-theoretic inverse of the map, is also -linear. Suppose that The matrix of relative to ordered bases and is   By , the composition is determined by its action on . We have the following. By , we must have We thus obtain that the -th column of the following matrix is . Therefore, is the identity matrix.  Similar computations for yield is the identity matrix.    Every invertible matrix induces an -linear isomorphism of onto itself.   Let be an invertible matrix and be its inverse. Consider the linear maps induced by , and induced by , . Thus, Therefore, as well as are isomorphisms.   Let be a finite-dimensional vector space over a field . Suppose that and are bases of . Then there exists an invertible matrix such that the coordinates of any vector with respect to is the same as the coordinates of with respect to the basis .   Let , i.e., the coordinates of with respect to are . Suppose that We thus have the following. By , the coordinates of with respect to the basis are Put Using we therefore have the following. Since, and are -isomorphisms (see and ), the -linear map is also an -isomorphism.. Moreover the matrix of with respect to , . By , is invertible and thus we get the result.   Note that the matrix in is the matrix of the identity map with respect to bases and in that order, i.e.,     Let be finite-dimensional vector spaces over a field . Let be an -linear map. Let be bases of and be bases of . Then there exists invertible matrices such that    We consider the following composition of maps with bases considered written in brackets. We have . By we get the result.  As a special case of the above theorem we obtain the following result.   Let be finite-dimensional vector space over a field . Suppose that are ordered bases of . Let be an -linear map. Let and be matrices of with respect to bases and , respectively. Then, there exists an invertible matrix such that     Let be finite-dimensional vector spaces over a field and let be an -linear map. Then there exists bases in which the matrix of has a block-diagonal form where and is identity matrix, and are zero matrices of appropriate size.   Suppose that and . By Rank-Nullity Theorem (see ), . Let be a basis for . We extend it to a basis of , say . By , we have  We claim that is a basis of . Indeed, suppose that . Hence, . By eq. and linear independence of , we have for every .  By , we write Let be a basis of .  Consider the ordered bases and of and , respectively. The matrix of with respect to these bases is Hence the theorem is proved.    There exists bases in which the matrix of an -linear isomorphism is the identity matrix.   The above corollary should remind the reader of the following result. A square matrix over a field is invertible if and only if it is a product of elementary matrices.   "
},
{
  "id": "matrix-iso-invertible",
  "level": "2",
  "url": "sec-isomorphism-invertible-matrix.html#matrix-iso-invertible",
  "type": "Proposition",
  "number": "5.3.1",
  "title": "",
  "body": " A matrix represented by an isomorphism is invertible.  "
},
{
  "id": "proof-18",
  "level": "2",
  "url": "sec-isomorphism-invertible-matrix.html#proof-18",
  "type": "Proof",
  "number": "5.3.1",
  "title": "",
  "body": " Let and be finite-dimensional vector spaces over a field . Suppose that and are ordered bases of and , respectively. Let be an -linear isomorphism. Let the matrix of relative to ordered bases and be Recall from that .  By , the set-theoretic inverse of the map, is also -linear. Suppose that The matrix of relative to ordered bases and is   By , the composition is determined by its action on . We have the following. By , we must have We thus obtain that the -th column of the following matrix is . Therefore, is the identity matrix.  Similar computations for yield is the identity matrix.  "
},
{
  "id": "lemma-10",
  "level": "2",
  "url": "sec-isomorphism-invertible-matrix.html#lemma-10",
  "type": "Lemma",
  "number": "5.3.2",
  "title": "",
  "body": " Every invertible matrix induces an -linear isomorphism of onto itself.  "
},
{
  "id": "proof-19",
  "level": "2",
  "url": "sec-isomorphism-invertible-matrix.html#proof-19",
  "type": "Proof",
  "number": "5.3.2",
  "title": "",
  "body": "Let be an invertible matrix and be its inverse. Consider the linear maps induced by , and induced by , . Thus, Therefore, as well as are isomorphisms. "
},
{
  "id": "change-of-basis-matrix",
  "level": "2",
  "url": "sec-isomorphism-invertible-matrix.html#change-of-basis-matrix",
  "type": "Lemma",
  "number": "5.3.3",
  "title": "",
  "body": " Let be a finite-dimensional vector space over a field . Suppose that and are bases of . Then there exists an invertible matrix such that the coordinates of any vector with respect to is the same as the coordinates of with respect to the basis .  "
},
{
  "id": "proof-20",
  "level": "2",
  "url": "sec-isomorphism-invertible-matrix.html#proof-20",
  "type": "Proof",
  "number": "5.3.3",
  "title": "",
  "body": "Let , i.e., the coordinates of with respect to are . Suppose that We thus have the following. By , the coordinates of with respect to the basis are Put Using we therefore have the following. Since, and are -isomorphisms (see and ), the -linear map is also an -isomorphism.. Moreover the matrix of with respect to , . By , is invertible and thus we get the result. "
},
{
  "id": "change-of-basis-matrix-identity-map",
  "level": "2",
  "url": "sec-isomorphism-invertible-matrix.html#change-of-basis-matrix-identity-map",
  "type": "Remark",
  "number": "5.3.4",
  "title": "",
  "body": " Note that the matrix in is the matrix of the identity map with respect to bases and in that order, i.e.,   "
},
{
  "id": "change-of-basis-Hom",
  "level": "2",
  "url": "sec-isomorphism-invertible-matrix.html#change-of-basis-Hom",
  "type": "Theorem",
  "number": "5.3.5",
  "title": "",
  "body": " Let be finite-dimensional vector spaces over a field . Let be an -linear map. Let be bases of and be bases of . Then there exists invertible matrices such that   "
},
{
  "id": "proof-21",
  "level": "2",
  "url": "sec-isomorphism-invertible-matrix.html#proof-21",
  "type": "Proof",
  "number": "5.3.4",
  "title": "",
  "body": "We consider the following composition of maps with bases considered written in brackets. We have . By we get the result. "
},
{
  "id": "change-of-basis-Endo",
  "level": "2",
  "url": "sec-isomorphism-invertible-matrix.html#change-of-basis-Endo",
  "type": "Corollary",
  "number": "5.3.6",
  "title": "",
  "body": " Let be finite-dimensional vector space over a field . Suppose that are ordered bases of . Let be an -linear map. Let and be matrices of with respect to bases and , respectively. Then, there exists an invertible matrix such that   "
},
{
  "id": "pre-row-colomn-rank-equality",
  "level": "2",
  "url": "sec-isomorphism-invertible-matrix.html#pre-row-colomn-rank-equality",
  "type": "Theorem",
  "number": "5.3.7",
  "title": "",
  "body": " Let be finite-dimensional vector spaces over a field and let be an -linear map. Then there exists bases in which the matrix of has a block-diagonal form where and is identity matrix, and are zero matrices of appropriate size.  "
},
{
  "id": "proof-22",
  "level": "2",
  "url": "sec-isomorphism-invertible-matrix.html#proof-22",
  "type": "Proof",
  "number": "5.3.5",
  "title": "",
  "body": "Suppose that and . By Rank-Nullity Theorem (see ), . Let be a basis for . We extend it to a basis of , say . By , we have  We claim that is a basis of . Indeed, suppose that . Hence, . By eq. and linear independence of , we have for every .  By , we write Let be a basis of .  Consider the ordered bases and of and , respectively. The matrix of with respect to these bases is Hence the theorem is proved.  "
},
{
  "id": "corollary-6",
  "level": "2",
  "url": "sec-isomorphism-invertible-matrix.html#corollary-6",
  "type": "Corollary",
  "number": "5.3.8",
  "title": "",
  "body": " There exists bases in which the matrix of an -linear isomorphism is the identity matrix.  "
},
{
  "id": "remark-29",
  "level": "2",
  "url": "sec-isomorphism-invertible-matrix.html#remark-29",
  "type": "Remark",
  "number": "5.3.9",
  "title": "",
  "body": "The above corollary should remind the reader of the following result. A square matrix over a field is invertible if and only if it is a product of elementary matrices.  "
},
{
  "id": "sec-row-column-rank",
  "level": "1",
  "url": "sec-row-column-rank.html",
  "type": "Section",
  "number": "5.4",
  "title": "Row and Column rank",
  "body": " Row and Column rank  We show that the row and the column rank of a matrix is always the same. Let be an matrix over a field . Let be the standard basis of and be a basis for . We make following observations. Left multiplying by gives the -th row of .   Right multiplying by gives the -th column of .     (Row space) Let be an matrix over a field . The row space of is . The dimension of the row space is called row rank of , and it is denoted by .    (Column space) Let be an matrix over a field . The column space of is . The dimension of the column space is called column rank of , and it is denoted by .    Let and be an elementary matrix over . Then, and . Moreover, elementary column operations (resp., row operations) does not change the row rank (resp., column rank) of .    We only prove the result for one of the elementary matrices. Recall from that is the matrix obtained by multiplying -th row of by and adding this row to -th row of . For simplicity we further assume that is less than . Thus, the matrix is obtained by multiplying -th column of by and adding this column to -th column of . Therefore, using notation of eq. , the column space of is Since, we get We thus have .  We now show that an elementary column operation does not change the row rank. Consider the following -linear map, right multiplication by : Since is an elementary matrix it is invertible and -linear map is the inverse of . In particular, is an -isomorphism. By , we have the following. In particular, .    The row rank and the column rank of the matrix obtained in are the same.     There exists bases in which the matrix of an -linear transformation has the same row and column rank.   This follows from .   For any we have .    We consider defined in . Then, the matrix of with respect to standard bases is (see ). By , there exists bases and of and , respectively such that Note that . By , there are invertible matrices such that Since, are invertible matrices, by a part of the proof of , we get that    In view of the above we can define a notion of the rank of a matrix.   (Rank of a matrix)  Let . The rank of is the row rank (=column rank) of . We denote the rank of by .    For any we have .   Since the row space of is the column space of we get the result by .   By , is a matrix representation of the dual transformation with respect to a dual basis.    (Rank of a product of matrices)  Let and be matrices. Then  We have column space of is a subspace of the column space of , hence . Now assume that . Let be a basis for the column space of . Thus, there exists in the column space of such that . Since, the set is linearly dependent. Thus, there exists scalars , not all zero, such that . This implies that This is a contradiction and hence we get the result.    "
},
{
  "id": "row-space",
  "level": "2",
  "url": "sec-row-column-rank.html#row-space",
  "type": "Definition",
  "number": "5.4.1",
  "title": "(Row space).",
  "body": " (Row space) Let be an matrix over a field . The row space of is . The dimension of the row space is called row rank of , and it is denoted by .  "
},
{
  "id": "column-space",
  "level": "2",
  "url": "sec-row-column-rank.html#column-space",
  "type": "Definition",
  "number": "5.4.2",
  "title": "(Column space).",
  "body": " (Column space) Let be an matrix over a field . The column space of is . The dimension of the column space is called column rank of , and it is denoted by .  "
},
{
  "id": "rrk-crk-elt-operations",
  "level": "2",
  "url": "sec-row-column-rank.html#rrk-crk-elt-operations",
  "type": "Lemma",
  "number": "5.4.3",
  "title": "",
  "body": " Let and be an elementary matrix over . Then, and . Moreover, elementary column operations (resp., row operations) does not change the row rank (resp., column rank) of .   "
},
{
  "id": "proof-23",
  "level": "2",
  "url": "sec-row-column-rank.html#proof-23",
  "type": "Proof",
  "number": "5.4.1",
  "title": "",
  "body": "We only prove the result for one of the elementary matrices. Recall from that is the matrix obtained by multiplying -th row of by and adding this row to -th row of . For simplicity we further assume that is less than . Thus, the matrix is obtained by multiplying -th column of by and adding this column to -th column of . Therefore, using notation of eq. , the column space of is Since, we get We thus have .  We now show that an elementary column operation does not change the row rank. Consider the following -linear map, right multiplication by : Since is an elementary matrix it is invertible and -linear map is the inverse of . In particular, is an -isomorphism. By , we have the following. In particular, .  "
},
{
  "id": "remark-30",
  "level": "2",
  "url": "sec-row-column-rank.html#remark-30",
  "type": "Remark",
  "number": "5.4.4",
  "title": "",
  "body": " The row rank and the column rank of the matrix obtained in are the same.   "
},
{
  "id": "corollary-7",
  "level": "2",
  "url": "sec-row-column-rank.html#corollary-7",
  "type": "Corollary",
  "number": "5.4.5",
  "title": "",
  "body": " There exists bases in which the matrix of an -linear transformation has the same row and column rank.  "
},
{
  "id": "proof-24",
  "level": "2",
  "url": "sec-row-column-rank.html#proof-24",
  "type": "Proof",
  "number": "5.4.2",
  "title": "",
  "body": "This follows from . "
},
{
  "id": "rrk-crk-equality",
  "level": "2",
  "url": "sec-row-column-rank.html#rrk-crk-equality",
  "type": "Theorem",
  "number": "5.4.6",
  "title": "",
  "body": " For any we have .  "
},
{
  "id": "proof-25",
  "level": "2",
  "url": "sec-row-column-rank.html#proof-25",
  "type": "Proof",
  "number": "5.4.3",
  "title": "",
  "body": " We consider defined in . Then, the matrix of with respect to standard bases is (see ). By , there exists bases and of and , respectively such that Note that . By , there are invertible matrices such that Since, are invertible matrices, by a part of the proof of , we get that   "
},
{
  "id": "rank-of-matrix",
  "level": "2",
  "url": "sec-row-column-rank.html#rank-of-matrix",
  "type": "Definition",
  "number": "5.4.7",
  "title": "(Rank of a matrix).",
  "body": " (Rank of a matrix)  Let . The rank of is the row rank (=column rank) of . We denote the rank of by .  "
},
{
  "id": "corollary-8",
  "level": "2",
  "url": "sec-row-column-rank.html#corollary-8",
  "type": "Corollary",
  "number": "5.4.8",
  "title": "",
  "body": " For any we have .  "
},
{
  "id": "proof-26",
  "level": "2",
  "url": "sec-row-column-rank.html#proof-26",
  "type": "Proof",
  "number": "5.4.4",
  "title": "",
  "body": "Since the row space of is the column space of we get the result by . "
},
{
  "id": "remark-31",
  "level": "2",
  "url": "sec-row-column-rank.html#remark-31",
  "type": "Remark",
  "number": "5.4.9",
  "title": "",
  "body": " By , is a matrix representation of the dual transformation with respect to a dual basis.  "
},
{
  "id": "rank-of-product-of-matrices",
  "level": "2",
  "url": "sec-row-column-rank.html#rank-of-product-of-matrices",
  "type": "Example",
  "number": "5.4.10",
  "title": "(Rank of a product of matrices).",
  "body": " (Rank of a product of matrices)  Let and be matrices. Then  We have column space of is a subspace of the column space of , hence . Now assume that . Let be a basis for the column space of . Thus, there exists in the column space of such that . Since, the set is linearly dependent. Thus, there exists scalars , not all zero, such that . This implies that This is a contradiction and hence we get the result.   "
},
{
  "id": "sec-rank-nullity-sage",
  "level": "1",
  "url": "sec-rank-nullity-sage.html",
  "type": "Section",
  "number": "5.5",
  "title": "Rank and Nullity using SageMath",
  "body": " Rank and Nullity using SageMath  We use online computer algebra system SageMath to compute the rank and the nullity of a given matrix. In the following example A=matrix(RR,[[1,2,0,-1],[1,6,0,1],[1,-2,2,8]]) represents matrix over . The entry [1,2,0,-1] , [1,6,0,1] , and [1,-2,2,8] represents the first, the second, and the third row of , respectively.  Please make appropriate changes (on this page itself) to compute the rank and the nullity of required matrix (considered as linear transformation). Please first do the calculations yourself and then verify using SageMath.  Computation of the rank of .   A basis for the image of the linear transformation can be computed using SageMath. Please make appropriate changes (on this page itself!) to compute a basis of a specific transformation given by a matrix.   Computation of the nullity of .   A basis for the kernel can be computed using SageMath. Please make appropriate changes (on this page itself!) to compute a basis of the kernel of transformation given by a matrix.   "
},
{
  "id": "sec-double-dual-iso",
  "level": "1",
  "url": "sec-double-dual-iso.html",
  "type": "Section",
  "number": "5.6",
  "title": "Natural isomorphism between a vector space and its double dual",
  "body": " Natural isomorphism between a vector space and its double dual  We describe the natural isomorphism between a vector space and its double dual. The term natural can be defined precisely. However, we will not define this term in this course. We refer the reader to the chapter on Category Theory in the book Basic Algebra II by N. Jacobson.  Throughout this section we assume that is a finite-dimensional vector space over a field . Recall from that the dual space of , is an vector space over . The double dual of is a vector space over defined by .   Keep notations of this section. There is an -isomorphism between and its dual space .    Let be a basis of over . We define , and extend it linearly over . Thus, we get a subset of .  We claim that is a basis for over . Let , i.e., for every we have Therefore, for every , we get . Hence, is -linearly independent.  We now show that spans . Let be a linear functional. The map is determined by its action on . Therefore,  An -isomorphism between and can now be defined by    We have .    Let be a finite-dimensional vector space over a field . As in the proof of , let . Let be a basis of . The set is called a dual basis for . The set is a basis of (refer to the proof of ).    (Matrix representation of dual basis)  Let be a finite-dimensional vector space over a field with an ordered basis . Consider a dual basis as in . Let be an -linear map. Suppose that , i.e., We have a map We have the following. Hence, The matrix of with respect to is the transpose of .      The isomorphism defined in depends on the choice of a basis.  Indeed, suppose that is one-dimensional vector space over a field . Consider any nonzero vector . Then, is a basis for , and its dual basis is . Similarly, is a basis and is a dual basis. Note that mappings and are different.    We now define an isomorphism between a vector space and its double dual, which is independent of the choice of a basis. We call this isomorphism the canonical isomorphism or natural isomorphism .  We begin with the definition of evaluation map .   Let . The evaluation map is an -linear function on : We often denote by . In this notation the map as defined in , will assume the following form.     Let be a finite-dimensional vector space over a field . We have the following.   A vector is zero if and only if for every .  If is such that for some linear function then,   Consider nonzero linear functions . Then, if and only if there exists a scalar such that .     We now prove the following natural isomorphism between a vector space and its double dual.   Let be a finite-dimensional vector space over a field. The -linear map defined by is an -isomorphism.   First verify that the map is an -linear map. Let be a basis for over . It is left to the reader to verify that is a dual basis for (follow a similar argument as in the proof of ). This will prove the theorem.  We obtain the following useful consequence of the .   We keep notations of . If then there exists a unique vector such that .    (Trace is non-degenerate)  Let be a vector space over of matrices. Show that for any -linear functional there exists a unique such that for every .   "
},
{
  "id": "p-123",
  "level": "2",
  "url": "sec-double-dual-iso.html#p-123",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "double dual "
},
{
  "id": "V-simeq-dual",
  "level": "2",
  "url": "sec-double-dual-iso.html#V-simeq-dual",
  "type": "Proposition",
  "number": "5.6.1",
  "title": "",
  "body": " Keep notations of this section. There is an -isomorphism between and its dual space .  "
},
{
  "id": "proof-27",
  "level": "2",
  "url": "sec-double-dual-iso.html#proof-27",
  "type": "Proof",
  "number": "5.6.1",
  "title": "",
  "body": " Let be a basis of over . We define , and extend it linearly over . Thus, we get a subset of .  We claim that is a basis for over . Let , i.e., for every we have Therefore, for every , we get . Hence, is -linearly independent.  We now show that spans . Let be a linear functional. The map is determined by its action on . Therefore,  An -isomorphism between and can now be defined by  "
},
{
  "id": "corollary-9",
  "level": "2",
  "url": "sec-double-dual-iso.html#corollary-9",
  "type": "Corollary",
  "number": "5.6.2",
  "title": "",
  "body": " We have .  "
},
{
  "id": "dual-basis",
  "level": "2",
  "url": "sec-double-dual-iso.html#dual-basis",
  "type": "Definition",
  "number": "5.6.3",
  "title": "",
  "body": " Let be a finite-dimensional vector space over a field . As in the proof of , let . Let be a basis of . The set is called a dual basis for . The set is a basis of (refer to the proof of ).  "
},
{
  "id": "matrix-representation-dual-basis",
  "level": "2",
  "url": "sec-double-dual-iso.html#matrix-representation-dual-basis",
  "type": "Example",
  "number": "5.6.4",
  "title": "(Matrix representation of dual basis).",
  "body": " (Matrix representation of dual basis)  Let be a finite-dimensional vector space over a field with an ordered basis . Consider a dual basis as in . Let be an -linear map. Suppose that , i.e., We have a map We have the following. Hence, The matrix of with respect to is the transpose of .   "
},
{
  "id": "remark-32",
  "level": "2",
  "url": "sec-double-dual-iso.html#remark-32",
  "type": "Remark",
  "number": "5.6.5",
  "title": "",
  "body": "  The isomorphism defined in depends on the choice of a basis.  Indeed, suppose that is one-dimensional vector space over a field . Consider any nonzero vector . Then, is a basis for , and its dual basis is . Similarly, is a basis and is a dual basis. Note that mappings and are different.   "
},
{
  "id": "p-129",
  "level": "2",
  "url": "sec-double-dual-iso.html#p-129",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "canonical isomorphism natural isomorphism "
},
{
  "id": "p-130",
  "level": "2",
  "url": "sec-double-dual-iso.html#p-130",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "evaluation map "
},
{
  "id": "evaluation-map",
  "level": "2",
  "url": "sec-double-dual-iso.html#evaluation-map",
  "type": "Definition",
  "number": "5.6.6",
  "title": "",
  "body": " Let . The evaluation map is an -linear function on : We often denote by . In this notation the map as defined in , will assume the following form.   "
},
{
  "id": "proposition-5",
  "level": "2",
  "url": "sec-double-dual-iso.html#proposition-5",
  "type": "Proposition",
  "number": "5.6.7",
  "title": "",
  "body": " Let be a finite-dimensional vector space over a field . We have the following.   A vector is zero if and only if for every .  If is such that for some linear function then,   Consider nonzero linear functions . Then, if and only if there exists a scalar such that .    "
},
{
  "id": "canonical-iso-double-dual",
  "level": "2",
  "url": "sec-double-dual-iso.html#canonical-iso-double-dual",
  "type": "Theorem",
  "number": "5.6.8",
  "title": "",
  "body": " Let be a finite-dimensional vector space over a field. The -linear map defined by is an -isomorphism.  "
},
{
  "id": "proof-28",
  "level": "2",
  "url": "sec-double-dual-iso.html#proof-28",
  "type": "Proof",
  "number": "5.6.2",
  "title": "",
  "body": "First verify that the map is an -linear map. Let be a basis for over . It is left to the reader to verify that is a dual basis for (follow a similar argument as in the proof of ). This will prove the theorem. "
},
{
  "id": "corollary-10",
  "level": "2",
  "url": "sec-double-dual-iso.html#corollary-10",
  "type": "Corollary",
  "number": "5.6.9",
  "title": "",
  "body": " We keep notations of . If then there exists a unique vector such that .  "
},
{
  "id": "question-1",
  "level": "2",
  "url": "sec-double-dual-iso.html#question-1",
  "type": "Question",
  "number": "5.6.10",
  "title": "(Trace is non-degenerate).",
  "body": " (Trace is non-degenerate)  Let be a vector space over of matrices. Show that for any -linear functional there exists a unique such that for every .  "
},
{
  "id": "sec-exercises-isomorphism",
  "level": "1",
  "url": "sec-exercises-isomorphism.html",
  "type": "Exercises",
  "number": "5.7",
  "title": "Exercises",
  "body": " Let be one pair of distinct lines in , and let be another pair of distinct lines in . Show that there is an -automorphism of mapping to for .  Let be the vector space of polynomials in one variable over a field of degree at most . Let be distinct elements. Show that the following map is an -isomorphism.   Find all non-isomorphic subspaces of .  Let be a vector space over a field . Show that .  Let be vector spaces over a field . Show that . (The generalization of this exercise can be found ).  Let and be an -linear map given by . Show that  is injective if and only if .  is surjective if and only if .  is invertible if and only if and is invertible.     Suppose that . Consider the following map. where are obtained by replacing the -th column of by .  Show that the map defined above is a linear isomorphism. This will prove the Cramer's rule .   Let be a finite-dimensional vector space over a field . Show that are linearly independent over if and only if there are such that .   In the following exercises, find bases so that the matrix representation of the given linear map has the following form.    given by .   given by .   given by .   given by .   given by .   "
},
{
  "id": "exercise-64",
  "level": "2",
  "url": "sec-exercises-isomorphism.html#exercise-64",
  "type": "Exercise",
  "number": "5.7.1",
  "title": "",
  "body": "Let be one pair of distinct lines in , and let be another pair of distinct lines in . Show that there is an -automorphism of mapping to for . "
},
{
  "id": "exercise-65",
  "level": "2",
  "url": "sec-exercises-isomorphism.html#exercise-65",
  "type": "Exercise",
  "number": "5.7.2",
  "title": "",
  "body": "Let be the vector space of polynomials in one variable over a field of degree at most . Let be distinct elements. Show that the following map is an -isomorphism.  "
},
{
  "id": "exercise-66",
  "level": "2",
  "url": "sec-exercises-isomorphism.html#exercise-66",
  "type": "Exercise",
  "number": "5.7.3",
  "title": "",
  "body": "Find all non-isomorphic subspaces of . "
},
{
  "id": "exercise-67",
  "level": "2",
  "url": "sec-exercises-isomorphism.html#exercise-67",
  "type": "Exercise",
  "number": "5.7.4",
  "title": "",
  "body": "Let be a vector space over a field . Show that . "
},
{
  "id": "exercise-68",
  "level": "2",
  "url": "sec-exercises-isomorphism.html#exercise-68",
  "type": "Exercise",
  "number": "5.7.5",
  "title": "",
  "body": "Let be vector spaces over a field . Show that . (The generalization of this exercise can be found ). "
},
{
  "id": "exercise-69",
  "level": "2",
  "url": "sec-exercises-isomorphism.html#exercise-69",
  "type": "Exercise",
  "number": "5.7.6",
  "title": "",
  "body": "Let and be an -linear map given by . Show that  is injective if and only if .  is surjective if and only if .  is invertible if and only if and is invertible.   "
},
{
  "id": "exercise-70",
  "level": "2",
  "url": "sec-exercises-isomorphism.html#exercise-70",
  "type": "Exercise",
  "number": "5.7.7",
  "title": "",
  "body": " Suppose that . Consider the following map. where are obtained by replacing the -th column of by .  Show that the map defined above is a linear isomorphism. This will prove the Cramer's rule .  "
},
{
  "id": "exercise-71",
  "level": "2",
  "url": "sec-exercises-isomorphism.html#exercise-71",
  "type": "Exercise",
  "number": "5.7.8",
  "title": "",
  "body": "Let be a finite-dimensional vector space over a field . Show that are linearly independent over if and only if there are such that . "
},
{
  "id": "exercise-72",
  "level": "2",
  "url": "sec-exercises-isomorphism.html#exercise-72",
  "type": "Exercise",
  "number": "5.7.9",
  "title": "",
  "body": " given by . "
},
{
  "id": "exercise-73",
  "level": "2",
  "url": "sec-exercises-isomorphism.html#exercise-73",
  "type": "Exercise",
  "number": "5.7.10",
  "title": "",
  "body": " given by . "
},
{
  "id": "exercise-74",
  "level": "2",
  "url": "sec-exercises-isomorphism.html#exercise-74",
  "type": "Exercise",
  "number": "5.7.11",
  "title": "",
  "body": " given by . "
},
{
  "id": "exercise-75",
  "level": "2",
  "url": "sec-exercises-isomorphism.html#exercise-75",
  "type": "Exercise",
  "number": "5.7.12",
  "title": "",
  "body": " given by . "
},
{
  "id": "exercise-76",
  "level": "2",
  "url": "sec-exercises-isomorphism.html#exercise-76",
  "type": "Exercise",
  "number": "5.7.13",
  "title": "",
  "body": " given by . "
},
{
  "id": "sec-quotient-space-def",
  "level": "1",
  "url": "sec-quotient-space-def.html",
  "type": "Section",
  "number": "6.1",
  "title": "Definition of Quotient Space",
  "body": " Definition of Quotient Space  Let be a vector space over a field and let be its subspace. We denote the abelian group operation on by ' ' We consider the quotient group . Recall that where The set is called the coset of and is called a coset representative for . We denote the coset by .   (Quotient space) Let be a vector space over a field and be a subspace. We denote the abelian group operation on by ' '. The quotient group with following operations of addition and scalar multiplication is called the quotient space of modulo .  Addition: for any  Scalar multiplication: for any and any   With this addition and the scalar multiplication is a vector space over .     Check that with the addition and the scalar multiplication defined in the quotient space is a vector space over .  Show that the additive identity of is .     It is possible to realize the quotient space geometrically. We give a few examples.  Consider and , a line passing through origin. Any coset is a line passing through and parallel to .  Consider and , a plane passing through origin. Any coset is a plane passing through and parallel to .     "
},
{
  "id": "p-135",
  "level": "2",
  "url": "sec-quotient-space-def.html#p-135",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coset coset representative "
},
{
  "id": "def-quotient-space",
  "level": "2",
  "url": "sec-quotient-space-def.html#def-quotient-space",
  "type": "Definition",
  "number": "6.1.1",
  "title": "(Quotient space).",
  "body": " (Quotient space) Let be a vector space over a field and be a subspace. We denote the abelian group operation on by ' '. The quotient group with following operations of addition and scalar multiplication is called the quotient space of modulo .  Addition: for any  Scalar multiplication: for any and any   With this addition and the scalar multiplication is a vector space over .  "
},
{
  "id": "exercise-77",
  "level": "2",
  "url": "sec-quotient-space-def.html#exercise-77",
  "type": "Checkpoint",
  "number": "6.1.2",
  "title": "",
  "body": "  Check that with the addition and the scalar multiplication defined in the quotient space is a vector space over .  Show that the additive identity of is .   "
},
{
  "id": "remark-33",
  "level": "2",
  "url": "sec-quotient-space-def.html#remark-33",
  "type": "Remark",
  "number": "6.1.3",
  "title": "",
  "body": " It is possible to realize the quotient space geometrically. We give a few examples.  Consider and , a line passing through origin. Any coset is a line passing through and parallel to .  Consider and , a plane passing through origin. Any coset is a plane passing through and parallel to .    "
},
{
  "id": "sec-natural-projection",
  "level": "1",
  "url": "sec-natural-projection.html",
  "type": "Section",
  "number": "6.2",
  "title": "Natural Projection and Correspondence Theorem",
  "body": " Natural Projection and Correspondence Theorem  Throughout this section we assume that is a vector space over a field and a subspace.   (Natural Projection) Let be a vector space over a field and be a subspace. The map given by is called the natural projection .  It is easy to verify the following.  is an -linear map      (Correspondence Theorem)  Let be a vector space over a field and be a subspace. We have the order preserving (with respect to set inclusion) bijection     Suppose that is a subspace of . Let , i.e., is the set of all coset representatives of . In particular, since for any , we get that . We claim that is a subspace of . Indeed, suppose that , i.e., . Therefore, for any , we have and, by the definition of , we get that . Hence, is a subspace of containing .  Now suppose that is a subspace of containing . Consider Verify that is a subspace of .  Checking other assertions is left to the reader.   "
},
{
  "id": "def-natural-projection",
  "level": "2",
  "url": "sec-natural-projection.html#def-natural-projection",
  "type": "Definition",
  "number": "6.2.1",
  "title": "(Natural Projection).",
  "body": " (Natural Projection) Let be a vector space over a field and be a subspace. The map given by is called the natural projection . "
},
{
  "id": "remark-34",
  "level": "2",
  "url": "sec-natural-projection.html#remark-34",
  "type": "Remark",
  "number": "6.2.2",
  "title": "",
  "body": "It is easy to verify the following.  is an -linear map    "
},
{
  "id": "correspondence-theorem",
  "level": "2",
  "url": "sec-natural-projection.html#correspondence-theorem",
  "type": "Theorem",
  "number": "6.2.3",
  "title": "(Correspondence Theorem).",
  "body": " (Correspondence Theorem)  Let be a vector space over a field and be a subspace. We have the order preserving (with respect to set inclusion) bijection   "
},
{
  "id": "proof-29",
  "level": "2",
  "url": "sec-natural-projection.html#proof-29",
  "type": "Proof",
  "number": "6.2.1",
  "title": "",
  "body": " Suppose that is a subspace of . Let , i.e., is the set of all coset representatives of . In particular, since for any , we get that . We claim that is a subspace of . Indeed, suppose that , i.e., . Therefore, for any , we have and, by the definition of , we get that . Hence, is a subspace of containing .  Now suppose that is a subspace of containing . Consider Verify that is a subspace of .  Checking other assertions is left to the reader.  "
},
{
  "id": "sec-first-isomorphism-theorem",
  "level": "1",
  "url": "sec-first-isomorphism-theorem.html",
  "type": "Section",
  "number": "6.3",
  "title": "Fundamental Homomorphism Theorem",
  "body": " Fundamental Homomorphism Theorem  We prove the Fundamental Homomorphism Theorem, a similar result as in the Group Theory course, in context of vector spaces. We begin with the following result.   (Universal Property of Quotient Space)  Let be vector spaces over a field and be a subspace of . Let be an -linear map such that . Then there is a unique linear map such that . Diagrammatically we require an -linear map such that .      Define by . Since, , the map is well-defined. Checking of -linearity, uniqueness of , and is left to the reader.   (Fundamental Homomorphism Theorem)  Let be vector spaces over a field and let be an -linear map. Then,    By , there is an -linear map given by . This map is surjective (verify!). We show that is injective. If then, , i.e., . Hence, is injective. Therefore, is an -isomorphism between and .   We keep notations of . We further assume that is a finite-dimensional vector space. We have Moreover,     Since, is finite-dimensional, its subspace is also finite-dimensional. Let be a basis for . Extend it to a basis for , say . Then, is a basis for . Indeed, if then . Therefore, there exists such that . By linear independence of , for every . Therefore, is linearly independent over . Given a vector there are uniquely determined such that , i.e., . This shows that spans . By and , is a basis for .  We define an -linear map by Therefore, maps a basis of onto a basis of , and hence, is an -isomorphism.  Both the assertions of the corollary now follows.    Let be a linear map given by As we get that . Since , we have . By rank-nullity theorem ( ) we obtain the following. So, (see ). However, as shows, is isomorphic as a vector space to .   "
},
{
  "id": "universal-property-quotient",
  "level": "2",
  "url": "sec-first-isomorphism-theorem.html#universal-property-quotient",
  "type": "Theorem",
  "number": "6.3.1",
  "title": "(Universal Property of Quotient Space).",
  "body": " (Universal Property of Quotient Space)  Let be vector spaces over a field and be a subspace of . Let be an -linear map such that . Then there is a unique linear map such that . Diagrammatically we require an -linear map such that .     "
},
{
  "id": "proof-30",
  "level": "2",
  "url": "sec-first-isomorphism-theorem.html#proof-30",
  "type": "Proof",
  "number": "6.3.1",
  "title": "",
  "body": "Define by . Since, , the map is well-defined. Checking of -linearity, uniqueness of , and is left to the reader. "
},
{
  "id": "first-isomorphism-theorem",
  "level": "2",
  "url": "sec-first-isomorphism-theorem.html#first-isomorphism-theorem",
  "type": "Theorem",
  "number": "6.3.2",
  "title": "(Fundamental Homomorphism Theorem).",
  "body": " (Fundamental Homomorphism Theorem)  Let be vector spaces over a field and let be an -linear map. Then,   "
},
{
  "id": "proof-31",
  "level": "2",
  "url": "sec-first-isomorphism-theorem.html#proof-31",
  "type": "Proof",
  "number": "6.3.2",
  "title": "",
  "body": "By , there is an -linear map given by . This map is surjective (verify!). We show that is injective. If then, , i.e., . Hence, is injective. Therefore, is an -isomorphism between and . "
},
{
  "id": "corollary-FIT",
  "level": "2",
  "url": "sec-first-isomorphism-theorem.html#corollary-FIT",
  "type": "Corollary",
  "number": "6.3.3",
  "title": "",
  "body": " We keep notations of . We further assume that is a finite-dimensional vector space. We have Moreover,   "
},
{
  "id": "proof-32",
  "level": "2",
  "url": "sec-first-isomorphism-theorem.html#proof-32",
  "type": "Proof",
  "number": "6.3.3",
  "title": "",
  "body": " Since, is finite-dimensional, its subspace is also finite-dimensional. Let be a basis for . Extend it to a basis for , say . Then, is a basis for . Indeed, if then . Therefore, there exists such that . By linear independence of , for every . Therefore, is linearly independent over . Given a vector there are uniquely determined such that , i.e., . This shows that spans . By and , is a basis for .  We define an -linear map by Therefore, maps a basis of onto a basis of , and hence, is an -isomorphism.  Both the assertions of the corollary now follows.  "
},
{
  "id": "remark-35",
  "level": "2",
  "url": "sec-first-isomorphism-theorem.html#remark-35",
  "type": "Remark",
  "number": "6.3.4",
  "title": "",
  "body": " Let be a linear map given by As we get that . Since , we have . By rank-nullity theorem ( ) we obtain the following. So, (see ). However, as shows, is isomorphic as a vector space to .  "
},
{
  "id": "sec-examples-FIT",
  "level": "1",
  "url": "sec-examples-FIT.html",
  "type": "Section",
  "number": "6.4",
  "title": "Examples",
  "body": " Examples  We give a few examples of quotient spaces and certain applications of the first isomorphism theorem.   (Hom and Direct sum) Let and be vector spaces over a field . Then     (Intersections and product) Let be a vector space over a field and ( is in some indexing set ) be subspace of . Then, For each consider the natural projection (see ). Define by The verification that this map is -linear is left to the reader. The kernel of is By , is isomorphic to . Hence the result. This shows that the following is an exact sequence.    (Intersection and Direct Sum) Let be subspaces of a vector space over a field . Consider natural projections (see ). Consider the compositions and Let be such that . We show that is surjective, is injective, and . In other words, we show that the following is an short exact sequence. Indeed, the injectivity is a part of . The surjectivity of is left to the reader. We have Hence, . Now suppose that , i.e., . Therefore there exists and such that . Hence, Put . Thus, Similarly, In particular, . Hence, and the result is proved.    (Intersection and Sum) Let be a vector space over a field . Suppose that be subspaces of . We have the following isomorphism.   "
},
{
  "id": "commutativity-Hom-direct-sum",
  "level": "2",
  "url": "sec-examples-FIT.html#commutativity-Hom-direct-sum",
  "type": "Example",
  "number": "6.4.1",
  "title": "(Hom and Direct sum).",
  "body": " (Hom and Direct sum) Let and be vector spaces over a field . Then   "
},
{
  "id": "intersections-product",
  "level": "2",
  "url": "sec-examples-FIT.html#intersections-product",
  "type": "Example",
  "number": "6.4.2",
  "title": "(Intersections and product).",
  "body": " (Intersections and product) Let be a vector space over a field and ( is in some indexing set ) be subspace of . Then, For each consider the natural projection (see ). Define by The verification that this map is -linear is left to the reader. The kernel of is By , is isomorphic to . Hence the result. This shows that the following is an exact sequence.  "
},
{
  "id": "intersection-direct-sum",
  "level": "2",
  "url": "sec-examples-FIT.html#intersection-direct-sum",
  "type": "Example",
  "number": "6.4.3",
  "title": "(Intersection and Direct Sum).",
  "body": " (Intersection and Direct Sum) Let be subspaces of a vector space over a field . Consider natural projections (see ). Consider the compositions and Let be such that . We show that is surjective, is injective, and . In other words, we show that the following is an short exact sequence. Indeed, the injectivity is a part of . The surjectivity of is left to the reader. We have Hence, . Now suppose that , i.e., . Therefore there exists and such that . Hence, Put . Thus, Similarly, In particular, . Hence, and the result is proved.  "
},
{
  "id": "Intersection-sum",
  "level": "2",
  "url": "sec-examples-FIT.html#Intersection-sum",
  "type": "Example",
  "number": "6.4.4",
  "title": "(Intersection and Sum).",
  "body": " (Intersection and Sum) Let be a vector space over a field . Suppose that be subspaces of . We have the following isomorphism.  "
},
{
  "id": "sec-invariant-subspaces",
  "level": "1",
  "url": "sec-invariant-subspaces.html",
  "type": "Section",
  "number": "7.1",
  "title": "Invariant subspaces",
  "body": " Invariant subspaces   (Invariant Subspace) Let be a finite-dimensional vector space over a field . Consider an -linear map . A subspace is said to be invariant under if for any .    The whole space and the trivial subspace are always invariant under such a map .  If is invariant under then, by restricting to , defines an -linear map from to . We denote this map by and it is called the restriction of to .  In the above we only require . We do not require for every . In other words, maps every vector of into , however need not fix vectors of pointwise.    Suppose that be the standard ordered basis of . Let be an -linear map given by The subspace of spanned by is invariant under . Note that but . The matrix of with respect to is the following.    (Subspaces invariant under projection of onto -axis)  Let be a projection onto -axis, i.e., . Then the -axis, is invariant under . In fact, for every .  Consider the standard ordered basis of . The matrix of with respect to is the following block diagonal matrix.   Consider to be a proper nonzero subspace of which is invariant under . We must have . Suppose that for some . We have Therefore, must be spanned by , i.e., is the -axis.  In other words, only proper nonzero subspace of invariant under the projection is the -axis.    Let be a finite-dimensional vector space over a field and be an -linear map. Suppose that is an invariant subspace of . Then there exists a basis of such that with respect to the matrix of has the following block form.    Let be a basis of . We extend it to a basis of . Thus because is invariant under . On the other hand . If we consider then we get the required result.   Let be a finite-dimensional vector space over a field and let be an -linear map. If is a -invariant subspace then there is a well-defined -linear map given by .   "
},
{
  "id": "def-invariant-subspace",
  "level": "2",
  "url": "sec-invariant-subspaces.html#def-invariant-subspace",
  "type": "Definition",
  "number": "7.1.1",
  "title": "(Invariant Subspace).",
  "body": " (Invariant Subspace) Let be a finite-dimensional vector space over a field . Consider an -linear map . A subspace is said to be invariant under if for any . "
},
{
  "id": "remark-36",
  "level": "2",
  "url": "sec-invariant-subspaces.html#remark-36",
  "type": "Remark",
  "number": "7.1.2",
  "title": "",
  "body": "  The whole space and the trivial subspace are always invariant under such a map .  If is invariant under then, by restricting to , defines an -linear map from to . We denote this map by and it is called the restriction of to .  In the above we only require . We do not require for every . In other words, maps every vector of into , however need not fix vectors of pointwise.   "
},
{
  "id": "example-35",
  "level": "2",
  "url": "sec-invariant-subspaces.html#example-35",
  "type": "Example",
  "number": "7.1.3",
  "title": "",
  "body": "Suppose that be the standard ordered basis of . Let be an -linear map given by The subspace of spanned by is invariant under . Note that but . The matrix of with respect to is the following.  "
},
{
  "id": "example-36",
  "level": "2",
  "url": "sec-invariant-subspaces.html#example-36",
  "type": "Example",
  "number": "7.1.4",
  "title": "(Subspaces invariant under projection of <span class=\"process-math\">\\(\\R^2\\)<\/span> onto <span class=\"process-math\">\\(X\\)<\/span>-axis).",
  "body": " (Subspaces invariant under projection of onto -axis)  Let be a projection onto -axis, i.e., . Then the -axis, is invariant under . In fact, for every .  Consider the standard ordered basis of . The matrix of with respect to is the following block diagonal matrix.   Consider to be a proper nonzero subspace of which is invariant under . We must have . Suppose that for some . We have Therefore, must be spanned by , i.e., is the -axis.  In other words, only proper nonzero subspace of invariant under the projection is the -axis.  "
},
{
  "id": "invariant-subspace-block-form",
  "level": "2",
  "url": "sec-invariant-subspaces.html#invariant-subspace-block-form",
  "type": "Proposition",
  "number": "7.1.5",
  "title": "",
  "body": " Let be a finite-dimensional vector space over a field and be an -linear map. Suppose that is an invariant subspace of . Then there exists a basis of such that with respect to the matrix of has the following block form.   "
},
{
  "id": "proof-33",
  "level": "2",
  "url": "sec-invariant-subspaces.html#proof-33",
  "type": "Proof",
  "number": "7.1.1",
  "title": "",
  "body": "Let be a basis of . We extend it to a basis of . Thus because is invariant under . On the other hand . If we consider then we get the required result. "
},
{
  "id": "lemma-13",
  "level": "2",
  "url": "sec-invariant-subspaces.html#lemma-13",
  "type": "Lemma",
  "number": "7.1.6",
  "title": "",
  "body": " Let be a finite-dimensional vector space over a field and let be an -linear map. If is a -invariant subspace then there is a well-defined -linear map given by .  "
},
{
  "id": "sec-eigen",
  "level": "1",
  "url": "sec-eigen.html",
  "type": "Section",
  "number": "7.2",
  "title": "Eigenvalues and Eigenvectors",
  "body": " Eigenvalues and Eigenvectors  We define an important class of invariant subspaces. We refer the reader to for a definition and properties of the determinant.   (Eigenvector and Eigenvalue of a linear map)  Let be a finite-dimensional vector space over a field and let be an -linear map. An eigenvector of is a nonzero vector such that for some scalar . The scalar is called the eigenvalue associated to the eigenvector .   Similarly we define eigenvector and eigenvalue of a matrix.   (Eigenvector and Eigenvalue of a square matrix) Let be an matrix over a field . A nonzero column vector is an eigenvector of if it is an eigenvector of a linear map defined by the left multiplication by . The scalar corresponding to an eigenvector of is called an eigenvalue of .   We keep notations of . The image of the line containing and passing through the origin under is contained in . If then .  In other words, lines defined by eigenvectors are invariant under .  Conversely, if is a line in invariant under i.e., is an one-dimensional invariant subspace of , then any nonzero vector in is an eigenvector.   Using above remark and thinking geometrically it is clear that the anti-clockwise rotation of the real plane by has no eigenvectors. Indeed, algebraically we have the following.   (Rotation in the real plane)  The anti-clockwise rotation by is the map given by Suppose that and are such that Therefore, Suppose that (the case when can be similarly dealt with). Thus, implies that , a contradiction.   In the above example the underlying field plays an important role. If we consider the complex plane over then the rotation have eigenvectors, as the following calculations show.   (Rotation in the complex plane)  Consider the map given by We consider as a vector space over . Suppose that and are such that Therefore, Suppose that (the case when can be similarly dealt with). Thus, implies that , i.e., . Take (the case when can be dealt with similarly) and . Thus , i.e., is an eigenvector of with an eigenvalue . Corresponding to we get eigenvector which is linearly independent from .   As similar matrices represents the same linear map we obtain the following   Similar matrices have the same eigenvalues.   The following simple observations will be useful.   Let be a finite-dimensional vector space over a field and let be an -linear map. The matrix of with respect to an ordered basis is a diagonal matrix if and only if each is an eigenvector.    Let be a finite-dimensional vector space over a field and let be an -linear map. A nonzero vector is an eigenvector with an eigenvalue if and only if it is in the kernel of .    Following are equivalent.  is not invertible  has an eigenvalue equal to  If is a matrix of with respect to an arbitrary basis then .      Suppose that is an eigenvector of corresponding to eigenvalue . If we let then , i.e., is an eigenvector corresponding to eigenvalue for .  Observe that if the matrix representation of with respect to a basis is then, the matrix representation of with respect to is . By , . Hence, is an eigenvalue of if and only if .    (Eigenspace)  Let be a finite-dimensional vector space over a field and let be an -linear map. Suppose that is an eigenvalue of . The subspace is called the eigenspace corresponding to eigenvalue .    The eigenspace corresponding to an eigenvalue is denoted by .   If is a matrix then the expansion of the determinant shows that it is a polynomial in whose coefficients are in and it has degree . We define the characteristic polynomial of a linear map.   (Characteristic polynomial) Let be a finite-dimensional vector space over a field of dimension and let be an -linear map. Suppose that is a matrix representation of . The characteristic polynomial of is the polynomial  Let . The characteristic polynomial of is the polynomial    By we get the following result.   The eigenvalues of are roots in of its characteristic polynomial.    Let be an -linear map on a vector space of dimension .  The linear map has at most eigenvalues.  If and then has at least one eigenvalue.     This follows from , , and .  Note that the characteristic polynomial of anti-clockwise rotation by of the real plane is . Hence it has no real roots and thus no eigenvalues. However, has roots in (refer to and ).  Following result shows that the characteristic polynomial of does not depend on a particular matrix representation.   The characteristic polynomial of does not depend on the choice of a basis.   Suppose that and be matrix representations of with respect to some bases of . Then there exists an invertible matrix such that (see ). Thus, Hence Thus the result is proved.   (Minimal polynomial)  Let be a finite-dimensional vector space over a field , and let be an -linear map. The minimal polynomial of is the monic polynomial of least degree annihilating . Let . The minimal polynomial of is the monic polynomial of least degree annihilating .     If are similar then the minimal polynomial of and the minimal polynomial of are the same.   This follows from the following observation. For any invertible matrix and any polynomial    Find the minimal polynomial of a linear map corresponding to the following matrix.    Let be an annihilating polynomial of an linear map . Then the minimal polynomial of , divides .   By the division algorithm there are polynomials with such that This gives the following equation. Since and is the least degree monic polynomial annihilating we must have . Thus divides .  In fact roots of the characteristic and minimal polynomial are the same.   Let be a finite-dimensional vector space over a field , and let be an -linear map. The characteristic polynomial of and the minimal polynomial of has the same roots.    Let be a root of , i.e., is an eigenvalue of (see ). Let be an eigenvector corresponding to . Thus for any . Suppose that . Since is an annihilating polynomial we get the following. As is an eigenvector, it is nonzero. Hence we must have , i.e., is a root of .  Conversely assume that is a root of . By , there exists such that . Hence , i.e., is a root of .   "
},
{
  "id": "def-eigenvector-map",
  "level": "2",
  "url": "sec-eigen.html#def-eigenvector-map",
  "type": "Definition",
  "number": "7.2.1",
  "title": "(Eigenvector and Eigenvalue of a linear map).",
  "body": " (Eigenvector and Eigenvalue of a linear map)  Let be a finite-dimensional vector space over a field and let be an -linear map. An eigenvector of is a nonzero vector such that for some scalar . The scalar is called the eigenvalue associated to the eigenvector .  "
},
{
  "id": "def-eigenvector-matrix",
  "level": "2",
  "url": "sec-eigen.html#def-eigenvector-matrix",
  "type": "Definition",
  "number": "7.2.2",
  "title": "(Eigenvector and Eigenvalue of a square matrix).",
  "body": " (Eigenvector and Eigenvalue of a square matrix) Let be an matrix over a field . A nonzero column vector is an eigenvector of if it is an eigenvector of a linear map defined by the left multiplication by . The scalar corresponding to an eigenvector of is called an eigenvalue of . "
},
{
  "id": "remark-37",
  "level": "2",
  "url": "sec-eigen.html#remark-37",
  "type": "Remark",
  "number": "7.2.3",
  "title": "",
  "body": " We keep notations of . The image of the line containing and passing through the origin under is contained in . If then .  In other words, lines defined by eigenvectors are invariant under .  Conversely, if is a line in invariant under i.e., is an one-dimensional invariant subspace of , then any nonzero vector in is an eigenvector.  "
},
{
  "id": "rotation-of-real-plane",
  "level": "2",
  "url": "sec-eigen.html#rotation-of-real-plane",
  "type": "Example",
  "number": "7.2.4",
  "title": "(Rotation in the real plane).",
  "body": " (Rotation in the real plane)  The anti-clockwise rotation by is the map given by Suppose that and are such that Therefore, Suppose that (the case when can be similarly dealt with). Thus, implies that , a contradiction.  "
},
{
  "id": "rotation-in-the-complex-plane-",
  "level": "2",
  "url": "sec-eigen.html#rotation-in-the-complex-plane-",
  "type": "Example",
  "number": "7.2.5",
  "title": "(Rotation in the complex plane).",
  "body": " (Rotation in the complex plane)  Consider the map given by We consider as a vector space over . Suppose that and are such that Therefore, Suppose that (the case when can be similarly dealt with). Thus, implies that , i.e., . Take (the case when can be dealt with similarly) and . Thus , i.e., is an eigenvector of with an eigenvalue . Corresponding to we get eigenvector which is linearly independent from .  "
},
{
  "id": "proposition-7",
  "level": "2",
  "url": "sec-eigen.html#proposition-7",
  "type": "Proposition",
  "number": "7.2.6",
  "title": "",
  "body": " Similar matrices have the same eigenvalues.  "
},
{
  "id": "proposition-8",
  "level": "2",
  "url": "sec-eigen.html#proposition-8",
  "type": "Proposition",
  "number": "7.2.7",
  "title": "",
  "body": " Let be a finite-dimensional vector space over a field and let be an -linear map. The matrix of with respect to an ordered basis is a diagonal matrix if and only if each is an eigenvector.  "
},
{
  "id": "proposition-9",
  "level": "2",
  "url": "sec-eigen.html#proposition-9",
  "type": "Proposition",
  "number": "7.2.8",
  "title": "",
  "body": " Let be a finite-dimensional vector space over a field and let be an -linear map. A nonzero vector is an eigenvector with an eigenvalue if and only if it is in the kernel of .  "
},
{
  "id": "det-criterion-for-eigenvalue",
  "level": "2",
  "url": "sec-eigen.html#det-criterion-for-eigenvalue",
  "type": "Corollary",
  "number": "7.2.9",
  "title": "",
  "body": " Following are equivalent.  is not invertible  has an eigenvalue equal to  If is a matrix of with respect to an arbitrary basis then .   "
},
{
  "id": "remark-det-criterion-for-eigenvalue",
  "level": "2",
  "url": "sec-eigen.html#remark-det-criterion-for-eigenvalue",
  "type": "Remark",
  "number": "7.2.10",
  "title": "",
  "body": "  Suppose that is an eigenvector of corresponding to eigenvalue . If we let then , i.e., is an eigenvector corresponding to eigenvalue for .  Observe that if the matrix representation of with respect to a basis is then, the matrix representation of with respect to is . By , . Hence, is an eigenvalue of if and only if .   "
},
{
  "id": "def-eigenspace",
  "level": "2",
  "url": "sec-eigen.html#def-eigenspace",
  "type": "Definition",
  "number": "7.2.11",
  "title": "(Eigenspace).",
  "body": "(Eigenspace)  Let be a finite-dimensional vector space over a field and let be an -linear map. Suppose that is an eigenvalue of . The subspace is called the eigenspace corresponding to eigenvalue .  "
},
{
  "id": "eigenspace-notation",
  "level": "2",
  "url": "sec-eigen.html#eigenspace-notation",
  "type": "Convention",
  "number": "7.2.12",
  "title": "",
  "body": " The eigenspace corresponding to an eigenvalue is denoted by .  "
},
{
  "id": "def-characteristic-polynomial",
  "level": "2",
  "url": "sec-eigen.html#def-characteristic-polynomial",
  "type": "Definition",
  "number": "7.2.13",
  "title": "(Characteristic polynomial).",
  "body": " (Characteristic polynomial) Let be a finite-dimensional vector space over a field of dimension and let be an -linear map. Suppose that is a matrix representation of . The characteristic polynomial of is the polynomial  Let . The characteristic polynomial of is the polynomial   "
},
{
  "id": "eigenvalues-as-roots",
  "level": "2",
  "url": "sec-eigen.html#eigenvalues-as-roots",
  "type": "Corollary",
  "number": "7.2.14",
  "title": "",
  "body": " The eigenvalues of are roots in of its characteristic polynomial.  "
},
{
  "id": "eigenvalue-over-C",
  "level": "2",
  "url": "sec-eigen.html#eigenvalue-over-C",
  "type": "Proposition",
  "number": "7.2.15",
  "title": "",
  "body": " Let be an -linear map on a vector space of dimension .  The linear map has at most eigenvalues.  If and then has at least one eigenvalue.    "
},
{
  "id": "proof-34",
  "level": "2",
  "url": "sec-eigen.html#proof-34",
  "type": "Proof",
  "number": "7.2.1",
  "title": "",
  "body": "This follows from , , and . "
},
{
  "id": "independent-of-basis-charateristic-polynomial",
  "level": "2",
  "url": "sec-eigen.html#independent-of-basis-charateristic-polynomial",
  "type": "Proposition",
  "number": "7.2.16",
  "title": "",
  "body": " The characteristic polynomial of does not depend on the choice of a basis.  "
},
{
  "id": "proof-35",
  "level": "2",
  "url": "sec-eigen.html#proof-35",
  "type": "Proof",
  "number": "7.2.2",
  "title": "",
  "body": "Suppose that and be matrix representations of with respect to some bases of . Then there exists an invertible matrix such that (see ). Thus, Hence Thus the result is proved. "
},
{
  "id": "def-minimal-polynomial",
  "level": "2",
  "url": "sec-eigen.html#def-minimal-polynomial",
  "type": "Definition",
  "number": "7.2.17",
  "title": "(Minimal polynomial).",
  "body": " (Minimal polynomial)  Let be a finite-dimensional vector space over a field , and let be an -linear map. The minimal polynomial of is the monic polynomial of least degree annihilating . Let . The minimal polynomial of is the monic polynomial of least degree annihilating .   "
},
{
  "id": "lemma-14",
  "level": "2",
  "url": "sec-eigen.html#lemma-14",
  "type": "Lemma",
  "number": "7.2.18",
  "title": "",
  "body": " If are similar then the minimal polynomial of and the minimal polynomial of are the same.  "
},
{
  "id": "proof-36",
  "level": "2",
  "url": "sec-eigen.html#proof-36",
  "type": "Proof",
  "number": "7.2.3",
  "title": "",
  "body": "This follows from the following observation. For any invertible matrix and any polynomial   "
},
{
  "id": "exercise-78",
  "level": "2",
  "url": "sec-eigen.html#exercise-78",
  "type": "Checkpoint",
  "number": "7.2.19",
  "title": "",
  "body": "Find the minimal polynomial of a linear map corresponding to the following matrix.  "
},
{
  "id": "minimal-poly-divides-annihilating-poly",
  "level": "2",
  "url": "sec-eigen.html#minimal-poly-divides-annihilating-poly",
  "type": "Proposition",
  "number": "7.2.20",
  "title": "",
  "body": " Let be an annihilating polynomial of an linear map . Then the minimal polynomial of , divides .  "
},
{
  "id": "proof-37",
  "level": "2",
  "url": "sec-eigen.html#proof-37",
  "type": "Proof",
  "number": "7.2.4",
  "title": "",
  "body": "By the division algorithm there are polynomials with such that This gives the following equation. Since and is the least degree monic polynomial annihilating we must have . Thus divides . "
},
{
  "id": "theorem-20",
  "level": "2",
  "url": "sec-eigen.html#theorem-20",
  "type": "Theorem",
  "number": "7.2.21",
  "title": "",
  "body": " Let be a finite-dimensional vector space over a field , and let be an -linear map. The characteristic polynomial of and the minimal polynomial of has the same roots.  "
},
{
  "id": "proof-38",
  "level": "2",
  "url": "sec-eigen.html#proof-38",
  "type": "Proof",
  "number": "7.2.5",
  "title": "",
  "body": " Let be a root of , i.e., is an eigenvalue of (see ). Let be an eigenvector corresponding to . Thus for any . Suppose that . Since is an annihilating polynomial we get the following. As is an eigenvector, it is nonzero. Hence we must have , i.e., is a root of .  Conversely assume that is a root of . By , there exists such that . Hence , i.e., is a root of .  "
},
{
  "id": "sec-algebraic-geometric-multiplicity",
  "level": "1",
  "url": "sec-algebraic-geometric-multiplicity.html",
  "type": "Section",
  "number": "7.3",
  "title": "Algebraic and Geometric multiplicity",
  "body": " Algebraic and Geometric multiplicity  Throughout this section we assume that is a finite-dimensional vector space over a field and is an -linear map.   (Algebraic multiplicity)  Let be the characteristic polynomial of and let be an eigenvalue of . Then, by the repeated application of , we can write with . The natural number is said to be the algebraic multiplicity of .    (Geometric multiplicity)  Let be an eigenvalue of . The geometric multiplicity of is the dimension of over .   We have the following lemma.   Let be an eigenvalue of . The geometric multiplicity of is less than or equal to algebraic multiplicity of .   Suppose that be a basis of . Thus geometric multiplicity of is . We extend to a basis of , say . The matrix representation of with respect to has the following block form. By a property of the determinant , . Therefore, the algebraic multiplicity of is at least . Thus the result is proved.   "
},
{
  "id": "def-algebraic-multiplicity",
  "level": "2",
  "url": "sec-algebraic-geometric-multiplicity.html#def-algebraic-multiplicity",
  "type": "Definition",
  "number": "7.3.1",
  "title": "(Algebraic multiplicity).",
  "body": " (Algebraic multiplicity)  Let be the characteristic polynomial of and let be an eigenvalue of . Then, by the repeated application of , we can write with . The natural number is said to be the algebraic multiplicity of .  "
},
{
  "id": "def-geometric-multiplicity",
  "level": "2",
  "url": "sec-algebraic-geometric-multiplicity.html#def-geometric-multiplicity",
  "type": "Definition",
  "number": "7.3.2",
  "title": "(Geometric multiplicity).",
  "body": " (Geometric multiplicity)  Let be an eigenvalue of . The geometric multiplicity of is the dimension of over .  "
},
{
  "id": "geometric-less-than-algebraic",
  "level": "2",
  "url": "sec-algebraic-geometric-multiplicity.html#geometric-less-than-algebraic",
  "type": "Lemma",
  "number": "7.3.3",
  "title": "",
  "body": " Let be an eigenvalue of . The geometric multiplicity of is less than or equal to algebraic multiplicity of .  "
},
{
  "id": "proof-39",
  "level": "2",
  "url": "sec-algebraic-geometric-multiplicity.html#proof-39",
  "type": "Proof",
  "number": "7.3.1",
  "title": "",
  "body": "Suppose that be a basis of . Thus geometric multiplicity of is . We extend to a basis of , say . The matrix representation of with respect to has the following block form. By a property of the determinant , . Therefore, the algebraic multiplicity of is at least . Thus the result is proved. "
},
{
  "id": "sec-triangulable-maps",
  "level": "1",
  "url": "sec-triangulable-maps.html",
  "type": "Section",
  "number": "7.4",
  "title": "Triangulable linear maps and matrices",
  "body": " Triangulable linear maps and matrices  In this section we give a condition under which a matrix representation of a linear map is an upper triangular matrix. We begin with the following definition.   (Triangulable linear map)  Let be a finite-dimensional vector space over a field and be an -linear map. We say that is triangulable if there is a basis of such that is an upper triangular matrix.   The matrix form of the above definition is given below.   (Triangulable matrix)  A matrix is said to be triangulable if is similar to an upper triangular matrix in .   We now state the useful observation.   Let be a finite-dimensional vector space over a field and let is an -linear map. Suppose that is a -invariant subspace of . Let be an -linear map given by . Then    This follows from and properties of the determinant ( ) and the linearity of the trace map.  We now give a criterion for a linear to be triangulable in terms of its characteristic polynomial. For this first recall the definition of a split polynomial .   Let be a finite-dimensional vector space of dimension over a field and be an -linear map. The map is triangulable if and only if the characteristic polynomial of , is split over .    Suppose that is triangulable, i.e., there is a basis of in which is an upper triangular matrix, i.e., for . Thus by a property of the determinant, see . Hence is split over .  Now assume that is split over . We show that is triangulable. We proceed by induction on the dimension of , . If then the result is clear. Assume that . Since is split, it has a root , i.e., is an eigenvalue of . Let be an eigenvector corresponding to . Thus is an invariant subspace under . We define a linear map by By we have . Therefore, is also split. As , by induction, there is a basis of such that is an upper triangular matrix. Then for the basis of , the matrix of is upper triangular.    Every -linear map from a finite-dimensional vector space over to itself is triangulable.   This follows from and the fundamental theorem of algebra ( ).   (Non-triangulable linear map)  Consider an -linear map from to itself given by , , and . The characteristic polynomial of is and it has only one root in . Hence not split over . By , is not triangulable.   "
},
{
  "id": "def-triangulable-map",
  "level": "2",
  "url": "sec-triangulable-maps.html#def-triangulable-map",
  "type": "Definition",
  "number": "7.4.1",
  "title": "(Triangulable linear map).",
  "body": " (Triangulable linear map)  Let be a finite-dimensional vector space over a field and be an -linear map. We say that is triangulable if there is a basis of such that is an upper triangular matrix.  "
},
{
  "id": "def-triangulable-matrix",
  "level": "2",
  "url": "sec-triangulable-maps.html#def-triangulable-matrix",
  "type": "Definition",
  "number": "7.4.2",
  "title": "(Triangulable matrix).",
  "body": " (Triangulable matrix)  A matrix is said to be triangulable if is similar to an upper triangular matrix in .  "
},
{
  "id": "ch-poly-for-block-form",
  "level": "2",
  "url": "sec-triangulable-maps.html#ch-poly-for-block-form",
  "type": "Proposition",
  "number": "7.4.3",
  "title": "",
  "body": " Let be a finite-dimensional vector space over a field and let is an -linear map. Suppose that is a -invariant subspace of . Let be an -linear map given by . Then   "
},
{
  "id": "proof-40",
  "level": "2",
  "url": "sec-triangulable-maps.html#proof-40",
  "type": "Proof",
  "number": "7.4.1",
  "title": "",
  "body": "This follows from and properties of the determinant ( ) and the linearity of the trace map. "
},
{
  "id": "triangulable-criterion-ch-poly",
  "level": "2",
  "url": "sec-triangulable-maps.html#triangulable-criterion-ch-poly",
  "type": "Theorem",
  "number": "7.4.4",
  "title": "",
  "body": " Let be a finite-dimensional vector space of dimension over a field and be an -linear map. The map is triangulable if and only if the characteristic polynomial of , is split over .  "
},
{
  "id": "proof-41",
  "level": "2",
  "url": "sec-triangulable-maps.html#proof-41",
  "type": "Proof",
  "number": "7.4.2",
  "title": "",
  "body": " Suppose that is triangulable, i.e., there is a basis of in which is an upper triangular matrix, i.e., for . Thus by a property of the determinant, see . Hence is split over .  Now assume that is split over . We show that is triangulable. We proceed by induction on the dimension of , . If then the result is clear. Assume that . Since is split, it has a root , i.e., is an eigenvalue of . Let be an eigenvector corresponding to . Thus is an invariant subspace under . We define a linear map by By we have . Therefore, is also split. As , by induction, there is a basis of such that is an upper triangular matrix. Then for the basis of , the matrix of is upper triangular.  "
},
{
  "id": "corollary-14",
  "level": "2",
  "url": "sec-triangulable-maps.html#corollary-14",
  "type": "Corollary",
  "number": "7.4.5",
  "title": "",
  "body": " Every -linear map from a finite-dimensional vector space over to itself is triangulable.  "
},
{
  "id": "proof-42",
  "level": "2",
  "url": "sec-triangulable-maps.html#proof-42",
  "type": "Proof",
  "number": "7.4.3",
  "title": "",
  "body": "This follows from and the fundamental theorem of algebra ( ). "
},
{
  "id": "example-39",
  "level": "2",
  "url": "sec-triangulable-maps.html#example-39",
  "type": "Example",
  "number": "7.4.6",
  "title": "(Non-triangulable linear map).",
  "body": " (Non-triangulable linear map)  Consider an -linear map from to itself given by , , and . The characteristic polynomial of is and it has only one root in . Hence not split over . By , is not triangulable.  "
},
{
  "id": "sec-cyclic-subspaces",
  "level": "1",
  "url": "sec-cyclic-subspaces.html",
  "type": "Section",
  "number": "7.5",
  "title": "Cyclic subspaces",
  "body": " Cyclic subspaces   (Principal vector and its order)   Let be a finite-dimensional vector space over a field . A nonzero vector is said to be a principal vector of an -linear map with an eigenvalue if there exists a natural number such that .  The least natural number such that is called the order of .  A principal vector of with an eigenvalue is also called a generalized eigenvector with eigenvalue .     An eigenvector is a principal vector of order .   (An illustrative example) Let be a linear map corresponding to a matrix (see ). We have Thus, Therefore, is a principal vector of with eigenvalue and its order is . While is a principal vector of with an eigenvalue , and its order is . Since vectors are -linearly independent, they form a basis of . Furthermore, since and , the matrix of with respect to an ordered basis is    (Cyclic subspace)  Let be a finite-dimensional vector space over a field . Consider a nonzero (principal) vector , a scalar such that . Suppose that is the least natural number such that . The subspace of generated by is called the cyclic subspace generated by .    Let be a finite-dimensional vector space over a field and let be an -linear map. The cyclic subspace generated by the principal vector of order with an eigenvalue is invariant under and .    We first compute the dimension of . By , the subspace is spanned by Hence, . We show that is linearly independent. Suppose that Since , we get that for any . Hence, the linear map evaluated at the above expression gives As , we have . Therefore we are left with Now we apply to the above expression, and argueing as above, we obtain . Continuing in this way we get that for all . This shows that is a maximal linearly independent subset of , i.e., it is a basis of . Thus .  We now show that is invariant under . We rename the basis vectors of obtained above as follows. Therefore we have In other words we have This shows that is invariant under .    (Matrix of a cyclic subspace)  We keep the notation of the above and its proof. A matrix of with respect to the ordered basis is the matrix with all diagonal entries , all lower diagonal entries , and all other entries .    (Jordan block) The matrix of a cyclic subspace described in is called the Jordan block . Thus Jordan block obtained in is the following lower triangular matrix.    The Jordan block of size and are, respectively     Let be a Jordan block.  The characteristic polynomial of , .  The trace of , and the determinant of , .  We have .  The minimal polynomial of coincides with the characteristic polynomial of .     This follows from the properties of determinant. The third statement is consequence of . We now show the last statement. Suppose that . Note that . We have for all . Since we have By , the minimal polynomial divides the characteristic polynomial hence, we get the result.  "
},
{
  "id": "def-principal-vector",
  "level": "2",
  "url": "sec-cyclic-subspaces.html#def-principal-vector",
  "type": "Definition",
  "number": "7.5.1",
  "title": "(Principal vector and its order).",
  "body": " (Principal vector and its order)   Let be a finite-dimensional vector space over a field . A nonzero vector is said to be a principal vector of an -linear map with an eigenvalue if there exists a natural number such that .  The least natural number such that is called the order of .  A principal vector of with an eigenvalue is also called a generalized eigenvector with eigenvalue .   "
},
{
  "id": "remark-39",
  "level": "2",
  "url": "sec-cyclic-subspaces.html#remark-39",
  "type": "Remark",
  "number": "7.5.2",
  "title": "",
  "body": " An eigenvector is a principal vector of order .  "
},
{
  "id": "illustrative-example-principla-vector",
  "level": "2",
  "url": "sec-cyclic-subspaces.html#illustrative-example-principla-vector",
  "type": "Example",
  "number": "7.5.3",
  "title": "(An illustrative example).",
  "body": "(An illustrative example) Let be a linear map corresponding to a matrix (see ). We have Thus, Therefore, is a principal vector of with eigenvalue and its order is . While is a principal vector of with an eigenvalue , and its order is . Since vectors are -linearly independent, they form a basis of . Furthermore, since and , the matrix of with respect to an ordered basis is  "
},
{
  "id": "def-cyclic-subspace",
  "level": "2",
  "url": "sec-cyclic-subspaces.html#def-cyclic-subspace",
  "type": "Definition",
  "number": "7.5.4",
  "title": "(Cyclic subspace).",
  "body": " (Cyclic subspace)  Let be a finite-dimensional vector space over a field . Consider a nonzero (principal) vector , a scalar such that . Suppose that is the least natural number such that . The subspace of generated by is called the cyclic subspace generated by .  "
},
{
  "id": "dim-cyclic-subspace",
  "level": "2",
  "url": "sec-cyclic-subspaces.html#dim-cyclic-subspace",
  "type": "Proposition",
  "number": "7.5.5",
  "title": "",
  "body": " Let be a finite-dimensional vector space over a field and let be an -linear map. The cyclic subspace generated by the principal vector of order with an eigenvalue is invariant under and .  "
},
{
  "id": "proof-43",
  "level": "2",
  "url": "sec-cyclic-subspaces.html#proof-43",
  "type": "Proof",
  "number": "7.5.1",
  "title": "",
  "body": " We first compute the dimension of . By , the subspace is spanned by Hence, . We show that is linearly independent. Suppose that Since , we get that for any . Hence, the linear map evaluated at the above expression gives As , we have . Therefore we are left with Now we apply to the above expression, and argueing as above, we obtain . Continuing in this way we get that for all . This shows that is a maximal linearly independent subset of , i.e., it is a basis of . Thus .  We now show that is invariant under . We rename the basis vectors of obtained above as follows. Therefore we have In other words we have This shows that is invariant under .  "
},
{
  "id": "matrix-of-cyclic-subspace",
  "level": "2",
  "url": "sec-cyclic-subspaces.html#matrix-of-cyclic-subspace",
  "type": "Remark",
  "number": "7.5.6",
  "title": "(Matrix of a cyclic subspace).",
  "body": " (Matrix of a cyclic subspace)  We keep the notation of the above and its proof. A matrix of with respect to the ordered basis is the matrix with all diagonal entries , all lower diagonal entries , and all other entries .  "
},
{
  "id": "def-Jordan-block",
  "level": "2",
  "url": "sec-cyclic-subspaces.html#def-Jordan-block",
  "type": "Definition",
  "number": "7.5.7",
  "title": "(Jordan block).",
  "body": " (Jordan block) The matrix of a cyclic subspace described in is called the Jordan block . Thus Jordan block obtained in is the following lower triangular matrix.  "
},
{
  "id": "remark-41",
  "level": "2",
  "url": "sec-cyclic-subspaces.html#remark-41",
  "type": "Remark",
  "number": "7.5.8",
  "title": "",
  "body": " The Jordan block of size and are, respectively   "
},
{
  "id": "lemma-16",
  "level": "2",
  "url": "sec-cyclic-subspaces.html#lemma-16",
  "type": "Lemma",
  "number": "7.5.9",
  "title": "",
  "body": " Let be a Jordan block.  The characteristic polynomial of , .  The trace of , and the determinant of , .  We have .  The minimal polynomial of coincides with the characteristic polynomial of .    "
},
{
  "id": "proof-44",
  "level": "2",
  "url": "sec-cyclic-subspaces.html#proof-44",
  "type": "Proof",
  "number": "7.5.2",
  "title": "",
  "body": "This follows from the properties of determinant. The third statement is consequence of . We now show the last statement. Suppose that . Note that . We have for all . Since we have By , the minimal polynomial divides the characteristic polynomial hence, we get the result. "
},
{
  "id": "sec-computations-with-Jordan-block",
  "level": "1",
  "url": "sec-computations-with-Jordan-block.html",
  "type": "Section",
  "number": "7.6",
  "title": "Some Computations with Jordan block",
  "body": " Some Computations with Jordan block     Suppose that be an matrix over a field . We describe the collection of elements with   the main diagonal of ;  (where is a given number) the diagonal lying steps from the main diagonal    Let be the Jordan block (see ). Then, where is a matrix with a lower diagonal (diagonal lying step from the main diagonal) entries and all other entries . We thus have This shows that Thus, the matrix of has the diagonal lying steps from the main diagonal containing all 's, and all other entries are .  Furthermore, . Therefore using , for a polynomial of degree in one variable , we get If we put then   Using the above expression it is relatively easy to compute the powers of a Jordan block. As an exercise compute the -th power of Jordan block.  "
},
{
  "id": "ex-invariant-subspaces-eigenvectors",
  "level": "1",
  "url": "ex-invariant-subspaces-eigenvectors.html",
  "type": "Exercises",
  "number": "7.7",
  "title": "Exercises",
  "body": " Throughout this section we assume that is a finite-dimensional vector space over a field and an -linear map.  Find the characteristic polynomial of . Show that .  Let be an invertible matrix. Show that has same eigenvectors as that of .  An -linear map has every vector in as an eigenvector if and only if for every and some fixed scalar .  Show that eigenvectors corresponding to distinct eigenvalues are linearly independent.  Suppose that is of the rank . Show that is an eigenvalue of .   Find the characteristic and the minimal polynomial of linear transformations corresponding to the following matrices.              The matrix corresponding to a linear map given by     Find the minimal polynomial, eigenvalues, and eigenvectors for the following linear maps\/matrices. Furthermore, if is an eigenvalue then find a basis and the dimension of (resp., .     The differentiation operator on polynomials in one variable over of degree at most .  The transpose map given by .    Find out whether the following matrices are similar to diagonal matrices over a given field.  , where is a field with two elements.         Let be the matrix of the following linear map with respect to the standard ordered basis.    Find .  "
},
{
  "id": "exercise-79",
  "level": "2",
  "url": "ex-invariant-subspaces-eigenvectors.html#exercise-79",
  "type": "Exercise",
  "number": "7.7.1",
  "title": "",
  "body": "Find the characteristic polynomial of . Show that . "
},
{
  "id": "exercise-80",
  "level": "2",
  "url": "ex-invariant-subspaces-eigenvectors.html#exercise-80",
  "type": "Exercise",
  "number": "7.7.2",
  "title": "",
  "body": "Let be an invertible matrix. Show that has same eigenvectors as that of . "
},
{
  "id": "exercise-81",
  "level": "2",
  "url": "ex-invariant-subspaces-eigenvectors.html#exercise-81",
  "type": "Exercise",
  "number": "7.7.3",
  "title": "",
  "body": "An -linear map has every vector in as an eigenvector if and only if for every and some fixed scalar . "
},
{
  "id": "exercise-82",
  "level": "2",
  "url": "ex-invariant-subspaces-eigenvectors.html#exercise-82",
  "type": "Exercise",
  "number": "7.7.4",
  "title": "",
  "body": "Show that eigenvectors corresponding to distinct eigenvalues are linearly independent. "
},
{
  "id": "exercise-83",
  "level": "2",
  "url": "ex-invariant-subspaces-eigenvectors.html#exercise-83",
  "type": "Exercise",
  "number": "7.7.5",
  "title": "",
  "body": "Suppose that is of the rank . Show that is an eigenvalue of . "
},
{
  "id": "exercise-84",
  "level": "2",
  "url": "ex-invariant-subspaces-eigenvectors.html#exercise-84",
  "type": "Exercise",
  "number": "7.7.6",
  "title": "",
  "body": "  "
},
{
  "id": "exercise-85",
  "level": "2",
  "url": "ex-invariant-subspaces-eigenvectors.html#exercise-85",
  "type": "Exercise",
  "number": "7.7.7",
  "title": "",
  "body": "  "
},
{
  "id": "exercise-86",
  "level": "2",
  "url": "ex-invariant-subspaces-eigenvectors.html#exercise-86",
  "type": "Exercise",
  "number": "7.7.8",
  "title": "",
  "body": "  "
},
{
  "id": "exercise-87",
  "level": "2",
  "url": "ex-invariant-subspaces-eigenvectors.html#exercise-87",
  "type": "Exercise",
  "number": "7.7.9",
  "title": "",
  "body": "  "
},
{
  "id": "exercise-88",
  "level": "2",
  "url": "ex-invariant-subspaces-eigenvectors.html#exercise-88",
  "type": "Exercise",
  "number": "7.7.10",
  "title": "",
  "body": "The matrix corresponding to a linear map given by  "
},
{
  "id": "exercise-89",
  "level": "2",
  "url": "ex-invariant-subspaces-eigenvectors.html#exercise-89",
  "type": "Exercise",
  "number": "7.7.11",
  "title": "",
  "body": ""
},
{
  "id": "exercise-90",
  "level": "2",
  "url": "ex-invariant-subspaces-eigenvectors.html#exercise-90",
  "type": "Exercise",
  "number": "7.7.12",
  "title": "",
  "body": ""
},
{
  "id": "exercise-91",
  "level": "2",
  "url": "ex-invariant-subspaces-eigenvectors.html#exercise-91",
  "type": "Exercise",
  "number": "7.7.13",
  "title": "",
  "body": ""
},
{
  "id": "exercise-92",
  "level": "2",
  "url": "ex-invariant-subspaces-eigenvectors.html#exercise-92",
  "type": "Exercise",
  "number": "7.7.14",
  "title": "",
  "body": "The differentiation operator on polynomials in one variable over of degree at most . "
},
{
  "id": "exercise-93",
  "level": "2",
  "url": "ex-invariant-subspaces-eigenvectors.html#exercise-93",
  "type": "Exercise",
  "number": "7.7.15",
  "title": "",
  "body": "The transpose map given by . "
},
{
  "id": "exercise-94",
  "level": "2",
  "url": "ex-invariant-subspaces-eigenvectors.html#exercise-94",
  "type": "Exercise",
  "number": "7.7.16",
  "title": "",
  "body": ", where is a field with two elements. "
},
{
  "id": "exercise-95",
  "level": "2",
  "url": "ex-invariant-subspaces-eigenvectors.html#exercise-95",
  "type": "Exercise",
  "number": "7.7.17",
  "title": "",
  "body": ""
},
{
  "id": "exercise-96",
  "level": "2",
  "url": "ex-invariant-subspaces-eigenvectors.html#exercise-96",
  "type": "Exercise",
  "number": "7.7.18",
  "title": "",
  "body": "  "
},
{
  "id": "exercise-97",
  "level": "2",
  "url": "ex-invariant-subspaces-eigenvectors.html#exercise-97",
  "type": "Exercise",
  "number": "7.7.19",
  "title": "",
  "body": "  "
},
{
  "id": "exercise-98",
  "level": "2",
  "url": "ex-invariant-subspaces-eigenvectors.html#exercise-98",
  "type": "Exercise",
  "number": "7.7.20",
  "title": "",
  "body": "Let be the matrix of the following linear map with respect to the standard ordered basis.  "
},
{
  "id": "exercise-99",
  "level": "2",
  "url": "ex-invariant-subspaces-eigenvectors.html#exercise-99",
  "type": "Exercise",
  "number": "7.7.21",
  "title": "",
  "body": "Find . "
},
{
  "id": "sec-eigenvalues-eigenvectors-sagemath",
  "level": "1",
  "url": "sec-eigenvalues-eigenvectors-sagemath.html",
  "type": "Section",
  "number": "7.8",
  "title": "Eigenvalues and Eigenvectors using SageMath",
  "body": " Eigenvalues and Eigenvectors using SageMath  The computer algebra system SageMath can compute eigenvalues and eigenvectors of a given matrix. Please do the relevant changes on this page to verify your calculations.  In the following examples QQ denotes the field of rational numbers. You may change it to RR, the field of real numbers. Numbers in brackets are rows of . You can change number of rows as well as entries of rows.   Computation of eigenvalues     Computation of eigenvectors     Computation of eigenspaces    "
},
{
  "id": "sec-Cayley-Hamilton",
  "level": "1",
  "url": "sec-Cayley-Hamilton.html",
  "type": "Section",
  "number": "8.1",
  "title": "Cayley-Hamilton Theorem",
  "body": " Cayley-Hamilton Theorem  We begin with the following observation.  Let be an -linear map of a finite-dimensional vector space over a field . We denote by . If is a polynomial then .  We denote by the expression obtained in .  If and then we have the following.      (Annihilator of a linear map) A polynomial is said to annihilate a linear map if .  We show the existence of an annihilating polynomial.   (Existence of an annihilating polynomial)  Let be a finite-dimensional vector space over a field and let be an -linear map. Then there exists a polynomial such that .   Let . By , . Hence the subset of is linearly dependent, i.e., there are scalars , not all zero, such that Hence the polynomial is an annihilating polynomial of .  The Cayley-Hamilton theorem stated below asserts that there exists an annihilating polynomial of degree , namely, the characteristic polynomial of .   (Cayley-Hamilton Theorem)  Let be a finite-dimensional vector space over a field and let be an -linear map. The characteristic polynomial of annihilates .   Verify Cayley-Hamilton Theorem for any square matrix of your choice.  We will not give a proof of Cayley-Hamilton theorem. However, we prove the theorem for triangulable linear maps.   (Cayley-Hamilton theorem for triangulable linear maps)  Let be a finite-dimensional vector space over a field and let be a triangulable -linear map. Then    By , and thus, there exists a basis of such that Hence, For any and we have For any put . In particular We can obtain the following identity by a repeated application of . We show that for every basis vector . We prove this by showing for every and . We have . Hence, by , for all . Now assume that, for some , we have proved , where . We show that for all . Since , we only need to show that . We have By induction for . Hence, . Hence the required result can be obtained by taking .  Using Cayley-Hamilton theorem we show that a linear map has either a one-dimensional or a two-dimensional invariant subspace.   (Invariant subspace of dimension or in )   Let be an -linear map. Then has either a one-dimensional or a two-dimensional invariant subspace.  Indeed, the characteristic polynomial of , is of the degree . Hence has a real root, say (this can be proved, for instance, by using continuity of polynomial ). By , there exists a monic (i.e., coefficient of is ) quadratic polynomial such that By Cayley-Hamilton Theorem, is annihilated by the characteristic polynomial . Hence, by ,   We now assume that is a nonzero vector.   Case 1 . Suppose that . If we put then , i.e., is a one-dimensional subspace invariant under .   Case 2 . Suppose that and . Thus . Consider the subspace . If and are linearly dependent then is an eigenvector of and we are done. So we assume that . Note that and hence is an invariant subspace of dimension .    "
},
{
  "id": "observation-1",
  "level": "2",
  "url": "sec-Cayley-Hamilton.html#observation-1",
  "type": "Observation",
  "number": "8.1.1",
  "title": "",
  "body": "Let be an -linear map of a finite-dimensional vector space over a field . We denote by . If is a polynomial then . "
},
{
  "id": "convention-2",
  "level": "2",
  "url": "sec-Cayley-Hamilton.html#convention-2",
  "type": "Convention",
  "number": "8.1.2",
  "title": "",
  "body": "We denote by the expression obtained in . "
},
{
  "id": "observation-2",
  "level": "2",
  "url": "sec-Cayley-Hamilton.html#observation-2",
  "type": "Observation",
  "number": "8.1.3",
  "title": "",
  "body": "If and then we have the following.    "
},
{
  "id": "annihilator-of-T",
  "level": "2",
  "url": "sec-Cayley-Hamilton.html#annihilator-of-T",
  "type": "Definition",
  "number": "8.1.4",
  "title": "(Annihilator of a linear map).",
  "body": " (Annihilator of a linear map) A polynomial is said to annihilate a linear map if . "
},
{
  "id": "existence-of-annihilating-polynomial",
  "level": "2",
  "url": "sec-Cayley-Hamilton.html#existence-of-annihilating-polynomial",
  "type": "Lemma",
  "number": "8.1.5",
  "title": "(Existence of an annihilating polynomial).",
  "body": " (Existence of an annihilating polynomial)  Let be a finite-dimensional vector space over a field and let be an -linear map. Then there exists a polynomial such that .  "
},
{
  "id": "proof-45",
  "level": "2",
  "url": "sec-Cayley-Hamilton.html#proof-45",
  "type": "Proof",
  "number": "8.1.1",
  "title": "",
  "body": "Let . By , . Hence the subset of is linearly dependent, i.e., there are scalars , not all zero, such that Hence the polynomial is an annihilating polynomial of . "
},
{
  "id": "Cayley-Hamilton-Theorem",
  "level": "2",
  "url": "sec-Cayley-Hamilton.html#Cayley-Hamilton-Theorem",
  "type": "Theorem",
  "number": "8.1.6",
  "title": "(Cayley-Hamilton Theorem).",
  "body": " (Cayley-Hamilton Theorem)  Let be a finite-dimensional vector space over a field and let be an -linear map. The characteristic polynomial of annihilates .  "
},
{
  "id": "exercise-100",
  "level": "2",
  "url": "sec-Cayley-Hamilton.html#exercise-100",
  "type": "Checkpoint",
  "number": "8.1.7",
  "title": "",
  "body": "Verify Cayley-Hamilton Theorem for any square matrix of your choice. "
},
{
  "id": "Cayley-Hamilton-triangulable",
  "level": "2",
  "url": "sec-Cayley-Hamilton.html#Cayley-Hamilton-triangulable",
  "type": "Proposition",
  "number": "8.1.8",
  "title": "(Cayley-Hamilton theorem for triangulable linear maps).",
  "body": " (Cayley-Hamilton theorem for triangulable linear maps)  Let be a finite-dimensional vector space over a field and let be a triangulable -linear map. Then   "
},
{
  "id": "proof-46",
  "level": "2",
  "url": "sec-Cayley-Hamilton.html#proof-46",
  "type": "Proof",
  "number": "8.1.2",
  "title": "",
  "body": "By , and thus, there exists a basis of such that Hence, For any and we have For any put . In particular We can obtain the following identity by a repeated application of . We show that for every basis vector . We prove this by showing for every and . We have . Hence, by , for all . Now assume that, for some , we have proved , where . We show that for all . Since , we only need to show that . We have By induction for . Hence, . Hence the required result can be obtained by taking . "
},
{
  "id": "invariant-subspace-of-dim-1-or-2",
  "level": "2",
  "url": "sec-Cayley-Hamilton.html#invariant-subspace-of-dim-1-or-2",
  "type": "Example",
  "number": "8.1.9",
  "title": "(Invariant subspace of dimension <span class=\"process-math\">\\(1\\)<\/span> or <span class=\"process-math\">\\(2\\)<\/span> in <span class=\"process-math\">\\(\\R^3\\)<\/span>).",
  "body": " (Invariant subspace of dimension or in )   Let be an -linear map. Then has either a one-dimensional or a two-dimensional invariant subspace.  Indeed, the characteristic polynomial of , is of the degree . Hence has a real root, say (this can be proved, for instance, by using continuity of polynomial ). By , there exists a monic (i.e., coefficient of is ) quadratic polynomial such that By Cayley-Hamilton Theorem, is annihilated by the characteristic polynomial . Hence, by ,   We now assume that is a nonzero vector.   Case 1 . Suppose that . If we put then , i.e., is a one-dimensional subspace invariant under .   Case 2 . Suppose that and . Thus . Consider the subspace . If and are linearly dependent then is an eigenvector of and we are done. So we assume that . Note that and hence is an invariant subspace of dimension .   "
},
{
  "id": "sec-Jordan-normal-form",
  "level": "1",
  "url": "sec-Jordan-normal-form.html",
  "type": "Section",
  "number": "8.2",
  "title": "Finding Jordan normal form over <span class=\"process-math\">\\(\\C\\)<\/span>",
  "body": " Finding Jordan normal form over  In this section we give an algorithm to compute the Jordan normal form of a linear map from a finite-dimensional vector space over to itself. We first define Jordan form.   (Jordan form of a matrix)  A matrix is said to be in the Jordan form if is similar to the following matrix. where are eigenvalues of , is the Jordan block corresponding to of size (see ), and .   We now state the existence of the Jordan form for any square matrix over .   (Existence of the Jordan normal form)     Vector space form : Let be a finite-dimensional vector space over and let be a -linear map. Then there exists a basis of such that the matrix of with respect to has Jordan form (see ).   Matrix form : Let . There is an invertible matrix such that has Jordan form (see ).  The Jordan form of or a matrix is unique except for a permutation of the Jordan blocks occurring in .    We list some facts that are useful in determining Jordan form of a linear map or a matrix. Let be a finite-dimensional vector space over and let be a -linear map. We assume that are eigenvalues of .   (Eigenvalues and diagonal of Jordan form)  The characteristic polynomial of , gives us eigenvalues and their multiplicities. The algebraic multiplicity of an eigenvalue gives us the number of times occur in Jordan form.    (Number of Jordan blocks)  The dimension of each eigenspace corresponding to , i.e., the geometric multiplicity of gives us the number of Jordan blocks corresponding to in Jordan form.    (Size of the largest Jordan block)  The multiplicity of in the minimal polynomial of gives us the size of the largest Jordan block corresponding to occurring in Jordan form of .   For our purposes the above facts will be enough to get Jordan form of a given linear map or a matrix. In the next section we work out a few examples.  "
},
{
  "id": "definition-47",
  "level": "2",
  "url": "sec-Jordan-normal-form.html#definition-47",
  "type": "Definition",
  "number": "8.2.1",
  "title": "(Jordan form of a matrix).",
  "body": " (Jordan form of a matrix)  A matrix is said to be in the Jordan form if is similar to the following matrix. where are eigenvalues of , is the Jordan block corresponding to of size (see ), and .  "
},
{
  "id": "existence-of-Jordan-normal-form",
  "level": "2",
  "url": "sec-Jordan-normal-form.html#existence-of-Jordan-normal-form",
  "type": "Theorem",
  "number": "8.2.2",
  "title": "(Existence of the Jordan normal form).",
  "body": " (Existence of the Jordan normal form)     Vector space form : Let be a finite-dimensional vector space over and let be a -linear map. Then there exists a basis of such that the matrix of with respect to has Jordan form (see ).   Matrix form : Let . There is an invertible matrix such that has Jordan form (see ).  The Jordan form of or a matrix is unique except for a permutation of the Jordan blocks occurring in .   "
},
{
  "id": "step-1-to-Jordan-form",
  "level": "2",
  "url": "sec-Jordan-normal-form.html#step-1-to-Jordan-form",
  "type": "Fact",
  "number": "8.2.3",
  "title": "(Eigenvalues and diagonal of Jordan form).",
  "body": " (Eigenvalues and diagonal of Jordan form)  The characteristic polynomial of , gives us eigenvalues and their multiplicities. The algebraic multiplicity of an eigenvalue gives us the number of times occur in Jordan form.  "
},
{
  "id": "step-2-to-Jordan-form",
  "level": "2",
  "url": "sec-Jordan-normal-form.html#step-2-to-Jordan-form",
  "type": "Fact",
  "number": "8.2.4",
  "title": "(Number of Jordan blocks).",
  "body": " (Number of Jordan blocks)  The dimension of each eigenspace corresponding to , i.e., the geometric multiplicity of gives us the number of Jordan blocks corresponding to in Jordan form.  "
},
{
  "id": "step-3-to-Jordan-form",
  "level": "2",
  "url": "sec-Jordan-normal-form.html#step-3-to-Jordan-form",
  "type": "Fact",
  "number": "8.2.5",
  "title": "(Size of the largest Jordan block).",
  "body": " (Size of the largest Jordan block)  The multiplicity of in the minimal polynomial of gives us the size of the largest Jordan block corresponding to occurring in Jordan form of .  "
},
{
  "id": "sec-examples-Jordan-form",
  "level": "1",
  "url": "sec-examples-Jordan-form.html",
  "type": "Section",
  "number": "8.3",
  "title": "Examples",
  "body": " Examples  In this section we find Jordan form of given matrices.   Let . We find Jordan form of .  The rank of is . By rank-nullity theorem, nullity of is . Hence, is an eigenvalue of . In fact we have . Therefore, the algebraic multiplicity of and is respectively, and .  The geometric multiplicity of , is and the geometric multiplicity of , is . Hence the number of Jordan block corresponding to is and the number of Jordan block corresponding to is .  In this case we get a basis consisting of eigenvectors. So the matrix is diagonalizable. Anyhow, the minimal polynomial of is . Hence, the largest Jordan block corresponding to and is of size .  Thus is similar to     Let . We find its Jordan form.  We have . The algebraic multiplicity of is . We have . Hence the geometric multiplicity of is . Thus there is one Jordan block, i.e., in this case, is similar to a Jordan block. Since we can not have a basis consisting of an eigenvectors, the Jordan form must be .  Anyway, let us compute the minimal polynomial. Since , the minimal polynomial is . Hence the largest Jordan block corresponding to has size .  Hence is similar to     Let . We find its Jordan form.  The rank of is , hence the nullity of is . Therefore, is an eigenvalue. Furthermore the algebraic and geometric multiplicity of is . Let . We can find using trace. Indeed, .  The geometric multiplicity of is . Hence there are two Jordan blocks corresponding to . The geometric multiplicity of is hence there is only one Jordan block corresponding to this eigenvalue. Thus we can see that is diagonalizable and thus, is similar to .  Anyway let us calculate the minimal polynomial. It is . Therefore the largest Jordan block corresponding to eigenvalues and is of the size .  Hence is similar to .    Let . We find its Jordan form.  All eigenvalues of are equal to . The algebraic multiplicity of is .  The geometric multiplicity of is the dimension of the kernel of . The row-reduced echelon form of this matrix is Therefore, the geometric multiplicity of is . Hence the number of Jordan blocks corresponding to is . Hence, must be similar to   Note that hence the minimal polynomial of must be . Thus the largest Jordan block corresponding to is of the size .      Let . We find its Jordan form.  Eigenvalues of are . Thus the algebraic multiplicity of both and is .  To find geometric multiplicity of and . We have Thus, nullity of , i.e., the geometric multiplicity of is . Hence, the number of Jordan blocks corresponding to is . On the other hand, computing the row-reduced echelon form of , we get that the nullity of is . Hence the geometric multiplicity of is . Therefore, the number of Jordan block corresponding to is . Thus is similar to       Let . We compute its Jordan form.  All eigenvalues of are equal to . The algebraic multiplicity of is .  Consider Hence the nullity of is . Thus there are two Jordan blocks corresponding to .  We have and . Hence the minimal polynomial of is . Therefore, size of the largest Jordan block corresponding to is .  Thus the matrix is similar to    "
},
{
  "id": "example-42",
  "level": "2",
  "url": "sec-examples-Jordan-form.html#example-42",
  "type": "Example",
  "number": "8.3.1",
  "title": "",
  "body": " Let . We find Jordan form of .  The rank of is . By rank-nullity theorem, nullity of is . Hence, is an eigenvalue of . In fact we have . Therefore, the algebraic multiplicity of and is respectively, and .  The geometric multiplicity of , is and the geometric multiplicity of , is . Hence the number of Jordan block corresponding to is and the number of Jordan block corresponding to is .  In this case we get a basis consisting of eigenvectors. So the matrix is diagonalizable. Anyhow, the minimal polynomial of is . Hence, the largest Jordan block corresponding to and is of size .  Thus is similar to   "
},
{
  "id": "example-43",
  "level": "2",
  "url": "sec-examples-Jordan-form.html#example-43",
  "type": "Example",
  "number": "8.3.2",
  "title": "",
  "body": " Let . We find its Jordan form.  We have . The algebraic multiplicity of is . We have . Hence the geometric multiplicity of is . Thus there is one Jordan block, i.e., in this case, is similar to a Jordan block. Since we can not have a basis consisting of an eigenvectors, the Jordan form must be .  Anyway, let us compute the minimal polynomial. Since , the minimal polynomial is . Hence the largest Jordan block corresponding to has size .  Hence is similar to   "
},
{
  "id": "example-44",
  "level": "2",
  "url": "sec-examples-Jordan-form.html#example-44",
  "type": "Example",
  "number": "8.3.3",
  "title": "",
  "body": " Let . We find its Jordan form.  The rank of is , hence the nullity of is . Therefore, is an eigenvalue. Furthermore the algebraic and geometric multiplicity of is . Let . We can find using trace. Indeed, .  The geometric multiplicity of is . Hence there are two Jordan blocks corresponding to . The geometric multiplicity of is hence there is only one Jordan block corresponding to this eigenvalue. Thus we can see that is diagonalizable and thus, is similar to .  Anyway let us calculate the minimal polynomial. It is . Therefore the largest Jordan block corresponding to eigenvalues and is of the size .  Hence is similar to .  "
},
{
  "id": "example-45",
  "level": "2",
  "url": "sec-examples-Jordan-form.html#example-45",
  "type": "Example",
  "number": "8.3.4",
  "title": "",
  "body": " Let . We find its Jordan form.  All eigenvalues of are equal to . The algebraic multiplicity of is .  The geometric multiplicity of is the dimension of the kernel of . The row-reduced echelon form of this matrix is Therefore, the geometric multiplicity of is . Hence the number of Jordan blocks corresponding to is . Hence, must be similar to   Note that hence the minimal polynomial of must be . Thus the largest Jordan block corresponding to is of the size .    "
},
{
  "id": "example-46",
  "level": "2",
  "url": "sec-examples-Jordan-form.html#example-46",
  "type": "Example",
  "number": "8.3.5",
  "title": "",
  "body": " Let . We find its Jordan form.  Eigenvalues of are . Thus the algebraic multiplicity of both and is .  To find geometric multiplicity of and . We have Thus, nullity of , i.e., the geometric multiplicity of is . Hence, the number of Jordan blocks corresponding to is . On the other hand, computing the row-reduced echelon form of , we get that the nullity of is . Hence the geometric multiplicity of is . Therefore, the number of Jordan block corresponding to is . Thus is similar to     "
},
{
  "id": "example-47",
  "level": "2",
  "url": "sec-examples-Jordan-form.html#example-47",
  "type": "Example",
  "number": "8.3.6",
  "title": "",
  "body": " Let . We compute its Jordan form.  All eigenvalues of are equal to . The algebraic multiplicity of is .  Consider Hence the nullity of is . Thus there are two Jordan blocks corresponding to .  We have and . Hence the minimal polynomial of is . Therefore, size of the largest Jordan block corresponding to is .  Thus the matrix is similar to   "
},
{
  "id": "sec-algebra-of-polynomials",
  "level": "1",
  "url": "sec-algebra-of-polynomials.html",
  "type": "Section",
  "number": "A.1",
  "title": "Algebra of polynomials",
  "body": " Algebra of polynomials  In this section we collect, without proofs, some observations and results related to polynomials in one variable over a field. We use these results to deduce some consequences to eigenvalues of a linear map. Throughout this section we assume that is a field of characteristic , i.e., every is invertible in . Assume that is the collection (ring) of all polynomials in one variable over .   We begin with the following observation.  Let be a polynomial in one variable of degree . If then we have the Taylor's formula: Note that the above formula remains true if in a ring with unity. In particular, if such that then the above formula holds. The following particular case will be of our interest.    Let be such that for some . Then for    We call the symmetric functions in . Note that    (Monic polynomial)  A polynomial of degree is said to be monic if or in other words, the coefficient of the highest degree term of is .    Let and . We say that is a root of in if .   Using we get the following result.   An element is a root of if and only if for some .    (Split polynomial)  A non-constant polynomial is said to be split over if is a product of polynomials of degree in .   We define the multiplicity of root.   (Multiplicity of a root)  If is a root of a polynomial then, using , we can write where . We define to be the multiplicity of a root .   Using and induction on the degree of the polynomial we obtain the following result.   A polynomial in one variable of degree over a field has at most roots in .    (Fundamental Theorem of Algebra)  A non-constant polynomial in has a root in or, in the words, every non-constant polynomial in splits over .   "
},
{
  "id": "observation-3",
  "level": "2",
  "url": "sec-algebra-of-polynomials.html#observation-3",
  "type": "Observation",
  "number": "A.1.1",
  "title": "",
  "body": "Let be a polynomial in one variable of degree . If then we have the Taylor's formula: Note that the above formula remains true if in a ring with unity. In particular, if such that then the above formula holds. The following particular case will be of our interest.  "
},
{
  "id": "symmetric-functions",
  "level": "2",
  "url": "sec-algebra-of-polynomials.html#symmetric-functions",
  "type": "Lemma",
  "number": "A.1.2",
  "title": "",
  "body": " Let be such that for some . Then for   "
},
{
  "id": "remark-42",
  "level": "2",
  "url": "sec-algebra-of-polynomials.html#remark-42",
  "type": "Remark",
  "number": "A.1.3",
  "title": "",
  "body": "We call the symmetric functions in . Note that  "
},
{
  "id": "def-monic-polynomial",
  "level": "2",
  "url": "sec-algebra-of-polynomials.html#def-monic-polynomial",
  "type": "Definition",
  "number": "A.1.4",
  "title": "(Monic polynomial).",
  "body": " (Monic polynomial)  A polynomial of degree is said to be monic if or in other words, the coefficient of the highest degree term of is .  "
},
{
  "id": "def-root-of-polynomial",
  "level": "2",
  "url": "sec-algebra-of-polynomials.html#def-root-of-polynomial",
  "type": "Definition",
  "number": "A.1.5",
  "title": "",
  "body": " Let and . We say that is a root of in if .  "
},
{
  "id": "criterion-for-root",
  "level": "2",
  "url": "sec-algebra-of-polynomials.html#criterion-for-root",
  "type": "Lemma",
  "number": "A.1.6",
  "title": "",
  "body": " An element is a root of if and only if for some .  "
},
{
  "id": "def-split-polynomial",
  "level": "2",
  "url": "sec-algebra-of-polynomials.html#def-split-polynomial",
  "type": "Definition",
  "number": "A.1.7",
  "title": "(Split polynomial).",
  "body": " (Split polynomial)  A non-constant polynomial is said to be split over if is a product of polynomials of degree in .  "
},
{
  "id": "multiplicity-of-root",
  "level": "2",
  "url": "sec-algebra-of-polynomials.html#multiplicity-of-root",
  "type": "Definition",
  "number": "A.1.8",
  "title": "(Multiplicity of a root).",
  "body": " (Multiplicity of a root)  If is a root of a polynomial then, using , we can write where . We define to be the multiplicity of a root .  "
},
{
  "id": "number-of-roots-polynomial",
  "level": "2",
  "url": "sec-algebra-of-polynomials.html#number-of-roots-polynomial",
  "type": "Lemma",
  "number": "A.1.9",
  "title": "",
  "body": " A polynomial in one variable of degree over a field has at most roots in .  "
},
{
  "id": "Fundamental-theorem-of-algebra",
  "level": "2",
  "url": "sec-algebra-of-polynomials.html#Fundamental-theorem-of-algebra",
  "type": "Theorem",
  "number": "A.1.10",
  "title": "(Fundamental Theorem of Algebra).",
  "body": " (Fundamental Theorem of Algebra)  A non-constant polynomial in has a root in or, in the words, every non-constant polynomial in splits over .  "
},
{
  "id": "sec-determinant",
  "level": "1",
  "url": "sec-determinant.html",
  "type": "Section",
  "number": "A.2",
  "title": "Determinants",
  "body": " Determinants  In this section we recall a definition and some properties of determinant of a square matrix. Throughout this section we assume that is a field.  Let ( ) be the permutation\/symmetric group. There is a group homomorphism defined by mapping even permutations to and mapping odd permutations to .  (Determinant of a matrix)  Let . The determinant of is defined to be     Properties of the determinant . Assume that .    Row linearity . Let be the -th row of . For we let . For any and any and any we get the following.   For and any , .   Row rearrangement . Let and be the matrix such that the -th row of is the -th row of . Then    Alternating . If any two rows of are the same then .   Transpose . For any ,    Triangular matrices . If is an upper triangular (resp., lower triangular) matrix, i.e., for (resp., for ) then    Block form . Let . Let , , , and be the zero matrix. The determinant of is given by Similar result is true for lower triangular block matrices.   Multiplicative property . Let . We have     "
},
{
  "id": "def-determinant",
  "level": "2",
  "url": "sec-determinant.html#def-determinant",
  "type": "Definition",
  "number": "A.2.1",
  "title": "(Determinant of a matrix).",
  "body": "(Determinant of a matrix)  Let . The determinant of is defined to be   "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
